"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const menuItems = [
  {
    href: "https://contralabs.com/research",
    title: "Creative Arena",
  },
  {
    href: "https://contralabs.com/creative-human-data",
    title: "Creative Human Data",
  },
  {
    href: "https://contralabs.com/human-creativity-benchmark",
    title: "Human Creativity Benchmark",
  },
];

export default function MobileMegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const menuPanel = (
    <nav
      aria-label="Mobile mega menu"
      className="mobile-mega-menu__panel"
      id="mobile-mega-menu-panel"
    >
      <div className="mobile-mega-menu__header">
        <a
          className="mobile-mega-menu__brand"
          href="https://contralabs.com/"
          onClick={() => setIsOpen(false)}
        >
          <span className="mobile-mega-menu__mark" aria-hidden="true">
            <svg
              className="mobile-mega-menu__mark-svg"
              viewBox="0 0 46 96"
              preserveAspectRatio="none"
              focusable="false"
            >
              <path
                className="mobile-mega-menu__mark-ribbon"
                d="M0 0H46V96C37.4 92.1 29.9 85.2 23.8 78.7C23.4 78.25 22.6 78.25 22.2 78.7C16.1 85.2 8.6 92.1 0 96V0Z"
              />
            </svg>
            <span className="mobile-mega-menu__spark" />
          </span>
          <span className="mobile-mega-menu__brand-text">
            contra <span>LABS</span>
          </span>
        </a>
      </div>
      <div className="mobile-mega-menu__links">
        {menuItems.map((item) => (
          <a
            className="mobile-mega-menu__item"
            href={item.href}
            key={item.title}
            onClick={() => setIsOpen(false)}
          >
            {item.title}
          </a>
        ))}
      </div>
    </nav>
  );

  return (
    <div
      className={`mobile-mega-menu${isOpen ? " mobile-mega-menu--open" : ""}`}
    >
      <style>{`
        .mobile-mega-menu {
          display: none;
        }

        @media (max-width: 900px) {
          .mobile-mega-menu {
            display: block;
            left: auto !important;
            opacity: 1;
            position: fixed !important;
            right: clamp(18px, 5vw, 24px) !important;
            top: clamp(18px, 5vw, 24px) !important;
            transform: translateY(0);
            transition:
              opacity 360ms cubic-bezier(0.22, 1, 0.36, 1),
              transform 360ms cubic-bezier(0.22, 1, 0.36, 1);
            width: 40px;
            z-index: 1500;
          }

          .mobile-mega-menu--open {
            height: 100vh;
            height: 100svh;
            inset: 0 !important;
            left: 0 !important;
            pointer-events: none;
            right: auto !important;
            top: 0 !important;
            transform: none !important;
            width: 100vw;
            z-index: 10020;
          }

          body.is-scrolling-down:not(.is-page-at-top) .mobile-mega-menu:not(.mobile-mega-menu--open) {
            opacity: 0;
            pointer-events: none;
            transform: translateY(-18px);
          }

          body.is-scrolling-up .mobile-mega-menu,
          body.is-page-at-top .mobile-mega-menu {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0);
          }

          .mobile-mega-menu__toggle {
            align-items: center;
            background: transparent;
            border: 0;
            color: #252321;
            cursor: pointer;
            display: inline-flex;
            height: 40px;
            justify-content: center;
            padding: 0;
            position: relative;
            width: 40px;
            z-index: 1520;
          }

          .mobile-mega-menu--open .mobile-mega-menu__toggle {
            pointer-events: auto;
            position: fixed;
            right: clamp(18px, 5vw, 24px);
            top: clamp(18px, 5vw, 24px);
            z-index: 10030;
          }

          .mobile-mega-menu__icon,
          .mobile-mega-menu__icon::before,
          .mobile-mega-menu__icon::after {
            background: currentColor;
            border-radius: 999px;
            content: "";
            display: block;
            height: 2px;
            transition:
              transform 220ms ease,
              opacity 220ms ease;
            width: 18px;
          }

          .mobile-mega-menu__icon {
            position: relative;
          }

          .mobile-mega-menu__icon::before,
          .mobile-mega-menu__icon::after {
            left: 0;
            position: absolute;
          }

          .mobile-mega-menu__icon::before {
            top: -6px;
          }

          .mobile-mega-menu__icon::after {
            top: 6px;
          }

          .mobile-mega-menu__toggle[aria-expanded="true"] .mobile-mega-menu__icon {
            transform: rotate(45deg);
          }

          .mobile-mega-menu__toggle[aria-expanded="true"] .mobile-mega-menu__icon::before {
            opacity: 0;
          }

          .mobile-mega-menu__toggle[aria-expanded="true"] .mobile-mega-menu__icon::after {
            transform: translateY(-6px) rotate(-90deg);
          }

          .mobile-mega-menu__panel {
            animation: mobileMegaMenuIn 420ms cubic-bezier(0.22, 1, 0.36, 1);
            background:
              radial-gradient(rgba(37, 35, 33, 0.04) 0.5px, transparent 0.5px),
              #f7f4ee;
            background-size: 3px 3px;
            box-sizing: border-box;
            color: #252321;
            display: flex;
            flex-direction: column;
            inset: 0;
            height: 100vh;
            height: 100svh;
            min-height: 100vh;
            min-height: 100svh;
            overscroll-behavior: none;
            overflow: hidden;
            padding: 0 clamp(24px, 6.4vw, 30px) 32px;
            position: fixed;
            width: 100vw;
            z-index: 10000;
          }

          @keyframes mobileMegaMenuIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .mobile-mega-menu__header {
            align-items: flex-start;
            border-bottom: 1px solid rgba(37, 35, 33, 0.14);
            display: flex;
            min-height: clamp(112px, 27vw, 126px);
          }

          .mobile-mega-menu__brand {
            align-items: flex-start;
            color: #252321;
            display: inline-flex;
            font-size: clamp(25px, 7vw, 30px);
            font-weight: 800;
            gap: clamp(16px, 4vw, 20px);
            line-height: 1;
            text-decoration: none;
          }

          .mobile-mega-menu__mark {
            color: #f7f4ee;
            display: block;
            height: clamp(72px, 18vw, 82px);
            line-height: 1;
            position: relative;
            width: clamp(39px, 9.8vw, 45px);
          }

          .mobile-mega-menu__mark::after {
            content: none;
          }

          .mobile-mega-menu__mark-svg {
            display: block;
            height: 100%;
            inset: 0;
            position: absolute;
            width: 100%;
          }

          .mobile-mega-menu__mark-ribbon {
            fill: #83aaa4;
          }

          .mobile-mega-menu__spark {
            display: block;
            height: clamp(17px, 4.4vw, 20px);
            left: 50%;
            position: absolute;
            top: 31%;
            transform: translate(-50%, -50%);
            width: clamp(17px, 4.4vw, 20px);
            z-index: 1;
          }

          .mobile-mega-menu__spark::before,
          .mobile-mega-menu__spark::after {
            background: currentColor;
            content: "";
            left: 50%;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
          }

          .mobile-mega-menu__spark::before {
            clip-path: polygon(50% 0, 63% 37%, 100% 50%, 63% 63%, 50% 100%, 37% 63%, 0 50%, 37% 37%);
            height: 100%;
            width: 100%;
          }

          .mobile-mega-menu__spark::after {
            background: #83aaa4;
            clip-path: polygon(50% 18%, 58% 42%, 82% 50%, 58% 58%, 50% 82%, 42% 58%, 18% 50%, 42% 42%);
            height: 66%;
            width: 66%;
          }

          .mobile-mega-menu__brand-text {
            letter-spacing: -0.02em;
            padding-top: clamp(19px, 5vw, 23px);
            white-space: nowrap;
          }

          .mobile-mega-menu__brand-text span {
            font-size: 0.78em;
            font-weight: 700;
            margin-left: 0.18em;
          }

          .mobile-mega-menu__links {
            display: grid;
          }

          .mobile-mega-menu__item {
            border-bottom: 1px solid rgba(37, 35, 33, 0.14);
            color: inherit;
            display: flex;
            font-size: clamp(18px, 4.2vw, 20px);
            font-weight: 400;
            justify-content: space-between;
            letter-spacing: 0;
            line-height: 1;
            padding: clamp(33px, 8.6vw, 39px) 0;
            text-decoration: none;
          }

          .mobile-mega-menu__item:hover,
          .mobile-mega-menu__item:focus-visible {
            color: #6e9d96;
            outline: none;
          }

          .mobile-mega-menu__item::after {
            content: none;
          }

          @supports not (height: 100svh) {
            .mobile-mega-menu__panel {
              height: 100vh;
            }
          }

          @media (max-width: 390px) {
            .mobile-mega-menu__panel {
              padding-left: 24px;
              padding-right: 24px;
            }

            .mobile-mega-menu__item {
              font-size: 18px;
              padding: 32px 0;
            }
          }
        }
      `}</style>
      <button
        aria-controls="mobile-mega-menu-panel"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="mobile-mega-menu__toggle"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <span className="mobile-mega-menu__icon" aria-hidden="true" />
      </button>
      {isMounted && isOpen ? createPortal(menuPanel, document.body) : null}
    </div>
  );
}
