'use client'
import { File, MapPin, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";

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
export default function Navbar() {
    const [open, setOpen] = useState(true);
    const [activeSection, setActiveSection] = useState("");
    
    const itemNav = useMemo(() => [
        { title: 'Accueil', href: '#accueil' },
        { title: 'Qui sommes nous', href: '#qui-sommes-nous' },
        { title: 'Nos Realisations', href: '#nos-realisations' },
        { title: 'Nos services', href: '#nos-services' },
        { title: 'Comment Ça Marche', href: '#comment-ca-marche' },
        { title: 'Contactez-nous', href: '#contactez-nous' }
    ], []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY + window.innerHeight / 2; 
            itemNav.forEach(item => {
                const section = document.querySelector(item.href);
                if (section) {
                    const sectionTop = section.offsetTop;
                    if (scrollY > sectionTop && scrollY < sectionTop + section.offsetHeight ) {
                        setActiveSection(item.href);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [itemNav]);

    // Smooth scroll to section
    const handleClick = (href) => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      
    };

    
    return (
        <div>
            <div className="fixed z-50 right-0 left-0">
                <div className="bg-[#0276FF] p-2">
                    <div className="container flex flex-row justify-between items-center">
                        <span className="font-semibold text-white animate-pulse">7/7 J - 24/24 H</span>
                        <div className="flex gap-2 justify-between">
                            <Link href={'https://maps.app.goo.gl/zS1ehuqbdPCdptEy9'} className="flex bg-white py-2 px-4 rounded-full gap-2 font-medium text-[#0276FF] items-center"><MapPin size={20} /><span className="lg:block hidden " >Moselle, France</span></Link>
                            <button onClick={() => gtag_report_conversion("tel:+33771710513")}  className="flex gap-2 font-medium bg-white py-2 px-4 rounded-full  text-[#0276FF] items-center"><Phone size={20} /><span className="lg:block hidden " >+33 7 71 71 05 13</span></button>
                            <button onClick={() => gtag_report_conversion("https://wa.me/+33771710513")}  className="flex bg-[#EA7B36] py-2 px-4 rounded-full gap-2 font-medium text-white items-center"><File size={20} /><span className="lg:block hidden " > Devis gratuit </span></button>
                        </div>
                    </div>
                </div>
                <div className="bg-white py-2">
                    <div className="container flex justify-between items-center">
                        <Link href={'/'} className=" flex gap-4 items-center justify-center"><Image src={'/logo.svg'} width={80} height={80} priority alt="Services Reparation" /> <h1 className="flex flex-col font-medium text-2xl">EcoTech <span className="text-[#0276FF] ">Dépannage</span></h1></Link>
                        <div className="bg-[#0276FF] p-1  xl:hidden block ">
                            <Menu size={40} onClick={() => { setOpen(!open) }} className="stroke-white cursor-pointer hover:rotate-180 duration-700" />
                        </div>
                        <div className=" xl:block hidden">
                            <ul className="flex gap-10 items-center ">
                                {itemNav.map((ele, index) => (
                                    <li key={index} className={`font-medium ${activeSection === ele.href ? 'bg-[#0276FF]  text-white p-2' : ''}`}>
                                        <button onClick={() => handleClick(ele.href)}>{ele.title}</button>
                                    </li>
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
