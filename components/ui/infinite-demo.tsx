"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[120px] rounded-md flex flex-col antialiased border border-x-0 border-y-stroke bg-alabaster dark:border-y-strokedark dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={logos}
        direction="right"
        speed="fast" // Adjust speed here
      />
    </div>
  );
}

const logos = [
  { logo: "/images/brand/jsw-group-vector-logo.svg" },
  { logo: "/images/brand/new/Untitled_design__1_-removebg-preview (1).png" },
  { logo: "/images/brand/new/Untitled_design__2_-removebg-preview.png" },
  { logo: "/images/brand/new/Untitled_design__3_-removebg-preview.png" },
  { logo: "/images/brand/new/Untitled_design__4_-removebg-preview.png" },
  { logo: "/images/brand/new/Untitled_design__5_-removebg-preview.png" },
  { logo: "/images/brand/new/Untitled_design__6_-removebg-preview (1).png" },
  { logo: "/images/brand/new/Untitled_design__8_-removebg-preview.png" },
  { logo: "/images/brand/new/Untitled_design__9_-removebg-preview (1).png" },
  { logo: "/images/brand/new/Untitled_design__10_-removebg-preview.png" },
  { logo: "/images/brand/new/Untitled_design__11_-removebg-preview (2).png" },
  { logo: "/images/brand/new/Untitled_design__12_-removebg-preview.png" },
  { logo: "/images/brand/new/Untitled_design__13_-removebg-preview.png" },
];
