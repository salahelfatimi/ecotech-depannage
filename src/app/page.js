'use client'
import AboutUs from "@/components/pages/aboutUs";
import Contact from "@/components/pages/contact";
import HomePage from "@/components/pages/home";
import Marche from "@/components/pages/marche";
import Realisations from "@/components/pages/realisations";
import Service from "@/components/pages/service";
import PhoneIcon from "@/components/tools/phoneIcon";
import Head from "next/head";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    const handleRouteChange = () => {
      if (typeof window.gtag === "function") {
        window.gtag("config", "AW-16782332928", {
          page_path: process.env.NEXT_PUBLIC_BASE_URL,
        });
        console.log("Page view tracked:", process.env.NEXT_PUBLIC_BASE_URL);
      }
    };
    handleRouteChange()
  }, []);

  return (
    <main className="flex flex-col">
      <Head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16782332928"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16782332928');
            `,
          }}
        />
      </Head>
      <PhoneIcon />
      <HomePage />
      <AboutUs />
      <Realisations />
      <Service />
      <Marche />
      <Contact />
    </main>
  );
}
