"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="pb-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card title="Automate your Industry" icon={<AutomationIcon />}>
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Data driven Approach" icon={<DataIcon />}>
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Not just Visualise, Take action using AI" icon={<AiIcon />}>
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem]" //edited
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 text-center font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

const AiIcon = () => {
  return (
    <svg width="100px" height="100px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#cccccc" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.256"></g><g id="SVGRepo_iconCarrier"><circle cx="34.52" cy="11.43" r="5.82"></circle><circle cx="53.63" cy="31.6" r="5.82"></circle><circle cx="34.52" cy="50.57" r="5.82"></circle><circle cx="15.16" cy="42.03" r="5.82"></circle><circle cx="15.16" cy="19.27" r="5.82"></circle><circle cx="34.51" cy="29.27" r="4.7"></circle><line x1="20.17" y1="16.3" x2="28.9" y2="12.93"></line><line x1="38.6" y1="15.59" x2="49.48" y2="27.52"></line><line x1="50.07" y1="36.2" x2="38.67" y2="46.49"></line><line x1="18.36" y1="24.13" x2="30.91" y2="46.01"></line><line x1="20.31" y1="44.74" x2="28.7" y2="48.63"></line><line x1="17.34" y1="36.63" x2="31.37" y2="16.32"></line><line x1="20.52" y1="21.55" x2="30.34" y2="27.1"></line><line x1="39.22" y1="29.8" x2="47.81" y2="30.45"></line><line x1="34.51" y1="33.98" x2="34.52" y2="44.74"></line></g></svg>
  );
};

const DataIcon = () => {
  return (
    <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V3M9 15H9.01M16 13H16.01M10 10H10.01M17 8H17.01" stroke="#cccccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  );
};

const AutomationIcon = () => {
  return (
    <svg fill="#cccccc" width="100px" height="100px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" stroke="#cccccc">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M39 2.03125C38.738281 2.0625 38.503906 2.199219 38.34375 2.40625L35.40625 6.09375C34.835938 5.378906 33.972656 4.90625 33 4.90625L29 4.90625C27.6875 4.90625 26.566406 5.765625 26.125 6.9375L16.4375 6.9375C14.8125 4.5625 12.082031 3 9 3C4.042969 3 0 7.042969 0 12C0 15.082031 1.5625 17.8125 3.9375 19.4375C3.949219 19.445313 3.957031 19.460938 3.96875 19.46875C3.96875 19.480469 3.96875 19.488281 3.96875 19.5L14.75 39.9375L6.875 39.9375C5.226563 39.9375 3.9375 41.359375 3.9375 43L3.9375 49C3.933594 49.28125 4.046875 49.554688 4.246094 49.753906C4.445313 49.953125 4.71875 50.066406 5 50.0625L39 50.0625C39.28125 50.066406 39.554688 49.953125 39.753906 49.753906C39.953125 49.554688 40.066406 49.28125 40.0625 49L40.0625 43C40.0625 41.359375 38.773438 39.9375 37.125 39.9375L29.90625 39.9375L16.96875 17.0625L26.125 17.0625C26.566406 18.234375 27.6875 19.09375 29 19.09375L33 19.09375C33.972656 19.09375 34.835938 18.621094 35.40625 17.90625L38.34375 21.59375C38.636719 21.960938 39.148438 22.066406 39.5625 21.84375L49.46875 16.4375C49.882813 16.214844 50.074219 15.730469 49.929688 15.285156C49.78125 14.835938 49.339844 14.5625 48.875 14.625C48.753906 14.644531 48.636719 14.6875 48.53125 14.75L39.375 19.78125L36.09375 15.625L36.09375 8.40625L39.375 4.25L48.53125 9.25C48.835938 9.457031 49.230469 9.472656 49.550781 9.292969C49.871094 9.113281 50.0625 8.769531 50.042969 8.402344C50.027344 8.035156 49.804688 7.710938 49.46875 7.5625L39.5625 2.15625C39.390625 2.058594 39.195313 2.015625 39 2.03125Z M9 5C11.480469 5 13.664063 6.28125 14.90625 8.21875C14.917969 8.238281 14.925781 8.261719 14.9375 8.28125C14.957031 8.324219 14.976563 8.367188 15 8.40625C15.023438 8.472656 15.054688 8.535156 15.09375 8.59375C15.109375 8.621094 15.140625 8.628906 15.15625 8.65625C15.175781 8.6875 15.195313 8.71875 15.21875 8.75C15.722656 9.71875 16 10.828125 16 12C16 13.160156 15.714844 14.257813 15.21875 15.21875C15.210938 15.230469 15.195313 15.238281 15.1875 15.25C15.175781 15.269531 15.164063 15.292969 15.15625 15.3125C15.152344 15.320313 15.160156 15.335938 15.15625 15.34375C15.132813 15.363281 15.113281 15.382813 15.09375 15.40625C15.027344 15.492188 14.976563 15.585938 14.9375 15.6875C14.925781 15.71875 14.914063 15.75 14.90625 15.78125C13.664063 17.71875 11.480469 19 9 19C5.125 19 2 15.875 2 12C2 8.125 5.125 5 9 5ZM9 6.34375C8.933594 6.34375 8.878906 6.371094 8.8125 6.375C8.75 6.390625 8.683594 6.410156 8.625 6.4375C5.707031 6.644531 3.34375 9.03125 3.34375 12C3.34375 15.101563 5.898438 17.65625 9 17.65625C12.101563 17.65625 14.65625 15.101563 14.65625 12C14.65625 9.042969 12.308594 6.660156 9.40625 6.4375C9.394531 6.4375 9.386719 6.40625 9.375 6.40625C9.304688 6.386719 9.230469 6.378906 9.15625 6.375C9.101563 6.375 9.054688 6.34375 9 6.34375ZM29 7.09375H33C33.511719 7.09375 33.90625 7.488281 33.90625 8V16C33.90625 16.511719 33.511719 16.90625 33 16.90625H29C28.488281 16.90625 28.09375 16.511719 28.09375 16V8C28.09375 7.488281 28.488281 7.09375 29 7.09375ZM8.9375 8.34375C8.957031 8.34375 8.980469 8.34375 9 8.34375C11.015625 8.34375 12.65625 9.984375 12.65625 12C12.65625 14.015625 11.015625 15.65625 9 15.65625C6.984375 15.65625 5.34375 14.015625 5.34375 12C5.34375 10.003906 6.949219 8.378906 8.9375 8.34375ZM17.5 9.0625H25.90625V14.9375H17.5C17.820313 14.011719 18 13.03125 18 12C18 10.96875 17.820313 9.988281 17.5 9.0625ZM15.375 18.3125L27.59375 39.9375H16.96875L6.84375 20.71875C7.539063 20.890625 8.253906 21 9 21C11.496094 21 13.742188 19.960938 15.375 18.3125ZM6.875 42.0625H16.09375C16.34375 42.167969 16.625 42.167969 16.875 42.0625H37.125C37.558594 42.0625 37.9375 42.4375 37.9375 43V47.9375H6.0625V43C6.0625 42.4375 6.441406 42.0625 6.875 42.0625Z"></path>
      </g>
    </svg>
  );
};

export { DataIcon, AutomationIcon, AiIcon };


export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
