"use client"
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll"

export default function RealisationsCarousel({direction,lengthImage,limiteImage}) {
   
    
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        AutoScroll({ stopOnInteraction:false ,speed: 0.5 , direction:direction })
      ])

    return (
        <div className="flex items-center justify-center cursor-grab active:cursor-grabbing	 		select-none">
           <div className="relative overflow-hidden  py-4  select-none  active:cursor-grabbing cursor-grab"  ref={emblaRef}>
                <div  className="flex flex-row gap-10  items-center   ">
                    {Array.from({ length: limiteImage }, (_, i) => i + lengthImage).map((ele, index) => (
                        <Image key={index} src={`/realisations/${ele+1}.jpeg`} width={400} height={400} alt={ele.title} className="ml-10 h-80 object-cover bg-white  p-2 rounded-3xl "  title='Nos Realisations' />
                    ))}
                </div>
              
            </div>
        </div>
    );
}
