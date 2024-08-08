"use client"
import Image from "next/image";
import imageabout from "/public/aboutUs/imageabout.jpg";
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from "react";
export default function AboutUs(){
    const [counterOn,setcounterOn]=useState(false)
    return(
        <div className="flex flex-col gap-10 py-14">
            <div className=" container flex flex-col lg:flex-row justify-between gap-16  items-center">
                <Image 
                src={imageabout} 
                width={5150}
                height={3639}
                quality={100}
                placeholder="blur"
                title={"Qui sommes nous ?"}
                
                className="lg:w-1/2"
                alt="Qui sommes nous ?"/>
                <div className="lg:w-1/2 flex gap-4 flex-col ">
                    <h2 className="text-[#0276FF] font-bold text-3xl xl:text-4xl pb-8 capitalize">Qui sommes nous ?</h2>
                    <span className=" text-xl xl:text-2xl font-semibold text-[#EA7B22] capitalize ">Les Meilleurs Services de Confiance</span>
                    <p className=" text-xl xl:text-2xl font-medium">
                        Notre équipe de professionnels qualifiés
                        est passionnée par son métier et dédiée
                        à fournir un travail de haute qualité.
                        Nous sommes à votre service pour tous
                        vos besoins en réparation, installation
                        et maintenance.
                    </p>
                </div>

            
            </div>
            <ScrollTrigger onEnter={()=>(setcounterOn(true))} onExit={()=>(setcounterOn(false))}>
                <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16 container justify-between items-center   ">
                    <div className="bg-[#0276FF] py-4 flex gap-4 flex-col items-center">
                        <span className=" bg-[#fff] p-4 font-medium  text-2xl xl:text-4xl w-fit text-[#0276FF]">{ counterOn ? <CountUp duration={10} start={1} end={35}   suffix=" +"/>:0}</span>
                        <h3 className=" font-medium text-2xl text-white xl:text-3xl">Équipe qualifiée</h3>
                    </div>
                    <div className=" bg-[#0276FF] py-4 flex gap-4 flex-col items-center">
                        <span className=" bg-[#fff] p-4 font-medium text-2xl xl:text-4xl w-fit text-[#0276FF]">{ counterOn ? <CountUp duration={10} start={1} end={2500}   suffix=""/>:0}</span>
                        <h3 className=" font-medium text-2xl  text-white xl:text-3xl">Clients satisfaits</h3>
                    </div>
                    <div className="bg-[#0276FF] py-4 flex gap-4 flex-col items-center">
                        <span className=" bg-[#fff] p-4 font-medium  text-2xl xl:text-4xl w-fit text-[#0276FF]">{ counterOn ? <CountUp duration={10} start={1} end={30}   suffix=" min"/>:0}</span>
                        <h3 className=" font-medium text-2xl text-white xl:text-3xl text-center">Temps de réponse</h3>
                    </div>
                    <div className="bg-[#0276FF] py-4 flex gap-4 flex-col items-center">
                        <span className=" bg-[#fff] p-4 font-medium  text-2xl xl:text-4xl w-fit text-[#0276FF]">{ counterOn ? <CountUp duration={10} start={1} end={100}   suffix=" +"/>:0}</span>
                        <h3 className=" font-medium text-2xl text-white xl:text-3xl">Zones couvertes</h3>
                    </div>
                </div>
            </ScrollTrigger>
        </div>
    )
}