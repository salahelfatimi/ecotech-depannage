'use client'
import { MessageCircle, Phone } from "lucide-react";
import Head from "next/head";

function gtag_report_conversion(url) {
  const callback = () => {
    if (typeof url !== "undefined") {
      window.location = url;
    }
  };
  if (window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-16782332928/yCXGCJnks_gZEICouMI-",
      value: 1.0,
      currency: "MAD",
      event_callback: callback,
    });
  }
  return false;
}

export default function PhoneIcon(){
    return(
        <div className=" z-40 flex gap-2 items-center  animate-bounce  fixed bottom-4 right-4 ">
        <Head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16782332928"></script>
          <script dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16782332928');
            `
          }} />
      </Head>
        <span className="   text-sm  text-center text-[#0276FF] select-none  bg-[#ebf0f8] rounded-full items-center justify-center py-2 px-4">
            <div>Avez vous besoin d&apos;aide? </div>
            <strong>Messagez-nous</strong>
        </span>
        <button onClick={() => gtag_report_conversion("https://wa.me/+33771710513")}  className="bg-green-600 w-fit p-4 rounded-full ">
          <MessageCircle size={25} className=" stroke-white stroke-2"/>
        </button>
        
      </div>
    )
}
