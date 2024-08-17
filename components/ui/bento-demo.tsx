import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/Common/SectionHeader"; // Adjust the path as needed
import Image from "next/image";

export function BentoGridSecondDemo() {
  return (
    <div className="py-20 px-5">
      {/* Section Header */}
      <div className="pb-20  animate_top mx-auto text-center">
        <SectionHeader
          headerInfo={{
            title: `Services`,
            subtitle: `The Services we offer`,
            description: `We offer system design, hardware selection, control panels (LT, MCC, PCC, APFC, AMF, PLC, VFD, PDB, DG), instrumentation, software development, testing, installation, wiring, commissioning, and retrofitting.`,
          }}
        />
      </div>

      {/* Bento Grid */}
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const Skeleton = ({ imagePath }: { imagePath: string }) => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <Image
      src={imagePath}
      alt="Bento image"
      layout="fill"
      objectFit="cover"
      className="rounded-xl"
    />
  </div>
);

const items = [
  {
    title: "Industrial Automation Solutions",
    description: "Engineering and procurement for automation.",
    header: <Skeleton imagePath="/images/bento/WhatsApp Image 2024-08-03 at 13.53.48_9de2b3ed.jpg" />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "LT Panel Manufacturing",
    description: "Manufacture and installation of LT control panels.",
    header: <Skeleton imagePath="/images/about/Artboard1.png" />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "On-Site Training",
    description: "Hands-on automation training at client locations.",
    header: <Skeleton imagePath="/images/development-training/gallery/WhatsApp Image 2024-07-11 at 17.30.39_0aab8867.jpg" />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Data Visualization and Analytics App",
    description: "Visualizes and analyzes industrial data efficiently.",
    header: <Skeleton imagePath="/images/app/demo_app.jpg" />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
