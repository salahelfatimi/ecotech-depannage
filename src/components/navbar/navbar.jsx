'use client';
import { File, MapPin, Menu, Phone, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const itemNav = [
        { title: 'Accueil', href: '/' },
        {
            title: 'Nos services',
            href: '#',
            dropdown: [
                { title: 'Plomberie', href: '/nos_service/plomberie' },
                { title: 'Électricité', href: '/nos_service/electricite' },
                { title: 'Chauffage', href: '/nos_service/chauffage' },
                { title: 'Climatisation', href: '/nos_service/climatisation' },
                { title: 'Serrurerie', href: '/nos_service/serrurerie' },
                { title: 'Vitrerie & Miroiterie', href: '/nos_service/vitrerie_&_miroiterie' },
            ],
        },
        { title: 'Contactez-nous', href: '/contact' }
    ];

    return (
        <div>
            <div className="fixed z-50 right-0 left-0">
                <div className="bg-[#0276FF] p-2">
                    <div className="container flex flex-row justify-between items-center">
                        <span className="font-semibold text-white animate-pulse">7/7 J - 24/24 H</span>
                        <div className="flex gap-2 justify-between">
                            <Link
                                target="_blank"
                                href="https://maps.app.goo.gl/9c9pP89Bc2p9pdUG6"
                                className="flex bg-white py-2 px-4 rounded-full gap-2 font-medium text-[#0276FF] items-center"
                            >
                                <MapPin size={20} />
                                <span className="lg:block hidden">Moselle, France</span>
                            </Link>
                            <Link
                                target="_blank"
                                href="https://wa.me/+33771710513"
                                className="flex gap-2 font-medium bg-white py-2 px-4 rounded-full text-[#0276FF] items-center"
                            >
                                <Phone size={20} />
                                <span className="lg:block hidden">+33 7 71 71 05 13</span>
                            </Link>
                            <Link
                                target="_blank"
                                href="https://wa.me/+33771710513"
                                className="flex bg-[#EA7B36] py-2 px-4 rounded-full gap-2 font-medium text-white items-center"
                            >
                                <File size={20} />
                                <span className="lg:block hidden">Devis gratuit</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-white py-2 shadow-md">
                    <div className="container flex justify-between items-center">
                        <Link href="/" className="flex gap-4 items-center justify-center">
                            <Image
                                src="/logo.svg"
                                width={70}
                                height={70}
                                priority
                                alt="Services Reparation"
                            />
                            <h2 className="flex flex-col font-medium lg:text-2xl">
                                EcoTech <span className="text-[#0276FF]">Dépannage</span>
                            </h2>
                        </Link>
                        <div className="xl:block hidden">
                            <ul className="flex gap-10 items-center">
                                {itemNav.map((ele, index) => (
                                    <li
                                        key={index}
                                        className="relative group"
                                    >
                                        <div className="flex items-center gap-1 cursor-pointer font-medium text-black hover:text-[#0276FF]">
                                            <Link href={ele.href} className="flex items-center">
                                                {ele.title}
                                                {ele.dropdown && <ChevronDown size={16} />}
                                            </Link>
                                        </div>
                                        {ele.dropdown && (
                                            <ul
                                                className="absolute left-0 top-full bg-white shadow-lg mt-2 rounded-md border border-gray-200 w-48 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300"
                                            >
                                                {ele.dropdown.map((item, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="hover:bg-[#0276FF] hover:text-white rounded-md"
                                                    >
                                                        <Link
                                                            href={item.href}
                                                            className="block px-4 py-2 text-black hover:text-white"
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="xl:hidden block">
                            <Menu size={40} className="cursor-pointer" onClick={() => setOpen(!open)} />
                            {open && (
                                <div className="fixed z-50 inset-0 bg-white p-4">
                                    <X
                                        size={40}
                                        className="text-red-600 cursor-pointer"
                                        onClick={() => setOpen(false)}
                                    />
                                    <ul className="mt-8 space-y-4">
                                        {itemNav.map((ele, index) => (
                                            <li key={index} className="text-lg">
                                                {ele.dropdown ? (
                                                    <div className="flex flex-col">
                                                        <button
                                                            className="flex justify-between items-center w-full text-left font-medium text-black hover:text-[#0276FF]"
                                                            onClick={() =>
                                                                setDropdownOpen((prev) =>
                                                                    prev === index ? null : index
                                                                )
                                                            }
                                                        >
                                                            {ele.title}
                                                            <ChevronDown
                                                                size={20}
                                                                className={`transition-transform duration-300 ${
                                                                    dropdownOpen === index
                                                                        ? "rotate-180"
                                                                        : ""
                                                                }`}
                                                            />
                                                        </button>
                                                        {dropdownOpen === index && (
                                                            <ul className="ml-4 mt-2 space-y-2">
                                                                {ele.dropdown.map((item, idx) => (
                                                                    <li key={idx}>
                                                                        <Link
                                                                            href={item.href}
                                                                            className="block text-black hover:text-[#0276FF]"
                                                                            onClick={() => setOpen(false)}
                                                                        >
                                                                            {item.title}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <Link
                                                        href={ele.href}
                                                        className="block text-black hover:text-[#0276FF]"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        {ele.title}
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
