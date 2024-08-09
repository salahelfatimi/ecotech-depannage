import { Phone } from "lucide-react";
import Link from "next/link";

export default function PhoneIcon(){
    return(
        <div className=" z-10 flex gap-2 items-center  animate-bounce  fixed bottom-4 right-4 ">
        <span className=" hidden xl:block  text-sm  text-center text-[#0276FF] select-none  bg-[#ebf0f8] rounded-full items-center justify-center py-2 px-4">
            <div>Avez vous besoin d&apos;aide? </div>
          <strong>Contactez-nous</strong>
        </span>
        <Link href="https://wa.me/33771710513" target="_blank" className="bg-green-600 w-fit p-4 rounded-full ">
          <Phone size={25} className=" stroke-white stroke-2"/>
        </Link>
        
      </div>
    )
}