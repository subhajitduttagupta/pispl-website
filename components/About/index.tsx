"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LayoutGridDemo } from "../ui/layout-demo-home";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
  <div className="max-w-7xl mx-auto px-4 md:px-0 xl:px-0">
    <div className="flex flex-col-reverse md:flex-row items-center gap-2">

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
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_left md:w-1/2"
      >
        <span className="font-medium uppercase text-black dark:text-white">
          <span className="mb-4 mr-4 inline-flex rounded-full bg-primary px-4.5 py-1 text-metatitle uppercase text-white ">
            Services
          </span>{" "}
          Designing to Manufacturing
        </span>
        <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
          Our Product{" "}
          <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
            Portfolio
          </span>
        </h2>
        <div className="mt-7.5 flex items-start gap-5">
          <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection self-start">
            <p className="text-metatitle2 font-semibold text-black dark:text-white">
              01
            </p>
          </div>
          <div className="w-3/4">
            <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
              Industrial Automation Solutions
            </h3>
            <p>
              At Industrial Segment, we excel in Industrial Automation, offering system architecture design, control hardware selection, control panel design and assembly, and instruments procurement. We develop and test control software, handle field installation and wiring, and manage commissioning and startup. We ensure seamless integration with other control systems for optimal performance across various industries.
            </p>
          </div>
        </div>
        <div className="mt-7.5 flex items-start gap-5">
          <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection self-start">
            <p className="text-metatitle2 font-semibold text-black dark:text-white">
              02
            </p>
          </div>
          <div className="w-3/4">
            <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
              Lt Panel Manufacturing
            </h3>
            <p>
              We specialize in LT panel manufacturing, offering a range of control panels including MCC, PCC, APFC, AMF, PLC, and VFD panels. Our services encompass installation, commissioning, engineering, design, cable layout, and erection. We also provide retrofitting of old panels, onsite assembly, and retrofitting jobs, as well as PDB and DG synchronization panels.
            </p>
          </div>
        </div>
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
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_right w-full mb-5 md:w-1/2"
      >
        <Image
          src="/images/gallery-home/WhatsApp Image 2024-06-06 at 17.18.52_d00943d7.jpg"
          width={600}
          height={500}
          alt="Panel"
          className="rounded-xl shadow-xl"
        />
        <div className="hidden md:block md:ml-20 md:mt-[-100px]">
        <Image
          src="/images/gallery-home/WhatsApp Image 2024-08-02 at 17.58.15_951a5528.jpg"
          width={300}
          height={500}
          alt="Panel"
          className="rounded-xl shadow-xl"
        />
        </div>
      </motion.div>

    </div>
  </div>
</section>

      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-32.5">
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
              className="animate_left w-full md:w-1/2"
            >
              <h4 className="font-medium uppercase text-black dark:text-white">
                Trusted & Certified
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                We Are{" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  CPRI Certified
                </span>
                <Image
                  src="/cpri/cpri1.png"
                  alt="CPRI Certified"
                  width={100} // Adjust the width as needed
                  height={100} // Adjust the height as needed
                  className="inline-block ml-2"
                />
              </h2>
              <p>
                We are a CPRI certified manufacturer of type-tested panels,
                compliant with IEC 61439. Our panels meet the highest standards
                of safety, reliability, and efficiency, ensuring superior
                quality and performance.
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
              className="animate_right relative w-full md:w-1/2"
            >
              <div className="relative  aspect-[588/526.5] w-full">
                <Image
                  src="/factory/WhatsApp Image 2024-08-02 at 17.58.16_31dcca56.jpg"
                  alt="About"
                  layout="fill"
                  objectFit="cover"
                  className="shadow-2xl rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
