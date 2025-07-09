"use client";

import React, { useEffect, useState } from "react";
import { BackgroundLines } from "@/components/backgroundlines";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconBrandYoutube,
  IconBrandLinkedin,
  IconCode,
} from "@tabler/icons-react";

export function BackgroundLinesDemo() {
  const [showDock, setShowDock] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide dock after scrolling past hero section (e.g., 400px)
      setShowDock(window.scrollY < 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const CodeforcesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#737373" d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5zm9 7.5A1.5 1.5 0 0 1 24 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5z"></path></svg>
  );

  const ResumeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-file-text h-full w-full text-neutral-500 dark:text-neutral-300"><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path><path d="M9 9l1 0"></path><path d="M9 13l6 0"></path><path d="M9 17l6 0"></path></svg>
  );

  const LeetCodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-leetcode h-full w-full text-neutral-500 dark:text-neutral-300"><path d="M12 13h7.5"></path><path d="M9.424 7.268l4.999 -4.999"></path><path d="M16.633 16.644l-2.402 2.415a3.189 3.189 0 0 1 -4.524 0l-3.77 -3.787a3.223 3.223 0 0 1 0 -4.544l3.77 -3.787a3.189 3.189 0 0 1 4.524 0l2.302 2.313"></path></svg>
  );

  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Resume",
      icon: <ResumeIcon />,
      href: "https://drive.google.com/file/d/1OI7cfbf8BHGjsFCR-YGWP1j6aI1BgG8a/view?usp=sharing",
    },
    {
      title: "LeetCode",
      icon: <LeetCodeIcon />,
      href: "https://leetcode.com/u/Bhavik_/",
    },
    {
      title: "Codeforces",
      icon: <CodeforcesIcon />,
      href: "https://codeforces.com/profile/bhavik_punmiya",
    },
    {
      title: "YouTube",
      icon: <IconBrandYoutube className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.youtube.com/@bhavikpunmiya9641/videos",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://x.com/bhavikpunmiya1",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.linkedin.com/in/bhavik-punmiya/",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://github.com/Bhavik-punmiya", // update this if you have a specific profile
    },
  ];

  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      {showDock && (
        <div className="w-full flex justify-center fixed top-0 left-0 z-40 mt-10">
          <div className="scale-110">
            <FloatingDock
              items={links}
              desktopClassName=""
              mobileClassName=""
            />
          </div>
        </div>
      )}
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Bhavik Punmiya, <br /> Software Developer
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
      Just a guy who loves to code and ship — 9× Hackathon Winner.
      </p>
    </BackgroundLines>
  );
}
