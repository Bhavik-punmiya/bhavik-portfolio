import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  description: "Portfolio of Bhavik Punmiya, Software Developer, 9x Hackathon Winner, and passionate coder. Explore projects, achievements, and connect for collaboration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Theme switcher at top right */}
        <div
          style={{
            position: "fixed",
            top: "1rem",
            right: "1rem",
            zIndex: 50,
          }}
        >
          <ThemeSwitcher />
        </div>
        {children}
      </body>
    </html>
  );
}
