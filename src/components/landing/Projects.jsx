"use client";

import { useRef } from "react"; // Solo useRef es necesario de React
import { gsap } from "gsap"; // Importa gsap
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Importa ScrollTrigger
import { useGSAP } from "@gsap/react"; // Importa el hook useGSAP

gsap.registerPlugin(ScrollTrigger); // Registra ScrollTrigger globalmente una vez

export default function Projects() {
  const containerRef = useRef(null);
  const textContainerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRefs = useRef([]); // To hold refs for each individual image

  const images = [
    "/assets/images/vert/vert1-1.png", // vert1-1
    "/assets/images/vert/vert1-2.png", // vert1-2
    "/assets/images/vert/vert1-3.png", // vert1-3
    "/assets/images/vert/vert1-4.png", // vert1-4
  ];

  useGSAP(() => {
    // useGSAP se encarga de limpiar las animaciones automáticamente cuando el componente se desmonta
    // o cuando las dependencias cambian, evitando duplicados.

    // Eliminamos las animaciones de entrada para el texto y el contenedor de imágenes.
    // Ahora aparecerán estáticamente.

    // Animación de secuencia de imágenes con GSAP timeline y ScrollTrigger
    // Esta es la ÚNICA animación que debe permanecer, según la solicitud.
    const projectImages = imageRefs.current;
    const totalImages = images.length;

    if (totalImages > 0) {
      // Oculta todas las imágenes inicialmente, luego muestra la primera
      gsap.set(projectImages, { opacity: 0 });
      gsap.set(projectImages[0], { opacity: 1 });

      if (totalImages > 1) {
        // Image sequence animation with GSAP timeline and ScrollTrigger
        const imageTimeline = gsap.timeline({
          // Crea una línea de tiempo para la secuencia de imágenes
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 1%", // Inicia cuando la parte superior de la sección llega al centro del viewport
            end: "bottom 60%", // Termina cuando la parte inferior de la sección llega al centro del viewport
            scrub: true,
            // markers: true, // Uncomment for debugging
          },
        });

        for (let i = 0; i < totalImages; i++) {
          imageTimeline.to(projectImages[i], {
            opacity: 1,
            ease: "none",
            duration: 0.2,
          });
        }
      }
    }
  });

  return (
    <section
      ref={containerRef}
      className="min-h-screen py-20 px-4 md:px-12 flex flex-col items-center justify-center gap-4"
    >
      {/* Título principal de la sección, sin animación GSAP */}
      <h2 className="text-5xl mb-6 font-serif w-full text-center">
        Conoce nuestros Proyectos
      </h2>
      <div className="flex flex-col md:flex-row items-center w-full">
        <div
          ref={imageContainerRef} // Ref for the image container
          className="w-full md:w-1/2 md:pr-8 mb-12 md:mb-0 order-1 md:order-2"
        >
          <div className="relative aspect-[9/16] w-full max-w-md mx-auto overflow-hidden rounded-lg">
            {images.map((src, imageIndex) => (
              <img
                key={imageIndex}
                src={src}
                alt={`Proyecto arquitectónico ${imageIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover project-image"
                ref={(el) => (imageRefs.current[imageIndex] = el)} // Asigna la ref a cada imagen
              />
            ))}
          </div>
        </div>

        <div
          ref={textContainerRef} // Ref for the text container
          className="w-full md:w-1/2 order-1 md:order-2 text-justify"
        >
          {/* Título del proyecto, sin animación GSAP */}
          <h3 className="text-4xl font-serif mb-4">Proyecto Arquitectónico</h3>
          <p className="text-lg font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
            auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in
            nulla enim. Phasellus molestie magna non est bibendum non venenatis
            nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris
            iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.
            Proin quis tortor orci. Etiam at risus et justo dignissim congue.
            Donec congue lacinia dui, a porttitor lectus condimentum laoreet.
          </p>
        </div>
      </div>
    </section>
  );
}
