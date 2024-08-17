import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import { AuroraBackgroundDemo } from "@/components/ui/aurora-demo";
import { BentoGridSecondDemo } from "@/components/ui/bento-demo";
import { CardHoverEffectDemo } from "@/components/ui/card-demo";
import { HeroScrollDemo } from "@/components/ui/container-demo";
import { CanvasRevealEffectDemo } from "@/components/ui/canvas-demo";
import FeaturesSectionDemo from "@/components/blocks/features-section-demo-3";
import { InfiniteMovingCardsDemo } from "@/components/ui/infinite-demo";
import Feature from "@/components/Features";


export const metadata: Metadata = {
  title: "Our Services",
  description: "Innovative Services of PISPL",
  // other metadata
};

const OurServicesPage = () => {
  return (
    <div className="pb-20">
      <AuroraBackgroundDemo />
      <InfiniteMovingCardsDemo />
      <BentoGridSecondDemo />
      <FeaturesSectionDemo />
      <Feature />
      <HeroScrollDemo />
      <CanvasRevealEffectDemo />
      

      
      
      
      <Contact />
    </div>
  );
};

export default OurServicesPage;
