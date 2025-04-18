import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/lib/providers";
import Script from "next/script";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hermann Moussavou Portfolio",
  description:
    "Portfolio de concepteurs d'interface utilisateur présentant des conceptions créatives et innovantes ainsi que des projets de développement web et mobile.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            try {
              const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
              document.documentElement.classList.add(theme);
            } catch (e) {
              document.documentElement.classList.add('dark');
            }
          `}
        </Script>
      </head>
      <ThemeProvider>
        <body
          className={`${inter.variable} bg-background text-foreground antialiased transition-colors duration-300`}
          suppressHydrationWarning
        >
          <div className="min-h-screen flex md:items-start lg:items-center">
            <main className="container mx-auto px-4 py-8 w-full">
              {children}
            </main>
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
