import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Currently working at Saarthi IAS, one of India’s largest UPSC ed-tech startups, building scalable backend infrastructure and automation tools.

          </p>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://www.sarrthiias.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="/sarrthiias/1.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </a>
            <a href="https://www.sarrthiias.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="/sarrthiias/2.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </a>
            <a href="https://www.sarrthiias.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="/sarrthiias/3.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </a>
            <a href="https://www.sarrthiias.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="/sarrthiias/4.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
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
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/cognify/spenga.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    }
  //   {
  //     title: "Projects",
  //     content: (
  //       <div>
  //         <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
  //           Been building and sharing cool projects on my YouTube too — here's a few recent ones:
  //         </p>
  //         <div className="mb-8">
  //   <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
  //     ✅ Decentrix AI – ETHGlobal Smart Contract Generator
  //   </div>
  //   <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
  //     ✅ Movie Recommendation System
  //   </div>
  //   <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
  //     ✅ Vyoom – ISRO National Space Hackathon
  //   </div>
  //   <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
  //     ✅ RespireTech - Posture Correction System for Asthama Patients
  //   </div>
  // </div>
  // <div className="grid grid-cols-2 gap-4">
  //   <a href="https://www.youtube.com/watch?v=6TDvoS9Y4Os" target="_blank" rel="noopener noreferrer">
  //     <img
  //       src="/thumbnails/decentrix.jpg"
  //       alt="Decentrix AI"
  //       width={500}
  //       height={500}
  //       className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //     />
  //   </a>
  //   <a href="https://www.youtube.com/watch?v=1HI8FbGLMtA" target="_blank" rel="noopener noreferrer">
  //     <img
  //       src="/thumbnails/movie-recommender.jpg"
  //       alt="Movie Recommendation"
  //       width={500}
  //       height={500}
  //       className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //     />
  //   </a>
  //   <a href="https://www.youtube.com/watch?v=-67WDPuTdCs" target="_blank" rel="noopener noreferrer">
  //     <img
  //       src="/thumbnails/vyoom.jpg"
  //       alt="Vyoom Hackathon"
  //       width={500}
  //       height={500}
  //       className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //     />
  //   </a>
  //   <a href="https://www.youtube.com/watch?v=-67WDPuTdCs" target="_blank" rel="noopener noreferrer">
  //     <img
  //       src="/thumbnails/respiretech.jpg"
  //       alt="RespireTech"
  //       width={500}
  //       height={500}
  //       className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //     />
  //   </a>
  // </div>
  //       </div>
  //     ),
  //   },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
