"use client";

import { useEffect, useRef } from "react";

const companies = [
  { name: "HEYGEN", desc: "AI video generation" },
  { name: "IDEOGRAM", desc: "AI image generation" },
  { name: "INSTANT", desc: "AI eCommerce builder" },
  { name: "JITTER", desc: "Motion design" },
  { name: "KAJABI", desc: "Course platform" },
  { name: "KIT (CONVERTKIT)", desc: "Email marketing" },
  { name: "KITTL", desc: "AI graphic design" },
  { name: "LOTTIEFILES", desc: "Animation platform" },
  { name: "LOVABLE", desc: "AI app builder" },
  { name: "LOVART", desc: "AI art generation" },
  { name: "LUMMI", desc: "AI image platform" },
  { name: "MAGICPATH", desc: "AI workflows" },
  { name: "PAGEDECK", desc: "Presentation builder" },
  { name: "PEACHWEB", desc: "Website builder" },
  { name: "READYMAG", desc: "Website builder" },
  { name: "RELUME", desc: "AI wireframing" },
  { name: "REPLIT", desc: "AI coding platform" },
  { name: "REPLO", desc: "Ecommerce builder" },
  { name: "RETOOL", desc: "Internal tools builder" },
  { name: "RIVE", desc: "Interactive animation" },
  { name: "SPLINE", desc: "3D design" },
  { name: "STRIPO", desc: "Email design" },
  { name: "TEMPLATES (UI8)", desc: "UI design platform" },
  { name: "VOICEFLOW", desc: "Voice AI platform" },
] as const;

const marqueeCompanies = [...companies, ...companies];
const bayer = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
];

export default function LuxurySaasEditorial() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !section || !ctx) {
      return;
    }

    let frame = 0;
    let time = 0;
    let width = 0;
    let height = 0;
    const spacing = 4;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const resize = () => {
      const rect = section.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = Math.max(320, rect.width);
      height = Math.max(280, rect.height * 0.6);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += reducedMotion ? 0 : 0.005;

      const driftX = -(time * 15) % spacing;
      const driftY = -(time * 8) % spacing;

      ctx.fillStyle = "#aed2cc";
      ctx.globalAlpha = 1;

      for (let x = -spacing; x < width + spacing; x += spacing) {
        for (let y = -spacing; y < height + spacing; y += spacing) {
          const px = x + driftX;
          const py = y + driftY;
          const normalizedY = py / height;
          const waveOffset =
            Math.sin(px * 0.0015 + time * 0.4) * 0.2 +
            Math.sin(px * 0.003 - time * 0.2) * 0.08;
          const transitionZone = 0.25;
          const adjustedY = (normalizedY + waveOffset - 0.5) / transitionZone;

          if (adjustedY <= 0) continue;

          if (adjustedY >= 1) {
            ctx.fillRect(
              Math.floor(px),
              Math.floor(py),
              spacing + 0.5,
              spacing + 0.5,
            );
            continue;
          }

          const gridX = Math.abs(Math.floor(x / spacing));
          const gridY = Math.abs(Math.floor(y / spacing));
          const threshold = (bayer[gridY % 4][gridX % 4] + 0.5) / 16;

          if (adjustedY > threshold) {
            const pixelSize = spacing * 0.75;
            ctx.fillRect(
              Math.floor(px),
              Math.floor(py),
              pixelSize,
              pixelSize,
            );
          }
        }
      }

      if (!reducedMotion) {
        frame = requestAnimationFrame(render);
      }
    };

    resize();
    render();

    const observer = new ResizeObserver(resize);
    observer.observe(section);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="luxury-editorial"
      aria-label="Human creativity editorial section"
    >
      <canvas
        ref={canvasRef}
        className="luxury-editorial__canvas"
        aria-hidden="true"
      />

      <div className="luxury-editorial__content">
        <div className="luxury-editorial__marquee-container" aria-hidden="true">
          <div className="luxury-editorial__marquee-mask">
            <div className="luxury-editorial__marquee-content">
              {marqueeCompanies.map((company, index) => (
                <div
                  className="luxury-editorial__marquee-item"
                  key={`${company.name}-${index}`}
                >
                  <span className="luxury-editorial__company-name">
                    {company.name}
                  </span>
                  <span className="luxury-editorial__company-desc">
                    {company.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="luxury-editorial__text-area">
          <h2 className="luxury-editorial__title">
            <span className="luxury-editorial__fade-up-line">
              Human creativity keeps evolving.
            </span>
            <br />
            <span className="luxury-editorial__fade-up-line">
              We make sure it leads.
            </span>
          </h2>
          <div className="luxury-editorial__cta-wrapper">
            <a className="luxury-editorial__cta" href="#partner">
              Request partnership
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .luxury-editorial {
          background: #f9f8f6;
          color: #202020;
          height: clamp(650px, 100vh, 900px);
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .luxury-editorial__canvas {
          bottom: 0;
          left: 0;
          pointer-events: none;
          position: absolute;
          width: 100%;
          z-index: 2;
        }

        .luxury-editorial__content {
          display: grid;
          grid-template-columns: minmax(0, 0.45fr) minmax(0, 0.55fr);
          grid-template-rows: minmax(0, 1fr);
          height: 100%;
          min-height: 0;
          overflow: hidden;
          padding: 0 clamp(42px, 5.6vw, 64px);
          position: relative;
          width: 100%;
        }

        .luxury-editorial__marquee-container {
          align-items: center;
          display: flex;
          height: 100%;
          min-height: 0;
          min-width: 0;
          padding-left: clamp(16px, 2.8vw, 32px);
          position: relative;
          z-index: 1;
        }

        .luxury-editorial__marquee-mask {
          height: 85%;
          mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);
          overflow: hidden;
          position: relative;
          width: 100%;
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);
        }

        .luxury-editorial__marquee-content {
          animation: luxury-editorial-scroll-up 80s linear infinite;
          display: flex;
          flex-direction: column;
          gap: 8px;
          transform: translateZ(0);
          will-change: transform;
        }

        .luxury-editorial__marquee-item {
          align-items: center;
          display: flex;
          font-size: 0.9rem;
          gap: 16px;
          justify-content: flex-start;
          letter-spacing: 0.01em;
          line-height: 1.2;
          padding: 4px 0;
        }

        .luxury-editorial__company-name {
          color: #7a7a7a;
          flex: 0 0 170px;
          font-weight: 600;
          text-align: right;
          text-transform: uppercase;
        }

        .luxury-editorial__company-desc {
          color: #999;
          font-weight: 400;
          min-width: 0;
          text-align: left;
          white-space: nowrap;
        }

        .luxury-editorial__text-area {
          align-items: flex-start;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-top: -10vh;
          min-height: 0;
          min-width: 0;
          padding-left: clamp(32px, 5.6vw, 64px);
          position: relative;
          z-index: 3;
        }

        .luxury-editorial__title {
          color: #202020;
          font-family: "Cormorant Garamond", Georgia, "Times New Roman", serif;
          font-size: clamp(48px, 5vw, 56px);
          font-weight: 500;
          letter-spacing: 0;
          line-height: 1.1;
          margin: 0 0 2.5rem;
        }

        .luxury-editorial__fade-up-line {
          animation: luxury-editorial-fade-up-blur 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          display: inline-block;
          filter: blur(8px);
          opacity: 0;
          transform: translateY(20px) translateZ(0);
        }

        .luxury-editorial__fade-up-line:nth-of-type(2) {
          animation-delay: 0.2s;
        }

        .luxury-editorial__cta-wrapper {
          animation: luxury-editorial-fade-in-scale-blur 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
          filter: blur(8px);
          opacity: 0;
          transform: scale(0.96) translateY(10px) translateZ(0);
        }

        .luxury-editorial__cta {
          align-items: center;
          background-color: #202020;
          border-radius: 50px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          color: #fff;
          display: inline-flex;
          font-family: var(--font-sans), Inter, sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          justify-content: center;
          line-height: 1;
          min-height: 48px;
          padding: 0.9rem 2.2rem;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
          white-space: nowrap;
        }

        .luxury-editorial__cta:hover,
        .luxury-editorial__cta:focus-visible {
          background-color: #000;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px) scale(1.02);
        }

        @keyframes luxury-editorial-scroll-up {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-50%);
          }
        }

        @keyframes luxury-editorial-fade-up-blur {
          100% {
            filter: blur(0);
            opacity: 1;
            transform: translateY(0) translateZ(0);
          }
        }

        @keyframes luxury-editorial-fade-in-scale-blur {
          100% {
            filter: blur(0);
            opacity: 1;
            transform: scale(1) translateY(0) translateZ(0);
          }
        }

        @media (min-width: 901px) and (max-width: 1145px) {
          .luxury-editorial {
            height: clamp(620px, 78vw, 820px);
          }

          .luxury-editorial__content {
            padding: 0 clamp(28px, 4vw, 44px);
          }

          .luxury-editorial__marquee-container {
            padding-left: 0;
          }

          .luxury-editorial__company-name {
            flex-basis: 140px;
            font-size: 0.85rem;
          }

          .luxury-editorial__company-desc {
            font-size: 0.85rem;
          }

          .luxury-editorial__text-area {
            padding-left: 2rem;
          }

          .luxury-editorial__title {
            font-size: clamp(42px, 5.1vw, 54px);
          }
        }

        @media (max-width: 900px) {
          .luxury-editorial {
            height: clamp(680px, 150vw, 840px);
          }

          .luxury-editorial__content {
            display: block;
            height: 100%;
            min-height: 0;
            padding: 0 clamp(20px, 6vw, 34px);
          }

          .luxury-editorial__marquee-container {
            height: auto;
            inset: 12px clamp(12px, 4vw, 28px) 330px;
            justify-content: center;
            opacity: 0.92;
            padding-left: 0;
            position: absolute;
          }

          .luxury-editorial__marquee-mask {
            height: 100%;
            margin: 0 auto;
            max-width: 540px;
          }

          .luxury-editorial__marquee-item {
            font-size: clamp(12px, 3.1vw, 14px);
            gap: 12px;
            justify-content: center;
          }

          .luxury-editorial__company-name {
            flex: 0 1 clamp(112px, 34vw, 154px);
          }

          .luxury-editorial__company-desc {
            flex: 0 1 clamp(128px, 39vw, 190px);
            white-space: normal;
          }

          .luxury-editorial__text-area {
            align-items: center;
            bottom: clamp(66px, 12vw, 92px);
            left: clamp(20px, 6vw, 36px);
            margin-top: 0;
            padding-left: 0;
            position: absolute;
            right: clamp(20px, 6vw, 36px);
            text-align: center;
          }

          .luxury-editorial__title {
            font-size: clamp(30px, 8.9vw, 44px);
            line-height: 1.04;
            margin-bottom: 28px;
          }

          .luxury-editorial__cta {
            min-height: 54px;
            padding-left: 32px;
            padding-right: 32px;
          }
        }

        @media (max-width: 420px) {
          .luxury-editorial {
            height: 700px;
          }

          .luxury-editorial__marquee-container {
            bottom: 318px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .luxury-editorial__marquee-content,
          .luxury-editorial__fade-up-line,
          .luxury-editorial__cta-wrapper {
            animation-duration: 1ms;
            animation-iteration-count: 1;
          }
        }
      `}</style>
    </section>
  );
}
