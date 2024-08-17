"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TeamAbout = () => {
  return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section className="overflow-hidden px-4 py-20 mt-[0px] md:mt-8 md:pb-8 lg:py-25 xl:py-30 2xl:px-0">
        <div className="mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-7.5 py-12.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5 xl:py-0">
          <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-[70%] lg:w-1/2"
            >
              <h2 className="mb-4 w-11/12 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle4">
                Our Team Leaders & Team Strength
              </h2>
              <p>
                PISPL team is a group of talented young engineers and team leaded by technocrats havingmore than 15 years of experience in the Automation engineering & development field.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right lg:w-[45%]"
            >
              <div className="flex flex-col items-center justify-end xl:flex-row xl:justify-between">
                <div className="flex flex-col items-center justify-center">
                  <Image
                    width={299}
                    height={299}
                    src="/images/shape/Untitled_design__6_-removebg-preview.png"
                    alt="Saly"
                    className="block p-4 md:p-6"
                  />
                  <p className="text-center mb-6">
                    <span className=" text-black dark:text-white">Soma Chakravorty</span>
                      <br/>
                    <span className="italic">CEO, PISPL</span>
                  </p>
                </div>
                <a
                  href="signup.html"
                  className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black"
                >
                  Join Us
                  <Image
                    width={20}
                    height={20}
                    src="/images/icon/icon-arrow-dark.svg"
                    alt="Arrow"
                    className="dark:hidden"
                  />
                  <Image
                    width={20}
                    height={20}
                    src="/images/icon/icon-arrow-light.svg"
                    alt="Arrow"
                    className="hidden dark:block"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  );
};

export default TeamAbout;
