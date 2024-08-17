import React from "react";
import { AnimatedPinDemo } from "./3d-pin-demo";
import { AnimatedPinDemo1 } from "./3d-pin-demo copy 2";
import { AnimatedPinDemo2 } from "./3d-pin-demo copy";

const DemoSection = () => {
  return (
    <section className="overflow-hidden w-full mt-10 mb-30 px-4 md:py-10 xl:py-10 xl:px-50">
      <h1 className="mb-14  text-center text-5xl  font-bold text-black dark:text-white xl:text-hero">
        Our Workshops
      </h1>
      <div className="mx-auto max-w-full h-full flex flex-col md:flex-row lg:items-center lg:gap-4 xl:gap-28">
        <div className="w-full grid grid-cols-1 md:grid-cols-3  gap-4">
          <AnimatedPinDemo />
          <AnimatedPinDemo1 />
          <AnimatedPinDemo2 />
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
