import type { Metadata } from "next";
import { Space_Grotesk, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://kromz.dev"
  ),
  title: {
    default: "Kram | Full-Stack Developer & Software Engineer",
    template: "%s | Kram",
  },
  description:
    "Software engineer specializing in building exceptional web applications. I turn complex problems into elegant, performant solutions.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Kram", url: "https://kromz.dev" }],
  creator: "Kram",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Kram | Full-Stack Developer & Software Engineer",
    description:
      "Software engineer specializing in building exceptional web applications.",
    siteName: "Kram Portfolio",
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
      className={`${spaceGrotesk.variable} ${outfit.variable} ${jetbrainsMono.variable} dark h-full antialiased selection:bg-accent selection:text-white`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-foreground font-sans relative">
        {/* Main Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
