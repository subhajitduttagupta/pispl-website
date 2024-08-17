"use client"
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    imageUrl: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="relative h-full w-full">
            <Card imageUrl={item.imageUrl}>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl z-[-1]"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1.03, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, scale: 1, transition: { duration: 0.15, delay: 0.2 } }}
                />
              )}
            </AnimatePresence>
          </div>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  imageUrl,
}: {
  className?: string;
  children: React.ReactNode;
  imageUrl: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-54 md:h-60 w-full overflow-hidden relative z-10 group-hover:border-slate-700", // Adjusted height
        className
      )}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: 'var(--overlay-opacity, 0.6)' }}
      ></div>
      <div className="relative z-20 p-4">
        {children}
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};
