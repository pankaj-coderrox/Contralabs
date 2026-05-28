"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type EcosystemHoverCardProps = {
  alt: string;
  description: string;
  eyebrow: string;
  height: number;
  href?: string;
  imageName: string;
  label?: string;
  title: string;
  width: number;
};

export default function EcosystemHoverCard({
  alt,
  description,
  eyebrow,
  height,
  href = "#research",
  imageName,
  label = "Learn More",
  title,
  width,
}: EcosystemHoverCardProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.article
      className="group relative isolate aspect-[530/650] w-full overflow-hidden rounded-[4px] bg-[#337f7d]"
      initial="rest"
      onBlur={() => setIsActive(false)}
      onFocus={() => setIsActive(true)}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onPointerDown={() => setIsActive(true)}
      tabIndex={0}
      whileHover="hover"
    >
      <motion.div
        animate={{
          filter: isActive ? "blur(1.8px)" : "blur(0px)",
          scale: isActive ? 1.018 : 1,
        }}
        className="absolute inset-0 will-change-transform transition-[filter,transform] duration-500 ease-out group-hover:scale-[1.018] group-hover:blur-[1.8px] group-focus:scale-[1.018] group-focus:blur-[1.8px] group-focus-within:scale-[1.018] group-focus-within:blur-[1.8px]"
        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={`/sections/${imageName}.png`}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 530px"
          className="block h-full w-full select-none object-cover"
        />
      </motion.div>

      <motion.div
        animate={{ opacity: isActive ? 1 : 0 }}
        className="pointer-events-none absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100"
        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 12 }}
        className="pointer-events-none absolute inset-0 flex translate-y-3 items-center justify-center px-6 text-center text-white opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 sm:px-8"
        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-[340px]">
          <p className="mb-3 text-[11px] font-semibold uppercase leading-none tracking-[0.12em]">
            {eyebrow}
          </p>
          <h3 className="font-serif text-[clamp(30px,5vw,38px)] leading-[0.95] tracking-normal">
            {title}
          </h3>
          <p className="mx-auto mt-4 max-w-[300px] text-[clamp(12px,2vw,14px)] font-medium leading-[1.25] text-white/90">
            {description}
          </p>
          <a
            className="pointer-events-auto mt-6 inline-flex min-h-10 items-center justify-center rounded-full bg-white px-6 text-[13px] font-semibold text-[#252321] transition-colors duration-300 hover:bg-[#eaf6f3] focus:outline-none focus:ring-2 focus:ring-white/80"
            href={href}
          >
            {label}
          </a>
        </div>
      </motion.div>
    </motion.article>
  );
}
