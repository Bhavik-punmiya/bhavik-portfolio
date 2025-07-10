import { HoverEffect } from "./ui/card-hover-effect";

const skills = [
  {
    name: "React",
    icon: "/globe.svg",
    description: "Frontend library for building UIs",
  },
  {
    name: "Next.js",
    icon: "/next.svg",
    description: "React framework for SSR and SSG",
  },
  {
    name: "TensorFlow",
    icon: "/vercel.svg",
    description: "Machine learning framework",
  },
  {
    name: "OpenCV",
    icon: "/window.svg",
    description: "Computer vision library",
  },
  {
    name: "TypeScript",
    icon: "/file.svg",
    description: "Typed superset of JavaScript",
  },
  // Add more skills and icons as needed
];

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-7xl mx-auto px-8 mb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 mb-8">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Skills
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Technologies I have already worked on
        </p>
      </div>
      <HoverEffect items={skills} />
    </div>
  );
} 