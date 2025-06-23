"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function ArchitectureLoader({ onComplete }) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const backgroundRef = useRef(null);
  const gridRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete && onComplete();
        },
      });

      gsap.set(pathRef.current, {
        fill: "none",
        stroke: "#ffffff",
        strokeWidth: 4,
        strokeDasharray: 1000,
        strokeDashoffset: 1000,
        opacity: 1,
      });

      gsap.set(backgroundRef.current, {
        backgroundColor: "#0f4c81",
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      });

      tl.to(pathRef.current, {
        strokeDashoffset: 0,
        strokeDasharray: 0, // Asegura que el trazo se complete
        duration: 3,
        ease: "power2.inOut",
      })
        .set({}, {}, "+=0.5") // Pausa para ver el borde completo

        .to(backgroundRef.current, {
          backgroundColor: "#000000",
          backgroundImage:
            "linear-gradient(rgba(192, 192, 192, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(192, 192, 192, 0.3) 1px, transparent 1px)",
          duration: 1,
          ease: "power2.inOut",
        })

        .to(
          pathRef.current,
          {
            fill: "#ffffff",
            stroke: "none",
            strokeWidth: 0,
            duration: 0.5,
          },
          "-=0.3"
        )
        .to(
          backgroundRef.current,
          {
            backgroundColor: "#000000",
            backgroundImage: "none",
            duration: 0.5,
          },
          "-=0.5"
        )

        .to([svgRef.current], {
          scale: 1.05,
          duration: 1,
          ease: "power2.inOut",
          yoyo: true,
          repeat: 1,
        })
        .set({}, {}, "+=0.5")
        .to(containerRef.current, {
          opacity: 0, // Se desvanece
          duration: 1.2, // Duración de la animación de salida
          ease: "power2.inOut", // Suaviza la transición
        });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div
        ref={backgroundRef}
        className="absolute inset-0 transition-all duration-500 ease-in-out"
      />

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative">
          <svg
            ref={svgRef}
            width="200"
            height="200"
            viewBox="0 0 720 720"
            className="drop-shadow-2xl"
          >
            <defs>
              <filter id="roughPaper" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence
                  baseFrequency="0.04"
                  numOctaves="5"
                  result="noise"
                />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
              </filter>
            </defs>

            <path
              ref={pathRef}
              d="M456.36,613.64h-207V106.36H470.67L316.07,270.8H456.36Z"
              className="transition-all duration-500"
            />
          </svg>
        </div>

        {/* <div ref={textRef} className="text-center">
          <h2 className="text-4xl font-brand text-white tracking-tighter">
            BIMO ESTUDIO
          </h2>
        </div> */}
      </div>
    </div>
  );
}
