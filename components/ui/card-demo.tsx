import { HoverEffect } from "./card-hover-effect";
import { HoverEffectSingle } from "./card-hover-single";

 
export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto mt-15 px-5">
      <h2 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3 text-center">
        Our Specialization At Industrial Segments.
      </h2>
      <HoverEffect items={projects} />
      <HoverEffectSingle items={single} />
    </div>
  );
}
export const single = [
  {
    title: "Single card",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    link: "https://stripe.com",
    imageUrl: "/images/industries/demo11111.png",
  },
]
export const projects = [
  {
    title: "Water Treatment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    link: "https://stripe.com",
    imageUrl: "/images/industries/demo11111.png",
  },
  {
    title: "Furnace",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    link: "https://netflix.com",
    imageUrl: "/images/industries/demo11111.png",
  },
  {
    title: "Fire Fighting Systems",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    link: "https://google.com",
    imageUrl: "/images/industries/demo11111.png",
  },
  {
    title: "Food Processing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    link: "https://meta.com",
    imageUrl: "/images/industries/demo11111.png",
  },
  {
    title: "Polution Control",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    link: "https://amazon.com",
    imageUrl: "/images/industries/demo11111.png",
  },
  {
    title: "Electrical Industry",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    link: "https://microsoft.com",
    imageUrl: "/images/industries/demo11111.png",
  },
  {
    title: "Steel Industry",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    link: "https://stripe.com",
    imageUrl: "/images/industries/demo11111.png",
  },
  {
    title: "Tea Processing Industry",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    link: "https://netflix.com",
    imageUrl: "/images/industries/demo11111.png",
  },
  {
    title: "Metal Extraction",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    link: "https://google.com",
    imageUrl: "/images/industries/demo11111.png",
  },
];