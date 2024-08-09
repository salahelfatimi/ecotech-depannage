'use client'
import { MapPin, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(true);
    const [activeSection, setActiveSection] = useState("");

    const itemNav = [
        { title: 'Accueil', href: '#accueil' },
        { title: 'Qui sommes nous', href: '#qui-sommes-nous' },
        { title: 'Nos services', href: '#nos-services' },
        { title: 'Comment Ca Marche', href: '#comment-ca-marche' },
        { title: 'Contactez-nous', href: '#contactez-nous' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY + 100; // Offset for triggering
            itemNav.forEach(item => {
                const section = document.querySelector(item.href);
                if (section) {
                    if (scrollY > section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
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
        setOpen(false); // Close mobile menu after clicking
    };

    
    return (
        <div>
            <div className="fixed z-20 right-0 left-0 lg:block hidden">
                <div className="bg-[#0276FF] p-4">
                    <div className="container flex flex-row justify-between">
                        <span className="font-semibold text-white animate-pulse">7/7 J - 24/24 H</span>
                        <div className="flex gap-6 justify-between">
                            <Link href={'/'} className="flex gap-2 font-semibold text-white items-center"><MapPin size={25} />Sarreguemines, France</Link>
                            <Link href={'tel:+33771710513'} className="flex gap-2 font-semibold text-white items-center"><Phone size={25} />+33 7 71 71 05 13</Link>
                        </div>
                    </div>
                </div>
                <div className="bg-white py-2">
                    <div className="container flex justify-between items-center">
                        <Link href={'/'}><Image src={'/logo.svg'} width={200} height={200} priority alt="Services Reparation" /></Link>
                        <ul className="flex gap-10 items-center">
                            {itemNav.map((ele, index) => (
                                <li key={index} className={`font-medium ${activeSection === ele.href ? 'bg-[#0276FF]  text-white p-2' : ''}`}>
                                    <button onClick={() => handleClick(ele.href)}>{ele.title}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Navbar mobile */}
            <div className="fixed right-0 left-0 block lg:hidden z-20">
                <div className="bg-[#0276FF] p-4">
                    <div className="container flex flex-row justify-between">
                        <span className="font-semibold text-white animate-pulse">7/7 J - 24/24 H</span>
                        <div className="flex gap-6 justify-between">
                            <Link href={'/'} className="flex gap-2 font-semibold text-white items-center"><MapPin size={25} /></Link>
                            <Link href={'tel:+33771710513'} className="flex gap-2 font-semibold text-white items-center"><Phone size={25} /></Link>
                        </div>
                    </div>
                </div>
                <div className="bg-white py-2">
                    <div className="container flex justify-between items-center">
                        <Link href={'/'}><Image src={'/logo.svg'} width={200} height={200} priority alt="Services Reparation" /></Link>
                        <div className="bg-[#0276FF] p-1">
                            <Menu size={40} onClick={() => { setOpen(!open) }} className="stroke-white cursor-pointer hover:rotate-180 duration-700" />
                        </div>
                        <div className={`fixed z-30 inset-0 flex items-center justify-center bg-white duration-700 transition ${open == false ? "translate-x-0" : "translate-x-full"}`}>
                            <button onClick={() => { setOpen(true) }} className="absolute top-4 right-4 text-red-600 ">
                                <X size={40} />
                            </button>
                            <div className="flex flex-col items-center gap-12 text-2xl font-bold">
                                {itemNav.map((ele, index) => (
                                    <button key={index}  className={` text-xl hover:duration-700 transition font-semibold ${activeSection === ele.href ? 'bg-[#0276FF]  text-white p-2' : 'hover:text-[#0276FF] text-black'}`} onClick={() => {handleClick(ele.href), setOpen(!open)}}>
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
