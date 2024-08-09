import { Mail, Phone } from "lucide-react";

export default function Contact(){
    return(
        <div id="contactez-nous" className=" flex  bg-[#F4F8FF]  flex-col py-8  items-center justify-center  ">
            <h2 className="font-bold text-3xl xl:text-6xl bg-[#0276FF] text-white p-4 text-center">contactez-nous</h2>
            <div className=" container w-full flex-col xl:flex-row  gap-16 py-16 xl:px-24 flex p-8  justify-between items-center ">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d774.5827725917268!2d7.070357967467168!3d49.1059266189007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47943577c85cc675%3A0xd3a85d8c7e61142a!2s57200%20Sarreguemines%2C%20France!5e1!3m2!1sen!2sma!4v1723206219374!5m2!1sen!2sma"
                    width="1000" // Adjust width as needed
                    height="500"
                    className=" xl:w-1/2 w-full "
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>                
                <form className="flex flex-col gap-4  xl:w-1/2 w-full ">
                        <input type="text" name="fullName" id="fullName" placeholder=" Nom et Prenom" className=" placeholder:font-medium capitalize placeholder:text-[#0276FF] text-[#22242B] px-4 h-14 rounded   border-[#0276FF] border-2 bg-[#F4F8FF]" />
                        <input type="tel" name="phone" id="phone" placeholder="Telephone" className="px-4 rounded text-[#22242B]  capitalize border-[#0276FF] placeholder:font-medium placeholder:text-[#0276FF] border-2 bg-[#F4F8FF] h-14"/>
                        <select name="purpose" id="purpose" className=" rounded  h-14 px-4 border-[#0276FF] capitalize border-2 bg-[#F4F8FF] font-medium  text-[#22242B] text-bold " >
                            <option defaultValue="null" >....</option>
                            <option value="Vitrerie & Miroiterie" >Vitrerie & Miroiterie</option>
                            <option value="Plomberie">Plomberie</option>
                            <option value="Climatisation">Climatisation</option>
                            <option value="Chauffage">Chauffage</option>
                            <option value="Installation Borne De Recharge">Installation Borne De Recharge</option>
                            <option value="Serrurerie">Serrurerie</option>
                            <option value="Electricité">Electricité</option>
                        </select>
                        <textarea placeholder=" Votre Message " className=" placeholder:font-medium capitalize placeholder:text-[#0276FF] text-[#22242B] p-4 rounded   border-[#0276FF] border-2 bg-[#F4F8FF]" rows={6} name="" id=""></textarea>
                        <button type="submit" className="bg-[#0276FF] py-4 hover:text-[#0276FF] hover:bg-[#F4F8FF] border-2 border-[#0276FF] duration-500 hover: font-bold text-white "> Envoyer</button>
                    
                </form>
            </div>

        </div>
    )
}