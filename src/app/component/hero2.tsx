
import Image from 'next/image';
export default function Hero2(){
    return(
        <div className='w-600  flex justify-center h-[420px] mt-8 '>
            <div className='bg-black md:w-[80%] sm:w-full flex ml-0 justify-between h-full '>
            {/* left side */}
            <div className='ml-8 sm:mt-4 md:mt-16 text-white'>
                <div className='flex'>
                  
                    <span className='ml-5 h-20 text-lg text-green-400 font-semibold'>Categories</span>
                </div>
        
                <div className='w-[443px] h-[120px]'>
                    <h1 className='text-5xl font-sans font-bold ml-5'>Enhance Your Music Experience</h1>
                    </div>
                    <div>
                        <button className='text-white bg-green-400 mt-5 ml-8 w-[171px] h-[50px] rounded-md py-2 px-5'>Buy Now!</button>
                    </div>
                
            </div>
            
             {/* right side */}
             <div>
              <Image src={"/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png"} alt='img' width={490} height={310}
              className='mt-12 mr-10 filter drop-shadow-[0px_4px_25px_rgba(255,255,255,0.4)]'

              />
             
             </div>
        </div>
        </div>
    )
}