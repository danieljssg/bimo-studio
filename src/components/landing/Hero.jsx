"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const textContainerRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  useGSAP(
    () => {
      // 1. Entrance Animation for the text
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5, // Delay after page load
      }).from(
        paragraphRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
        },
        "-=0.6" // Overlap with title animation
      );

      // 2. Scroll-based animation to fade out and zoom out the text
      gsap.to(textContainerRef.current, {
        opacity: 0,
        scale: 0.8, // Zoom out effect
        ease: "power2.in",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "center top",
          scrub: true,
        },
      });
    },
    { scope: heroRef }
  );

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 to-black pointer-events-none" />

      <div className="absolute inset-0 w-full h-full">
        <video
          muted
          playsInline
          preload="auto"
          loop
          autoPlay
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        >
          <source src="/assets/video/videobg.webm" type="video/webm" />
        </video>
      </div>

      <div
        ref={textContainerRef}
        className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center text-white"
      >
        <h1
          ref={titleRef}
          className="text-7xl md:text-9xl font-brand tracking-tighter"
        >
          BIMO ESTUDIO
        </h1>
        <p
          ref={paragraphRef}
          className="text-lg max-w-xl font-brand font-extralight tracking-widest"
        >
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </section>
  );
}
