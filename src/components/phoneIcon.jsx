import { Phone } from "lucide-react";

export default function PhoneIcon(){
    return(
        <div className=" z-10 flex gap-2 items-center  animate-bounce  fixed bottom-4 right-4 ">
        <span className="  text-sm  text-center text-[#0276FF]  bg-[#ebf0f8] rounded-full items-center justify-center py-2 px-4">
            <div>Avez vous besoin d&apos;aide? </div>
          <strong>Contactez-nous</strong>
        </span>
        <div className="bg-green-600 w-fit p-4 rounded-full ">
          <Phone size={25} className=" stroke-white stroke-2"/>
        </div>
        
      </div>
    )
}