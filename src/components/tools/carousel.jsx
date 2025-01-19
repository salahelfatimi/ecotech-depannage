"use client"
import { File, Phone } from "lucide-react"

import useEmblaCarousel from "embla-carousel-react";
import Electricite from "/public/carousel/Electricite.png";
import Climatisation from "/public/carousel/Climatisation.png";
import Plomberie from "/public/carousel/Plomberie.png";
import Chauffage from "/public/carousel/Chauffage.png";
import Recharge from "/public/carousel/Recharge.png";
import Locksmith from "/public/carousel/Locksmith.png";
import Vitrerie from "/public/carousel/Vitrerie.png";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

function gtag_report_conversion(url) {
    const callback = () => {
      if (typeof url !== "undefined") {
        window.location = url;
      }
    };
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-16782332928/yCXGCJnks_gZEICouMI-",
        value: 1.0,
        currency: "MAD",
        event_callback: callback,
      });
    }
    return false;
  }

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
            button: 'Urgence Serrurerie', 
            image: Locksmith, 
            title: "Intervention Serrurerie", 
            description: 'Dépannage rapide en cas de perte de clés ou d’effraction. Interventions 24/7 en 30 minutes.' 
        },
        { 
            id: 6, 
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
                            <Image  src={ele.image} alt={ele.title} className="  object-cover object-top  h-screen min-w-full w-full" placeholder="blur" title={ele.title} />
                            <div  className={` absolute inset-0 container text-center space-y-1  p-2 rounded-xl md:space-y-4 flex items-center justify-center flex-col `}>

                                <h2 className="font-medium text-2xl md:text-4xl text-white text-center">{ele.description}</h2>
                                <div className="flex lg:flex-row flex-col gap-4 items-center justify-center">
                                    <button
                                        onClick={() => gtag_report_conversion("tel:+33771710513")}
                                        className="bg-[#0276FF] w-fit rounded-full py-2 px-4 font-medium text-xl text-white duration-500 flex gap-2 items-center group"
                                        >
                                        <div className="bg-white rounded-full group-hover:animate-pulse p-2">
                                            <Phone size={25} className="stroke-[#0276FF]" />
                                        </div>
                                        +33 7 71 71 05 13
                                    </button> 
                                    <button
                                        onClick={() => gtag_report_conversion("https://wa.me/+33771710513")}
                                        className="bg-[#EA7B36] w-fit rounded-full py-2 px-4 font-medium text-xl text-white duration-500 flex gap-2 items-center group"
                                        >
                                        <div className="bg-white rounded-full group-hover:animate-pulse p-2">
                                            <File size={25} className="stroke-[#EA7B36]" />
                                        </div>
                                        Devis gratuit
                                    </button>      
                                </div>
                                                    
                            </div>
                        </div>
                    ))}
                </div>
              
            </div>
        </div>
    );
}
