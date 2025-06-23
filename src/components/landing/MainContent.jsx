"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Hero from "@/components/landing/Hero";
import Projects from "@/components/landing/Projects";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function MainContent() {
  const mainRef = useRef(null);
  const footerRef = useRef(null);
  useGSAP(
    () => {
      const sections = gsap.utils.toArray(".section-fade-in");
      sections.forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 100,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section, // El elemento que dispara la animación
            start: "top bottom", // Cuando la parte superior del elemento toca la parte inferior del viewport
            toggleActions: "play none none reverse",
          },
        });
      });

      // Animación separada para el footer
      gsap.from(footerRef.current, {
        opacity: 0,
        y: 50, // Un ligero desplazamiento hacia arriba
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom", // Cuando la parte superior del footer entra por la parte inferior del viewport
          toggleActions: "play none none none", // Reproduce una vez y se queda visible
          once: true, // Asegura que la animación solo se ejecute una vez
        },
      });
    },
    { scope: mainRef }
  );

  return (
    <main ref={mainRef} className="bg-black text-white min-h-screen">
      <Hero />
      <Projects />
      <div className="section-fade-in">
        <Contact />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </main>
  );
}
