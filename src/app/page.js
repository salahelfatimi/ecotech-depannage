
import AboutUs from "@/components/pages/aboutUs";
import HomePage from "@/components/pages/home";
import Service from "@/components/pages/service";
import PhoneIcon from "@/components/phoneIcon";
import { Phone } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <PhoneIcon/>
      <HomePage/>
      <AboutUs/>
      <Service/>
    </>
  );
}
