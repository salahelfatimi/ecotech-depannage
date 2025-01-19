import Image from 'next/image';
import booking from '/public/marche/booking.png';
import delivery from '/public/marche/delivery.png';
import solved from '/public/marche/solved.png';
export default function Marche(){
    return(
        <div id='comment-ca-marche' className="bg-cover bg-center bg-[#1E1E1E] relative">
         

            <div  className="container py-24 gap-6 items-center flex justify-center flex-col  ">
                <h2 className="font-semibold text-3xl xl:text-6xl text-[#fff] text-center">COMMENT ÇA MARCHE ?</h2>
                <p className=" p-4 text-center font-medium text-2xl xl:text-4xl text-white ">Notre intervention, conçue pour votre tranquillité </p>
                <div className=' pt-8 grid  grid-cols-1 lg:grid-cols-3 gap-24 justify-between'>
                    <div className=' flex items-center flex-col justify-center gap-7'>
                        <div className=' bg-white flex items-center justify-center p-2 rounded-full'>
                        <Image    title={'Prenez contact avec nous'} alt={'Prenez contact avec nous'} src={booking} className='w-24 p-4' />
                        </div>
                        <h3 className=' text-white  text-2xl text-center'>Prenez contact avec nous</h3>
                    </div>
                    <div className=' flex items-center flex-col justify-center gap-7'>
                        <div className=' bg-[#0276FF] flex items-center justify-center p-2 rounded-full'>
                        <Image    title={'Intervention rapide garantie'} alt={'Intervention rapide garantie'} src={delivery} className='w-24 p-4' />
                        </div>
                        <h3 className=' text-white  text-2xl text-center'>Intervention rapide garantie</h3>
                    </div>
                    <div className=' flex items-center flex-col justify-center gap-7'>
                        <div className=' bg-white flex items-center justify-center p-2 rounded-full'>
                            <Image    title={'Résolution efficace de vos problèmes'} alt={'Résolution efficace de vos problèmes'} src={solved} className='w-24 p-4' />
                        </div>
                        <h3 className=' text-white  text-2xl text-center'>Résolution efficace de vos problèmes</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}