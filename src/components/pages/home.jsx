import Image from "next/image";
import disponibilite from "/public/gridHome/disponibilite.png";
import guarantee from "/public/gridHome/guarantee.png";
import Interventionrapide from "/public/gridHome/Interventionrapide.png";
import quality from "/public/gridHome/quality.png";
import Carousel from "../tools/carousel";
import Head from "next/head";
import Link from "next/link";
import { File, Phone } from "lucide-react";
export default function HomePage(){
    const grid=[
        {title:'Intervention rapide',image:Interventionrapide },
        {title:'Garantie à 100%',image:guarantee},
        {title:'Disponibilité 24/7',image:disponibilite},
        {title:'Service de qualité',image:quality}
    ]
  
    return(
        <div className=" " id="accueil">
            <div className="relative h-screen w-full overflow-hidden">
            <video
                autoPlay
                loop
                playsInline
                muted
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/bgVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-80"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 text-white">
                <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                    <span className=" text-[#0276FF]">EcoTech Dépannage </span> Votre Solution <span className=" text-red-500">d&apos;Urgence 24/7 !</span> 
                </h1>
                <p className="text-xs lg:text-base  container mb-6 font-light">
                    Découvrez EcoTech Dépannage, votre partenaire de confiance pour toutes vos urgences en plomberie, chauffage, électricité, climatisation, serrurerie, vitrerie, et réparation de bornes de recharge. Nos experts, disponibles 24h/24 et 7j/7, vous garantissent des interventions rapides, fiables et personnalisées. Priorisez votre confort et votre sécurité avec des services de qualité supérieure. Appelez-nous dès maintenant et faites l&apos;expérience d&apos;une assistance professionnelle inégalée !
                </p>
                <div className="flex flex-col lg:flex-row gap-4 items-center">
                <Link
                    target="_blank"
                    href="tel:+33771710513"
                    className="bg-[#0276FF] hover:bg-white border-4 border-[#0276FF] hover:text-[#0276FF]  w-fit rounded-full py-1 px-4 font-medium text-lg lg:text-xl text-white duration-500 flex gap-2 items-center group"
                >
                    <div className="bg-white group-hover:bg-[#0276FF] duration-500 rounded-full  p-2">
                    <Phone size={25} className="group-hover:stroke-white stroke-[#0276FF]" />
                    </div>
                    +33 7 71 71 05 13
                </Link>
                <Link
                    target="_blank"
                    href="https://wa.me/+33771710513"
                    className="bg-[#EA7B36] hover:bg-white border-4 border-[#EA7B36] hover:text-[#EA7B36] w-fit rounded-full py-1 px-4 font-medium text-lg lg:text-xl text-white duration-500 flex gap-2 items-center group"
                >
                    <div className="bg-white group-hover:bg-[#EA7B36]  rounded-full  duration-500 p-2">
                    <File size={25} className="group-hover:stroke-white stroke-[#EA7B36]" />
                    </div>
                    Devis gratuit
                </Link>
                </div>
            </div>
            </div>

            <div className="p-10 ">
                <div  className=" container  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-9 lg:flex-row justify-between items-center ">
                    {
                        grid.map((ele,index)=>(
                            <div   className=" flex flex-col gap-4 items-center py-4 bg-white border-[#0276FF] border-4 rounded-3xl " key={index}>
                                <Image src={ele.image} className=" w-24" alt={ele.title} title={ele.title}/>
                                <h3 className=" text-center font-bold text-xl text-[#0276FF]">{ele.title}</h3>
                            </div>
                        ))
                    }
                   
                </div>
                
            </div>
            
        </div>
    )
}