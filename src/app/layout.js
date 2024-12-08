import { Fredoka } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';  // Add this import

const fredoka = Fredoka({ subsets: ["hebrew"] });

export const metadata = {
  title: "EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7",
  description: "EcoTech Dépannage, votre expert en dépannage à Sarreguemines, France. Vitrier, serrurier, plombier, et électricien, disponibles 7J/7, 24h/24 pour des interventions d'urgence. Contactez-nous au +33 7 71 71 05 13 pour un service rapide.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  keywords: [
    "plombier urgence", "Dépannage plomberie", "urgence plomberie", "urgence plombier", 
    "plombier Sarreguemines", "Dépannage Sarreguemines", "vitrier Sarreguemines", 
    "serrurier Sarreguemines", "plombier Sarreguemines", "électricien Sarreguemines", 
    "intervention d'urgence", "service 24h/24", "EcoTech Dépannage", "dépannage d'urgence 24h/24", 
    "dépannage 7j/7 Sarreguemines", "plombier urgence Sarreguemines", "serrurier urgence Sarreguemines", 
    "vitrier Sarreguemines urgence", "électricien Sarreguemines 24h/24", "intervention rapide Sarreguemines", 
    "EcoTech Dépannage urgence", "réparation écologique Sarreguemines"
  ],
  openGraph: {
    title: "EcoTech Dépannage | Dépannage d'urgence 24h/24 et 7j/7",
    description: "EcoTech Dépannage, votre expert en dépannage à Sarreguemines, France. Vitrier, serrurier, plombier, et électricien, disponibles 7J/7, 24h/24 pour des interventions d'urgence. Contactez-nous au +33 7 71 71 05 13 pour un service rapide.",
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

        {/* Google Ads Global Site Tag */}
        <Script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=AW-16782332928" 
        />
        <Script id="google-ads-gtag">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'AW-16782332928');
          `}
        </Script>

        {/* Conversion Event Tracking */}
        <Script id="google-ads-conversion">
          {`
            gtag('event', 'conversion', {
              'send_to': 'AW-16782332928/TjtCCI_S4fQZEICouMI-',
              'phone_conversion_number': '+33 7 71 71 05 13'
            });
          `}
        </Script>


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
