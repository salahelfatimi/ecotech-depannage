"use client"
import { ChevronLeft, ChevronRight, Phone } from "lucide-react"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Electricite from "/public/carousel/Electricite.png";
import Climatisation from "/public/carousel/Climatisation.png";
import Plomberie from "/public/carousel/Plomberie.png";
import Chauffage from "/public/carousel/Chauffage.png";
import Recharge from "/public/carousel/Recharge.png";
import Locksmith from "/public/carousel/Locksmith.png";
import Vitrerie from "/public/carousel/Vitrerie.png";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function Carousel() {
    const slider = [
        { 
            id: 1, 
            button: 'Contactez un Électricien', 
            image: Electricite, 
            title: "Dépannage Électrique Rapide", 
            description: 'Pannes électriques et mise aux normes. Service rapide et sécurisé par nos électriciens qualifiés.' 
        },
        { 
            id: 2, 
            button: 'Appeler un Plombier', 
            image: Plomberie, 
            title: "Réparation de Plomberie", 
            description: 'Fuites, toilettes bouchées, et pannes d’eau chaude. Plombiers expérimentés disponibles rapidement.' 
        },
        { 
            id: 3, 
            button: 'Réparation Climatisation', 
            image: Climatisation, 
            title: "Dépannage Climatisation", 
            description: 'Réparations pour climatiseur avec voyants clignotants ou bruit anormal. Experts disponibles pour dépannage rapide.' 
        },
        { 
            id: 4, 
            button: 'Devis Chauffage', 
            image: Chauffage, 
            title: "Installation Chauffage", 
            description: 'Installation et réparation de systèmes de chauffage pour un confort optimal et une efficacité énergétique.' 
        },
        { 
            id: 5, 
            button: 'Installer Borne de Recharge', 
            image: Recharge, 
            title: "Bornes de Recharge", 
            description: 'Installation et réparation de bornes de recharge pour véhicules électriques. Service rapide et fiable.' 
        },
        { 
            id: 6, 
            button: 'Urgence Serrurerie', 
            image: Locksmith, 
            title: "Intervention Serrurerie", 
            description: 'Dépannage rapide en cas de perte de clés ou d’effraction. Interventions 24/7 en 30 minutes.' 
        },
        { 
            id: 7, 
            button: 'Réparation Vitrerie', 
            image: Vitrerie, 
            title: "Dépannage Vitrerie", 
            description: 'Remplacement de verre ou miroirs. Service rapide pour tous vos besoins en vitrerie.' 
        },
    ];
    
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        Autoplay({ stopOnInteraction:false ,speed: 0.7  })
      ])

    return (
        <div className="flex items-center justify-center cursor-grab active:cursor-grabbing	 		select-none">
           <div className="h-screen overflow-hidden relative"  ref={emblaRef}>
                <div  className="flex transition-transform ease-out duration-700">
                    {slider.map((ele, index) => (
                        <div key={index} className=" relative h-screen min-w-full w-full">
                            <Image key={index} src={ele.image} alt={ele.title} className="  object-cover object-top  h-screen min-w-full w-full" placeholder="blur" title={ele.title} />
                            <div key={index} className={` absolute inset-0 container text-center space-y-1  p-2 rounded-xl md:space-y-4 flex items-center justify-center flex-col `}>
                                <h2  className="bg-[#ffff] p-2 font-medium text-lg md:text-2xl text-[#0276FF]">{ele.title}</h2>
                                <p className="font-medium text-2xl md:text-4xl text-white text-center">{ele.description}</p>
                                <Link href={'tel:+33771710513'} className="bg-[#0276FF]  p-4 font-medium text-2xl text-white hover:border-white hover:bg-white/0 duration-500 border-[#0276FF] border-4 flex gap-2 items-center"><Phone size={30} /> {ele.button}</Link>
                            </div>
                        </div>
                    ))}
                </div>
              
            </div>
        </div>
    );
}
