'use client'
import { File, MapPin, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";


export default function Navbar() {
    const [open, setOpen] = useState(true);
    const [activeSection, setActiveSection] = useState("");
    
    const itemNav =  [
        { title: 'Accueil', href: '/' },
        { title: 'Nos services', href: '/nos_service' },
        { title: 'Contactez-nous', href: '/contact' }
    ];

    return (
        <div>
            <div className="fixed z-50 right-0 left-0">
                <div className="bg-[#0276FF] p-2">
                    <div className="container flex flex-row justify-between items-center">
                        <span className="font-semibold text-white animate-pulse">7/7 J - 24/24 H</span>
                        <div className="flex gap-2 justify-between">
                            <Link href={'https://maps.app.goo.gl/9c9pP89Bc2p9pdUG6'} className="flex bg-white py-2 px-4 rounded-full gap-2 font-medium text-[#0276FF] items-center"><MapPin size={20} /><span className="lg:block hidden " >Moselle, France</span></Link>
                            <Link href={'tel:+33771710513'}   className="flex gap-2 font-medium bg-white py-2 px-4 rounded-full  text-[#0276FF] items-center"><Phone size={20} /><span className="lg:block hidden " >+33 7 71 71 05 13</span></Link>
                            <Link href={'https://wa.me/+33771710513'}  className="flex bg-[#EA7B36] py-2 px-4 rounded-full gap-2 font-medium text-white items-center"><File size={20} /><span className="lg:block hidden " > Devis gratuit </span></Link>
                        </div>
                    </div>
                </div>
                <div className="bg-white py-2">
                    <div className="container flex justify-between items-center">
                        <Link href={'/'} className=" flex gap-4 items-center justify-center"><Image src={'/logo.svg'} width={70} height={70} priority alt="Services Reparation" /> <h2 className="flex flex-col font-medium lg:text-2xl">EcoTech <span className="text-[#0276FF] ">Dépannage</span></h2></Link>
                        <div className="bg-[#0276FF] p-1  xl:hidden block ">
                            <Menu size={40} onClick={() => { setOpen(!open) }} className="stroke-white cursor-pointer hover:rotate-180 duration-700" />
                        </div>
                        <div className=" xl:block hidden">
                            <ul className="flex gap-10 items-center ">
                                {itemNav.map((ele, index) => (
                                    <Link href={ele.href} key={index} className={`font-medium ${activeSection === ele.href ? 'bg-[#0276FF]  text-white p-2' : ''}`}>
                                        <button >{ele.title}</button>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                       
                        <div className={`fixed z-30 inset-0 flex items-center justify-center bg-white duration-700 transition ${open == false ? "translate-x-0" : "translate-x-full"}`}>
                            <button onClick={() => { setOpen(true) }} className="absolute top-4 right-4 text-red-600 ">
                                <X size={40} />
                            </button>
                            <div className="flex flex-col items-center gap-12 text-2xl font-medium">
                                {itemNav.map((ele, index) => (
                                    <button key={index}  className={` text-xl hover:duration-700 transition font-medium ${activeSection === ele.href ? 'bg-[#0276FF]  text-white p-2' : 'hover:text-[#0276FF] text-black'}`} onClick={() => {handleClick(ele.href), setOpen(!open)}}>
                                        {ele.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
