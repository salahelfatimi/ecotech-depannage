import Image from "next/image"
import Electricite from "/public/service/electricite.jpg";
import Plomberie from "/public/service/plomberie.jpg";
import Climatisation from "/public/service/climatisation.jpg";
import Chauffage from "/public/service/chauffage.jpg";
import installationBorneDeRecharge from "/public/service/installation-Borne-De-Recharge.jpg";
import Serrurerie from "/public/service/serrurerie.jpg";
import VitrerieMiroiterie from "/public/service/vitrerie-&-Miroiterie.jpg";
import Link from "next/link";
export default function Service(){
    const service = [
        {
            title: 'Electricité',
            description: 'Faites appel à des électriciens qualifiés pour la réparation rapide de pannes électriques, la mise aux normes de votre tableau électrique et des interventions sécurisées, partout à Sarreguemines et ses environs.',
            image: Electricite
        },
        {
            title: 'Plomberie',
            description: "Réparez rapidement les fuites d'eau, les toilettes bouchées, et les pannes d'eau chaude avec nos plombiers expérimentés. Intervention d'urgence et efficace, disponible 24/7.",
            image: Plomberie
        },
        {
            title: 'Climatisation',
            description: "Problèmes de climatisation? Nos experts en climatisation interviennent pour des pannes courantes comme les voyants éteints, fuites d'eau, ou bruit anormal. Service de réparation rapide et fiable.",
            image: Climatisation
        },
        {
            title: 'Chauffage',
            description: "Pour l'installation et la réparation de systèmes de chauffage, choisissez EcoTech Dépannage. Service rapide, fiable, et sur mesure pour un confort thermique optimal et une efficacité énergétique améliorée.",
            image: Chauffage
        },
        {
            title: 'Installation Borne De Recharge',
            description: "Confiez l'installation et la réparation de vos bornes de recharge à EcoTech Dépannage. Service rapide et professionnel pour la mobilité électrique, avec des solutions adaptées à vos besoins.",
            image: installationBorneDeRecharge
        },
        {
            title: 'Serrurerie',
            description: "Perte de clés ou porte bloquée? Nos serruriers interviennent en urgence pour l'ouverture de porte ou le remplacement de serrure. Service disponible 24/7, intervention sous 30 minutes.",
            image: Serrurerie
        },
        {
            title: 'Vitrerie & Miroiterie',
            description: 'Besoin de remplacer un vitrage ou un miroir? Faites appel à nos vitriers qualifiés pour des réparations rapides et efficaces, que ce soit pour un bris de glace ou une rénovation.',
            image: VitrerieMiroiterie
        },
    ];
    
    return(
        <div id="nos-services" className="bg-[#F4F8FF] py-8 select-none">
            <div className=" container flex flex-col gap-4">
                <h2 className="font-bold text-3xl xl:text-6xl text-[#0276FF] text-center">Nos services</h2>
                <p className=" p-4 text-center font-semibold text-2xl xl:text-4xl text-black ">Notre champs d&apos;intervention</p>
                <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4  justify-center">
                    {
                        service.map((ele,index)=>(
                            <div key={index} className="last:col-start-1  xl:last:col-start-2 flex flex-col justify-between  gap-6 bg-white h-full rounded-xl ">
                                <Image 
                                src={ele.image} 
                                placeholder="blur"
                                title={ele.title}
                                className=" object-cover w-full  h-[300px] "
                                alt={ele.title}
                                />
                                
                                <div className=" flex flex-col items-center gap-6 text-center p-4 ">
                                    <h3 className=" text-[#0276FF] font-semibold text-2xl ">{ele.title}</h3>
                                    <p className=" font-medium text-lg">{ele.description}</p>
                                </div>
                                <Link href={'/'} className="bg-[#0276FF] py-4 text-center text-white hover:bg-white hover:text-[#0276FF] duration-500 border-4 border-white hover:border-[#0276FF] uppercase font-semibold rounded-b-md ">voir plus</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
           
        </div>
    )
}