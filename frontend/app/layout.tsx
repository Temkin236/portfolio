import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Temkin's World | Temkin Abdulmelik — AI & Full-Stack Developer",
  description:
    "The personal portfolio & AI-powered digital universe of Temkin Abdulmelik. ASTU Electronics & Communication Engineering student, hackathon winner, and builder of Agentic AI, RAG systems, and intelligent applications.",
  keywords: [
    "Temkin Abdulmelik",
    "Temkin's World",
    "ASTU",
    "Adama Science and Technology University",
    "AI Developer Ethiopia",
    "Agentic AI",
    "Meri AI",
    "Knowledge AI",
    "Full-Stack Developer",
  ],
  authors: [{ name: "Temkin Abdulmelik", url: "https://github.com/Temkin236" }],
  openGraph: {
    title: "Temkin's World | Temkin Abdulmelik",
    description:
      "Explore Temkin's engineering journey, hackathon-winning AI applications, interactive tech constellation, and personal AI companion.",
    images: ["/images/temkin-portrait.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${manrope.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-dark)] font-sans antialiased selection:bg-[#D8CDEE] selection:text-[#1E1B24]">
        {children}
      </body>
    </html>
  );
}
