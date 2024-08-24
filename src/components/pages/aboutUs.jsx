"use client"
import Image from "next/image";
import imageabout from "/public/aboutUs/imageabout.jpg";
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from "react";
export default function AboutUs(){
    const [counterOn,setcounterOn]=useState(false)
    return(
        <div id="qui-sommes-nous" className="flex flex-col gap-10 py-14 select-none">
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
                <div className="lg:w-1/2 flex gap-4 flex-col">
                    <h2 className="text-[#0276FF] font-bold text-3xl xl:text-4xl pb-8 capitalize">Qui sommes-nous ?</h2>
                    <span className="text-xl xl:text-2xl font-semibold text-[#EA7B22] capitalize">EcoTech Dépannage, votre solution d&apos;urgence 24h/24, 7j/7 à Sarreguemines !</span>
                    <p className="text-lg xl:text-xl ">
                      
                        Notre équipe de <span className="font-medium text-[#0276FF] ">professionnels passionnés</span> est experte dans une large gamme de services de dépannage en plomberie, chauffage, électricité, climatisation, serrurerie, vitrerie, et de réparation de bornes de recharge.<br/><br/>

                        Nous nous engageons à vous offrir des <span className="font-medium text-[#0276FF] ">services de réparation et de maintenance</span>   de la plus haute qualité, disponibles à tout moment.<br/><br/>

                        <span className="font-medium text-[#0276FF] ">Faites confiance à notre expertise</span> pour bénéficier d&apos;un service <span className="font-medium text-[#0276FF] ">rapide, fiable et entièrement personnalisé.</span> Votre confort et votre sécurité sont notre priorité !
                    </p>
                </div>

            
            </div>
            <ScrollTrigger onEnter={()=>(setcounterOn(true))} >
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