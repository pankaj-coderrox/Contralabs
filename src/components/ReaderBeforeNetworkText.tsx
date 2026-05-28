"use client";

import { useEffect, useRef, useState } from "react";

const headline = (
  <>
    Built on real-world
    <br />
    creative expertise
  </>
);

const sentence = "Contra Labs taps a vetted network of practicing creative professionals";
const marketSentence = "with real market experience";

export default function ReaderBeforeNetworkText() {
  const ref = useRef<HTMLHeadingElement>(null);
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const activeTextRef = useRef(false);

  useEffect(() => {
    const swapText = (nextTextIndex: number) => {
      activeTextRef.current = true;
      setIsVisible(false);
      window.setTimeout(() => {
        setTextIndex(nextTextIndex);
        setIsVisible(true);
        activeTextRef.current = false;
      }, 360);
    };

    const update = () => {
      const element = ref.current;
      if (!element || activeTextRef.current) return;

      const rect = element.getBoundingClientRect();
      const textCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const nextTextIndex =
        textCenter <= viewportCenter - 260
          ? 2
          : textCenter <= viewportCenter + 8
            ? 1
            : 0;

      if (nextTextIndex !== textIndex) {
        swapText(nextTextIndex);
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [textIndex]);

  const isExpanded = textIndex === 1;
  const isSentence = textIndex === 2;
  const isMarket = textIndex === 2;
  const text =
    textIndex === 0 ? (
      <span className="reader-before-network__headline-title">{headline}</span>
    ) : textIndex === 1 ? (
      <span className="reader-before-network__headline-body">{sentence}</span>
    ) : (
      marketSentence
    );

  return (
    <h2
      ref={ref}
      className={`reader-before-network__headline ${
        isExpanded ? "reader-before-network__headline--expanded" : ""
      } ${
        isSentence ? "reader-before-network__headline--sentence" : ""
      } ${
        isMarket ? "reader-before-network__headline--market" : ""
      } ${isVisible ? "is-visible" : "is-hidden"}`}
    >
      <span className="reader-before-network__headline-text">{text}</span>
    </h2>
  );
}
