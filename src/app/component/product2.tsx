import Image from "next/image"

export default function Product2(){
    return(
        <div>
        <main>
        <div className="w-full md:h-[300px] sm:h-full flex justify-center items-center mt-10 mb-10">
            <div className="w-[80%] h-full">
               {/* top side */}
               <div>
               <span className="border-l-8 border-red-500 font-bold text-red-500 mb-5 sm:hidden md:block">Our Products</span>
              <div className="flex justify-between">
              <h2 className="text-4xl mt-5 font-bold">Explore Our Products</h2>
            
              </div>
               </div>
        
               {/* products */}
                 {/* container boxes */}
                 <div className="grid grid-cols-4 gap-4 mt-10 items-center justify-between">
                    <div>
                    <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                        <Image src={"/dog.png"} alt="/" width={100} height={100}/>
                    </div>
                     {/* title */}
                     <div className="flex flex-col">
                        <span className="font-bold">Breed Dry Dog Food</span>
                        <span className="font-bold text-red-500">$100</span>
                     </div>

                    </div>
                   <div>
                   <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                        <Image src={"/bara.png"} alt="/" width={130} height={100}/>
                    </div>
                    {/* title */}
                    <div className="flex flex-col">
                        <span className="font-bold">CANON EOS DSLR Camera</span>
                        <span className="font-bold text-red-500">$360</span>
                     </div>
                    
                   </div>
                  <div>
                  <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                        <Image src={"/laptop.png"} alt="/" width={140} height={100}/>
                    </div>
                      {/* title */}
                      <div className="flex flex-col">
                        <span className="font-bold">ASUS FHD Gaming Laptop</span>
                        <span className="font-bold text-red-500">$700</span>
                     </div>
                    
                  </div>
                    <div>
                    <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                        <Image src={"/book.png"} alt="/" width={130} height={700}/>
                    </div>
                    {/* title */}
                    <div className="flex flex-col">
                        <span className="font-bold">Curology Product Set </span>
                        <span className="font-bold text-red-500">$500</span>
                     </div>
                    </div>

                    <div>
                    <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                        <Image src={"/car.png"} alt="/" width={130} height={700}/>
                    </div>
                    {/* title */}
                    <div className="flex flex-col">
                        <span className="font-bold">Kids Electric Car</span>
                        <span className="font-bold text-red-500">$960</span>
                     </div>
                    </div>

                    <div>
                    <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                        <Image src={"/book.png"} alt="/" width={130} height={700}/>
                    </div>
                    {/* title */}
                    <div className="flex flex-col">
                        <span className="font-bold">Jr. Zoom Soccer Cleats</span>
                        <span className="font-bold text-red-500">$1160</span>
                     </div>
                    </div>

                    <div>
                    <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                        <Image src={"/controller4.png"} alt="/" width={130} height={700}/>
                    </div>
                    {/* title */}
                    <div className="flex flex-col">
                        <span className="font-bold">GP11 Shooter USB Gamepad</span>
                        <span className="font-bold text-red-500">$660</span>
                     </div>
                    </div>

                    <div>
                    <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
                        <Image src={"/quilt.png"} alt="/" width={130} height={700}/>
                    </div>
                    {/* title */}
                    <div className="flex flex-col">
                        <span className="font-bold">Quilted Satin Jacket</span>
                        <span className="font-bold text-red-500">$660</span>
                     </div>
                    </div>
                 </div>
            </div>
        </div>
       </main>
       {/* Button */}
       <div className="w-full flex justify-center mt-10">
        <button className="py-2 px-6 bg-red-500 rounded-md text-white hover:bg-red-600">
          View All Products
        </button>
      </div>
       </div>
    )
}