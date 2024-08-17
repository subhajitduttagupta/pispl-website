"use client";
import Image from "next/image";
import { useState } from "react";

const HeroAbout = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden py-12 md:pt-20 xl:pt-30 md:pd-5 xl:pd-10 md:px-40 xl:px-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col md:flex-row lg:items-center lg:gap-4 xl:gap-28">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="mb-10  md:pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Our Industrial Signature

              </h1>
              <p>
                Premium Industerial Solutions Private Limited (PISPL) in Kolkata provides machine maintenance and automation upgrades for various industries. Established in 2014, it became a private limited company in 2017, growing rapidly with diverse clients and innovative solutions.
              </p>
              <p className="pt-5">
                We offer Industrial Automation services including engineering, procurement, installation, commissioning, control systems (PLC, SCADA, DCS), automation products, detailed engineering, retrofitting, revamping, and Annual Maintenance Contracts (AMC) to improve productivity and safety for clients.
              </p>
            </div>

            <div className="animate_right w-full md:w-1/2 mt-10 md:mt-0">
              <div className="relative 2xl:-mr-7.5">
                <div className="relative aspect-[700/600] w-full">
                  <Image
                    className="shadow-lg rounded-lg object-cover"
                    src="/images/hero-about/WhatsApp Image 2024-06-06 at 17.16.22_aaae3435.jpg"
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

export default HeroAbout;
