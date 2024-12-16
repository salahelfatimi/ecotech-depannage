import { Fredoka } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';  // Add this import

const fredoka = Fredoka({ subsets: ["hebrew"] });

export const metadata = {
  title: "EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7",
  description: "EcoTech Dépannage, the reliable repair service in Moselle, France, is your expert for emergency interventions. With a team of skilled glaziers, locksmiths, plumbers, and electricians, EcoTech Dépannage provides 24/7 availability for urgent repairs. Whether it's a broken window, a jammed lock, a plumbing issue, or an electrical fault, their team of professionals is ready to resolve your problems quickly and efficiently.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  keywords: [
    "plombier urgence", "Dépannage plomberie", "urgence plomberie", "urgence plombier", 
    "plombier ", "Dépannage ", "vitrier ", 
    "serrurier ", "plombier ", "électricien ", 
    "intervention d'urgence", "service 24h/24", "EcoTech Dépannage", "dépannage d'urgence 24h/24", 
    "dépannage 7j/7 ", "plombier urgence ", "serrurier urgence ", 
    "vitrier  urgence", "électricien  24h/24", "intervention rapide ", 
    "EcoTech Dépannage urgence", "réparation écologique "
  ],
  openGraph: {
    title: "EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7",
    description: "EcoTech Dépannage, the reliable repair service in Moselle, France, is your expert for emergency interventions. With a team of skilled glaziers, locksmiths, plumbers, and electricians, EcoTech Dépannage provides 24/7 availability for urgent repairs. Whether it's a broken window, a jammed lock, a plumbing issue, or an electrical fault, their team of professionals is ready to resolve your problems quickly and efficiently.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    siteName: "EcoTech Dépannage",
    images: [
      {
        url: `/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: `EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7`,
      }
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta property="og:url" content={`https://www.ecotechdepannage.com`} />
        {/* Google Analytics */}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_MEASUREMENT_ID} />
        {/* Google Tag Manager */}
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_MEASUREMENT_ID_MANAGER} />
      </head>
      <body className={`${fredoka.className} scrollbar scrollbar-thumb-[#0276FF]`}>
        <div className="flex flex-col h-screen justify-between ">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
