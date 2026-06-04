"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef, type CSSProperties } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type CardStyle = CSSProperties & {
  "--card-rotate": string;
  "--card-width": string;
  "--card-x": string;
  "--card-y": string;
};

type FloatingCard = {
  alt: string;
  src: string;
  style: CardStyle;
};

const floatingCards: FloatingCard[] = [
  {
    src: "/sections/network-taste-art.png",
    alt: "Creative network artwork",
    style: {
      "--card-x": "18%",
      "--card-y": "22%",
      "--card-width": "clamp(74px, 18vw, 150px)",
      "--card-rotate": "-8deg",
    },
  },
  {
    src: "/sections/editorial-grid-artwork.png",
    alt: "Editorial creative grid artwork",
    style: {
      "--card-x": "82%",
      "--card-y": "22%",
      "--card-width": "clamp(76px, 19vw, 155px)",
      "--card-rotate": "7deg",
    },
  },
  {
    src: "/sections/ecosystem-card-human-data.png",
    alt: "Human data card artwork",
    style: {
      "--card-x": "12%",
      "--card-y": "56%",
      "--card-width": "clamp(66px, 17vw, 130px)",
      "--card-rotate": "5deg",
    },
  },
  {
    src: "/sections/ecosystem-card-creative-arena.png",
    alt: "Creative Arena card artwork",
    style: {
      "--card-x": "88%",
      "--card-y": "56%",
      "--card-width": "clamp(66px, 17vw, 130px)",
      "--card-rotate": "-6deg",
    },
  },
  {
    src: "/sections/leading-research-landscape-new.png",
    alt: "Leading research landscape artwork",
    style: {
      "--card-x": "23%",
      "--card-y": "82%",
      "--card-width": "clamp(82px, 20vw, 165px)",
      "--card-rotate": "9deg",
    },
  },
  {
    src: "/sections/ecosystem-card-benchmark.png",
    alt: "Benchmark card artwork",
    style: {
      "--card-x": "76%",
      "--card-y": "82%",
      "--card-width": "clamp(74px, 18vw, 145px)",
      "--card-rotate": "-9deg",
    },
  },
  {
    src: "/sections/08-leading-research-art.png",
    alt: "Classical research artwork",
    style: {
      "--card-x": "50%",
      "--card-y": "16%",
      "--card-width": "clamp(62px, 16vw, 125px)",
      "--card-rotate": "2deg",
    },
  },
  {
    src: "/sections/ecosystem-card-co-agents.png",
    alt: "Co-agents ecosystem artwork",
    style: {
      "--card-x": "8%",
      "--card-y": "32%",
      "--card-width": "clamp(60px, 15vw, 120px)",
      "--card-rotate": "8deg",
    },
  },
  {
    src: "/sections/08-leading-research-mobile-art.png",
    alt: "Mobile leading research artwork",
    style: {
      "--card-x": "14%",
      "--card-y": "18%",
      "--card-width": "clamp(62px, 16vw, 125px)",
      "--card-rotate": "-8deg",
    },
  },
  {
    src: "/sections/08-research-followup.png",
    alt: "Research followup artwork",
    style: {
      "--card-x": "86%",
      "--card-y": "18%",
      "--card-width": "clamp(66px, 16vw, 130px)",
      "--card-rotate": "4deg",
    },
  },
  {
    src: "/sections/training-data-intro.png",
    alt: "Training data artwork",
    style: {
      "--card-x": "14%",
      "--card-y": "84%",
      "--card-width": "clamp(68px, 17vw, 135px)",
      "--card-rotate": "-4deg",
    },
  },
  {
    src: "/sections/laptop-on-desk.jpeg",
    alt: "Laptop on desk artwork",
    style: {
      "--card-x": "86%",
      "--card-y": "84%",
      "--card-width": "clamp(76px, 19vw, 150px)",
      "--card-rotate": "3deg",
    },
  },
];

const messages = [
  "Built on real-world\ncreative expertise",
  "Human judgment shapes\nbetter creative AI",
  "Taste becomes\nthe evaluation layer",
];

export default function EditorialParallaxSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) {
        return;
      }

      const textMessages = gsap.utils.toArray<HTMLElement>(
        ".editorial-parallax-base__message",
      );
      const cardElements = gsap.utils.toArray<HTMLElement>(
        ".editorial-parallax-base__card",
      );

      if (textMessages.length !== 3) {
        return;
      }

      const [textOne, textTwo, textThree] = textMessages;
      const hiddenTextState = {
        autoAlpha: 0,
        opacity: 0,
        visibility: "hidden",
        x: 0,
        y: 0,
        zIndex: 0,
      };
      const visibleTextState = {
        autoAlpha: 1,
        opacity: 1,
        visibility: "visible",
        x: 0,
        y: 0,
        zIndex: 10,
      };
      const enterFromBelowTextState = {
        ...hiddenTextState,
        scale: 0.72,
        y: 0,
      };
      const smallCenteredTextState = {
        ...visibleTextState,
        scale: 0.72,
        transformOrigin: "50% 50%",
        x: 0,
        y: 0,
      };
      const smallLowerTextState = {
        ...smallCenteredTextState,
        y: 112,
      };
      const textOneVisibleState = {
        ...visibleTextState,
        y: 24,
      };
      const textOneSmallState = {
        ...smallCenteredTextState,
        y: 24,
      };
      const textTwoSmallState = {
        ...smallCenteredTextState,
        y: 64,
      };

      gsap.set(textMessages, hiddenTextState);
      gsap.set(textOne, textOneVisibleState);
      gsap.set(cardElements, {
        autoAlpha: 0,
        opacity: 0,
        transformOrigin: "50% 50%",
        willChange: "transform",
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.9,
        },
      });

      const imageParallax = [
        {
          driftX: -12,
          driftY: -18,
          enterAt: 0.42,
          fromX: -170,
          fromY: 16,
          rotate: -8,
          scale: 0.98,
        },
        {
          driftX: 12,
          driftY: -16,
          enterAt: 0.5,
          fromX: 170,
          fromY: 20,
          rotate: 7,
          scale: 1.02,
        },
        {
          driftX: -18,
          driftY: 10,
          enterAt: 0.58,
          fromX: -150,
          fromY: 64,
          rotate: 5,
          scale: 1,
        },
        {
          driftX: 18,
          driftY: 8,
          enterAt: 0.66,
          fromX: 155,
          fromY: 58,
          rotate: -6,
          scale: 1,
        },
        {
          driftX: -14,
          driftY: -14,
          enterAt: 1.3,
          fromX: 0,
          fromY: 180,
          rotate: 9,
          scale: 1.04,
        },
        {
          driftX: 14,
          driftY: -14,
          enterAt: 1.4,
          fromX: 120,
          fromY: -150,
          rotate: -9,
          scale: 1.03,
        },
        {
          driftX: -10,
          driftY: 10,
          enterAt: 1.5,
          fromX: 0,
          fromY: 190,
          rotate: 2,
          scale: 0.96,
        },
        {
          driftX: 10,
          driftY: 10,
          enterAt: 1.6,
          fromX: -80,
          fromY: -130,
          rotate: 8,
          scale: 0.94,
        },
        {
          driftX: -12,
          driftY: 2,
          enterAt: 2.36,
          fromX: 120,
          fromY: -80,
          rotate: -8,
          scale: 0.97,
        },
        {
          driftX: -10,
          driftY: -12,
          enterAt: 2.46,
          fromX: -180,
          fromY: 0,
          rotate: 4,
          scale: 1.02,
        },
        {
          driftX: 10,
          driftY: -12,
          enterAt: 2.56,
          fromX: 180,
          fromY: 20,
          rotate: -4,
          scale: 1,
        },
        {
          driftX: 0,
          driftY: 8,
          enterAt: 2.66,
          fromX: 0,
          fromY: 210,
          rotate: 3,
          scale: 0.98,
        },
      ];

      const sequenceEnd = 5.2;

      imageParallax.forEach((motion, index) => {
        const card = cardElements[index];

        if (!card) {
          return;
        }

        const groupIndex = Math.floor(index / 4);
        const activeScaleMultiplier = [0.86, 1.04, 1.22][groupIndex] ?? 1;
        const settledScaleMultiplier = [0.58, 0.68, 0.86][groupIndex] ?? 0.72;
        const activeScale = motion.scale * activeScaleMultiplier;
        const rotateFrom = motion.rotate + (motion.rotate >= 0 ? 5 : -5);
        const enterDuration = 0.5;
        const driftStart = motion.enterAt + enterDuration;
        const driftDuration = Math.max(0.1, sequenceEnd - driftStart);
        const settledScale = activeScale * settledScaleMultiplier;

        timeline
          .fromTo(
            card,
            {
              autoAlpha: 0,
              opacity: 0,
              rotation: rotateFrom,
              scale: activeScale * 0.94,
              x: motion.fromX,
              y: motion.fromY,
              zIndex: index + 1,
            },
            {
              autoAlpha: 1,
              duration: enterDuration,
              ease: "power2.out",
              opacity: 1,
              rotation: 0,
              scale: activeScale,
              x: 0,
              y: 0,
              zIndex: index + 1,
            },
            motion.enterAt,
          )
          .to(
            card,
            {
              duration: driftDuration,
              ease: "sine.inOut",
              rotation: 0,
              scale: settledScale,
              x: motion.driftX,
              y: motion.driftY,
              zIndex: index + 1,
            },
            driftStart,
          );
      });

      timeline
        .addLabel("text-1", 0)
        .set(textMessages, hiddenTextState, 0)
        .set(textOne, textOneVisibleState, 0)
        .to(textOne, { ...textOneVisibleState, duration: 1.2, ease: "none" }, 0)
        .to(
          textOne,
          {
            ...textOneSmallState,
            duration: 0.3,
            ease: "none",
          },
          1.2,
        )
        .to(
          textOne,
          {
            ...textOneSmallState,
            duration: 0.8,
            ease: "none",
          },
          1.5,
        )
        .addLabel("text-2", 2.3)
        .set(textThree, hiddenTextState, 2.3)
        .fromTo(
          textTwo,
          { ...enterFromBelowTextState, y: 96 },
          {
            ...textTwoSmallState,
            duration: 0.42,
            ease: "power2.out",
            immediateRender: false,
          },
          2.3,
        )
        .to(
          textOne,
          {
            ...hiddenTextState,
            scale: 0.72,
            duration: 0.34,
            ease: "power2.out",
            y: 24,
          },
          2.35,
        )
        .to(textTwo, { ...textTwoSmallState, duration: 1.1, ease: "none" }, 2.72)
        .to(
          textTwo,
          {
            ...hiddenTextState,
            duration: 0.34,
            ease: "power2.out",
            scale: 0.72,
            y: 64,
          },
          3.82,
        )
        .addLabel("text-3", 3.82)
        .set(textOne, hiddenTextState, 3.82)
        .fromTo(
          textThree,
          { ...enterFromBelowTextState, y: 140 },
          {
            ...smallLowerTextState,
            duration: 0.42,
            ease: "power2.out",
            immediateRender: false,
          },
          3.82,
        )
        .to(textThree, { ...smallLowerTextState, duration: 1.0, ease: "none" }, 4.24);

      return () => {
        timeline.kill();
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="editorial-parallax-base"
      aria-label="Editorial message sequence"
    >
      <style>{`
        .editorial-parallax-base {
          align-items: center;
          background: #f7f4ee;
          color: #252321;
          display: grid;
          height: 190vh;
          isolation: isolate;
          overflow-x: clip;
          overflow-y: visible;
          position: relative;
          width: 100%;
        }

        .editorial-parallax-base__stage {
          align-items: center;
          background: #f7f4ee;
          display: grid;
          height: 100vh;
          height: 100dvh;
          justify-items: center;
          margin-inline: calc(50% - 50vw);
          min-height: 100vh;
          min-height: 100dvh;
          overflow: hidden;
          position: sticky;
          top: 0;
          width: 100vw;
          z-index: 2;
        }

        .editorial-parallax-base__cards {
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          position: absolute;
          z-index: 1;
        }

        .editorial-parallax-base__card {
          aspect-ratio: 4 / 5;
          background:
            linear-gradient(135deg, rgba(174, 210, 204, 0.95), rgba(247, 244, 238, 0.84)),
            #c8e2dd;
          border-radius: 8px;
          box-shadow: 0 24px 70px rgba(37, 35, 33, 0.12);
          left: var(--card-x);
          overflow: hidden;
          position: absolute;
          top: var(--card-y);
          transform: translate(-50%, -50%) rotate(var(--card-rotate));
          width: var(--card-width);
        }

        .editorial-parallax-base__card img {
          height: 100%;
          object-fit: cover;
          width: 100%;
        }

        .editorial-parallax-base__text {
          display: grid;
          inset: 0;
          place-items: center;
          margin: 0;
          padding: 0 22px;
          pointer-events: none;
          position: absolute;
          text-align: center;
          width: 100%;
          z-index: 2;
        }

        .editorial-parallax-base__message {
          align-items: center;
          display: flex;
          font-family: Georgia, "Times New Roman", serif;
          color: #252321;
          font-size: clamp(42px, 12vw, 82px);
          font-weight: 400;
          grid-area: 1 / 1;
          justify-content: center;
          letter-spacing: 0;
          line-height: 0.9;
          margin: 0;
          max-width: min(900px, calc(100vw - 44px));
          min-height: clamp(160px, 32vw, 330px);
          opacity: 0;
          place-self: center;
          position: relative;
          transform-origin: 50% 50%;
          will-change: opacity, transform;
          visibility: hidden;
          width: min(900px, calc(100vw - 44px));
          white-space: pre-line;
          z-index: 0;
        }

        .editorial-parallax-base__message:first-child {
          opacity: 1;
          visibility: visible;
          z-index: 10;
        }

        @media (min-width: 760px) {
          .editorial-parallax-base__message {
            font-size: clamp(72px, 7.3vw, 118px);
          }
        }

        @media (min-width: 1100px) {
          .editorial-parallax-base__card:nth-child(1) {
            --card-x: 24%;
            --card-y: 28%;
            --card-width: 130px;
          }

          .editorial-parallax-base__card:nth-child(2) {
            --card-x: 76%;
            --card-y: 28%;
            --card-width: 135px;
          }

          .editorial-parallax-base__card:nth-child(3) {
            --card-x: 24%;
            --card-y: 76%;
            --card-width: 110px;
          }

          .editorial-parallax-base__card:nth-child(4) {
            --card-x: 76%;
            --card-y: 76%;
            --card-width: 110px;
          }

          .editorial-parallax-base__card:nth-child(5) {
            --card-x: 20%;
            --card-y: 50%;
            --card-width: 155px;
          }

          .editorial-parallax-base__card:nth-child(6) {
            --card-x: 80%;
            --card-y: 50%;
            --card-width: 155px;
          }

          .editorial-parallax-base__card:nth-child(7) {
            --card-x: 36%;
            --card-y: 20%;
            --card-width: 135px;
          }

          .editorial-parallax-base__card:nth-child(8) {
            --card-x: 64%;
            --card-y: 20%;
            --card-width: 140px;
          }

          .editorial-parallax-base__card:nth-child(9) {
            --card-x: 16%;
            --card-y: 22%;
            --card-width: 150px;
          }

          .editorial-parallax-base__card:nth-child(10) {
            --card-x: 84%;
            --card-y: 22%;
            --card-width: 152px;
          }

          .editorial-parallax-base__card:nth-child(11) {
            --card-x: 18%;
            --card-y: 82%;
            --card-width: 145px;
          }

          .editorial-parallax-base__card:nth-child(12) {
            --card-x: 82%;
            --card-y: 82%;
            --card-width: 158px;
          }
        }
      `}</style>
      <div className="editorial-parallax-base__stage">
        <div className="editorial-parallax-base__cards" aria-hidden="true">
          {floatingCards.map((card) => (
            <div
              className="editorial-parallax-base__card"
              key={card.src}
              style={card.style}
            >
              <Image
                src={card.src}
                alt={card.alt}
                width={420}
                height={520}
                sizes="(max-width: 760px) 34vw, 240px"
              />
            </div>
          ))}
        </div>
        <div className="editorial-parallax-base__text">
          {messages.map((message, index) => (
            <p
              aria-hidden={index === 0 ? undefined : true}
              className="editorial-parallax-base__message"
              key={message}
            >
              {message}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
