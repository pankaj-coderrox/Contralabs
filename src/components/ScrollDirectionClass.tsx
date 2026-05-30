"use client";

import { useEffect } from "react";

export default function ScrollDirectionClass() {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const applyScrollState = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      const isNearTop = currentScrollY < 24;

      document.body.classList.toggle("is-page-at-top", isNearTop);

      if (isNearTop) {
        document.body.classList.add("is-scrolling-up");
        document.body.classList.remove("is-scrolling-down");
      } else if (Math.abs(delta) > 4) {
        document.body.classList.toggle("is-scrolling-down", delta > 0);
        document.body.classList.toggle("is-scrolling-up", delta < 0);
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(applyScrollState);
        ticking = true;
      }
    };

    applyScrollState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove(
        "is-page-at-top",
        "is-scrolling-down",
        "is-scrolling-up",
      );
    };
  }, []);

  return null;
}
