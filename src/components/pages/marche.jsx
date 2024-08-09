import Image from 'next/image';
import booking from '/public/marche/booking.png';
import delivery from '/public/marche/delivery.png';
import solved from '/public/marche/solved.png';
export default function Marche(){
    return(
        <div id='comment-ca-marche' className="bg-cover bg-center bg-[url('/marche/bg.png')]">
            <div  className="container py-24 gap-6 items-center flex justify-center flex-col  ">
                <h2 className="font-bold text-3xl xl:text-6xl text-[#fff] text-center">COMMENT CA MARCHE ?</h2>
                <p className=" p-4 text-center font-semibold text-2xl xl:text-4xl text-white ">Notre démarche d&apos;intervention</p>
                <div className=' pt-8 grid  grid-cols-1 lg:grid-cols-3 gap-24 justify-between'>
                    <div className=' flex items-center flex-col justify-center gap-7'>
                        <div className=' bg-white flex items-center justify-center p-2 rounded-full'>
                        <Image    title={'Contactez-nous'} alt={'Contactez-nous'} src={booking} className='w-24 p-4' />
                        </div>
                        <h3 className=' text-white font-medium text-2xl'>Contactez-nous</h3>
                    </div>
                    <div className=' flex items-center flex-col justify-center gap-7'>
                        <div className=' bg-[#0276FF] flex items-center justify-center p-2 rounded-full'>
                        <Image    title={'On arrive rapidement'} alt={'On arrive rapidement'} src={delivery} className='w-24 p-4' />
                        </div>
                        <h3 className=' text-white font-medium text-2xl'>On arrive rapidement</h3>
                    </div>
                    <div className=' flex items-center flex-col justify-center gap-7'>
                        <div className=' bg-white flex items-center justify-center p-2 rounded-full'>
                            <Image    title={'On resoud vos problemes'} alt={'On resoud vos problemes'} src={solved} className='w-24 p-4' />
                        </div>
                        <h3 className=' text-white font-medium text-2xl'>On resoud vos problemes</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}