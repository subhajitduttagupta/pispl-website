"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  
  const [phone, setPhone] = useState('');

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      phone,
      subject: "New Quote Request",
      message: `Phone Number: ${phone}`
    };

    try {
      const response = await fetch(`http://localhost:3001/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Quote request sent successfully!');
        setPhone('');
      } else {
        const errorData = await response.text();
        console.error('Error response:', errorData);
        alert('Failed to send request. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the request.');
    }
  };
  

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                The Optimal Automation Solution for Industries
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Industrial automation system integrator and {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  Lt Panel manufacturer
                </span>
              </h1>
              <p className="text-base leading-relaxed text-titlebgdark dark:text-waterloo">
                We offer Industrial Automation services including engineering, procurement, installation, commissioning, control systems (PLC, SCADA, DCS), automation products, detailed engineering, retrofitting, revamping, and Annual Maintenance Contracts (AMC) to improve productivity and safety for clients.
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="text"
                      placeholder="Enter your Phone number"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-neutral-800 dark:shadow-none dark:focus:border-primary"
                      required
                    />
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-primary px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                      type="submit"
                    >
                      Get a Quote
                    </button>
                  </div>
                </form>                
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.png"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-dark.png"
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

export default Hero;


















//In SERVER

// import React, { useState } from "react";

// const HeroSection = () => {
//   const [phone, setPhone] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = {
//       phone,
//       subject: "New Quote Request",
//       message: `Phone Number: ${phone}`
//     };

//     try {
//       const response = await fetch('http://localhost:3001/send-email', { // <-- Change this in production
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Quote request sent successfully!');
//         setPhone('');
//       } else {
//         const errorData = await response.text();
//         console.error('Error response:', errorData);
//         alert('Failed to send request. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while sending the request.');
//     }
//   };

//   return (
//     <section id="hero" className="relative">
//       {/* Hero content */}

      // <form onSubmit={handleSubmit}>
      //   <div className="flex flex-wrap gap-5">
      //     <input
      //       value={phone}
      //       onChange={(e) => setPhone(e.target.value)}
      //       type="text"
      //       placeholder="Enter your Phone number"
      //       className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-neutral-800 dark:shadow-none dark:focus:border-primary"
      //       required
      //     />
      //     <button
      //       aria-label="get started button"
      //       className="flex rounded-full bg-primary px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
      //       type="submit"
      //     >
      //       Get a Quote
      //     </button>
      //   </div>
      // </form>

//       {/* Other hero content */}
//     </section>
//   );
// };

// export default HeroSection;
