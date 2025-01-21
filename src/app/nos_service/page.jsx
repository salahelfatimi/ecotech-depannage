import Image from "next/image";
import Electricite from "/public/service/electricite.jpg";
import Plomberie from "/public/service/plomberie.jpg";
import Climatisation from "/public/service/climatisation.jpg";
import Chauffage from "/public/service/chauffage.jpg";
import Serrurerie from "/public/service/serrurerie.jpg";
import VitrerieMiroiterie from "/public/service/vitrerie-&-Miroiterie.jpg";
import Link from "next/link";

export  function generateMetadata() {
    return {
      title: "Services Multi-Experts",
      description: "EcoTech Dépannage, le service de réparation fiable en Moselle, France, est votre expert pour les interventions d'urgence. Avec une équipe de vitriers, serruriers, plombiers et électriciens qualifiés, EcoTech Dépannage vous garantit une disponibilité 24h/24 et 7j/7 pour les réparations urgentes. Qu'il s'agisse d'une vitre cassée, d'une serrure bloquée, d'un problème de plomberie ou d'une panne électrique, leur équipe de professionnels est prête à résoudre vos problèmes rapidement et efficacement.",
      alternates: {
        canonical: "/nos_service",
      },
      openGraph: {
        title: "EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7 | Services Multi-Experts",
        description: "EcoTech Dépannage offre des services d'urgence 24h/24 et 7j/7 en Électricité, Plomberie, Climatisation, Chauffage, Serrurerie et Vitrerie. Nos experts interviennent rapidement pour résoudre tous vos problèmes techniques avec des solutions fiables et efficaces, garantissant votre satisfaction et sécurité.",
        url:`${process.env.NEXT_PUBLIC_BASE_URL}/nos_service`,
        robots: {
          index: true,
          follow: true,
        },
        siteName: "EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7",
        images: [
          {
            url: `/opengraph-image.jpg`,
            secureUrl: `/opengraph-image.jpg`,
            width: 1200,
            height: 675,
            alt: "EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7 | Services Multi-Experts",
          }
        ],
        type: "website",
      
      },
      
     
    };
   
  }
  
export default function Nos_Service(){
    const services = [
        {
            title: 'Electricité',
            description: 'Vous recherchez un électricien compétent pour la réparation rapide de pannes électriques ou la mise aux normes de votre tableau électrique ? Nos professionnels assurent des interventions sécurisées et ses environs. Contactez-nous pour un service rapide et fiable.',
            image: Electricite,
            url:'electricite'
            
        },
        {
            title: 'Plomberie',
            description: "En cas de fuites d'eau, de toilettes bouchées, ou de pannes d'eau chaude, nos plombiers expérimentés interviennent rapidement. Disponibles 24/7, nous garantissons des réparations efficaces pour tous vos besoins en plomberie .",
            image: Plomberie,
            url:'plomberie'
        },
        {
            title: 'Climatisation',
            description: "Rencontrez-vous des problèmes de climatisation comme des voyants éteints, des fuites d'eau ou des bruits anormaux ? Nos spécialistes interviennent rapidement pour un service de réparation fiable et efficace, vous assurant un confort optimal tout au long de l'année.",
            image: Climatisation,
            url:'climatisation'
        },
        {
            title: 'Chauffage',
            description: "Pour la réparation de systèmes de chauffage, choisissez EcoTech Dépannage. Nous offrons un service rapide, fiable, et sur mesure pour améliorer votre confort thermique et votre efficacité énergétique.",
            image: Chauffage,
            url:'chauffage'
        },
        {
            title: 'Serrurerie',
            description: "Perte de clés ou porte bloquée ? Nos serruriers interviennent en urgence  et ses environs pour l'ouverture de porte et le remplacement de serrure, avec une intervention garantie sous 30 minutes, disponible 24 heures sur 24, 7 jours sur 7.",
            image: Serrurerie,
            url:'serrurerie'
        },
        {
            title: 'Vitrerie & Miroiterie',
            description: "Besoin de remplacer un vitrage ou un miroir ? Faites appel à nos vitriers qualifiés pour des réparations rapides et efficaces, qu'il s'agisse d'un bris de glace ou d'une rénovation.",
            image: VitrerieMiroiterie,
            url:'vitrerie_&_miroiterie'
        },
    ];
      
    return (
        <div className="bg-gray-100 py-10 ">
            <div className=" mx-auto flex flex-col gap-10">
                <div className="relative h-screen min-w-full w-full">
                    <div className="bg-black opacity-60 inset-0 absolute"></div>
                    <Image
                        width={1920}
                        height={1080}
                        src="/carousel/bg.png"
                        alt="Services Multi-Experts 24h/24 - Électricité, Plomberie, Serrurerie, Climatisation, Chauffage et Vitrerie"
                        className="object-cover object-left-bottom h-screen min-w-full w-full"
                        title="Services Multi-Experts 24h/24 - Électricité, Plomberie, Serrurerie, Climatisation, Chauffage et Vitrerie"
                    />
                    <div className="absolute inset-0 container text-center space-y-1 p-2 rounded-xl md:space-y-4 flex items-center justify-center flex-col">
                    <h1 className="font-black text-2xl md:text-6xl text-white text-center">
                        Services Multi-Experts 24h/24 - Électricité, Plomberie, Serrurerie, Climatisation, Chauffage et Vitrerie            
                    </h1>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 container">
              {services.map((service, index) => (
                <div key={index} className=" flex lg:flex-row flex-col items-center justify-center  lg:even:flex-row-reverse lg:w-[90%] bg-[#0276FF] rounded-xl  lg:p-2">
                    <Image src={service.image} alt={service.title} width={400} height={250} className=" h-96 w-full object-cover rounded-xl  " />
                    <div className=" w-full flex flex-col p-4 gap-6 ">
                        <div className=" h-1/2 ">
                            <h2 className="text-4xl font-semibold text-white mb-4">{service.title}</h2>
                            <p className="text-white ">{service.description}</p>
                        </div>
                        <Link href={`/nos_service/${service.url}`} className="bg-[#0276FF] py-4 text-center text-white hover:bg-white hover:text-[#0276FF] duration-500 border-4 border-white hover:border-[#0276FF] uppercase font-semibold rounded-xl w-full ">voir plus</Link>

                    </div>
                   
                </div>
              ))}
            </div>
          </div>
        </div>
    );
}