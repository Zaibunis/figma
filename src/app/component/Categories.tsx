import Image from "next/image"

export default function Categories(){
    return(
        <main>
        <div className="w-full md:h-[300px] sm:h-full flex justify-center items-center mt-10 mb-10 border-b-2 gap-5">
            <div className="w-[80%] h-full">
               {/* top side */}
               <div>
               <span className="border-l-8 border-red-500 font-bold text-red-500 mb-5">Categories</span>
               <h2 className="text-4xl mt-5 font-bold">Browse By Category</h2>
               </div>
        
               {/* products */}
                 {/* container boxes */}
                 <div className="flex sm:flex-col md:flex-row  justify-between mt-7">
                    <div>
                    <div className="flex flex-row justify-between gap-4 overflow-x-auto mt-7">
      {/* Box 1 */}
      <div className="relative w-[170px] h-[145px] bg-white border border-gray-300 flex justify-center items-center">
        <Image
          src="/CellPhone.png"
          alt="Phone"
          width={56}
          height={56}
          className="text-black"
        />
        <div className="absolute bottom-2 w-full text-center">
          <span className="text-black text-sm bg-white px-1">Phone</span>
        </div>
      </div>

      {/* Box 2 */}
      <div className="relative w-[170px] h-[145px] bg-white border border-gray-300 flex justify-center items-center">
        <Image
          src="/Computer.png"
          alt="Camera"
          width={56}
          height={56}
          className="text-black"
        />
        <div className="absolute bottom-2 w-full text-center">
          <span className="text-black text-sm bg-white px-1">Computers</span>
        </div>
      </div>

      {/* Box 3 */}
      <div className="relative w-[170px] h-[145px] bg-white border border-gray-300 flex justify-center items-center">
        <Image
          src="/SmartWatch.png"
          alt="Laptop"
          width={56}
          height={56}
          className="text-black"
        />
        <div className="absolute bottom-2 w-full text-center">
          <span className="text-black text-sm bg-white px-1">SmartWatch</span>
        </div>
      </div>

      {/* Box 4 */}
      <div className="relative w-[170px] h-[145px] bg-red-500 border border-gray-300 flex justify-center items-center">
        <Image
          src="/Camera.png"
          alt="Headphones"
          width={56}
          height={56}
          className="text-black"
        />
        <div className="absolute bottom-2 w-full text-center">
          <span className="text-white text-sm bg-red-500 px-1">Camera</span>
        </div>
      </div>

      {/* Box 5 */}
      <div className="relative w-[170px] h-[145px] bg-white border border-gray-300 flex justify-center items-center">
        <Image
          src="/Category-Headphone.png"
          alt="Smart Watch"
          width={56}
          height={56}
          className="text-black"
        />
        <div className="absolute bottom-2 w-full text-center">
          <span className="text-black text-sm bg-white px-1">Headphone</span>
        </div>
      </div>

      {/* Box 6 */}
      <div className="relative w-[170px] h-[145px] bg-white border border-gray-300 flex justify-center items-center">
        <Image
          src="/Category-Gamepad.png"
          alt="Camera"
          width={56}
          height={56}
          className="text-black"
        />
        <div className="absolute bottom-2 w-full text-center">
          <span className="text-black text-sm bg-white px-1">Gaming</span>
        </div>
      </div>
    </div>
                    </div>
                    
                 </div>
            </div>
        </div>
        
        </main>
    )
}