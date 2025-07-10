import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconTrophy,
  IconRocket,
  IconCode,
  IconWorldWww,
} from "@tabler/icons-react";

export default function BentoGridSecondDemo() {
  return (
    <div className="mb-16">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Achievements
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-md">
          A few of my proudest wins that reflect impact and growth.
        </p>
      </div>

      <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem] gap-4">
        {items.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <BentoGridItem
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className}
            />
          </a>
        ))}
      </BentoGrid>
    </div>
  );
}

const items = [
  {
    title: "National Space Hackathon Win @ ISRO + IIT Delhi",
    description:
      "Felicitated by astronauts, ISRO scientists, and IIT Delhi Dean. Broadcasted live nationwide.",
    header: (
      <div className="h-full w-full overflow-hidden rounded-xl">
        <img
          src="/achievements/isro.jpg"
          alt="ISRO Hackathon Award"
          className="object-cover w-full h-full"
        />
      </div>
    ),
    className: "md:col-span-2 md:row-span-2",
    icon: <IconRocket className="h-4 w-4 text-neutral-500" />,
    link: "https://www.linkedin.com/posts/bhavik-punmiya_spacehackathon-isro-iitdelhi-activity-7326941243161116673-zkVD?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZGvvMBRGxhu9oyuzVHJbG60F7M5HKIAbM",
  },
  {
    title: "$7K Winner – ETHGlobal Online 2024",
    description: "Won $7,000 for blockchain innovation at ETHGlobal Online 2024.",
    header: (
      <div className="h-full w-full overflow-hidden rounded-xl">
        <img
          src="/achievements/ethonline.jpg"
          alt="ETHGlobal Online 2024"
          className="object-cover w-full h-full"
        />
      </div>
    ),
    className: "md:col-span-1",
    icon: <IconWorldWww className="h-4 w-4 text-neutral-500" />,
    link: "https://www.linkedin.com/posts/bhavik-punmiya_ethglobal-blockchain-rootstock-activity-7240612740686376960-TRmc?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZGvvMBRGxhu9oyuzVHJbG60F7M5HKIAbM",
  },
  {
    title: "$2.5K+ Winner – ETHGlobal Superhacks",
    description:
      "Secured $2,500+ prize for blockchain excellence at ETHGlobal Superhacks 2024.",
    header: (
      <div className="h-full w-full overflow-hidden rounded-xl">
        <img
          src="/achievements/superhacks.jpg"
          alt="ETHGlobal Superhacks 2024"
          className="object-cover w-full h-full"
        />
      </div>
    ),
    className: "md:col-span-1",
    icon: <IconTrophy className="h-4 w-4 text-neutral-500" />,
    link: "https://www.linkedin.com/posts/bhavik-punmiya_excited-to-share-that-shantanu-sakpal-activity-7230537124133912576-mQz6?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZGvvMBRGxhu9oyuzVHJbG60F7M5HKIAbM",
  },
  {
    title: "Codeshastra X Champion – College Legacy Hackathon",
    description:
      "Won Codeshastra Season 10, a decade-old premier hackathon at my college.",
    header: (
      <div className="h-full w-full overflow-hidden rounded-xl">
        <img
          src="/achievements/codeshastra.jpg"
          alt="Codeshastra X Winner"
          className="object-cover w-full h-full"
        />
      </div>
    ),
    className: "md:col-span-1",
    icon: <IconCode className="h-4 w-4 text-neutral-500" />,
    link: "https://www.linkedin.com/posts/bhavik-punmiya_hackathon-winners-activity-7180926245885386752-Mijp?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZGvvMBRGxhu9oyuzVHJbG60F7M5HKIAbM",
  },
  {
    title: "1st at TechFest IIT Bombay – Marsh McLennan Hackathon",
    description:
      "Secured 1st place at TechFest IIT Bombay in a hackathon hosted by Marsh McLennan.",
    header: (
      <div className="h-full w-full overflow-hidden rounded-xl">
        <img
          src="/achievements/techfest.jpg"
          alt="TechFest IIT Bombay Winner"
          className="object-cover w-full h-full"
        />
      </div>
    ),
    className: "md:col-span-1",
    icon: <IconTrophy className="h-4 w-4 text-neutral-500" />,
    link: "https://www.linkedin.com/posts/bhavik-punmiya_i-am-overjoyed-to-announce-that-our-team-activity-7146539023719735296-6bBN?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZGvvMBRGxhu9oyuzVHJbG60F7M5HKIAbM",
  },
  {
    title: "ETHGlobal Bangkok 2024 – International Hackathon",
    description:
      "Represented globally at ETHGlobal Bangkok 2024, connected with developers worldwide, and met the founder of ETHGlobal.",
    header: (
      <div className="h-full w-full overflow-hidden rounded-xl">
        <img
          src="/achievements/ethbangkok.jpg"
          alt="ETHGlobal Bangkok 2024"
          className="object-cover w-full h-full"
        />
      </div>
    ),
    className: "md:col-span-1",
    icon: <IconRocket className="h-4 w-4 text-neutral-500" />,
    link: "", // No post available
  }  
];
