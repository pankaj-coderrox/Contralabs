"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";

const columns = 5;
const rows = 6;
const rowTemplate = "1.22fr repeat(4, minmax(0, 1fr)) 0.72fr";
const columnTemplate = "repeat(5, minmax(0, 1fr))";
const expandedBlindColumnTemplate = "1fr 1fr 1.36fr 0.82fr 0.82fr";
const expandedBlindRowTemplate = "1.22fr 1.34fr 0.88fr 0.88fr 0.74fr";
const expandedExpertColumnTemplate = "0.9fr 0.9fr 0.9fr 0.9fr 1.4fr";
const expandedExpertRowTemplate = "1.22fr 1fr 1.34fr 0.86fr 0.86fr 0.66fr";
const expandedScoringColumnTemplate = "0.92fr 0.92fr 0.92fr 1.34fr 0.9fr";
const expandedScoringRowTemplate = "1.22fr 1fr 1fr 1.32fr 0.84fr 0.68fr";
const expandedMultimodalColumnTemplate = "0.9fr 1.34fr 0.92fr 0.92fr 0.92fr";
const expandedMultimodalRowTemplate = "1.22fr 1fr 1fr 1fr 1.28fr 0.5fr";
const gridEase = [0.19, 1, 0.22, 1] as const;

type ActiveExpansion = "blind" | "expert" | "scoring" | "multimodal" | null;

const tiles = Array.from({ length: columns * rows }, (_, index) => {
  const column = index % columns;
  const row = Math.floor(index / columns);

  return {
    column,
    key: `${row}-${column}`,
    row,
  };
});

type EditorialCard = {
  body: string;
  className: string;
  title: string;
  titleClassName?: string;
};

const cards: EditorialCard[] = [
  {
    body: "Contra Labs brings together private evaluations, public comparisons, and research outputs under one unified human evaluation framework.",
    className: "col-[1/3] row-[1/2] px-[7%] py-[clamp(18px,2.2vw,28px)]",
    title: "Building taste into\ncreative AI",
    titleClassName: "max-w-none text-[clamp(28px,3vw,40px)]",
  },
  {
    body: "Models are evaluated head-to-head through structured, bias-controlled comparison protocols.",
    className: "col-[3/4] row-[2/3] px-[10%]",
    title: "Blind comparative reviews",
  },
  {
    body: "We capture and analyze high-signal human preferences from vetted creative professionals.",
    className: "col-[5/6] row-[3/4] px-[8%] py-[clamp(12px,1.4vw,18px)]",
    title: "Expert preference modeling",
    titleClassName: "text-[clamp(19px,1.95vw,27px)]",
  },
  {
    body: "Qualitative judgment is translated into structured scoring frameworks aligned with real-world standards.",
    className: "col-[4/5] row-[4/5] px-[10%]",
    title: "Creative scoring systems",
  },
  {
    body: "We assess image, video, design, and interactive model outputs where traditional metrics fail to capture taste.",
    className: "col-[2/3] row-[5/6] px-[8%] py-[clamp(12px,1.4vw,18px)]",
    title: "Multimodal AI evals",
    titleClassName: "text-[clamp(20px,2vw,28px)]",
  },
];

export default function EditorialGridSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [activeExpansion, setActiveExpansion] = useState<ActiveExpansion>(null);
  const activeColumnTemplate =
    activeExpansion === "blind"
      ? expandedBlindColumnTemplate
      : activeExpansion === "expert"
        ? expandedExpertColumnTemplate
        : activeExpansion === "scoring"
          ? expandedScoringColumnTemplate
          : activeExpansion === "multimodal"
            ? expandedMultimodalColumnTemplate
            : columnTemplate;
  const activeRowTemplate =
    activeExpansion === "blind"
      ? expandedBlindRowTemplate
      : activeExpansion === "expert"
        ? expandedExpertRowTemplate
        : activeExpansion === "scoring"
          ? expandedScoringRowTemplate
          : activeExpansion === "multimodal"
            ? expandedMultimodalRowTemplate
            : rowTemplate;

  return (
    <motion.section
      ref={sectionRef}
      aria-label="Building taste into creative AI editorial grid"
      className="editorial-grid-section hidden w-full overflow-hidden bg-[#f7f4ee] min-[901px]:block"
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 28 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ amount: 0.2, once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      data-active-card={activeExpansion ?? undefined}
    >
      <style>{`
        .editorial-grid-layer {
          backface-visibility: hidden;
          contain: layout paint;
          transition:
            grid-template-columns 1180ms cubic-bezier(0.19, 1, 0.22, 1),
            grid-template-rows 1180ms cubic-bezier(0.19, 1, 0.22, 1);
          transform: translateZ(0);
        }

        .editorial-grid-section[data-active-card="blind"] .editorial-grid-layer,
        .editorial-grid-section:has(.editorial-card--blind:hover) .editorial-grid-layer,
        .editorial-grid-section:has(.editorial-card--blind:focus-visible) .editorial-grid-layer {
          grid-template-columns: ${expandedBlindColumnTemplate} !important;
          grid-template-rows: ${expandedBlindRowTemplate} !important;
        }

        .editorial-grid-section[data-active-card="expert"] .editorial-grid-layer,
        .editorial-grid-section:has(.editorial-card--expert:hover) .editorial-grid-layer,
        .editorial-grid-section:has(.editorial-card--expert:focus-visible) .editorial-grid-layer {
          grid-template-columns: ${expandedExpertColumnTemplate} !important;
          grid-template-rows: ${expandedExpertRowTemplate} !important;
        }

        .editorial-grid-section[data-active-card="scoring"] .editorial-grid-layer,
        .editorial-grid-section:has(.editorial-card--scoring:hover) .editorial-grid-layer,
        .editorial-grid-section:has(.editorial-card--scoring:focus-visible) .editorial-grid-layer {
          grid-template-columns: ${expandedScoringColumnTemplate} !important;
          grid-template-rows: ${expandedScoringRowTemplate} !important;
        }

        .editorial-grid-section[data-active-card="multimodal"] .editorial-grid-layer,
        .editorial-grid-section:has(.editorial-card--multimodal:hover) .editorial-grid-layer,
        .editorial-grid-section:has(.editorial-card--multimodal:focus-visible) .editorial-grid-layer {
          grid-template-columns: ${expandedMultimodalColumnTemplate} !important;
          grid-template-rows: ${expandedMultimodalRowTemplate} !important;
        }

        .editorial-grid-line-cell {
          box-shadow: 0 0 0 1px rgba(255, 250, 243, 0.78);
        }
      `}</style>
      <div className="relative aspect-[1328/1190] w-full overflow-hidden bg-[#f7f4ee]">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          initial={{ opacity: 0.72, scale: 1.012 }}
          style={{
            backgroundImage: "url('/sections/editorial-grid-artwork.png')",
          }}
          transition={{
            duration: 1.1,
            ease: gridEase,
          }}
          viewport={{ amount: 0.2, once: true }}
          whileInView={{ opacity: 1, scale: 1 }}
        />
        <motion.div
          aria-hidden="true"
          className="editorial-grid-layer pointer-events-none absolute inset-0 grid gap-[2px]"
          style={{
            gridTemplateColumns: activeColumnTemplate,
            gridTemplateRows: activeRowTemplate,
            transitionDuration: prefersReducedMotion ? "0ms" : undefined,
          }}
        >
          {tiles.map((tile) => (
            <motion.div
              className="editorial-grid-line-cell min-h-0 min-w-0"
              initial={{ opacity: 0.72, scale: 1.018 }}
              key={tile.key}
              transition={{
                delay: 0.04 + (tile.row + tile.column) * 0.018,
                duration: 1.1,
                ease: gridEase,
              }}
              viewport={{ amount: 0.2, once: true }}
              whileInView={{ opacity: 1, scale: 1 }}
            />
          ))}
        </motion.div>

        <motion.div
          className="editorial-grid-layer pointer-events-none absolute inset-0 grid gap-[2px]"
          style={{
            gridTemplateColumns: activeColumnTemplate,
            gridTemplateRows: activeRowTemplate,
            transitionDuration: prefersReducedMotion ? "0ms" : undefined,
          }}
        >
          {cards.map((card, index) => (
            <motion.article
              className={`${card.className} ${
                (index === 1 && activeExpansion === "blind") ||
                (index === 2 && activeExpansion === "expert") ||
                (index === 3 && activeExpansion === "scoring") ||
                (index === 4 && activeExpansion === "multimodal")
                  ? "z-20"
                  : "z-10"
              } ${
                index === 1
                  ? "editorial-card--blind"
                  : index === 2
                    ? "editorial-card--expert"
                    : index === 3
                      ? "editorial-card--scoring"
                      : index === 4
                        ? "editorial-card--multimodal"
                        : ""
              } pointer-events-auto flex flex-col justify-center overflow-hidden bg-[#fffdf8] text-[#1f1d1a]`}
              initial={
                index <= 4
                  ? false
                  : {
                      clipPath: "inset(48% 48% 48% 48%)",
                      opacity: 0,
                      scale: 0.96,
                    }
              }
              key={card.title}
              onBlur={() => {
                if (index >= 1 && index <= 4) setActiveExpansion(null);
              }}
              onFocus={() => {
                if (index === 1) setActiveExpansion("blind");
                if (index === 2) setActiveExpansion("expert");
                if (index === 3) setActiveExpansion("scoring");
                if (index === 4) setActiveExpansion("multimodal");
              }}
              onMouseEnter={() => {
                if (index === 1) setActiveExpansion("blind");
                if (index === 2) setActiveExpansion("expert");
                if (index === 3) setActiveExpansion("scoring");
                if (index === 4) setActiveExpansion("multimodal");
              }}
              onMouseLeave={() => {
                if (index >= 1 && index <= 4) setActiveExpansion(null);
              }}
              onPointerEnter={() => {
                if (index === 1) setActiveExpansion("blind");
                if (index === 2) setActiveExpansion("expert");
                if (index === 3) setActiveExpansion("scoring");
                if (index === 4) setActiveExpansion("multimodal");
              }}
              onPointerLeave={() => {
                if (index >= 1 && index <= 4) setActiveExpansion(null);
              }}
              tabIndex={index >= 1 && index <= 4 ? 0 : undefined}
              transition={{
                delay: 0.16 + index * 0.1,
                duration: 1.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ amount: 0.34, once: true }}
              whileInView={
                index <= 4
                  ? undefined
                  : {
                      clipPath: "inset(0% 0% 0% 0%)",
                      opacity: 1,
                      scale: 1,
                    }
              }
            >
              <motion.h2
                className={`whitespace-pre-line font-serif text-[clamp(24px,2.35vw,34px)] font-normal leading-[0.95] tracking-normal ${
                  card.titleClassName ?? ""
                }`}
                initial={
                  index <= 4 ? false : { filter: "blur(8px)", opacity: 0, y: 16 }
                }
                transition={{
                  delay: 0.44 + index * 0.1,
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ amount: 0.34, once: true }}
                whileInView={
                  index <= 4
                    ? undefined
                    : { filter: "blur(0px)", opacity: 1, y: 0 }
                }
              >
                {card.title}
              </motion.h2>
              <motion.p
                className={
                  index === 0
                    ? "mt-[clamp(10px,1vw,14px)] max-w-[45ch] text-[clamp(10px,0.92vw,12px)] font-medium leading-[1.12] tracking-normal"
                    : index >= 2 && index <= 4
                      ? "mt-[clamp(8px,0.85vw,12px)] max-w-[28ch] text-[clamp(9px,0.88vw,11.5px)] font-medium leading-[1.12] tracking-normal"
                      : "mt-[clamp(12px,1.35vw,18px)] max-w-[31ch] text-[clamp(10px,1.03vw,14px)] font-medium leading-[1.18] tracking-normal"
                }
                initial={
                  index <= 4 ? false : { filter: "blur(6px)", opacity: 0, y: 12 }
                }
                transition={{
                  delay: 0.58 + index * 0.1,
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ amount: 0.34, once: true }}
                whileInView={
                  index <= 4
                    ? undefined
                    : { filter: "blur(0px)", opacity: 1, y: 0 }
                }
              >
                {card.body}
              </motion.p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
