"use client";

import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  MotionValue,
} from "motion/react";
import React, { useRef, useState, useEffect } from "react";

export const FloatingDock = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100", // Responsive scaling
        className
      )}
    >
      <FloatingDockBase items={items} />
    </div>
  );
};

const FloatingDockBase = ({
  items,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
}) => {
  const mouseX = useMotionValue(Infinity);
  const [isMobile, setIsMobile] = useState(false);

  // Only run on client
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  return (
    <motion.div
      onMouseMove={(e) => !isMobile && mouseX.set(e.pageX)}
      onMouseLeave={() => !isMobile && mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex h-16 items-end gap-4 rounded-2xl bg-gray-50 px-4 pb-3 dark:bg-neutral-900"
      )}
    >
      {items.map((item) => (
        <IconContainer
          key={item.title}
          mouseX={mouseX}
          isMobile={isMobile}
          {...item}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  isMobile,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  isMobile: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Always define hooks — do not guard with if
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const widthIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIconSpring = useSpring(widthIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIconSpring = useSpring(heightIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  // ✅ Now safely use the branch
  if (isMobile) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div
          ref={ref}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800"
        >
          <div className="w-5 h-5">{icon}</div>
        </div>
      </a>
    );
  }

  // 🖥️ Animated version
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIconSpring, height: heightIconSpring }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
