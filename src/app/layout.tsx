import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import VisualEffects from "@/components/VisualEffects";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kathank Raithatha | DevRel & Developer Ecosystems",
  description: "Building Developer Communities & Developer Ecosystems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} font-sans bg-bg-deep text-white antialiased selection:bg-primary/30 selection:text-primary-foreground`}
      >
        <VisualEffects />
        <div className="fixed inset-0 bg-grid pointer-events-none" />
        <div className="fixed inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
