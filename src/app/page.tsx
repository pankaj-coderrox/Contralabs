import Image from "next/image";

import EditorialGridSection from "@/components/EditorialGridSection";
import EcosystemHoverCard from "@/components/EcosystemHoverCard";
import LuxurySaasEditorial from "@/components/LuxurySaasEditorial";
import MobileMegaMenu from "@/components/MobileMegaMenu";
import ReaderBeforeNetworkText from "@/components/ReaderBeforeNetworkText";

type VisualSection = {
  alt: string;
  extension?: "jpeg" | "png";
  height: number;
  name: string;
  priority?: boolean;
  width?: number;
};

const sections: VisualSection[] = [
  {
    name: "01-hero",
    height: 1170,
    alt: "Contra Labs hero with navigation, headline, and classical figure using a laptop",
    priority: true,
  },
  {
    name: "02-taxonomy-intro",
    height: 1900,
    alt: "Creative tools taxonomy and human creativity introduction",
  },
  {
    name: "03-ecosystem-cards",
    height: 3320,
    alt: "Contra Labs ecosystem card grid for creative arena, benchmark, human data, and agents",
  },
  {
    name: "04-methods",
    height: 1450,
    alt: "Building taste into creative AI method list",
  },
  {
    name: "05-reader-art",
    height: 1600,
    alt: "Classical figure reading from a laptop",
  },
  {
    name: "06-spacer-collage",
    height: 2750,
    alt: "Built on real-world creative expertise and collage section",
  },
  {
    name: "07-standard-dark-art",
    height: 1300,
    alt: "The creative class sets the standard artwork",
  },
  {
    name: "08-standard-banner",
    height: 1300,
    alt: "The creative class sets the standard banner",
  },
  {
    name: "training-data-intro",
    height: 901,
    width: 1873,
    alt: "Human taste is the new training data research section",
  },
  {
    name: "laptop-on-desk",
    extension: "jpeg",
    height: 914,
    width: 1600,
    alt: "Two laptops on a desk with hands typing",
  },
  {
    name: "11-footer-artwork",
    height: 354,
    width: 1136,
    alt: "Classical group footer artwork",
  },
];

const ecosystemCards: VisualSection[] = [
  {
    name: "ecosystem-card-creative-arena",
    width: 530,
    height: 650,
    alt: "Creative Arena public evaluations card",
  },
  {
    name: "ecosystem-card-benchmark",
    width: 530,
    height: 650,
    alt: "Human Creativity Benchmark research and insights card",
  },
  {
    name: "ecosystem-card-human-data",
    width: 530,
    height: 650,
    alt: "Creative Human Data private evaluations card",
  },
  {
    name: "ecosystem-card-co-agents",
    width: 530,
    height: 650,
    alt: "Co-Agents creative AI agents card",
  },
];

const ecosystemHoverCards = {
  "ecosystem-card-creative-arena": {
    eyebrow: "Public Evaluations",
    title: "Creative Arena",
    description:
      "AI models go head to head on creative output. Real creatives judge the results. The best model wins. Human taste, applied.",
    href: "#research",
  },
  "ecosystem-card-benchmark": {
    eyebrow: "Research & Insights",
    title: "Human Creativity Benchmark",
    description:
      "The industry standard for measuring creative AI. Built on the judgments of 1.5M+ creatives, HCB answers the only question that matters: is this actually good?",
    href: "#research",
  },
  "ecosystem-card-human-data": {
    eyebrow: "Private Evaluations",
    title: "Creative Human Data",
    description:
      "Preference datasets built by the people who set creative standards. Top creatives label, rank, and evaluate AI outputs. This is the data that teaches AI what quality looks like.",
    href: "#research",
  },
  "ecosystem-card-co-agents": {
    eyebrow: "Creative AI Agents",
    title: "Co—Agents",
    description:
      "Creative AI Co—Agents that collaboratively amplify the workflows of expert creatives. Private beta.",
    href: "#research",
    label: "Coming Soon",
  },
};

const ecosystemCardAnchors: Record<string, string> = {
  "ecosystem-card-creative-arena": "creative-arena",
  "ecosystem-card-benchmark": "benchmark",
  "ecosystem-card-human-data": "human-data",
};

const methodItems = [
  {
    title: "Expert preference modeling",
    body: "We capture and analyze high-signal human preferences from vetted creative professionals.",
  },
  {
    title: "Creative scoring systems",
    body: "Qualitative judgment is translated into structured scoring frameworks aligned with real-world standards.",
  },
  {
    title: "Blind comparative reviews",
    body: "Models are evaluated head-to-head through structured, bias-controlled comparison protocols.",
  },
  {
    title: "Multimodal AI evals",
    body: "We assess image, video, design, and interactive model outputs where traditional metrics fail to capture taste.",
  },
];

const networkMetrics = [
  {
    value: "1.5M+",
    label: "independent creatives",
  },
  {
    value: "400+",
    label: "different creative skills",
  },
  {
    value: "$250M+",
    label: "earned by creatives",
  },
  {
    value: "26x",
    label: "higher project earnings by creatives on Contra",
  },
  {
    value: "50+",
    label: "models evaluated",
  },
];

function VisualSectionImage({ section }: { section: VisualSection }) {
  if (section.name === "01-hero") {
    return (
      <section
        className="visual-section hero-image-section"
        aria-label={section.alt}
      >
        <style>{`
          .hero-video-copy {
            color: #252321;
            inset: 0;
            pointer-events: none;
            position: absolute;
            z-index: 2;
          }

          .hero-video-copy a {
            pointer-events: auto;
          }

          .hero-video-copy__nav {
            align-items: flex-start;
            display: flex;
            gap: clamp(34px, 4.4vw, 52px);
            left: clamp(38px, 4.4vw, 42px);
            position: absolute;
            top: 0;
          }

          .hero-video-copy__brand {
            align-items: flex-start;
            color: #252321;
            display: inline-flex;
            font-size: clamp(21px, 2.25vw, 28px);
            font-weight: 800;
            gap: clamp(18px, 2vw, 24px);
            line-height: 1;
            text-decoration: none;
          }

          .hero-video-copy__mark {
            background: #83aaa4;
            color: #f7f4ee;
            display: grid;
            height: clamp(70px, 8vw, 98px);
            place-items: start center;
            padding-top: clamp(22px, 2.4vw, 31px);
            position: relative;
            width: clamp(37px, 4.35vw, 50px);
          }

          .hero-video-copy__mark::after {
            border-left: clamp(18.5px, 2.175vw, 25px) solid transparent;
            border-right: clamp(18.5px, 2.175vw, 25px) solid transparent;
            border-top: clamp(14px, 1.65vw, 19px) solid #83aaa4;
            bottom: calc(clamp(14px, 1.65vw, 19px) * -1);
            content: "";
            left: 0;
            position: absolute;
          }

          .hero-video-copy__spark {
            display: block;
            height: clamp(17px, 1.9vw, 22px);
            position: relative;
            width: clamp(17px, 1.9vw, 22px);
          }

          .hero-video-copy__spark::before,
          .hero-video-copy__spark::after {
            content: "";
            left: 50%;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
          }

          .hero-video-copy__spark::before {
            background: currentColor;
            clip-path: polygon(50% 0, 63% 37%, 100% 50%, 63% 63%, 50% 100%, 37% 63%, 0 50%, 37% 37%);
            height: 100%;
            width: 100%;
          }

          .hero-video-copy__spark::after {
            background: #83aaa4;
            clip-path: polygon(50% 18%, 58% 42%, 82% 50%, 58% 58%, 50% 82%, 42% 58%, 18% 50%, 42% 42%);
            height: 66%;
            width: 66%;
          }

          .hero-video-copy__brand-text {
            padding-top: clamp(32px, 3.4vw, 39px);
            white-space: nowrap;
          }

          .hero-video-copy__brand-text span {
            font-size: 0.74em;
            font-weight: 700;
            margin-left: 0.18em;
          }

          .hero-video-copy__links {
            align-items: center;
            display: flex;
            gap: clamp(28px, 3vw, 42px);
            padding-top: clamp(34px, 3.6vw, 43px);
          }

          .hero-video-copy__links a {
            color: #252321;
            font-size: clamp(14px, 1.42vw, 16px);
            font-weight: 500;
            line-height: 1;
            text-decoration: none;
            white-space: nowrap;
          }

          .hero-video-copy__content {
            left: clamp(76px, 6.6vw, 78px);
            position: absolute;
            top: clamp(150px, 17.2vw, 196px);
            width: min(58vw, 680px);
          }

          .hero-video-copy__content p {
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(39px, 5.3vw, 61px);
            font-weight: 400;
            letter-spacing: 0;
            line-height: 0.98;
            margin: 0;
          }

          .hero-video-copy__actions {
            display: flex;
            gap: clamp(28px, 3vw, 35px);
            margin-top: clamp(28px, 3.2vw, 38px);
          }

          .hero-video-copy__button {
            align-items: center;
            border-radius: 999px;
            display: inline-flex;
            font-size: clamp(16px, 1.7vw, 20px);
            font-weight: 600;
            justify-content: center;
            line-height: 1;
            min-height: clamp(58px, 5.9vw, 64px);
            padding: 0 clamp(28px, 3vw, 32px);
            text-decoration: none;
            white-space: nowrap;
          }

          .hero-video-copy__button--primary {
            background: #252321;
            color: #f7f4ee;
            min-width: clamp(220px, 21.5vw, 246px);
          }

          .hero-video-copy__button--secondary {
            background: rgba(247, 244, 238, 0.64);
            border: 1px solid rgba(37, 35, 33, 0.16);
            color: #252321;
            min-width: clamp(140px, 12.8vw, 146px);
          }

          @media (min-width: 901px) and (max-width: 1145px) {
            .hero-video-copy__nav {
              gap: clamp(26px, 3.4vw, 39px);
              left: clamp(28px, 4vw, 46px);
            }

            .hero-video-copy__brand {
              font-size: clamp(20px, 2.4vw, 26px);
              gap: clamp(14px, 1.8vw, 20px);
            }

            .hero-video-copy__links {
              gap: clamp(22px, 3vw, 34px);
            }

            .hero-video-copy__links a {
              font-size: clamp(13px, 1.5vw, 15px);
            }

            .hero-video-copy__content {
              left: clamp(48px, 6.6vw, 76px);
              top: clamp(138px, 17vw, 176px);
              width: min(60vw, 610px);
            }

            .hero-video-copy__content p {
              font-size: clamp(40px, 5.15vw, 56px);
            }

            .hero-video-copy__button {
              font-size: clamp(14px, 1.7vw, 18px);
              min-height: clamp(50px, 5.8vw, 60px);
            }

            .hero-video-copy__button--primary {
              min-width: clamp(190px, 21vw, 226px);
            }
          }

          @media (max-width: 900px) {
            .hero-video-copy__nav {
              gap: 14px;
              left: clamp(18px, 6vw, 38px);
            }

            .hero-video-copy__brand {
              font-size: clamp(17px, 5.2vw, 25px);
              gap: 12px;
            }

            .hero-video-copy__mark {
              height: 68px;
              padding-top: 18px;
              width: 36px;
            }

            .hero-video-copy__mark::after {
              border-left-width: 18px;
              border-right-width: 18px;
              border-top-width: 14px;
              bottom: -14px;
            }

            .hero-video-copy__spark {
              height: 18px;
              width: 18px;
            }

            .hero-video-copy__brand-text {
              padding-top: 22px;
            }

            .hero-video-copy__links {
              display: none;
            }

            .hero-video-copy__content {
              left: clamp(26px, 7.2vw, 42px);
              top: clamp(106px, 23vw, 142px);
              width: min(78%, 440px);
            }

            .hero-video-copy__content p {
              font-size: clamp(29px, 7.8vw, 42px);
              line-height: 0.98;
            }

            .hero-video-copy__actions {
              gap: 14px;
              margin-top: 22px;
            }

            .hero-video-copy__button {
              font-size: clamp(12px, 2.8vw, 14px);
              min-height: 40px;
              padding: 0 18px;
            }

            .hero-video-copy__button--primary {
              min-width: 150px;
            }

            .hero-video-copy__button--secondary {
              min-width: 106px;
            }
          }
        `}</style>
        <video
          aria-label={section.alt}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          style={{
            display: "block",
            height: "100%",
            objectFit: "cover",
            transform: "translate3d(0, 0, 0)",
            width: "100%",
          }}
        >
          <source src="/sections/hero-cinematic.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-copy" aria-hidden="false">
          <header className="hero-video-copy__nav">
            <a className="hero-video-copy__brand" href="https://contralabs.com/">
              <span className="hero-video-copy__mark" aria-hidden="true">
                <span className="hero-video-copy__spark" />
              </span>
              <span className="hero-video-copy__brand-text">
                contra <span>LABS</span>
              </span>
            </a>
            <nav
              className="hero-video-copy__links"
              aria-label="Primary navigation"
            >
              <a href="https://contralabs.com/creative-human-data">
                Creative Human Data
              </a>
              <a href="https://contralabs.com/research">Creative Arena</a>
              <a href="https://contralabs.com/jobs">Jobs</a>
            </nav>
          </header>
          <div className="hero-video-copy__content">
            <p>
              A frontier human data and evaluation lab making AI better for
              creativity.
            </p>
            <div className="hero-video-copy__actions">
              <a
                className="hero-video-copy__button hero-video-copy__button--primary"
                href="https://calendly.com/contra-labs/partnership"
              >
                Request partnership
              </a>
              <a
                className="hero-video-copy__button hero-video-copy__button--secondary"
                href="https://contralabs.com/research"
              >
                Research
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (section.name === "03-ecosystem-after-methods") {
    return (
      <section
        className="visual-section ecosystem-after-art"
        aria-label={section.alt}
      >
        <style>{`
          .ecosystem-after-art {
            aspect-ratio: 1145 / 1042;
            background: #f7f4ee;
          }

          .ecosystem-after-art img {
            height: 100%;
            object-fit: cover;
            object-position: center top;
            width: 100%;
          }
        `}</style>
        <Image
          src={`/sections/${section.name}.${section.extension ?? "png"}`}
          alt={section.alt}
          width={section.width ?? 1145}
          height={section.height}
          sizes={`(max-width: ${section.width ?? 1145}px) 100vw, ${section.width ?? 1145}px`}
        />
      </section>
    );
  }

  return (
    <section
      className={`visual-section ${
        section.name === "01-hero" ? "hero-image-section" : ""
      } ${
        section.name === "05-reader-before-network"
          ? "reader-before-network"
          : ""
      } ${
        section.name === "09-research-execution"
          ? "research-execution-footer"
          : ""
      } ${
        section.name === "laptop-on-desk" ? "laptop-on-desk-section" : ""
      }`}
      aria-label={section.alt}
    >
      {section.name === "05-reader-before-network" ? (
        <style>{`
          .reader-before-network {
            background: #fbfaf6;
            display: grid;
            overflow: visible;
            position: relative;
          }

          .reader-before-network > img {
            grid-area: 1 / 1;
          }

          .reader-before-network::after {
            background: #fbfaf6;
            bottom: 0;
            content: "";
            height: clamp(20px, 3.6vw, 54px);
            left: 0;
            pointer-events: none;
            position: absolute;
            right: 0;
            z-index: 1;
          }

          .reader-before-network__headline {
            color: #252321;
            display: grid;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(28px, 3.6vw, 46px);
            font-weight: 400;
            inset: 0;
            letter-spacing: 0;
            line-height: 0.96;
            margin: 0;
            padding: 0 24px;
            place-items: center;
            pointer-events: none;
            position: absolute;
            text-align: center;
            transform: translateY(clamp(-32px, -1.8vw, -16px)) scale(1);
            transition:
              opacity 360ms cubic-bezier(0.16, 1, 0.3, 1),
              transform 520ms cubic-bezier(0.16, 1, 0.3, 1);
            width: 100%;
            will-change: opacity, transform;
            z-index: 2;
          }

          .reader-before-network__headline.is-hidden {
            opacity: 0;
            transform: translateY(clamp(-32px, -1.8vw, -16px)) scale(0.98);
          }

          .reader-before-network__headline.is-visible {
            opacity: 1;
          }

          .reader-before-network__headline-text {
            display: block;
            max-width: 820px;
          }

          .reader-before-network__headline-title {
            display: block;
          }

          .reader-before-network__headline-body {
            animation: readerBodyRise 620ms cubic-bezier(0.16, 1, 0.3, 1) both;
            display: block;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(18px, 1.75vw, 25px);
            font-weight: 600;
            line-height: 1.22;
            margin: clamp(14px, 1.8vw, 24px) auto 0;
            max-width: 700px;
            transform: translateY(clamp(70px, 6.8vw, 100px));
          }

          @keyframes readerBodyRise {
            from {
              opacity: 0;
              transform: translateY(28px);
            }

            to {
              opacity: 1;
              transform: translateY(clamp(70px, 6.8vw, 100px));
            }
          }

          .reader-before-network__headline--sentence {
            font-size: clamp(18px, 2.05vw, 28px);
            line-height: 1.12;
          }

          .reader-before-network__headline--market {
            transform: translateY(clamp(212px, 17.6vw, 272px)) scale(1);
          }

          .reader-before-network__headline--market.is-hidden {
            transform: translateY(clamp(212px, 17.6vw, 272px)) scale(0.98);
          }

          @media (max-width: 700px) {
            .reader-before-network__headline {
              font-size: clamp(24px, 7vw, 32px);
              line-height: 0.98;
            }

            .reader-before-network__headline--sentence {
              font-size: clamp(17px, 4.8vw, 24px);
              line-height: 1.15;
            }

            .reader-before-network__headline-text {
              max-width: 340px;
            }

            .reader-before-network__headline-body {
              font-size: clamp(16px, 4.6vw, 20px);
              margin-top: 14px;
              max-width: 320px;
            }

            .reader-before-network__headline--market {
              transform: translateY(clamp(168px, 42vw, 224px)) scale(1);
            }

            .reader-before-network__headline--market.is-hidden {
              transform: translateY(clamp(168px, 42vw, 224px)) scale(0.98);
            }
          }
        `}</style>
      ) : null}
      {section.name === "09-research-execution" ? (
        <style>{`
          .research-execution-footer {
            position: relative;
          }

          .research-execution-footer__links {
            align-items: center;
            background: #fbfaf6;
            bottom: 0;
            display: flex;
            gap: clamp(18px, 3vw, 42px);
            justify-content: space-between;
            left: 0;
            min-height: clamp(46px, 5.6vw, 64px);
            padding: 0 clamp(60px, 10vw, 118px);
            position: absolute;
            right: 0;
            z-index: 2;
          }

          .research-execution-footer__brand-panel {
            align-items: center;
            background: #fbfaf6;
            color: #000;
            display: flex;
            flex-direction: column;
            left: 50%;
            min-width: min(430px, 54%);
            padding: clamp(10px, 1.6vw, 18px) clamp(20px, 3.4vw, 38px);
            position: absolute;
            text-align: center;
            top: 50.5%;
            transform: translate(-50%, -50%);
            z-index: 2;
          }

          .research-execution-footer__brand {
            color: #000;
            display: inline-flex;
            align-items: baseline;
            gap: 0.2em;
            line-height: 0.88;
            text-decoration: none;
            white-space: nowrap;
          }

          .research-execution-footer__brand-strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(44px, 5.4vw, 64px);
            font-weight: 700;
            letter-spacing: -0.02em;
          }

          .research-execution-footer__brand-light {
            font-size: clamp(31px, 3.7vw, 44px);
            font-weight: 700;
            letter-spacing: 0;
          }

          .research-execution-footer__tagline {
            color: #000;
            font-size: clamp(15px, 1.7vw, 21px);
            font-weight: 500;
            line-height: 1.28;
            margin: clamp(24px, 3.2vw, 34px) 0 0;
            max-width: 360px;
          }

          .research-execution-footer__socials {
            align-items: center;
            background: #fbfaf6;
            display: flex;
            gap: clamp(18px, 2.5vw, 28px);
            justify-content: center;
            margin-top: clamp(50px, 5.6vw, 68px);
            padding: 2px 8px;
          }

          .research-execution-footer__socials a {
            align-items: center;
            color: #000;
            display: inline-flex;
            font-size: 0;
            height: clamp(18px, 2.2vw, 24px);
            justify-content: center;
            line-height: 1;
            text-decoration: none;
            width: clamp(18px, 2.2vw, 24px);
          }

          .research-execution-footer__socials a:hover,
          .research-execution-footer__socials a:focus-visible {
            color: #000;
          }

          .research-execution-footer__social-icon {
            display: block;
            height: 100%;
            width: 100%;
          }

          .research-execution-footer__links a {
            color: #000;
            font-size: clamp(12px, 1.2vw, 14px);
            font-weight: 500;
            line-height: 1;
            text-decoration: none;
            white-space: nowrap;
          }

          @media (max-width: 700px) {
            .research-execution-footer {
              background: #fbfaf6;
              min-height: 540px;
            }

            .research-execution-footer > img {
              height: 100%;
              object-fit: cover;
              object-position: center top;
              width: 100%;
            }

            .research-execution-footer__brand-panel {
              min-width: min(360px, 84%);
              padding: 12px 18px;
              top: 44%;
            }

            .research-execution-footer__brand-strong {
              font-size: clamp(38px, 12vw, 56px);
            }

            .research-execution-footer__brand-light {
              font-size: clamp(27px, 8.5vw, 39px);
            }

            .research-execution-footer__tagline {
              font-size: clamp(14px, 4vw, 18px);
              margin-top: 22px;
              max-width: 300px;
            }

            .research-execution-footer__socials {
              gap: 20px;
              margin-top: 34px;
            }

            .research-execution-footer__socials a {
              height: clamp(19px, 5.4vw, 26px);
              width: clamp(19px, 5.4vw, 26px);
            }

            .research-execution-footer__links {
              flex-direction: column;
              gap: 12px;
              justify-content: center;
              min-height: 132px;
              padding: 0 clamp(20px, 6vw, 34px);
            }

            .research-execution-footer__links a {
              font-size: clamp(12px, 2.8vw, 14px);
            }
          }
        `}</style>
      ) : null}
      <Image
        src={`/sections/${section.name}.${section.extension ?? "png"}`}
        alt={section.alt}
        width={section.width ?? 1145}
        height={section.height}
        priority={section.priority}
        sizes={`(max-width: ${section.width ?? 1145}px) 100vw, ${section.width ?? 1145}px`}
      />
      {section.name === "05-reader-before-network" ? (
        <ReaderBeforeNetworkText />
      ) : null}
      {section.name === "09-research-execution" ? (
        <div className="research-execution-footer__brand-panel">
          <a
            className="research-execution-footer__brand"
            href="https://contralabs.com/"
          >
            <span className="research-execution-footer__brand-strong">
              contra
            </span>
            <span className="research-execution-footer__brand-light">LABS</span>
          </a>
          <p className="research-execution-footer__tagline">
            The world's leading independent
            <br />
            human data &amp; creative evaluation lab
          </p>
          <nav
            className="research-execution-footer__socials"
            aria-label="Social links"
          >
            <a href="https://x.com/contra" aria-label="X">
              <svg
                className="research-execution-footer__social-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M4 4L20 20M20 4L4 20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </svg>
            </a>
            <a href="https://www.youtube.com/@contra" aria-label="YouTube">
              <svg
                className="research-execution-footer__social-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M21.4 7.1a3 3 0 0 0-2.1-2.1C17.5 4.5 12 4.5 12 4.5s-5.5 0-7.3.5a3 3 0 0 0-2.1 2.1A31.7 31.7 0 0 0 2.1 12a31.7 31.7 0 0 0 .5 4.9 3 3 0 0 0 2.1 2.1c1.8.5 7.3.5 7.3.5s5.5 0 7.3-.5a3 3 0 0 0 2.1-2.1 31.7 31.7 0 0 0 .5-4.9 31.7 31.7 0 0 0-.5-4.9Z"
                  fill="currentColor"
                />
                <path d="M10 15.4V8.6L15.8 12 10 15.4Z" fill="#fbfaf6" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/contra"
              aria-label="LinkedIn"
            >
              <svg
                className="research-execution-footer__social-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M20.5 3h-17A.5.5 0 0 0 3 3.5v17a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5ZM8.4 18.3H5.7V9.7h2.7v8.6ZM7 8.5a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.3 9.8h-2.7v-4.2c0-1-.02-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2v4.3H9.9V9.7h2.6v1.2h.04c.36-.68 1.24-1.4 2.55-1.4 2.73 0 3.23 1.8 3.23 4.13v4.67Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/contra"
              aria-label="Instagram"
            >
              <svg
                className="research-execution-footer__social-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3.6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="16.9" cy="7.1" r="1.1" fill="currentColor" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@contra" aria-label="TikTok">
              <svg
                className="research-execution-footer__social-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M15.7 3c.28 2.35 1.62 3.75 3.93 3.9v3.03a7.45 7.45 0 0 1-3.93-1.2v5.76c0 2.92-1.76 5.51-5.25 5.51-3.24 0-5.17-2.38-5.17-5.01 0-2.88 2.34-5.16 5.28-5.16.33 0 .66.03.97.1v3.16a3.64 3.64 0 0 0-1.05-.15c-1.42 0-2.25.92-2.25 2.02 0 1.15.84 2.01 2.09 2.01 1.38 0 2.12-.82 2.12-2.47V3h3.26Z"
                  fill="currentColor"
                />
              </svg>
              ♪
            </a>
            <a
              className="research-execution-footer__social--pinterest"
              href="https://www.pinterest.com/contra"
              aria-label="Pinterest"
            >
              <svg
                className="research-execution-footer__social-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12.2 2.8c-5.22 0-7.87 3.74-7.87 6.85 0 1.9.72 3.58 2.26 4.2.25.1.48 0 .55-.28.05-.19.17-.68.22-.88.07-.28.04-.38-.16-.62-.44-.52-.72-1.2-.72-2.15 0-2.78 2.08-5.28 5.42-5.28 2.96 0 4.58 1.8 4.58 4.22 0 3.17-1.4 5.85-3.49 5.85-1.15 0-2.01-.95-1.73-2.12.33-1.4.98-2.92.98-3.93 0-.91-.49-1.67-1.5-1.67-1.19 0-2.14 1.23-2.14 2.88 0 1.05.35 1.76.35 1.76s-1.21 5.13-1.42 6.03c-.42 1.79-.06 3.98-.03 4.2.02.13.19.16.27.06.11-.15 1.53-1.9 2.01-3.65.14-.5.79-3.08.79-3.08.39.74 1.53 1.39 2.75 1.39 3.61 0 6.06-3.29 6.06-7.69 0-3.33-2.82-6.43-7.16-6.43Z"
                  fill="currentColor"
                />
              </svg>
              p
            </a>
          </nav>
        </div>
      ) : null}
      {section.name === "09-research-execution" ? (
        <nav
          className="research-execution-footer__links"
          aria-label="Footer navigation"
        >
          <a href="https://contralabs.com/contact">Get In Touch</a>
          <a href="https://contralabs.com/creative-human-data">
            Creative Human Data
          </a>
          <a href="https://contralabs.com/research">Creative Arena</a>
          <a href="https://contralabs.com/jobs">Jobs</a>
        </nav>
      ) : null}
    </section>
  );
}

function StandardDarkArtBlock({ section }: { section: VisualSection }) {
  return (
    <section
      className="visual-section standard-dark-art"
      aria-label={section.alt}
    >
      <style>{`
        .standard-dark-art {
          aspect-ratio: 1145 / 1300;
          position: relative;
        }

        .standard-dark-art video {
          display: block;
          height: 100%;
          object-fit: cover;
          object-position: center;
          width: 100%;
        }

        .standard-dark-art__button-mask {
          background: radial-gradient(
            ellipse at left,
            rgba(13, 11, 9, 0.88) 0%,
            rgba(13, 11, 9, 0.72) 56%,
            rgba(13, 11, 9, 0) 100%
          );
          height: clamp(48px, 7vw, 80px);
          left: clamp(20px, 4.4vw, 50px);
          position: absolute;
          top: clamp(20px, 4.4vw, 58px);
          width: clamp(160px, 22vw, 280px);
          z-index: 1;
        }

        .standard-dark-art__content {
          left: clamp(24px, 5.2vw, 70px);
          position: absolute;
          top: clamp(20px, 4vw, 54px);
          z-index: 2;
        }

        .standard-dark-art__title {
          color: #fffaf3;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(28px, 4.8vw, 58px);
          font-weight: 400;
          letter-spacing: 0;
          line-height: 0.98;
          margin: 0;
          max-width: min(76vw, 650px);
          text-shadow: 0 2px 18px rgba(0, 0, 0, 0.28);
        }

        .standard-dark-art__button {
          align-items: center;
          background: #fffaf3;
          border-radius: 999px;
          color: #252321;
          display: inline-flex;
          font-size: clamp(13px, 1.5vw, 16px);
          font-weight: 600;
          justify-content: center;
          line-height: 1;
          margin-top: clamp(14px, 2vw, 24px);
          min-height: clamp(38px, 4.6vw, 52px);
          padding: 0 clamp(18px, 2.4vw, 30px);
          text-decoration: none;
        }

        @media (min-width: 901px) and (max-width: 1145px) {
          .standard-dark-art__title {
            font-size: clamp(42px, 5vw, 56px);
            max-width: 620px;
          }

          .standard-dark-art__button {
            min-height: clamp(44px, 4.8vw, 52px);
          }
        }

        @media (max-width: 900px) {
          .standard-dark-art__button-mask {
            height: 46px;
            left: 20px;
            top: 22px;
            width: 160px;
          }

          .standard-dark-art__content {
            left: 24px;
            top: 18px;
          }

          .standard-dark-art__title {
            font-size: clamp(24px, 6.6vw, 30px);
            line-height: 0.98;
            max-width: 370px;
          }

          .standard-dark-art__button {
            font-size: 12px;
            margin-top: 12px;
            min-height: 34px;
            padding: 0 18px;
          }
        }
      `}</style>
      <span className="standard-dark-art__button-mask" aria-hidden="true" />
      <div className="standard-dark-art__content">
        <h2 className="standard-dark-art__title">
          The creative class sets the standard.
        </h2>
        <a className="standard-dark-art__button" href="#partner">
          Request partnership
        </a>
      </div>
      <video
        aria-label={section.alt}
        autoPlay
        loop
        muted
        playsInline
        poster={`/sections/${section.name}.png`}
        preload="metadata"
      >
        <source src="/sections/standard-dark-art-video.mp4" type="video/mp4" />
      </video>
    </section>
  );
}

function MethodsTextBlock() {
  return (
    <section className="methods-text" aria-label="Building taste into creative AI">
      <style>{`
        .methods-text {
          background: #f7f4ee;
          color: #252321;
        }

        .methods-text__heading {
          padding: 96px 50px 48px;
        }

        .methods-text__heading h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 42px;
          font-weight: 400;
          letter-spacing: 0;
          line-height: 1.04;
          margin: 0 0 18px;
        }

        .methods-text__heading p {
          font-size: 17px;
          line-height: 1.28;
          margin: 0;
          max-width: 1040px;
        }

        .methods-text__list {
          border-top: 1px solid #c8e2dd;
        }

        .methods-text__item {
          border-bottom: 1px solid #c8e2dd;
          padding: 48px 50px;
        }

        .methods-text__item h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 28px;
          font-weight: 400;
          letter-spacing: 0;
          line-height: 1.1;
          margin: 0 0 18px;
        }

        .methods-text__item p {
          font-size: 15px;
          line-height: 1.38;
          margin: 0;
          max-width: 960px;
        }

        @media (min-width: 901px) and (max-width: 1145px) {
          .methods-text__heading {
            padding: clamp(72px, 8vw, 92px) clamp(34px, 4.8vw, 50px) clamp(36px, 4.6vw, 48px);
          }

          .methods-text__heading h2 {
            font-size: clamp(36px, 4.1vw, 42px);
          }

          .methods-text__item {
            padding: clamp(38px, 4.6vw, 48px) clamp(34px, 4.8vw, 50px);
          }
        }

        @media (max-width: 900px) {
          .methods-text__heading {
            padding: 58px 18px 28px;
          }

          .methods-text__heading h2 {
            font-size: clamp(25px, 6.6vw, 32px);
            line-height: 1.08;
            margin-bottom: 12px;
          }

          .methods-text__heading p {
            font-size: 11px;
            line-height: 1.28;
          }

          .methods-text__item {
            padding: 27px 18px;
          }

          .methods-text__item h3 {
            font-size: 18px;
            line-height: 1.12;
            margin-bottom: 12px;
          }

          .methods-text__item p {
            font-size: 10px;
            line-height: 1.35;
          }
        }
      `}</style>
      <div className="methods-text__heading">
        <h2>Building taste into creative AI</h2>
        <p>
          Contra Labs brings together private evaluations, public comparisons,
          and research outputs under one unified human evaluation framework.
        </p>
      </div>
      <div className="methods-text__list">
        {methodItems.map((item) => (
          <article className="methods-text__item" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function NetworkMetricsBlock() {
  return (
    <section className="network-section" aria-label="The Network of Human Taste">
      <style>{`
        .network-section {
          background: #f7f4ee;
          color: #252321;
          padding: 92px 70px 150px;
        }

        .network-section__layout {
          display: grid;
          gap: 60px;
        }

        .network-section__intro {
          align-items: end;
          display: grid;
          gap: 8px;
          grid-template-columns: 1fr 1fr;
        }

        .network-section__title {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(72px, 9.2vw, 116px);
          font-weight: 400;
          letter-spacing: 0;
          line-height: 0.94;
          margin: 0;
          max-width: 520px;
        }

        .network-section__art {
          align-self: start;
          overflow: hidden;
        }

        .network-section__art video {
          aspect-ratio: 530 / 462;
          display: block;
          height: auto;
          object-fit: cover;
          object-position: center;
          width: 100%;
        }

        .network-section__metrics {
          display: grid;
          gap: 8px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .network-section__metric,
        .network-section__cta {
          background: #c8e2dd;
          border-radius: 8px;
        }

        .network-section__metric {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 250px;
          padding: 26px;
        }

        .network-section__metric strong {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(31px, 3.2vw, 43px);
          font-weight: 400;
          letter-spacing: 0;
          line-height: 1;
        }

        .network-section__metric span {
          font-size: 12px;
          line-height: 1.18;
        }

        .network-section__metric:nth-child(3) {
          grid-column: 2;
        }

        .network-section__metric:nth-child(4) {
          grid-column: 1;
        }

        .network-section__metric:nth-child(5) {
          grid-column: 2;
        }

        .network-section__cta {
          background: #9bb7b2;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 250px;
          padding: 26px;
        }

        .network-section__cta h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(25px, 2.8vw, 34px);
          font-weight: 400;
          letter-spacing: 0;
          line-height: 1.03;
          margin: 0;
          max-width: 480px;
        }

        .network-section__cta a {
          align-items: center;
          align-self: flex-start;
          background: #f7f4ee;
          border-radius: 999px;
          color: #252321;
          display: inline-flex;
          font-size: 15px;
          font-weight: 600;
          justify-content: center;
          min-height: 54px;
          padding: 0 28px;
          text-decoration: none;
        }

        @media (min-width: 901px) and (max-width: 1145px) {
          .network-section {
            padding: clamp(70px, 8vw, 92px) clamp(42px, 5.2vw, 62px) clamp(112px, 11vw, 140px);
          }

          .network-section__layout {
            gap: clamp(44px, 5vw, 58px);
          }

          .network-section__intro {
            gap: clamp(14px, 2vw, 24px);
          }

          .network-section__title {
            font-size: clamp(68px, 8.6vw, 96px);
          }

          .network-section__metric,
          .network-section__cta {
            min-height: clamp(218px, 23vw, 250px);
            padding: clamp(22px, 2.5vw, 26px);
          }
        }

        @media (max-width: 900px) {
          .network-section {
            padding: 72px 28px 118px;
          }

          .network-section__intro {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 900px) {
          .network-section {
            padding: 54px 16px 72px;
          }

          .network-section__layout {
            gap: 36px;
          }

          .network-section__intro {
            grid-template-columns: 1fr;
          }

          .network-section__title {
            font-size: clamp(48px, 16vw, 70px);
            max-width: 330px;
          }

          .network-section__art {
            margin-top: 12px;
          }

          .network-section__metrics {
            grid-template-columns: 1fr;
          }

          .network-section__metric:nth-child(3),
          .network-section__metric:nth-child(4),
          .network-section__metric:nth-child(5) {
            grid-column: auto;
          }

          .network-section__metric {
            min-height: 220px;
            padding: 22px;
          }

          .network-section__metric strong {
            font-size: clamp(29px, 8.2vw, 39px);
          }

          .network-section__metric span {
            font-size: 12px;
          }

          .network-section__cta {
            grid-column: auto;
            min-height: 220px;
            padding: 22px;
          }

          .network-section__cta h3 {
            font-size: clamp(24px, 7.2vw, 32px);
          }
        }
      `}</style>
      <div className="network-section__layout">
        <div className="network-section__intro">
          <h2 className="network-section__title">
            The
            <br />
            Network
            <br />
            of Human
            <br />
            Taste
          </h2>
          <div className="network-section__art">
            <video
              aria-label="Creative network members reviewing with mobile devices"
              autoPlay
              loop
              muted
              playsInline
              poster="/sections/network-taste-art.png"
              preload="metadata"
            >
              <source src="/sections/network-taste-art-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="network-section__metrics">
          {networkMetrics.map((metric) => (
            <article className="network-section__metric" key={metric.value}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
          <article className="network-section__cta">
            <h3>Work with the industry&apos;s top creative minds</h3>
            <a href="#partner">Request partnership</a>
          </article>
        </div>
      </div>
    </section>
  );
}

function ResponsiveResearchBlock({ section }: { section: VisualSection }) {
  return (
    <>
      <style>{`
        .research-desktop,
        .research-mobile {
          margin-top: 18px;
        }

        .research-desktop {
          position: relative;
        }

        .research-mobile {
          display: none;
        }

        @media (max-width: 900px) {
          .research-desktop {
            display: none;
          }

          .research-mobile {
            background: #f7f4ee;
            display: block;
            margin-top: 0;
          }

          .research-mobile__text {
            color: #252321;
            padding: 44px 22px 48px;
            text-align: left;
          }

          .research-mobile__text h2 {
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(28px, 8.4vw, 38px);
            font-weight: 400;
            letter-spacing: 0;
            line-height: 1.02;
            margin: 0 0 16px;
          }

          .research-mobile__text p {
            font-size: 16px;
            line-height: 1.2;
            margin: 0;
          }
        }
      `}</style>
      <div className="research-desktop">
        <VisualSectionImage section={section} />
      </div>
      <section className="research-mobile" aria-label={section.alt}>
        <VisualSectionImage
          section={{
            name: "08-leading-research-replacement",
            width: 677,
            height: 610,
            alt: "Leading next-gen creative AI research artwork",
          }}
        />
        <div className="research-mobile__text">
          <h2>
            Human taste is the new
            <br />
            training data.
          </h2>
          <p>
            Creative AI isn&apos;t good enough yet. Human creativity keeps
            evolving. We&apos;re here to make sure it leads.
          </p>
        </div>
        <VisualSectionImage
          section={{
            name: "08-execution-mobile-art",
            width: 1145,
            height: 784,
            alt: "Execution is free. Now, judgment is everything.",
          }}
        />
      </section>
    </>
  );
}

function TrainingDataIntroSection() {
  return (
    <section
      className="training-data-intro"
      aria-label="Human taste is the new training data"
    >
      <style>{`
        .training-data-intro {
          background: #f7f4ee;
          color: #252321;
          padding: clamp(78px, 8.4vw, 118px) clamp(46px, 8.2vw, 94px)
            clamp(82px, 9vw, 128px);
          position: relative;
        }

        .training-data-intro__mark {
          background: #86aaa3;
          height: clamp(70px, 7vw, 104px);
          left: clamp(24px, 3.7vw, 48px);
          position: absolute;
          top: 0;
          width: clamp(34px, 3.8vw, 58px);
        }

        .training-data-intro__mark::before {
          color: #fff;
          content: "✦";
          font-size: clamp(22px, 2.5vw, 36px);
          left: 50%;
          position: absolute;
          top: 26%;
          transform: translate(-50%, -50%);
        }

        .training-data-intro__mark::after {
          border-left: clamp(17px, 1.9vw, 29px) solid transparent;
          border-right: clamp(17px, 1.9vw, 29px) solid transparent;
          border-top: clamp(17px, 1.9vw, 29px) solid #86aaa3;
          bottom: calc(clamp(17px, 1.9vw, 29px) * -1);
          content: "";
          left: 0;
          position: absolute;
        }

        .training-data-intro__grid {
          align-items: center;
          display: grid;
          gap: clamp(58px, 8vw, 112px);
          grid-template-columns: minmax(0, 0.98fr) minmax(0, 1fr);
        }

        .training-data-intro__media {
          aspect-ratio: 1 / 0.9;
          overflow: hidden;
          position: relative;
        }

        .training-data-intro__media img {
          height: 100%;
          object-fit: cover;
          object-position: center;
          width: 100%;
        }

        .training-data-intro__media::before {
          background: linear-gradient(
            180deg,
            rgba(12, 13, 12, 0) 0%,
            rgba(12, 13, 12, 0.82) 42%,
            rgba(12, 13, 12, 0.96) 100%
          );
          bottom: 0;
          content: "";
          height: 43%;
          left: 0;
          pointer-events: none;
          position: absolute;
          width: 100%;
          z-index: 1;
        }

        .training-data-intro__media::after {
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 42%,
            rgba(0, 0, 0, 0.46) 100%
          );
          content: "";
          inset: 0;
          pointer-events: none;
          position: absolute;
          z-index: 1;
        }

        .training-data-intro__caption {
          bottom: clamp(28px, 3.4vw, 48px);
          color: #fffaf3;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(38px, 4.7vw, 64px);
          font-weight: 400;
          left: clamp(28px, 4.4vw, 52px);
          letter-spacing: 0;
          line-height: 0.94;
          margin: 0;
          max-width: 560px;
          position: absolute;
          text-shadow: 0 2px 18px rgba(0, 0, 0, 0.34);
          z-index: 2;
        }

        .training-data-intro__copy {
          padding-top: clamp(8px, 2vw, 28px);
        }

        .training-data-intro__copy h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(48px, 5.3vw, 72px);
          font-weight: 400;
          letter-spacing: 0;
          line-height: 1.02;
          margin: 0;
          max-width: 660px;
        }

        .training-data-intro__copy p {
          font-size: clamp(18px, 2vw, 28px);
          font-weight: 400;
          line-height: 1.14;
          margin: clamp(28px, 3.1vw, 38px) 0 0;
          max-width: 620px;
        }

        @media (max-width: 900px) {
          .training-data-intro {
            padding: 74px 22px 64px;
          }

          .training-data-intro__mark {
            height: 76px;
            left: 20px;
            width: 38px;
          }

          .training-data-intro__mark::after {
            border-left-width: 19px;
            border-right-width: 19px;
            border-top-width: 19px;
            bottom: -19px;
          }

          .training-data-intro__grid {
            display: flex;
            flex-direction: column;
            gap: 34px;
          }

          .training-data-intro__media {
            aspect-ratio: 1 / 0.86;
            order: 1;
            width: 100%;
          }

          .training-data-intro__caption {
            bottom: 26px;
            font-size: clamp(34px, 11vw, 52px);
            left: 28px;
            max-width: 88%;
          }

          .training-data-intro__media::before {
            height: 46%;
            width: 100%;
          }

          .training-data-intro__copy {
            order: 2;
            padding: 0 4px;
            width: 100%;
          }

          .training-data-intro__copy h2 {
            font-size: clamp(34px, 10vw, 48px);
            line-height: 1.03;
            max-width: 360px;
          }

          .training-data-intro__copy p {
            font-size: clamp(17px, 4.8vw, 21px);
            line-height: 1.18;
            margin-top: 18px;
          }
        }
      `}</style>
      <span className="training-data-intro__mark" aria-hidden="true" />
      <div className="training-data-intro__grid">
        <div className="training-data-intro__media">
          <Image
            src="/sections/leading-research-landscape-new.png"
            alt="Pastoral landscape used for creative AI research"
            width={1319}
            height={1192}
            sizes="(max-width: 900px) 100vw, 46vw"
          />
          <p className="training-data-intro__caption">
            Leading next-gen creative
            <br />
            AI research.
          </p>
        </div>
        <div className="training-data-intro__copy">
          <h2>
            Human taste is the
            <br />
            new training data.
          </h2>
          <p>
            Creative AI isn&apos;t good enough yet. Human creativity keeps
            evolving. We&apos;re here to make sure it leads.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="visual-site">
      <MobileMegaMenu />
      <h1 className="sr-only">
        Contra Labs human data and evaluation lab for creative AI
      </h1>
      {sections.map((section) => {
        if (section.name === "01-hero") {
          return [
            <VisualSectionImage key={section.name} section={section} />,
            <LuxurySaasEditorial key="luxury-saas-editorial" />,
          ];
        }

        if (section.name === "02-taxonomy-intro") {
          return <ResponsiveEcosystemBlock key="responsive-ecosystem" />;
        }

        if (section.name === "03-ecosystem-cards") {
          return null;
        }

        if (section.name === "04-methods") {
          return null;
        }

        if (section.name === "05-reader-art") {
          return (
            <FragmentWithNetwork key="network-section" />
          );
        }

        if (section.name === "06-spacer-collage") {
          return null;
        }

        if (section.name === "08-standard-banner") {
          return null;
        }

        if (section.name === "training-data-intro") {
          return <TrainingDataIntroSection key={section.name} />;
        }

        if (section.name === "07-standard-dark-art") {
          return <StandardDarkArtBlock key={section.name} section={section} />;
        }

        return section.name === "11-footer-artwork" ? (
          <FooterBlock key="footer-block" artwork={section} />
        ) : (
          <VisualSectionImage key={section.name} section={section} />
        );
      })}
    </main>
  );
}

function FragmentWithNetwork() {
  return (
    <>
      <VisualSectionImage
        section={{
          name: "05-reader-before-network",
          width: 1145,
          height: 1138,
          alt: "Whitespace before Network of Human Taste section",
        }}
      />
      <NetworkMetricsBlock />
    </>
  );
}

function ResponsiveEcosystemBlock() {
  return (
    <>
      <style>{`
        .ecosystem-desktop {
          background: #aed2cc;
          display: none;
        }

        .ecosystem-mobile {
          background: #aed2cc;
          display: block;
          margin-top: -1px;
        }

        .ecosystem-mobile__grid {
          background: #aed2cc;
          display: grid;
          gap: clamp(8px, 1.2vw, 14px);
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin: 0 auto;
          max-width: 1100px;
          padding: clamp(32px, 5vw, 64px) clamp(18px, 3.4vw, 38px) clamp(70px, 9vw, 112px);
        }

        .ecosystem-mobile__intro {
          background: #aed2cc;
          color: #252321;
          padding: 52px 24px 44px;
          text-align: center;
        }

        .ecosystem-mobile__intro h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(42px, 11vw, 54px);
          font-weight: 400;
          letter-spacing: 0;
          line-height: 0.96;
          margin: 0 auto 20px;
        }

        .ecosystem-mobile__intro p {
          font-size: 15px;
          line-height: 1.35;
          margin: 0 auto;
          max-width: 34rem;
        }

        .ecosystem-mobile__cta {
          background: #aed2cc;
          color: #252321;
          padding: 56px 24px 92px;
          text-align: center;
        }

        .ecosystem-mobile__cta p {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(24px, 6.4vw, 32px);
          font-weight: 400;
          letter-spacing: 0;
          line-height: 1.02;
          margin: 0 auto 28px;
        }

        .ecosystem-mobile__cta a {
          align-items: center;
          background: #252321;
          border-radius: 999px;
          color: #f7f4ee;
          display: inline-flex;
          font-size: 17px;
          font-weight: 600;
          justify-content: center;
          min-height: 60px;
          min-width: 230px;
          overflow: hidden;
          padding: 0 30px;
          position: relative;
          text-decoration: none;
          transition:
            background-color 480ms cubic-bezier(0.22, 1, 0.36, 1),
            color 480ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 480ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ecosystem-mobile__cta a:hover,
        .ecosystem-mobile__cta a:focus-visible {
          background: #fffaf3;
          color: #252321;
          transform: translateY(-1px);
        }

        .ecosystem-mobile__cta-button-text {
          display: block;
          line-height: 1;
          opacity: 1;
          transition: transform 480ms cubic-bezier(0.22, 1, 0.36, 1);
          white-space: nowrap;
        }

        .ecosystem-mobile__cta-button-text--current {
          left: 50%;
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .ecosystem-mobile__cta-button-text--next {
          color: #252321;
          left: 50%;
          position: absolute;
          top: 50%;
          transform: translate(-50%, 170%);
        }

        .ecosystem-mobile__cta a:hover .ecosystem-mobile__cta-button-text--current,
        .ecosystem-mobile__cta a:focus-visible .ecosystem-mobile__cta-button-text--current {
          transform: translate(-50%, -240%);
        }

        .ecosystem-mobile__cta a:hover .ecosystem-mobile__cta-button-text--next,
        .ecosystem-mobile__cta a:focus-visible .ecosystem-mobile__cta-button-text--next {
          transform: translate(-50%, -50%);
        }

        .ecosystem-mobile__card {
          overflow: hidden;
          width: 100%;
        }

        .ecosystem-mobile__card img {
          height: auto;
          width: 100%;
        }

        .ecosystem-desktop__grid {
          background: #aed2cc;
          display: grid;
          gap: clamp(10px, 1.1vw, 16px);
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin: 0 auto;
          max-width: 1160px;
          padding: 0 clamp(38px, 5.4vw, 72px) clamp(72px, 8vw, 116px);
        }

        .ecosystem-desktop__intro {
          background: #aed2cc;
          color: #252321;
          margin-top: -1px;
          padding: clamp(72px, 8vw, 108px) clamp(54px, 7vw, 82px) clamp(56px, 6vw, 78px);
          text-align: left;
        }

        .ecosystem-desktop__intro h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(52px, 6vw, 74px);
          font-weight: 400;
          letter-spacing: 0;
          line-height: 0.94;
          margin: 0 0 clamp(24px, 2.8vw, 34px);
          max-width: 740px;
        }

        .ecosystem-desktop__intro p {
          font-size: clamp(17px, 1.65vw, 21px);
          font-weight: 400;
          line-height: 1.28;
          margin: 0;
          max-width: 780px;
        }

        @media (min-width: 901px) {
          .ecosystem-desktop {
            display: block;
          }

          .ecosystem-mobile {
            display: none;
          }
        }

        @media (min-width: 901px) and (max-width: 1145px) {
          .ecosystem-desktop__intro {
            padding: clamp(62px, 7vw, 82px) clamp(38px, 5.8vw, 62px) clamp(48px, 5.4vw, 64px);
          }

          .ecosystem-desktop__intro h2 {
            font-size: clamp(46px, 6.2vw, 64px);
          }

          .ecosystem-desktop__intro p {
            max-width: 680px;
          }

          .ecosystem-desktop__grid,
          .ecosystem-mobile__grid {
            gap: clamp(8px, 1.4vw, 14px);
            max-width: 100%;
            padding: clamp(30px, 4.6vw, 52px) clamp(18px, 3.6vw, 34px) clamp(64px, 8vw, 96px);
          }
        }

        @media (max-width: 900px) {
          .ecosystem-mobile__card {
            border-radius: 4px;
          }
        }

        @media (max-width: 700px) {
          .ecosystem-mobile__grid {
            grid-template-columns: 1fr;
            gap: 4px;
            padding: 0 16px 64px;
          }
        }
      `}</style>
      <div className="ecosystem-desktop">
        <div className="ecosystem-desktop__intro">
          <h2>
            Meet the Contra
            <br />
            Labs ecosystem
          </h2>
          <p>
            We build the eval layer for creative AI, helping AI tools and teams
            understand quality the way expert creatives do.
          </p>
        </div>
        <EcosystemCardsGrid className="ecosystem-desktop__grid" idSuffix="-desktop" />
        <EditorialGridSection />
      </div>

      <section className="ecosystem-mobile" aria-label="Contra Labs ecosystem">
        <div className="ecosystem-mobile__intro">
          <h2>
            Meet the Contra
            <br />
            Labs ecosystem
          </h2>
          <p>
            We build the eval layer for creative AI, helping AI tools and teams
            understand quality the way expert creatives do.
          </p>
        </div>
        <EcosystemCardsGrid className="ecosystem-mobile__grid" />
        <MethodsTextBlock />
        <VisualSectionImage
          section={{
            name: "03-ecosystem-after-methods",
            width: 1145,
            height: 1700,
            alt: "Classical figure using a laptop artwork",
          }}
        />
      </section>
    </>
  );
}

function EcosystemCardsGrid({
  className,
  idSuffix = "",
}: {
  className: string;
  idSuffix?: string;
}) {
  return (
    <div className={className} aria-label="Contra Labs ecosystem cards">
      {ecosystemCards.map((card) => {
        const hoverCard =
          ecosystemHoverCards[card.name as keyof typeof ecosystemHoverCards];
        const anchor = ecosystemCardAnchors[card.name];

        return (
          <div
            className="ecosystem-mobile__card"
            id={anchor ? `${anchor}${idSuffix}` : undefined}
            key={card.name}
          >
            {hoverCard ? (
              <EcosystemHoverCard
                alt={card.alt}
                description={hoverCard.description}
                eyebrow={hoverCard.eyebrow}
                height={card.height}
                href={hoverCard.href}
                imageName={card.name}
                label={"label" in hoverCard ? hoverCard.label : undefined}
                title={hoverCard.title}
                width={card.width ?? 1145}
              />
            ) : (
              <Image
                src={`/sections/${card.name}.png`}
                alt={card.alt}
                width={card.width}
                height={card.height}
                sizes="100vw"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function FooterBlock({ artwork }: { artwork: VisualSection }) {
  return (
    <footer className="site-footer" aria-label="Footer">
      <section className="site-footer__intro" aria-label="Contra Labs footer links">
        <style>{`
          .site-footer {
            background: #fbfaf6;
            clear: both;
            isolation: isolate;
            position: relative;
            z-index: 1;
          }

          .site-footer__intro {
            align-items: center;
            background: #fbfaf6;
            color: #000;
            display: flex;
            flex-direction: column;
            margin-top: 0;
            padding: clamp(72px, 10vw, 124px) clamp(24px, 6vw, 72px)
              clamp(44px, 6.5vw, 72px);
            position: relative;
            text-align: center;
            z-index: 2;
          }

          .site-footer__brand {
            align-items: baseline;
            color: #000;
            display: inline-flex;
            gap: 0.2em;
            line-height: 0.88;
            text-decoration: none;
            white-space: nowrap;
          }

          .site-footer__brand-strong {
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(44px, 6vw, 70px);
            font-weight: 700;
            letter-spacing: -0.02em;
          }

          .site-footer__brand-light {
            font-size: clamp(31px, 4.1vw, 48px);
            font-weight: 700;
            letter-spacing: 0;
          }

          .site-footer__tagline {
            color: #000;
            font-size: clamp(15px, 1.55vw, 20px);
            font-weight: 500;
            line-height: 1.28;
            margin: clamp(24px, 3vw, 34px) 0 0;
            max-width: 390px;
          }

          .site-footer__socials {
            align-items: center;
            display: flex;
            gap: clamp(20px, 3vw, 34px);
            justify-content: center;
            margin-top: clamp(46px, 5vw, 62px);
          }

          .site-footer__socials a {
            align-items: center;
            color: #000;
            display: inline-flex;
            font-size: 0;
            height: clamp(19px, 2.2vw, 26px);
            justify-content: center;
            line-height: 1;
            text-decoration: none;
            width: clamp(19px, 2.2vw, 26px);
          }

          .site-footer__social-icon {
            display: block;
            height: 100%;
            width: 100%;
          }

          .site-footer__nav {
            align-items: center;
            display: flex;
            gap: clamp(42px, 15vw, 250px);
            justify-content: center;
            margin-top: clamp(66px, 8vw, 96px);
            width: 100%;
          }

          .site-footer__nav a {
            color: #000;
            font-size: clamp(12px, 1.2vw, 14px);
            font-weight: 500;
            line-height: 1;
            text-decoration: none;
            white-space: nowrap;
          }

          @media (max-width: 700px) {
            .site-footer__intro {
              padding: 64px 24px 48px;
            }

            .site-footer__brand-strong {
              font-size: clamp(38px, 12vw, 56px);
            }

            .site-footer__brand-light {
              font-size: clamp(27px, 8.5vw, 39px);
            }

            .site-footer__tagline {
              font-size: clamp(14px, 4vw, 18px);
              max-width: 300px;
            }

            .site-footer__socials {
              gap: 22px;
              margin-top: 38px;
            }

            .site-footer__socials a {
              height: clamp(19px, 5.5vw, 26px);
              width: clamp(19px, 5.5vw, 26px);
            }

            .site-footer__nav {
              flex-direction: column;
              gap: 16px;
              margin-top: 52px;
            }
          }
        `}</style>
        <a className="site-footer__brand" href="https://contralabs.com/">
          <span className="site-footer__brand-strong">contra</span>
          <span className="site-footer__brand-light">LABS</span>
        </a>
        <p className="site-footer__tagline">
          The world's leading independent
          <br />
          human data &amp; creative evaluation lab
        </p>
        <nav className="site-footer__socials" aria-label="Social links">
          <a href="https://x.com/contra" aria-label="X">
            <svg
              className="site-footer__social-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M4 4L20 20M20 4L4 20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
          </a>
          <a href="https://www.youtube.com/@contra" aria-label="YouTube">
            <svg
              className="site-footer__social-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M21.4 7.1a3 3 0 0 0-2.1-2.1C17.5 4.5 12 4.5 12 4.5s-5.5 0-7.3.5a3 3 0 0 0-2.1 2.1A31.7 31.7 0 0 0 2.1 12a31.7 31.7 0 0 0 .5 4.9 3 3 0 0 0 2.1 2.1c1.8.5 7.3.5 7.3.5s5.5 0 7.3-.5a3 3 0 0 0 2.1-2.1 31.7 31.7 0 0 0 .5-4.9 31.7 31.7 0 0 0-.5-4.9Z"
                fill="currentColor"
              />
              <path d="M10 15.4V8.6L15.8 12 10 15.4Z" fill="#fbfaf6" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/contra" aria-label="LinkedIn">
            <svg
              className="site-footer__social-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M20.5 3h-17A.5.5 0 0 0 3 3.5v17a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5ZM8.4 18.3H5.7V9.7h2.7v8.6ZM7 8.5a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.3 9.8h-2.7v-4.2c0-1-.02-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2v4.3H9.9V9.7h2.6v1.2h.04c.36-.68 1.24-1.4 2.55-1.4 2.73 0 3.23 1.8 3.23 4.13v4.67Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a href="https://www.instagram.com/contra" aria-label="Instagram">
            <svg
              className="site-footer__social-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect
                x="4"
                y="4"
                width="16"
                height="16"
                rx="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="12"
                cy="12"
                r="3.6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="16.9" cy="7.1" r="1.1" fill="currentColor" />
            </svg>
          </a>
          <a href="https://www.tiktok.com/@contra" aria-label="TikTok">
            <svg
              className="site-footer__social-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M15.7 3c.28 2.35 1.62 3.75 3.93 3.9v3.03a7.45 7.45 0 0 1-3.93-1.2v5.76c0 2.92-1.76 5.51-5.25 5.51-3.24 0-5.17-2.38-5.17-5.01 0-2.88 2.34-5.16 5.28-5.16.33 0 .66.03.97.1v3.16a3.64 3.64 0 0 0-1.05-.15c-1.42 0-2.25.92-2.25 2.02 0 1.15.84 2.01 2.09 2.01 1.38 0 2.12-.82 2.12-2.47V3h3.26Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a href="https://www.pinterest.com/contra" aria-label="Pinterest">
            <svg
              className="site-footer__social-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M12.2 2.8c-5.22 0-7.87 3.74-7.87 6.85 0 1.9.72 3.58 2.26 4.2.25.1.48 0 .55-.28.05-.19.17-.68.22-.88.07-.28.04-.38-.16-.62-.44-.52-.72-1.2-.72-2.15 0-2.78 2.08-5.28 5.42-5.28 2.96 0 4.58 1.8 4.58 4.22 0 3.17-1.4 5.85-3.49 5.85-1.15 0-2.01-.95-1.73-2.12.33-1.4.98-2.92.98-3.93 0-.91-.49-1.67-1.5-1.67-1.19 0-2.14 1.23-2.14 2.88 0 1.05.35 1.76.35 1.76s-1.21 5.13-1.42 6.03c-.42 1.79-.06 3.98-.03 4.2.02.13.19.16.27.06.11-.15 1.53-1.9 2.01-3.65.14-.5.79-3.08.79-3.08.39.74 1.53 1.39 2.75 1.39 3.61 0 6.06-3.29 6.06-7.69 0-3.33-2.82-6.43-7.16-6.43Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </nav>
        <nav className="site-footer__nav" aria-label="Footer navigation">
          <a href="https://contralabs.com/contact">Get In Touch</a>
          <a href="https://contralabs.com/creative-human-data">
            Creative Human Data
          </a>
          <a href="https://contralabs.com/research">Creative Arena</a>
          <a href="https://contralabs.com/jobs">Jobs</a>
        </nav>
      </section>
      <section className="footer-artwork" aria-label={artwork.alt}>
        <style>{`
          .footer-artwork {
            aspect-ratio: 1136 / 354;
            background: #f7f4ee;
            line-height: 0;
            margin: 0;
            overflow: hidden;
            width: 100%;
          }

          .footer-artwork video {
            display: block;
            height: 100%;
            object-fit: cover;
            object-position: center bottom;
            width: 100%;
          }

          @media (max-width: 900px) {
            .footer-artwork {
              aspect-ratio: 1136 / 354;
            }
          }
        `}</style>
        <video
          aria-label={artwork.alt}
          autoPlay
          loop
          muted
          playsInline
          poster={`/sections/${artwork.name}.png`}
          preload="metadata"
        >
          <source src="/sections/footer-video.mp4" type="video/mp4" />
        </video>
      </section>
    </footer>
  );
}
