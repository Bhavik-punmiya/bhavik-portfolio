import React from "react";
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
  IconBrandLeetcode,
  IconCode,
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Resume",
      icon: (
        <Image
          src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
          alt="Resume Icon"
          width={20}
          height={20}
        />
      ),
      href: "https://drive.google.com/drive/u/0/folders/1Cx1GcFEFTorpoyesSoMewOGG0RUPFU45",
    },
    {
      title: "LeetCode",
      icon: (
        <Image
          src="https://leetcode.com/static/images/LeetCode_logo_rvs.png"
          alt="LeetCode Icon"
          width={20}
          height={20}
        />
      ),
      href: "https://leetcode.com/u/Bhavik_/",
    },
    {
      title: "Codeforces",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://codeforces.com/profile/bhavik_punmiya",
    },
    {
      title: "YouTube",
      icon: (
        <IconBrandYoutube className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.youtube.com/@bhavikpunmiya9641/videos",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/bhavikpunmiya1",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/bhavik-punmiya/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
    <div className="w-full flex justify-center fixed top-0 left-0 z-40">
      <FloatingDock
        items={links}
        className="mt-4" // Add responsive classes here if needed
      />
    </div>
  );
}
