import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
export default function Hero(){
    return(
        <div className='  w-[894px]  flex justify-evenly  h-[344px] mt-8 '>
            <div className='bg-black md:w-[80%] sm:w-full flex justify-between h-full '>
            {/* left side */}
            <div className='ml-8 sm:mt-4 md:mt-16 text-white'>
                <div className='flex justify-center items-center mb-5'>
                    <span><FontAwesomeIcon icon={faApple} className='w-[30px]'/></span>
                    <span className='ml-4 text-medium'>iPhone 14 Series</span>
                </div>
        
                <div className='w-[200px]'>
                    <h1 className=' text-5xl font-sans font-bold ml-5'>Up to 10% off Voucher</h1>
                    </div>
                    <div>
                    <button className='underline font-semibold underline-offset-8 ml-5 mt-5' >Shop Now </button>
                    <Image src={""} alt='' width={24} height={24} className='bg-white'/>
                </div>
                
            </div>
            
             {/* right side */}
             <div>
              <Image src={"/hero.png"} alt='img' width={350} height={200}
              className='mt-5'/>
             </div>
        </div>
        </div>
    )
}