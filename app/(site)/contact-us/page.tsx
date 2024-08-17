import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import DemoSection from "@/components/ui/3d-pin/3d-pin-section";


export const metadata: Metadata = {
  title: "Contact Page",
  description: "This is Contact page of PISPL",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      
      <Contact />
      <DemoSection />
    </div>
  );
};

export default SupportPage;
