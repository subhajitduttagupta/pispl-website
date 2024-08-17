"use client";
import React from "react";
import { HeroParallax } from "./hero-parallax";

export const HeroParallaxDemo = () => {
  const products = [
    {
      title: "Moonbeam",
      link: "#",
      thumbnail:
        "/images/home-our-work/1.jpg",
    },
    {
      title: "Cursor",
      link: "#",
      thumbnail:
        "/images/home-our-work/2.jpg",
    },
    {
      title: "Rogue",
      link: "#",
      thumbnail:
        "/images/home-our-work/3.jpg",
    },
  
    {
      title: "Editorially",
      link: "#",
      thumbnail:
        "/images/home-our-work/4.jpg",
    },
    {
      title: "Editrix AI",
      link: "#",
      thumbnail:
        "/images/home-our-work/5.jpg",
    },
    {
      title: "Pixel Perfect",
      link: "#",
      thumbnail:
        "/images/home-our-work/6.jpg",
    },
  
    {
      title: "Algochurn",
      link: "#",
      thumbnail:
        "/images/home-our-work/7.jpg",
    },
    {
      title: "Aceternity UI",
      link: "#",
      thumbnail:
        "/images/home-our-work/8.jpg",
    },
    {
      title: "Tailwind Master Kit",
      link: "#",
      thumbnail:
        "/images/home-our-work/9.jpg",
    },
    {
      title: "SmartBridge",
      link: "#",
      thumbnail:
        "/images/home-our-work/10.jpg",
    },
    {
      title: "Renderwork Studio",
      link: "#",
      thumbnail:
        "/images/home-our-work/11.jpg",
    },
  
    {
      title: "Creme Digital",
      link: "#",
      thumbnail:
        "/images/home-our-work/12.jpg",
    },
    {
      title: "Golden Bells Academy",
      link: "#",
      thumbnail:
        "/images/home-our-work/13.jpg",
    },
    {
      title: "Invoker Labs",
      link: "#",
      thumbnail:
        "/images/home-our-work/14.jpg",
    },
    {
      title: "E Free Invoice",
      link: "#",
      thumbnail:
        "/images/home-our-work/15.jpg",
    },
  ];
  return (
    <div>
      {/* <h2>Hero Parallax Demo</h2> */}
      <HeroParallax products={products} />
    </div>
  );
};

export default HeroParallaxDemo;

