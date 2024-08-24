
import AboutUs from "@/components/pages/aboutUs";
import Contact from "@/components/pages/contact";
import HomePage from "@/components/pages/home";
import Marche from "@/components/pages/marche";
import Service from "@/components/pages/service";
import PhoneIcon from "@/components/tools/phoneIcon";
import { Phone } from "lucide-react";
import Image from "next/image";

export default async function Home() {
  await new Promise(resolve => setTimeout(resolve, 3000));
  return (
    <main className=" flex flex-col ">
      <PhoneIcon/>
      <HomePage/>
      <AboutUs/>
      <Service/>
      <Marche/>
      <Contact/>
    </main>
  );
}
