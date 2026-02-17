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
  title: "Bhavik Punmiya - Full Stack Developer, SDET & AI Automation Specialist",
  description:
    "Bhavik Punmiya - Full Stack & SDET Developer, 9× Hackathon Winner. Builds production-grade AI automation systems at Ramain (YC W26). ISRO National Space Hackathon Champion. Expertise: Computer-Use Agents, LLaMA chatbots, test automation, backend infrastructure, microservices, and DevOps.",
  keywords: [
    "Bhavik Punmiya",
    "Software Developer",
    "Full Stack Developer",
    "Backend Developer",
    "SDET - Software Development Engineer in Test",
    "Test Automation Engineer",
    "AI Automation Developer",
    "Computer-Use Agents",
    "LLaMA Developer",
    "Voice Assistant Developer",
    "Hackathon Winner",
    "9× Hackathon Winner",
    "Y Combinator",
    "Ramain YC W26",
    "ISRO",
    "ISRO Hackathon Winner",
    "National Space Hackathon",
    "Saarthi IAS",
    "Backend Infrastructure",
    "Scalable Systems",
    "Distributed Systems",
    "Python Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "React Developer",
    "BrowserStack",
    "Test Automation Framework",
    "Selenium",
    "WebDriver",
    "API Testing",
    "End-to-End Testing",
    "E2E Testing",
    "Performance Testing",
    "Automation Testing",
    "CI/CD Pipeline",
    "DevOps",
    "Kubernetes",
    "Docker",
    "Microservices",
    "REST API",
    "GraphQL",
    "Database Design",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Machine Learning",
    "AI Integration",
    "LLM Integration",
    "Prompt Engineering",
    "Blockchain",
    "ETHGlobal",
    "Hackathon Projects",
    "Portfolio Website",
    "Indian Developer",
    "Tech Startup",
    "Software Engineer",
    "Open Source Developer",
    "GitHub",
    "Coding",
    "System Design",
    "Problem Solving",
    "Competitive Programming",
    "LeetCode",
    "Codeforces",
  ],
  authors: [{ name: "Bhavik Punmiya" }],
  creator: "Bhavik Punmiya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.bhavik.one",
    title: "Bhavik Punmiya - Full Stack Developer, SDET & AI Automation Specialist",
    description:
      "Bhavik Punmiya - Full Stack Developer & SDET. 9× Hackathon Winner. AI Automation Specialist at Ramain (YC W26). ISRO Space Hackathon Champion. Expert in Computer-Use Agents, LLaMA, test automation, backend infrastructure, and distributed systems.",
    images: [
      {
        url: "https://www.bhavik.one/isro/1.jpg",
        width: 1200,
        height: 630,
        alt: "Bhavik Punmiya Portfolio",
      },
    ],
    siteName: "Bhavik Punmiya - Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhavik Punmiya - SDET, Full Stack Developer & AI Automation Expert",
    description:
      "9× Hackathon Winner | ISRO Space Hackathon Champion | Ramain (YC W26) | Building Computer-Use Agents, LLaMA chatbots, test automation frameworks | #FullStack #SDET #AI",
    creator: "@bhavikpunmiya1",
    images: ["https://www.bhavik.one/isro/1.jpg"],
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
              image: "https://www.bhavik.one/isro/1.jpg",
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
