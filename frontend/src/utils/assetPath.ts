/**
 * Resolves a public asset path against Vite's base URL (e.g. /portfolio/ on GitHub Pages)
 */
export function getAssetUrl(path: string): string {
  if (!path) return path;
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("blob:")
  ) {
    return path;
  }
  const base = import.meta.env.BASE_URL || "/";
  if (base !== "/" && path.startsWith(base)) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return base.endsWith("/") ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
}
