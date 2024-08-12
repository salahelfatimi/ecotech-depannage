import { Facebook, Instagram, Linkedin, Mail, Map, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer(){
    return(
      <footer className="flex flex-col z-20" >
        <div className="bg-[#0276FF] py-8 ">
            <div className=" flex flex-col gap-4 lg:flex-row items-center justify-between  container ">
           
            <Link href={'https://maps.app.goo.gl/gtaWxSsq7yA2k8fk9'} target="_blank" className=" flex gap-4"><MapPin size={30} className=" stroke-[#fff]" /><span className=" text-xl items-center font-semibold capitalize text-center lg:text-start text-white ">Sarreguemines, France</span></Link>
            <Link href={'mailto:ecotech.depannage@gmail.com'}  className=" flex gap-4"><Mail size={30} className=" stroke-[#fff]" /><span className=" text-xl items-center font-semibold  text-center lg:text-start text-white ">ecotech.depannage@gmail.com</span></Link>
            <Link href={'tel:+33771710513'} className=" flex gap-4"><Phone size={30} className=" stroke-[#fff]" /><span className=" text-xl items-center font-semibold capitalize text-center lg:text-start text-white ">+33 7 71 71 05 13</span></Link>

            
            </div>
        </div>
        <div className="bg-[#1E1E1E] py-8">
            <div className=" flex flex-col gap-4 lg:flex-row items-center justify-center  container ">
            <p className={`select-none flex  flex-col lg:flex-row  text-xl items-center font-semibold capitalize text-center lg:text-start text-white `}>
                Copyright &copy; {new Date().getFullYear()} . All rights are reserved by 
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