"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import Electricite from "/public/carousel/Electricite.png";
import Climatisation from "/public/carousel/Climatisation.png";
import Plomberie from "/public/carousel/Plomberie.png";
import Chauffage from "/public/carousel/Chauffage.png";
import Recharge from "/public/carousel/Recharge.png";
import Locksmith from "/public/carousel/Locksmith.png";
import Vitrerie from "/public/carousel/Vitrerie.png";
import Image from "next/image";

export default function Carousel() {
    const [curr, setCurr] = useState(0);
    const [startPos, setStartPos] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const slider = [
        { id: 1, image: Electricite, title: "Interventions Électriques Rapides et Sécurisées" ,description:'Pour toute panne ou mise aux normes, faites confiance à nos électriciens qualifiés.' },
        { id: 2, image: Plomberie, title: "Solutions de Plomberie Rapides et Fiables"  ,description:'Pour les fuites et pannes, nos plombiers expérimentés sont à votre service.' },
        { id: 3, image: Climatisation, title: "Réparation Rapide de Votre Climatisation" ,description:'Pour tout dysfonctionnement, faites appel à nos experts en climatisation.'},
        { id: 4, image: Chauffage, title: "Installation et Réparation de Chauffage" ,description:'Service rapide et fiable pour un confort thermique optimal.'},
        { id: 5, image: Recharge, title: "Installation et Réparation de Bornes de Recharge" ,description:'Optez pour un service rapide, fiable et de haute qualité avec Grit Service.'},
        { id: 6, image: Locksmith, title: "Intervention Serrurerie 24/7" ,description:'Pour toute urgence, nous intervenons en 30 minutes pour votre sécurité.'},
        { id: 7, image: Vitrerie, title: "Réparations de Vitrerie Rapides et Efficaces" ,description:'Faites confiance à nos vitriers qualifiés pour tout remplacement de verre.'},
    ];

    const prev = () => setCurr(curr === 0 ? slider.length - 1 : curr - 1);
    const next = () => setCurr(curr === slider.length - 1 ? 0 : curr + 1);

    useEffect(() => {
        const slideInterval = setInterval(next, 5000);
        return () => clearInterval(slideInterval);
    }, [curr]);

    const handleDragStart = (e) => {
        setStartPos(e.type === "touchstart" ? e.touches[0].clientX : e.clientX);
        setIsDragging(true);
    };

    const handleDragEnd = (e) => {
        if (!isDragging) return;
        const endPos = e.type === "touchend" ? e.changedTouches[0].clientX : e.clientX;
        if (startPos - endPos > 50) next();
        if (startPos - endPos < -50) prev();
        setIsDragging(false);
    };
    return (
        <div className="flex items-center justify-center cursor-grab		select-none">
           <div
            className="h-screen overflow-hidden relative"
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
        >
                <div style={{ transform: `translateX(-${curr * 100}%)` }} className="flex transition-transform ease-out duration-700">
                    {slider.map((ele, index) => (
                        <Image key={index} src={ele.image} alt={ele.title} className="h-screen min-w-full w-full object-cover object-top" placeholder="blur" title='Service de maintenance' />
                    ))}
                </div>
                {/* <div className="absolute inset-0  items-center justify-between hidden lg:block p-4">
                    <button onClick={prev} className="p-1 text-[#ffff] duration-500 rounded-full">
                        <ChevronLeft size={50} />
                    </button>
                    <button onClick={next} className="p-1 text-[#ffff] z-30 duration-500 rounded-full">
                        <ChevronRight size={50} />
                    </button>
                </div> */}
                <div className="absolute inset-0 justify-center flex">
                    <div className="flex justify-center items-center gap-2">
                        {slider.map((ele, index) => (
                            <div key={index} className={` text-center space-y-1  p-2 rounded-xl md:space-y-4 flex items-center flex-col ${curr === index ? "block" : "hidden"}`}>
                                <p className="bg-[#ffff] p-2 font-semibold text-lg xl:text-2xl text-[#0276FF]">{ele.title}</p>
                                <h1 className="font-semibold text-2xl xl:text-5xl text-white text-center">{ele.description}</h1>
                                <button className="bg-[#0276FF] p-4 font-semibold text-2xl text-white hover:border-white hover:bg-white/0 duration-500 border-[#0276FF] border-4">Appeler nous</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
