import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Student Portfolio | Researcher & Innovator",
  description: "Explore cutting-edge research and projects in artificial intelligence, machine learning, and data science. Portfolio of a passionate student-researcher.",
  keywords: ["student", "researcher", "AI", "machine learning", "data science", "portfolio"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Student Portfolio | Researcher & Innovator",
    description: "Explore cutting-edge research and projects in artificial intelligence and machine learning",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Portfolio | Researcher & Innovator",
    description: "Explore cutting-edge research and projects in AI and ML",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${archivo.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}


