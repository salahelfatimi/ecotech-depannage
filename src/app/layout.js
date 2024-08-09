import { Fredoka } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const fredoka = Fredoka({ subsets: ["hebrew"] });

export const metadata = {
  title: "EcoTech Dépannage | Urgence Plombier, Électricien, Serrurier 24/7",
  description: "EcoTech Dépannage à Sarreguemines : Intervention rapide 24/7 pour plomberie, électricité, serrurerie et vitrerie. Appelez +33 7 71 71 05 13 pour un service efficace et écologique.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`,),
  keywords: ["Dépannage Sarreguemines, vitrier Sarreguemines, serrurier Sarreguemines, plombier Sarreguemines, électricien Sarreguemines, intervention d'urgence, service 24h/24, réparation écologique, EcoTech Dépannage."],
  alternates: {
    canonical: "/fr-FR",
  },
  openGraph: {
    title: 'EcoTech Dépannage | Urgence Plombier, Électricien, Serrurier 24/7',
    description: "EcoTech Dépannage à Sarreguemines : Intervention rapide 24/7 pour plomberie, électricité, serrurerie et vitrerie. Appelez +33 7 71 71 05 13 pour un service efficace et écologique.",
    url:`${process.env.NEXT_PUBLIC_BASE_URL}`,
    siteName: "EcoTech Depannage",
    images: [
      {
        url: `/opengraph-image.jpg`,
        secureUrl: `/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: `EcoTech Dépannage | Urgence Plombier, Électricien, Serrurier 24/7`,
      }
    ],
    type: "website",
   
  },
  
 
};




export default function RootLayout({ children }) {
  return (
    <html lang="fr-FR">
      <body className={`${fredoka.className} flex flex-col  	  scrollbar scrollbar-thumb-[#0276FF] `}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
