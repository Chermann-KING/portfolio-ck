import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UI Design Portfolio",
  description: "Bringing Your Ideas To Life Through UI Design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <ThemeProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} bg-background-dark text-text-primary-dark`}
        >
          <main className="container mx-auto px-4 py-8 min-h-screen">
            {children}
          </main>
        </body>
      </ThemeProvider>
    </html>
  );
}
