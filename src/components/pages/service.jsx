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
    const service=[
        {title:'Electricité', description:'Pour toute panne électrique ou mise aux normes de votre tableau, faites appel à des électriciens qualifiés pour des interventions rapides et sécurisées.',image:Electricite},
        {title:'Plomberie', description:"Pour les fuites, les toilettes bouchées ou les pannes d'eau chaude, faites appel à notre réseau de plombiers expérimentés  pour une intervention rapide et efficace.",image:Plomberie},
        {title:'Climatisation', description:"Les problèmes courants de climatiseur incluent : voyants éteints ou clignotants, air insuffisant, fuite d'eau , bruit anormal, ou arrêt automatique. Si vous rencontrez ces dysfonctionnements, il est important de consulter un professionnel pour une réparation rapide.",image:Climatisation},
        {title:'Chauffage', description:"Choisissez EcoTech Depannage pour l'installation et la réparation de vos systèmes de chauffage. Service rapide, fiable et sur mesure pour un confort optimal et une efficacité énergétique maximale.",image:Chauffage},
        {title:'Installation Borne De Recharge', description:"Avec Grit Service, optez pour EcoTech Depannage pour l'installation et la réparation de bornes de recharge. Bénéficiez d'un service rapide, fiable et de haute qualité.",image:installationBorneDeRecharge},
        {title:'Serrurerie', description:"Si vous avez perdu vos clés, les avez laissées à l'intérieur ou avez été victime d'une infraction, Grit Service intervient dans les 30 minutes, 24/7, pour ouvrir votre porte ou remplacer votre serrure si nécessaire.",image:Serrurerie},
        {title:'Vitrerie & Miroiterie', description:'En cas de bris de glace ou de besoin de remplacer un miroir ou un plateau de verre, EcoTech Depannage vous connecte à des vitriers qualifiés pour des réparations rapides et efficaces.',image:VitrerieMiroiterie},

    ]
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