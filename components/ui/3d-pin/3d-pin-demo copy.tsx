"use client";
import React from "react";
import { PinContainer } from "./3d-pin";
import Image from "next/image";
import contactImage from '@/public/images/contact/WhatsApp Image 2024-08-02 at 17.58.06_322f98c0.jpg'; // Adjust the path if necessary

export function AnimatedPinDemo2() {
  return (
    <div className="mb-10  w-full flex items-center justify-center">
      <PinContainer title="Vidya Complex" href="https://maps.app.goo.gl/SqByEX3ZkhcY3Abb8">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black dark:text-white">
            PISPL Workshop
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-700 dark:text-slate-400">
              Naity Rd, Basai, Kanaipur, Konnagar, Naiti, West Bengal 712310.
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

