import { useState, useEffect, useCallback } from "react";
import { DEPLOYED_PROJECTS, DeployedProject, GITHUB_USER } from "@/data/deployedProjects";

export interface GithubProfile {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

export interface UseGithubProjectsResult {
  projects: DeployedProject[];
  profile: GithubProfile | null;
  loading: boolean;
  error: string | null;
  isLiveSynced: boolean;
  lastFetchedAt: Date | null;
  refresh: () => Promise<void>;
  filterCategory: "all" | "ai" | "fullstack" | "tools";
  setFilterCategory: (cat: "all" | "ai" | "fullstack" | "tools") => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredProjects: DeployedProject[];
}

export function useGithubProjects(): UseGithubProjectsResult {
  const [projects, setProjects] = useState<DeployedProject[]>(DEPLOYED_PROJECTS);
  const [profile, setProfile] = useState<GithubProfile | null>({
    login: GITHUB_USER.username,
    name: GITHUB_USER.name,
    avatar_url: GITHUB_USER.avatarUrl,
    html_url: GITHUB_USER.githubUrl,
    bio: GITHUB_USER.bio,
    public_repos: GITHUB_USER.reposCount,
    followers: 13,
    following: 11,
    created_at: "2024-11-16T19:30:45Z",
    updated_at: new Date().toISOString(),
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLiveSynced, setIsLiveSynced] = useState(false);
  const [lastFetchedAt, setLastFetchedAt] = useState<Date | null>(null);

  const [filterCategory, setFilterCategory] = useState<"all" | "ai" | "fullstack" | "tools">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchGithubData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // 1. Fetch user profile
      const userRes = await fetch("https://api.github.com/users/Temkin236", {
        headers: { Accept: "application/vnd.github.v3+json" },
      });

      if (userRes.ok) {
        const userData: GithubProfile = await userRes.json();
        setProfile(userData);
      }

      // 2. Fetch public repos to get real-time stars and fork metrics
      const reposRes = await fetch(
        "https://api.github.com/users/Temkin236/repos?sort=updated&per_page=100",
        {
          headers: { Accept: "application/vnd.github.v3+json" },
        }
      );

      if (reposRes.ok) {
        const reposData: GithubRepo[] = await reposRes.json();
        const repoMap = new Map<string, GithubRepo>();
        reposData.forEach((r) => {
          repoMap.set(r.name.toLowerCase(), r);
          // Also handle variations like lowercase without dashes
          repoMap.set(r.name.toLowerCase().replace(/[^a-z0-9]/g, ""), r);
        });

        // Merge updated stars, forks, and details into verified deployed projects
        setProjects((prevProjects) =>
          prevProjects.map((p) => {
            const repoName = p.githubUrl.split("/").pop()?.toLowerCase() || "";
            const matchedRepo =
              repoMap.get(repoName) ||
              repoMap.get(repoName.replace(/[^a-z0-9]/g, "")) ||
              repoMap.get(p.id.toLowerCase());

            if (matchedRepo) {
              return {
                ...p,
                stars: matchedRepo.stargazers_count ?? p.stars,
                forks: matchedRepo.forks_count ?? p.forks,
                // If the GitHub repo has an updated homepage that is deployed, keep it updated
                deployedUrl:
                  matchedRepo.homepage &&
                  matchedRepo.homepage.startsWith("http") &&
                  !matchedRepo.homepage.includes("ai.studio") &&
                  !matchedRepo.homepage.includes("capsule-render")
                    ? matchedRepo.homepage
                    : p.deployedUrl,
              };
            }
            return p;
          })
        );

        setIsLiveSynced(true);
        setLastFetchedAt(new Date());
      } else if (reposRes.status === 403) {
        // GitHub API rate-limited (60 requests/hr for unauthenticated IP)
        // Fall back gracefully to our rich local dataset
        setIsLiveSynced(false);
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to sync with GitHub API";
      setError(message);
      setIsLiveSynced(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGithubData();
  }, [fetchGithubData]);

  // Client-side filtering and search
  const filteredProjects = projects.filter((project) => {
    // 1. Category filter
    const matchesCategory =
      filterCategory === "all" || project.category === filterCategory;

    // 2. Search query filter
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesSearch =
      project.title.toLowerCase().includes(query) ||
      project.tagline.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(query)) ||
      project.hostingPlatform.toLowerCase().includes(query) ||
      project.deployedUrl.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return {
    projects,
    profile,
    loading,
    error,
    isLiveSynced,
    lastFetchedAt,
    refresh: fetchGithubData,
    filterCategory,
    setFilterCategory,
    searchQuery,
    setSearchQuery,
    filteredProjects,
  };
}
