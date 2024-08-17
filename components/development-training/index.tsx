"use client";
import Image from "next/image";
import { useState } from "react";

const DevelopmentAbout = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden py-12 md:pt-20 xl:pt-30 md:pd-5 xl:pd-10 md:px-40 xl:px-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col md:flex-row lg:items-center lg:gap-4 xl:gap-10">
            <div className="md:w-1/2 text-center md:text-left">
            <h1 className="mb-5  text-2xl font-bold text-black dark:text-white xl:text-hero ">
            Inhouse Development  {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                & Training
                </span>
              </h1>

              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                State of the art R&D named Industrial Automation & Training research center
              </h4>


              
              <p>
              Another feather in our organization's cap is, a fully operational R & D center, located at New Town, Kolkata. From Micro PLC to DCS, customers can get hand-on experiences on the functionalities of machines. The R & D center is facilitated with all Automation components.

              </p>
              
            </div>

            <div className="animate_right w-full md:w-1/2 mt-10 md:mt-0">
              <div className="relative 2xl:-mr-7.5">
                <div className="relative h-90 aspect-[700/600] w-full">
                  <Image
                    className="shadow-lg rounded-lg object-cover "
                    src="/images/development-training/Picture77.png"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default DevelopmentAbout;
