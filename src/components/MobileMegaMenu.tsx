"use client";

import { useEffect, useState } from "react";

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

  return (
    <div className="mobile-mega-menu">
      <style>{`
        .mobile-mega-menu {
          display: none;
        }

        @media (max-width: 900px) {
          .mobile-mega-menu {
            display: block;
            position: absolute;
            right: 12px;
            top: 10px;
            z-index: 50;
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
            z-index: 70;
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
            background:
              radial-gradient(rgba(37, 35, 33, 0.04) 0.5px, transparent 0.5px),
              #f7f4ee;
            background-size: 3px 3px;
            color: #252321;
            display: flex;
            flex-direction: column;
            inset: 0;
            height: 100svh;
            overflow: hidden;
            padding: 0 24px 32px;
            position: fixed;
            width: 100vw;
            z-index: 60;
          }

          .mobile-mega-menu__header {
            align-items: flex-start;
            display: flex;
            min-height: 122px;
          }

          .mobile-mega-menu__brand {
            align-items: flex-start;
            color: #252321;
            display: inline-flex;
            font-size: 29px;
            font-weight: 800;
            gap: 17px;
            line-height: 1;
            text-decoration: none;
          }

          .mobile-mega-menu__mark {
            background: #83aaa4;
            color: #f7f4ee;
            display: grid;
            font-size: 23px;
            height: 61px;
            line-height: 1;
            place-items: start center;
            padding-top: 16px;
            position: relative;
            width: 35px;
          }

          .mobile-mega-menu__mark::after {
            border-left: 17.5px solid transparent;
            border-right: 17.5px solid transparent;
            border-top: 14px solid #83aaa4;
            bottom: -14px;
            content: "";
            left: 0;
            position: absolute;
          }

          .mobile-mega-menu__spark {
            display: block;
            height: 18px;
            position: relative;
            width: 18px;
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
            height: 18px;
            width: 18px;
          }

          .mobile-mega-menu__spark::after {
            background: #83aaa4;
            clip-path: polygon(50% 18%, 58% 42%, 82% 50%, 58% 58%, 50% 82%, 42% 58%, 18% 50%, 42% 42%);
            height: 12px;
            width: 12px;
          }

          .mobile-mega-menu__brand-text {
            letter-spacing: -0.02em;
            padding-top: 18px;
            white-space: nowrap;
          }

          .mobile-mega-menu__brand-text span {
            font-size: 0.78em;
            font-weight: 700;
            margin-left: 0.18em;
          }

          .mobile-mega-menu__links {
            border-top: 1px solid rgba(37, 35, 33, 0.14);
            display: grid;
          }

          .mobile-mega-menu__item {
            border-bottom: 1px solid rgba(37, 35, 33, 0.14);
            color: inherit;
            display: flex;
            font-size: clamp(18px, 2.8vw, 22px);
            font-weight: 500;
            justify-content: space-between;
            letter-spacing: 0;
            line-height: 1;
            padding: 35px 0;
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
      {isOpen ? (
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
      ) : null}
    </div>
  );
}
