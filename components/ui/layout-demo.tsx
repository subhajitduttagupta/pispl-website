"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen  md:py-5 object-cover w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        On site training at Jindal Steel, Jajpur, Odisha
      </p>
      <p className="font-normal text-base text-white"></p>
      {/* <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p> */}
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      Training at PISPL Office, konnagar
      </p>
      <p className="font-normal text-base text-white"></p>
      {/* <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p> */}
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Training at PISPL Office, konnagar
      </p>
      <p className="font-normal text-base text-white"></p>
      {/* <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p> */}
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        On-site training in TATA
      </p>
      <p className="font-normal text-base text-white"></p>
      {/* <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p> */}
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/images/development-training/gallery/WhatsApp Image 2024-07-10 at 20.01.21_2931ef37.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/images/development-training/gallery/WhatsApp Image 2024-08-01 at 16.06.21_10ed4556.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/images/development-training/gallery/WhatsApp Image 2024-08-01 at 15.56.00_412cd7fe.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "/images/development-training/gallery/WhatsApp Image 2024-07-11 at 17.30.39_0aab8867 (1).jpg",
  },
];
