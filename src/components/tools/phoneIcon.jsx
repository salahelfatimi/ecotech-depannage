'use client'
import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PhoneIcon(){
   const [isSubmitted, setIsSubmitted] = useState(false); 
      useEffect(() => {
          if (isSubmitted && window.gtag) {
            window.gtag('event', 'conversion', {
              'send_to': 'AW-16782332928/39X-CIvP9PEZEICouMI-', 
            });
          }
        }, [isSubmitted]);
    return(
        <div className=" z-40 flex gap-2 items-center  animate-bounce  fixed bottom-4 right-4 ">
        <span className="   text-sm  text-center text-[#0276FF] select-none  bg-[#ebf0f8] rounded-full items-center justify-center py-2 px-4">
            <div>Avez vous besoin d&apos;aide? </div>
            <strong>Messagez-nous</strong>
        </span>
        <Link onClick={()=>(setIsSubmitted(true))} href={'https://wa.me/+33771710513'} className="bg-green-600 w-fit p-4 rounded-full ">
          <MessageCircle size={25} className=" stroke-white stroke-2"/>
        </Link>
        
      </div>
    )
}
