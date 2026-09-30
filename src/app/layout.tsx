import type { Metadata } from "next";
import { Space_Grotesk, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";
import { siteUrl } from "@/lib/site-url";

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

const title = "Kamal Kaced — Prestataire informatique à Toulouse et en Ariège";
const description =
  "Je crée, dépanne et héberge vos outils informatiques : sites web, dépannage, serveurs et automatisations. Toulouse, Ariège et à distance.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Kamal Kaced",
  },
  description,
  creator: "Kamal Kaced",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_GB"],
    url: "/",
    title,
    description,
    siteName: "Kamal Kaced",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${outfit.variable} ${jetbrainsMono.variable} dark h-full antialiased selection:bg-accent selection:text-white`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-foreground font-sans relative">
        {/* Main Content */}
        <LanguageProvider>
          <div className="relative z-10">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}
