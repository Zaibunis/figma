import Image from "next/image"

export default function Sale(){
    return(
        <main>
        <div className="w-full md:h-[300px] sm:h-full flex justify-center items-center mt-10">
            <div className="w-[80%] h-full">
               {/* top side */}
               <div>
               <span className="border-l-8 border-red-500 font-bold text-red-500 mb-5">Today&apos;s</span>
               <h2 className="text-4xl mt-5 font-bold">Flash Sales</h2>
               </div>
        
               {/* products */}
                 {/* container boxes */}
                 <div className="flex sm:flex-col md:flex-row justify-between mt-7">
                    <div>
                    <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                        <Image src={"/controller.png"} alt="/" width={150} height={100}/>
                    </div>
                     {/* title */}
                     <div className="flex flex-col">
                        <span className="font-bold">HAVIT HV-G92 Gamepad</span>
                        <div className="flex items-center space-x-2">
                        <span className="font-bold text-red-500">$120</span>
                        <span className="text-gray-500 line-through text-medium">$160</span>
                        </div>
                        
                     </div>

                    </div>
                   <div>
                   <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                        <Image src={"/keyboard.png"} alt="/" width={150} height={100}/>
                    </div>
                    {/* title */}
                    <div className="flex flex-col">
                        <span className="font-bold">AK-900 Wired Keyboard</span>
                        <div className="flex items-center space-x-2">
                        <span className="font-bold text-red-500">$960</span>
                        <span className="text-gray-500 line-through text-medium">$1160</span>
                        </div>
                        
                     </div>
                    
                   </div>
                  <div>
                  <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                        <Image src={"/comp.png"} alt="/" width={150} height={100}/>
                    </div>
                      {/* title */}
                      <div className="flex flex-col">
                        <span className="font-bold">IPS LCD Gaming Monitor</span>
                        <div className="flex items-center space-x-2">
                        <span className="font-bold text-red-500">$370</span>
                        <span className="text-gray-500 line-through text-medium">$400</span>
                        </div>
                       
                     </div>
                    
                  </div>
                    <div>
                    <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                        <Image src={"/chair.png"} alt="/" width={150} height={100}/>
                    </div>
                    {/* title */}
                    <div className="flex flex-col">
                        <span className="font-bold">S-Series Comfort Chair</span>
                        <div className="flex items-center space-x-2">
                        <span className="font-bold text-red-500">$375</span>
                        <span className="text-gray-500 line-through text-medium">$400</span>
                        <div className="text-center mb-8">
                        </div>
                      
                        </div>
                     </div>
                    </div>
                 </div>
            </div>
        </div>
        <button className="py-2 px-3 bg-red-500 ml-[550px] rounded-md text-white mb-10 mt-10">View All Products</button>
        </main>
    )
}