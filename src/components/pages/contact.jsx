"use client";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

export default function Contact(){
    const [isLoading, setIsLoading] = useState(false);
    const [validation, setValidation] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false); 
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        purpose: "",
        msg:""
    });
    

    useEffect(() => {
      if (isSubmitted && window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-16782332928/39X-CIvP9PEZEICouMI-', 
        });
      }
    }, [isSubmitted]);

    const sendEmail = async (e) => {
        e.preventDefault();
        
        setValidation(true);

        if (
        formData.fullName &&
        formData.phone &&
        formData.purpose
        ) {
        setIsLoading(true);
        const loadingToast = toast.loading("Envoi en cours...");
        try {
            const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
            });
            if (response.status === 200) {
            setFormData({
                fullName: "",
                phone: "",
                purpose: "",
                msg:""
            });
            setValidation(false);
            setIsLoading(false);
            setIsSubmitted(true);
            toast.dismiss(loadingToast);
            toast.success("Message envoyé avec succès !");
            }
        } catch {
            toast.dismiss(loadingToast);
            setIsLoading(false);
            toast.error("Échec de l'envoi de l'e-mail.");
        }
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };
    return(
        <div id="contactez-nous" className=" relative flex  bg-[#F4F8FF]  flex-col py-8  items-center justify-center  ">
            <div className="rounded-full-css bg-[#0276FF] w-full h-6 bottom-0 absolute rotate-180 z-10 "></div>
            <Toaster
                toastOptions={{
                    className: " bg-[#1e1e1e] text-[#0276FF]",
                }}
            />
            <h2 className="font-semibold text-3xl xl:text-6xl bg-[#0276FF] text-white p-4 text-center">contactez-nous</h2>
            <div className=" container w-full flex-col xl:flex-row  gap-16 py-16 xl:px-24 flex p-8  justify-between items-center ">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23116671.224635303!2d1.976208586137306!3d53.39853181008196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2bdf96730baaa2f7%3A0x71c424678d801d0b!2sEcoTech%20D%C3%A9pannage!5e1!3m2!1sen!2sma!4v1734384612528!5m2!1sen!2sma"
                    width="1000" // Adjust width as needed
                    height="500"
                    className=" xl:w-1/2 w-full "
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>                
                <form onSubmit={sendEmail} className="flex flex-col gap-4  xl:w-1/2 w-full ">
                        <div className=" flex flex-col gap-2 w-full">
                            <input  value={formData.fullName} onChange={handleInputChange} type="text" name="fullName" id="fullName" placeholder=" Nom et Prénom" className={`${!formData.fullName && validation && "border-red-500 placeholder:text-red-500"}  placeholder:font-medium capitalize placeholder:text-[#0276FF] text-[#22242B] px-4 h-14 rounded   border-[#0276FF] border-2 bg-[#F4F8FF]`} />
                            <p className="text-red-500 text-xs font-medium">{!formData.fullName &&validation &&"Veuillez entrer votre nom complet."}</p>
                        </div>
                        <div className=" flex flex-col gap-2 w-full">
                            <input value={formData.phone} onChange={handleInputChange}  type="tel" name="phone" id="phone" placeholder="Téléphone" className={`${!formData.phone && validation && "border-red-500 placeholder:text-red-500"} px-4 rounded text-[#22242B]  capitalize border-[#0276FF] placeholder:font-medium placeholder:text-[#0276FF] border-2 bg-[#F4F8FF] h-14`}/>
                            <p className="text-red-500 text-xs font-medium">{!formData.phone &&validation &&"Veuillez entrer votre numéro de téléphone."}</p>
                        </div>
                        <div className=" flex flex-col gap-2 w-full">
                            <select value={formData.purpose} onChange={handleInputChange} name="purpose" id="purpose" className={`${!formData.purpose && validation && "border-red-500 text-red-500"}  rounded  h-14 px-4 border-[#0276FF] text-[#0276FF] capitalize border-2 bg-[#F4F8FF] font-medium   text-bold`} >
                                <option value={''} >objectif</option>
                                <option value="Vitrerie & Miroiterie" >Vitrerie & Miroiterie</option>
                                <option value="Plomberie">Plomberie</option>
                                <option value="Climatisation">Climatisation</option>
                                <option value="Chauffage">Chauffage</option>
                                <option value="Installation Borne De Recharge">Installation Borne De Recharge</option>
                                <option value="Serrurerie">Serrurerie</option>
                                <option value="Electricité">Electricité</option>
                                <option value="Autre">Autre</option>
                            </select>
                            <p className="text-red-500 text-xs font-medium">{!formData.purpose &&validation &&"Sélectionnez votre objectif."}</p>
                        </div>
                        <div className=" flex flex-col gap-2 w-full">
                            <textarea value={formData.msg} onChange={handleInputChange}  placeholder=" Votre Message "  className={`  placeholder:font-medium capitalize placeholder:text-[#0276FF] text-[#22242B] p-4 rounded   border-[#0276FF] border-2 bg-[#F4F8FF]`} rows={6} name="msg" id=""></textarea>
                        </div>
                        <button type="submit" className="bg-[#0276FF] py-4 hover:text-[#0276FF] hover:bg-[#F4F8FF] border-2 border-[#0276FF] duration-500 font-medium text-white "> {isLoading ? "Envoi en cours..." : 'Envoyer'} </button>
                    
                </form>
            </div>

        </div>
    )
}