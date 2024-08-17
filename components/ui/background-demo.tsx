"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-[100vh] relative w-full overflow-hidden bg-white dark:bg-neutral-950 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-neutral-50 dark:bg-neutral-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("text-5xl md:text-7xl md:px-40  font-bold text text-neutral-950 dark:text-white text-center relative z-20")}>
        11 Years of Service
      </h1>
      <p className="font-extralight text-base md:px-50 md:text-4xl text-neutral-950 dark:text-neutral-200 py-4 text-center relative z-20">
      Your Partner in Machine Maintenance & Automation Upgrades Since 2014
      </p>
    </div>
  );
}
