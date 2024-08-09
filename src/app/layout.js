import { Fredoka } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const fredoka = Fredoka({ subsets: ["hebrew"] });

export const metadata = {
  title: "EcoTech Dépannage | Urgence Plombier, Électricien, Serrurier 24/7",
  description: "EcoTech Dépannage, votre expert en dépannage à Sarreguemines, France. Vitrier, serrurier, plombier, et électricien, disponibles 7J/7, 24h/24 pour des interventions d'urgence. Contactez-nous au +33 7 71 71 05 13 pour un service rapide et écologique.",
  metadataBase: new URL('https://services-reparation.vercel.app'),
  keywords: ["Dépannage Sarreguemines, vitrier Sarreguemines, serrurier Sarreguemines, plombier Sarreguemines, électricien Sarreguemines, intervention d'urgence, service 24h/24, réparation écologique, EcoTech Dépannage."],
  alternates: {
    canonical: "/fr",
  },
  openGraph: {
    title: 'EcoTech Depannage',
    description: "EcoTech Dépannage, votre expert en dépannage à Sarreguemines, France. Vitrier, serrurier, plombier, et électricien, disponibles 7J/7, 24h/24 pour des interventions d'urgence. Contactez-nous au +33 7 71 71 05 13 pour un service rapide et écologique.",
    url: 'https://services-reparation.vercel.app/',
    siteName: "EcoTech Depannage",
    images: [
      {
        url: `/opengraph-image.jpg`,
        secureUrl: `/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: `EcoTech Dépannage, votre expert en dépannage à Sarreguemines, France. Vitrier, serrurier, plombier, et électricien, disponibles 7J/7, 24h/24 pour des interventions d'urgence. Contactez-nous au +33 7 71 71 05 13 pour un service rapide et écologique.  `,
      }
    ],
    type: "website",
   
  },
  
 
};




export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${fredoka.className} flex flex-col  	  scrollbar scrollbar-thumb-[#0276FF] `}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
