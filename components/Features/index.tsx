"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import SingleFeatureDown from "./SingleFeatureDown";
import featuresDataDown from "./featuresDataDown";


const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "INDUSTRIES",
              subtitle: "Our Specialization At Industrial Segment",
              description: `At Industrial Segment, we excel in providing comprehensive Industrial Automation services. We serve a variety of industries, enhancing productivity and safety through our expertise.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}
            {featuresData.map((industry, key) => (
              <SingleFeature feature={industry} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
          <div className="mt-5 lg:mt-10 xl:mt-15">
            {/* <!-- Features item Start --> */}
            {featuresDataDown.map((industry, key) => (
              <SingleFeatureDown feature={industry} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>

        </div>
      </section>
      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
