import Image from "next/image";
import disponibilite from "/public/gridHome/disponibilite.png";
import guarantee from "/public/gridHome/guarantee.png";
import Interventionrapide from "/public/gridHome/Interventionrapide.png";
import bg from "/public/bg.png";
import quality from "/public/gridHome/quality.png";
export default function HomePage(){
    const grid=[
        {title:'Intervention rapide',image:Interventionrapide },
        {title:'Garantie à 100%',image:guarantee},
        {title:'Disponibilité 24/7',image:disponibilite},
        {title:'Service de qualité',image:quality}
    ]
    return(
        <div className=" ">
           
            <div className="   flex flex-col gap-6     ">
                <div className="relative z-0">
                    <Image src={bg} className=" h-screen min-w-full w-full  object-cover object-left-top"  placeholder="blur" alt='Service de maintenance' title='Service de maintenance'/>
                    <div className="absolute inset-0 flex justify-center items-center flex-col gap-6">
                        <p className=" bg-[#ffff] p-4 font-semibold text-lg xl:text-2xl text-[#0276FF] ">Service de maintenance</p>
                        <h1 className="   font-semibold text-3xl xl:text-6xl text-white text-center">Un électricien qualifié près de chez vous</h1>
                        <button className=" bg-[#0276FF] p-4 font-semibold text-2xl text-white hover:border-white hover:bg-white/0 duration-500 border-[#0276FF] border-4" >Appeler nous</button>

                    </div>
                </div>
               
            </div>
            <div className="p-10 bg-[#F4F8FF]">
                <div className=" container  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-9 lg:flex-row justify-between items-center ">
                    {
                        grid.map((ele,index)=>(
                            <div className=" flex flex-col gap-4 items-center py-8 bg-white " key={index}>
                                <Image src={ele.image} className=" w-28" alt={ele.title} title={ele.title}/>
                                <h3 className=" text-center font- font-semibold text-xl">{ele.title}</h3>
                            </div>
                        ))
                    }
                   
                </div>
            </div>
        </div>
    )
}