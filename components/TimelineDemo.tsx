import React from "react";
import { Timeline } from "@/components/ui/timeline";

const imgShadow =
  "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

export function TimelineDemo() {
  const data = [
    {
      title: "2026",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Building production-grade AI automation systems at{" "}
            <a
              href="https://ramain.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ramain (YC W26)
            </a>
            , shipping high-speed Computer-Use Agents for enterprise insurance and logistics workflows.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://www.ycombinator.com/companies/ramain"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/ramain/2.png"
                alt="Ramain at Y-Combinator"
                width={500}
                height={500}
                className={`h-20 w-full rounded-lg object-cover ${imgShadow} md:h-44 lg:h-60`}
              />
            </a>
            <a
              href="https://www.linkedin.com/posts/business-teams-waste-100s-of-hours-every-ugcPost-7427027688688640000-785n?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZGvvMBRGxhu9oyuzVHJbG60F7M5HKIAbM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <video
                src="/ramain/1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className={`h-20 w-full rounded-lg object-cover ${imgShadow} md:h-44 lg:h-60`}
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Interned at{" "}
            <a
              href="https://www.linkedin.com/posts/bhavik-punmiya_internship-growth-success-activity-7376648700019752960-fQSq?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZGvvMBRGxhu9oyuzVHJbG60F7M5HKIAbM"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              ISRO&apos;s Astronaut Training Facility
            </a>
            {" "}in Bengaluru, building a hands-free voice assistant and an offline LLaMA-based chatbot for internal crew training systems.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://www.linkedin.com/posts/bhavik-punmiya_internship-growth-success-activity-7376648700019752960-fQSq?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZGvvMBRGxhu9oyuzVHJbG60F7M5HKIAbM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/isro/1.jpg"
                alt="ISRO internship"
                width={500}
                height={500}
                className={`h-20 w-full rounded-lg object-cover ${imgShadow} md:h-44 lg:h-60`}
              />
            </a>
            <a
              href="https://www.linkedin.com/posts/bhavik-punmiya_internship-growth-success-activity-7376648700019752960-fQSq?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZGvvMBRGxhu9oyuzVHJbG60F7M5HKIAbM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/isro/2.jpg"
                alt="ISRO internship"
                width={500}
                height={500}
                className={`h-20 w-full rounded-lg object-cover ${imgShadow} md:h-44 lg:h-60`}
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Previously worked at Saarthi IAS, building scalable backend infrastructure and automation tools for one of India&apos;s largest UPSC ed-tech platforms.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://www.sarrthiias.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="/sarrthiias/1.png"
                alt="Saarthi IAS"
                width={500}
                height={500}
                className={`h-20 w-full rounded-lg object-cover ${imgShadow} md:h-44 lg:h-60`}
              />
            </a>
            <a href="https://www.sarrthiias.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="/sarrthiias/2.png"
                alt="Saarthi IAS"
                width={500}
                height={500}
                className={`h-20 w-full rounded-lg object-cover ${imgShadow} md:h-44 lg:h-60`}
              />
            </a>
            <a href="https://www.sarrthiias.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="/sarrthiias/3.png"
                alt="Saarthi IAS"
                width={500}
                height={500}
                className={`h-20 w-full rounded-lg object-cover ${imgShadow} md:h-44 lg:h-60`}
              />
            </a>
            <a href="https://www.sarrthiias.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="/sarrthiias/4.png"
                alt="Saarthi IAS"
                width={500}
                height={500}
                className={`h-20 w-full rounded-lg object-cover ${imgShadow} md:h-44 lg:h-60`}
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            At Cognify Analytics, I led development on products like TokenQuest and Spenga, building tools used by international clients to scale their blockchain and analytics systems.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/cognify/cognify-website.png"
              alt="Cognify Analytics"
              width={500}
              height={500}
              className={`h-20 w-full rounded-lg object-cover ${imgShadow} md:h-44 lg:h-60`}
            />
            <img
              src="/cognify/spenga.png"
              alt="Spenga"
              width={500}
              height={500}
              className={`h-20 w-full rounded-lg object-cover ${imgShadow} md:h-44 lg:h-60`}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
