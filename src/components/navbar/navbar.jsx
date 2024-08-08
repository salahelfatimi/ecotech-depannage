import { MapPin, Menu, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    const itemNav=[
        {title:'Accueil',href:'accueil'},
        {title:'Qui sommes nous',href:'qui-sommes-nous'},
        {title:'Nos services',href:'nos-services'},
        {title:'Comment Ca Marche',href:'comment-ca-marche'},
        {title:'Contactez-nous',href:'contactez-nous'}
    ]
    return(
        <>
            <div className="fixed z-20 right-0 left-0 lg:block hidden ">
                <div className="bg-[#0276FF] p-4  ">
                    <div className=" container flex flex-row justify-between ">
                        <span className=" font-semibold text-white animate-pulse">7/7 J - 24/24 H</span>
                        <div className=" flex gap-6 justify-between">
                            <Link href={'/'} className=" flex gap-2 font-semibold text-white items-center"><MapPin size={25} />Sarreguemines, France</Link>
                            <Link href={'tel:+33771710513'} className=" flex gap-2 font-semibold text-white items-center"><Phone size={25}/>+33 7 71 71 05 13</Link>

                        </div>
                    </div>
                </div>
                <div className=" bg-white py-2 ">
                    <div className=" container  flex justify-between items-center">
                        <Image src={'/logo.svg'} width={170} height={170} priority alt="Services Reparation"/>
                        <ul className=" flex gap-10 items-center">
                            {
                                itemNav.map((ele,index)=>{
                                    return(
                                        <li key={index} className=" font-medium"><Link href={ele.href}>{ele.title}</Link></li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                </div>
            </div>


            {/* Navbar mobile */}
            <div className="fixed right-0 left-0 block lg:hidden z-20">
                <div className="bg-[#0276FF] p-4  ">
                    <div className=" container flex flex-row justify-between ">
                        <span className=" font-semibold text-white  animate-pulse">7/7 J - 24/24 H</span>
                        <div className=" flex gap-6 justify-between">
                            <Link href={'/'} className=" flex gap-2 font-semibold text-white items-center"><MapPin size={25} /></Link>
                            <Link href={'tel:+33771710513'} className=" flex gap-2 font-semibold text-white items-center"><Phone size={25}/></Link>

                        </div>
                    </div>
                </div>
                <div className=" bg-white py-2  ">
                    <div className=" container  flex justify-between items-center">
                        <Image src={'/logo.svg'} width={170} height={170} priority  alt="Services Reparation"/>
                        <div className="bg-[#0276FF] p-1">
                            <Menu size={40} className=" stroke-white "/>
                        </div>
                       
                    </div>

                </div>
            </div>
        </>
    )
}