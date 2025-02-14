import Image from "next/image"
import RealisationsCarousel from "../tools/realisationsCarousel"

export default function Realisations(){
   
    return(
        <div id="nos-realisations" className="bg-[#0276FF] py-10 ">
            <div className=" flex flex-col gap-4 ">
                <h2 className="font-bold text-3xl xl:text-6xl text-white text-center">Nos Realisations</h2>
                <p className=" p-4 text-center text-2xl xl:text-3xl text-white ">Explorez notre savoir-faire à travers nos réalisations.</p>
                <div className="mb-10">
                    <RealisationsCarousel direction="backward" startImage={1} limiteImage={9} />
                </div>
                <div className="mb-4">
                    <RealisationsCarousel direction="forward" startImage={10} limiteImage={9} />
                </div>

            </div>
           
        </div>
    )
}