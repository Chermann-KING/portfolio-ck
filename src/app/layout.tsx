import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/lib/providers";
import Script from "next/script";
// import { Footer } from "@/components/Footer";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title:
    "Hermann MOUSSAVOU - Développeur Full Stack | Designer UI/UX | Consultant Digital",
  description:
    "Portfolio de Hermann MOUSSAVOU : Développeur Full Stack spécialisé en React, Next.js, Angular et TypeScript. Expert en intégration web, design UI/UX et communication digitale. Découvrez mes réalisations en développement web, applications mobiles et solutions digitales innovantes.",
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
              const theme = localStorage.getItem('theme') || 'dark';
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
          <div className="min-h-screen flex flex-col">
            <main className="container mx-auto px-4 pt-8 w-full flex-grow">
              {children}
            </main>
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
