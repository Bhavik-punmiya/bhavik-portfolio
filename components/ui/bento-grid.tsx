import { cn } from "@/lib/utils";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input flex flex-col justify-between space-y-2 md:space-y-4 rounded-xl border border-neutral-200 bg-white p-3 md:p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none h-full overflow-hidden",
        className,
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-1 mb-1 md:mt-2 md:mb-2 font-sans text-xs md:text-sm font-bold text-neutral-600 dark:text-neutral-200 line-clamp-2">
          {title}
        </div>
        <div className="font-sans text-[10px] md:text-xs font-normal text-neutral-600 dark:text-neutral-300 line-clamp-2">
          {description}
        </div>
      </div>
    </div>
  );
};
