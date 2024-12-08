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
            description: 'Vous recherchez un électricien compétent pour la réparation rapide de pannes électriques ou la mise aux normes de votre tableau électrique ? Nos professionnels assurent des interventions sécurisées dans toute la région de Sarreguemines et ses environs. Contactez-nous pour un service rapide et fiable.',
            image: Electricite
        },
        {
            title: 'Plomberie',
            description: "En cas de fuites d'eau, de toilettes bouchées, ou de pannes d'eau chaude, nos plombiers expérimentés interviennent rapidement. Disponibles 24/7, nous garantissons des réparations efficaces pour tous vos besoins en plomberie à Sarreguemines.",
            image: Plomberie
        },
        {
            title: 'Climatisation',
            description: "Rencontrez-vous des problèmes de climatisation comme des voyants éteints, des fuites d'eau ou des bruits anormaux ? Nos spécialistes interviennent rapidement pour un service de réparation fiable et efficace, vous assurant un confort optimal tout au long de l'année.",
            image: Climatisation
        },
        {
            title: 'Chauffage',
            description: "Pour la réparation de systèmes de chauffage, choisissez EcoTech Dépannage. Nous offrons un service rapide, fiable, et sur mesure pour améliorer votre confort thermique et votre efficacité énergétique.",
            image: Chauffage
        },
        {
            title: 'Bornes De Recharge',
            description: "Confiez l’installation de vos bornes de recharge à EcoTech Dépannage. Nos experts fournissent à Sarreguemines un service rapide et professionnel pour répondre à tous vos besoins en mobilité électrique.",
            image: installationBorneDeRecharge
        },
        {
            title: 'Serrurerie',
            description: "Perte de clés ou porte bloquée ? Nos serruriers interviennent en urgence à Sarreguemines et ses environs pour l'ouverture de porte et le remplacement de serrure, avec une intervention garantie sous 30 minutes, disponible 24 heures sur 24, 7 jours sur 7.",
            image: Serrurerie
        },
        {
            title: 'Vitrerie & Miroiterie',
            description: "Besoin de remplacer un vitrage ou un miroir ? Faites appel à nos vitriers qualifiés pour des réparations rapides et efficaces, qu'il s'agisse d'un bris de glace ou d'une rénovation.",
            image: VitrerieMiroiterie
        },
    ];
    
    return(
        <div id="nos-services" className="bg-[#F4F8FF] py-28 relative z-20 ">
            <div className="rounded-full-css bg-[#0276FF] w-full h-16 top-0 absolute  z-10 "></div>
            <div className="rounded-full-css bg-[#0276FF] w-full h-16 bottom-0 absolute rotate-180 z-10 "></div>

            <div className="relative z-20 container flex flex-col gap-4">
                <h2 className="font-bold text-3xl xl:text-6xl text-[#0276FF] text-center">Nos services</h2>
                <p className=" p-4 text-center text-2xl xl:text-3xl text-black ">Notre champs d&apos;intervention</p>
                <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 items-center  justify-center">
                    {
                        service.map((ele,index)=>(
                            <div key={index} className="last:col-start-1  xl:last:col-start-2 flex flex-col  p-2 gap-6 bg-[#0276FF] h-full rounded-3xl ">
                                <Image 
                                src={ele.image} 
                                placeholder="blur"
                                title={ele.title}
                                className=" object-cover w-full rounded-3xl  h-[300px] "
                                alt={ele.title}
                                />
                                
                                <div className=" flex flex-col items-center  gap-6 text-center  ">
                                    <h3 className=" text-white font-medium text-2xl ">{ele.title}</h3>
                                    <p className=" text-white text-lg">{ele.description}</p>
                                </div>
                                {/* <Link href={'/'} className="bg-[#0276FF] py-4 text-center text-white hover:bg-white hover:text-[#0276FF] duration-500 border-4 border-white hover:border-[#0276FF] uppercase font-semibold rounded-b-md ">voir plus</Link> */}
                            </div>
                        ))
                    }
                </div>
            </div>
           
        </div>
    )
}