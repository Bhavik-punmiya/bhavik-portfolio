import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes"; // ✅ Import ThemeProvider
import "./globals.css";
import ThemeSwitcher from "@/components/theme-switcher-03";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhavik Punmiya - Portfolio",
  description:
    "Portfolio of Bhavik Punmiya, Software Developer, 9x Hackathon Winner, and passionate coder. Explore projects, achievements, and connect for collaboration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* ✅ Theme switcher hidden on small screens */}
          <div className="hidden sm:block fixed top-3 right-3 z-50 scale-[1.2] md:scale-[1.3] origin-top-right">
            <ThemeSwitcher />
          </div>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
