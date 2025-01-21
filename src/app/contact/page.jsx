import Contact from "@/components/pages/contact";

export  function generateMetadata() {
    return {
      title: "Contact",
      description: "EcoTech Dépannage, le service de réparation fiable en Moselle, France, est votre expert pour les interventions d'urgence. Avec une équipe de vitriers, serruriers, plombiers et électriciens qualifiés, EcoTech Dépannage vous garantit une disponibilité 24h/24 et 7j/7 pour les réparations urgentes. Qu'il s'agisse d'une vitre cassée, d'une serrure bloquée, d'un problème de plomberie ou d'une panne électrique, leur équipe de professionnels est prête à résoudre vos problèmes rapidement et efficacement.",
      alternates: {
        canonical: "/contact",
      },
      openGraph: {
        title: "EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7 | contact",
        description: "EcoTech Dépannage, le service de réparation fiable en Moselle, France, est votre expert pour les interventions d'urgence. Avec une équipe de vitriers, serruriers, plombiers et électriciens qualifiés, EcoTech Dépannage vous garantit une disponibilité 24h/24 et 7j/7 pour les réparations urgentes. Qu'il s'agisse d'une vitre cassée, d'une serrure bloquée, d'un problème de plomberie ou d'une panne électrique, leur équipe de professionnels est prête à résoudre vos problèmes rapidement et efficacement.",
        url:`${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
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
            alt: "EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7 | contact",
          }
        ],
        type: "website",
      
      },
      
     
    };
   
  }

  
export default function ContactPage(){
  return(
    <div className=" flex flex-col gap-12  ">
      <Contact/>
    </div>
  )
}