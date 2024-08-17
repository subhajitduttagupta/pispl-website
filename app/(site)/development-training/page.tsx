import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import { ImagesSliderDemo } from "@/components/ui/image-slider-demo";
import { LayoutGridDemo } from "@/components/ui/layout-demo";
import DevelopmentAbout from "@/components/development-training";
import FeaturesTabAbout from "@/components/FeaturesTabTraining";



export const metadata: Metadata = {
  title: "Development Training",
  description: "On site Training by PISPL",
  // other metadata
};

const OurServicesPage = () => {
  return (
    <div className="pb-20">
      <ImagesSliderDemo />
      <DevelopmentAbout />
      <LayoutGridDemo />
      <FeaturesTabAbout />
      
      
      <Contact />
    </div>
  );
};

export default OurServicesPage;
