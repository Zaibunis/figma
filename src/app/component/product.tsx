import Image from "next/image"

export default function Product(){
    return(
        
        <div className="w-full md:h-[300px] sm:h-full flex justify-center items-center mt-10 mb-20">
            <div className="w-[80%] h-full">
               {/* top side */}
               <div>
               <span className="border-l-8 border-red-500 font-bold text-red-500 mb-5">This Month</span>
              <div className="flex justify-between">
              <h2 className="text-4xl mt-5 font-bold">Best Selling Products</h2>
              <button className="py-2 px-5 sm:hidden md:block bg-red-500  rounded-md text-white">View All</button>
              </div>
               </div>
        
               {/* products */}
                 {/* container boxes */}
                 <div className="flex sm:flex-col md:flex-row justify-between mt-7">
                    <div>
                    <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                        <Image src={"/coat.png"} alt="/" width={150} height={100}/>
                    </div>
                     {/* title */}
                     <div className="flex flex-col">
                        <span className="font-bold">The north coat</span>
                        <div className="flex items-center space-x-2">
                        <span className="font-bold text-red-500">$260</span>
                        <span className="text-gray-500 line-through text-medium">$360</span>
                        </div>
                     </div>

                    </div>
                   <div>
                   <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                        <Image src={"/gucci.png"} alt="/" width={150} height={100}/>
                    </div>
                    {/* title */}
                    <div className="flex flex-col">
                        <span className="font-bold">Gucci duffle bag</span>
                        <div className="flex items-center space-x-2">
                        <span className="font-bold text-red-500">$960</span>
                        <span className="text-gray-500 line-through text-medium">$1160</span>
                        </div>
                     </div>
                    
                   </div>
                  <div>
                  <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                        <Image src={"/cpu.png"} alt="/" width={150} height={100}/>
                    </div>
                      {/* title */}
                      <div className="flex flex-col">
                        <span className="font-bold">RGB liquid CPU Cooler</span>
                        <div className="flex items-center space-x-2">
                        <span className="font-bold text-red-500">$160</span>
                        <span className="text-gray-500 line-through text-medium">$170</span>
                        </div>
                     </div>
                    
                  </div>
                    <div>
                    <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                        <Image src={"/book.png"} alt="/" width={130} height={100}/>
                    </div>
                    {/* title */}
                    <div className="flex flex-col">
                        <span className="font-bold">Small BookSelf</span>
                        <span className="font-bold text-red-500">$360</span>
                        
                        
                     </div>
                    </div>
                 </div>
                 <button className="py-2 px-5 sm:block md:hidden bg-red-500  rounded-md text-white">View All</button>
            </div>
        </div>
     
       
    )
}