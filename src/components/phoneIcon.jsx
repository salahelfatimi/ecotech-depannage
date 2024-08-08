import { Phone } from "lucide-react";

export default function PhoneIcon(){
    return(
        <div className=" z-10 flex gap-2 items-center  animate-bounce  fixed bottom-4 right-4 ">
        <span className="  text-sm  text-center bg-[#0276FF] border-white border-4 text-white rounded-full items-center justify-center p-2">
            <div>Avez vous besoin d&apos;aide? </div>
          <strong>Contactez-nous</strong>
        </span>
        <div className="bg-green-600 w-fit p-4 rounded-full ">
          <Phone size={30} className=" stroke-white stroke-2"/>
        </div>
        
      </div>
    )
}