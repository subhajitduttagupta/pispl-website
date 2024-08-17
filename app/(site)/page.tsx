import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
// import FAQ from "@/components/FAQ";
// import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
// import Testimonial from "@/components/Testimonial";
import {HeroParallaxDemo} from "@/components/ui/HeroParallaxDemo";
import FeaturesSectionDemo from "@/components/blocks/features-section-demo-3";
import { InfiniteMovingCardsDemo } from "@/components/ui/infinite-demo";





export const metadata: Metadata = {
  title: "Premium Industerial Solutions Private Limited (PISPL)",
  description: "We build LT Panels",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      
      <InfiniteMovingCardsDemo />
      <Feature />
      

      <FeaturesSectionDemo />
      <About />
      <HeroParallaxDemo />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      {/* <FAQ /> */}
      {/* <Testimonial /> */}
      {/* <Pricing /> */}
      <Contact />
      <Blog />
    </main>
  );
}
