import Image from "next/image";
import disponibilite from "/public/gridHome/disponibilite.png";
import guarantee from "/public/gridHome/guarantee.png";
import Interventionrapide from "/public/gridHome/Interventionrapide.png";
import quality from "/public/gridHome/quality.png";
import Carousel from "../tools/carousel";
export default function HomePage(){
    const grid=[
        {title:'Intervention rapide',image:Interventionrapide },
        {title:'Garantie à 100%',image:guarantee},
        {title:'Disponibilité 24/7',image:disponibilite},
        {title:'Service de qualité',image:quality}
    ]
  
    return(
        <div className=" " id="accueil">
           <Carousel/>
           
            <div className="p-10 ">
                <div  className=" container  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-9 lg:flex-row justify-between items-center ">
                    {
                        grid.map((ele,index)=>(
                            <div   className=" flex flex-col gap-4 items-center py-4 bg-white border-[#0276FF] border-4 rounded-3xl " key={index}>
                                <Image src={ele.image} className=" w-24" alt={ele.title} title={ele.title}/>
                                <h3 className=" text-center font-bold text-xl text-[#0276FF]">{ele.title}</h3>
                            </div>
                        ))
                    }
                   
                </div>
                
            </div>
            
        </div>
    )
}