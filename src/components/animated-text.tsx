"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedText({ children, className = "" }: AnimatedTextProps) {
  const textRef = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentElement = textRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <h1
      ref={textRef}
      className={`${className} transition-all duration-700 ease-out text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </h1>
  );
}
