"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";

export default function RealisationsCarousel({ direction, startImage, limiteImage }) {
  // Initialize the carousel with auto-scroll
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ stopOnInteraction: false, speed: 0.6, direction: direction }),
  ]);

  return (
    <div className="flex items-center justify-center cursor-grab active:cursor-grabbing select-none">
      <div
        className="relative overflow-hidden py-4 select-none active:cursor-grabbing cursor-grab"
        ref={emblaRef}
      >
        <div className="flex flex-row gap-10 items-center">
          {Array.from({ length: limiteImage }, (_, i) => startImage + i).map((ele, index) => (
            <Image
              key={index}
              src={`/realisations/${ele}.jpeg`} // Dynamically assign image paths
              width={400}
              height={400}
              alt={`Realisation ${ele}`}
              className="ml-10 h-72 object-cover bg-white p-2 rounded-3xl"
              title="Nos Réalisations"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
