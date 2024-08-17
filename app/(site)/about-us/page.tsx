import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

import FeaturesTabAbout from "@/components/FeaturesTabAbout";

import { BackgroundBoxesDemo } from "@/components/ui/background-demo";
import HeroAbout from "@/components/HeroAbout";
import About from "@/components/About";


import DemoSection from "@/components/ui/3d-pin/3d-pin-section";
import { InfiniteMovingCardsDemo } from "@/components/ui/infinite-demo";
import CTA from "@/components/CTA";
import FunFact from "@/components/FunFact";
// import FeaturesSectionDemo from "@/components/blocks/features-section-demo-3";




export const metadata: Metadata = {
  title: "About Us Page",
  description: "This is About Us of PISPL",
  // other metadata
};

const AboutPage = () => {
  return (
    <div >
      <BackgroundBoxesDemo />
      
      
      <InfiniteMovingCardsDemo />
      
      <HeroAbout />
      <DemoSection />
      {/* <FeaturesSectionDemo /> */}
      <About />
      
      <FeaturesTabAbout />
      <FunFact />
      <CTA />
      
      <Contact />
    </div>
  );
};

export default AboutPage;
