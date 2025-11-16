"use client";
import { useEffect, useState } from "react";

export const useScrollVisibility = (
  scrollThreshold = 10,
  bgThreshold = 100
) => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrolledPast, setScrolledPast] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Show/hide header
      if (currentScroll > scrollThreshold) {
        if (currentScroll > lastScrollY) {
          setIsVisible(false); // scrolling down
        } else {
          setIsVisible(true); // scrolling up
        }
      } else {
        setIsVisible(true); // near top
      }

      // Background logic
      setScrolledPast(currentScroll > bgThreshold);

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, scrollThreshold, bgThreshold]);

  return { isVisible, scrolledPast };
};
