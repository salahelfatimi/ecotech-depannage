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
           
            <div className="p-10 bg-[#F4F8FF]">
                <div  className=" container  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-9 lg:flex-row justify-between items-center ">
                    {
                        grid.map((ele,index)=>(
                            <div   className=" flex flex-col gap-4 items-center py-8 bg-white " key={index}>
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