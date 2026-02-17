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
  title: "Bhavik Punmiya - Software Developer & 9× Hackathon Winner",
  description:
    "Portfolio of Bhavik Punmiya. Software Developer, 9× Hackathon Winner. Experience at Ramain (YC W26), ISRO, and Saarthi IAS. Building AI automation systems and scalable backend infrastructure.",
  keywords: [
    "Bhavik Punmiya",
    "Software Developer",
    "Hackathon Winner",
    "AI Automation",
    "Backend Developer",
    "Full Stack Developer",
    "Portfolio",
    "Y Combinator",
    "Ramain",
    "ISRO",
  ],
  authors: [{ name: "Bhavik Punmiya" }],
  creator: "Bhavik Punmiya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.bhavik.one",
    title: "Bhavik Punmiya - Software Developer & 9× Hackathon Winner",
    description:
      "Portfolio of Bhavik Punmiya. Software Developer, 9× Hackathon Winner. Experience at Ramain (YC W26), ISRO, and Saarthi IAS.",
    images: [
      {
        url: "https://www.bhavik.one/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bhavik Punmiya Portfolio",
      },
    ],
    siteName: "Bhavik Punmiya - Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhavik Punmiya - Software Developer & 9× Hackathon Winner",
    description:
      "Portfolio of Bhavik Punmiya. 9× Hackathon Winner, AI Automation Specialist.",
    creator: "@bhavikpunmiya1",
    images: ["https://www.bhavik.one/og-image.png"],
  },
  alternates: {
    canonical: "https://www.bhavik.one",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/portfolio.png" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.bhavik.one" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bhavik Punmiya",
              url: "https://www.bhavik.one",
              image: "https://www.bhavik.one/og-image.png",
              jobTitle: "Software Developer & AI Automation Specialist",
              sameAs: [
                "https://www.linkedin.com/in/bhavik-punmiya/",
                "https://github.com/Bhavik-punmiya",
                "https://x.com/bhavikpunmiya1",
              ],
              worksFor: [
                {
                  "@type": "Organization",
                  name: "Ramain",
                  url: "https://ramain.ai",
                },
                {
                  "@type": "Organization",
                  name: "ISRO",
                  url: "https://isro.gov.in",
                },
              ],
            }),
          }}
        />
      </head>
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
