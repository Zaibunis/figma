import Link from "next/link"
import Image from "next/image";



export default function Header (){
    return(
        <div>
              <Link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
             />
            <div className="h-[48px] w-[1440px] flex  bg-[#000000] font-poppins">
           <div className="text-[14px] w-[859px] h-[24px] mt-[12px] text-[#ffffff] flex relative pl-[445px]">
            <div className="w-[550px] h-[24px] flex">
           <p className="w-[474px] leading-[24px] text-[14px]"> Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        
         <p className="  text-white underline font-semibold font-poppins">ShopNow</p>
         </div>

         <div className="relative left-[231px] flex text-white font-poppins ">
            <p>English</p>
            <Image src={"/DropDown.png"} alt="" width={24} height={24} className="bg-black"/>
</div>
        
           
            </div>
            </div>
            </div>
           
        
    )
}