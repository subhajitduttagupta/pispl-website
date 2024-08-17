"use client";
import React from "react";
import { Industry } from "@/types/industry";
import { motion } from "framer-motion";
import Image from "next/image";


const SingleFeatureDown = ({ feature }: { feature: Industry }) => {
  return (
    <motion.div
      className="relative  p-8 h-64 flex items-end"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image
        src={feature.image}
        alt={feature.title}
        layout="fill"
        objectFit="cover"
        className="rounded-2xl"
      />
      <div className="absolute rounded-2xl inset-0 shadow-2xl  text-center flex items-end">
        <h3 className="text-white text-lg rounded-b-2xl bg-opacity-50 p-4 w-full bg-black font-semibold">{feature.title}</h3>
      </div>
    </motion.div>
  );
};

export default SingleFeatureDown;
