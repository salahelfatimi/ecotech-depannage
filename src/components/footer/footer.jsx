'use client'
import { Facebook, Instagram, Linkedin, Mail, Map, MapPin, Phone } from "lucide-react";
import Link from "next/link";

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

export default function Footer(){
    return(
      <footer className="flex flex-col " >
        <div className="bg-[#0276FF] py-8 ">
            <div className=" flex flex-col gap-4 lg:flex-row items-center justify-between  container ">
           
            <Link href={'https://maps.app.goo.gl/9c9pP89Bc2p9pdUG6'} target="_blank" className=" flex gap-4"><MapPin size={30} className=" stroke-[#fff]" /><span className=" text-xl items-center font-medium capitalize text-center lg:text-start text-white ">Moselle, France</span></Link>
            <Link href={'mailto:ecotech.depannage@gmail.com'}  className=" flex gap-4"><Mail size={30} className=" stroke-[#fff]" /><span className=" text-xl items-center font-medium  text-center lg:text-start text-white ">ecotech.depannage@gmail.com</span></Link>
            <button onClick={() => gtag_report_conversion("tel:+33771710513")}  className=" flex gap-4"><Phone size={30} className=" stroke-[#fff]" /><span className=" text-xl items-center font-medium capitalize text-center lg:text-start text-white ">+33 7 71 71 05 13</span></button>

            
            </div>
        </div>
        <div className="bg-[#1E1E1E] py-8">
            <div className=" flex flex-col gap-4 lg:flex-row items-center justify-center  container ">
            <p className={`select-none flex  flex-col lg:flex-row gap-1  text-xl items-center font-medium capitalize text-center lg:text-start text-white `}>
                Copyright &copy; {new Date().getFullYear()} . Touts les droits sont réservés 
                <span className=" text-[#0276FF]   ">
                  EcoTech Dépannage
                </span>
            </p>
            {/* <div className="flex gap-6">
            <Instagram size={30} className=" stroke-[#fff]" />
            <Linkedin size={30} className=" stroke-[#fff]" />
            <Facebook size={30} className=" stroke-[#fff]"/>
            </div> */}
            </div>
        </div>
        
      </footer>
      
    )
}