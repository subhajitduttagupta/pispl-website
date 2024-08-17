"use client";
import React from "react";
import { PinContainer } from "./3d-pin";
import Image from "next/image";
import contactImage from '@/public/images/contact/WhatsApp Image 2024-07-31 at 11.49.40_16a61e4b.jpg'; // Adjust the path if necessary

export function AnimatedPinDemo1() {
  return (
    <div className="mb-10  w-full flex items-center justify-center">
      <PinContainer title="PISPL Office" href="https://maps.app.goo.gl/iGEWepGA2k5JyTe1A">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black dark:text-white">
            PISPL Office & Workshop
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-700 dark:text-slate-400">
              PISPL A 8, 1, Hospital Rd, Nabagram, Konnagar, Nabagram Colony, West Bengal 712246.
            </span>
          </div>
          <Image 
            src={contactImage} 
            alt="Contact Image"
            className="flex  mt-4 shadow-lg rounded-lg object-cover"
          />
        </div>
      </PinContainer>
    </div>
  );
}

