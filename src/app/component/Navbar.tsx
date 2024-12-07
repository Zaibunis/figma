import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex w-full sm:h-[90px] md:h-[80px] border-b-2 justify-center items-center">
      <div className="w-[80%] h-full flex justify-between items-center">
        {/* Left side */}
        <div className="flex items-center">
          <h1 className="text-3xl font-bold">Exclusive</h1>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-x-6">
          {/* Links */}
          <ul className="flex gap-x-5">
            <li>
              <Link href={"/"} className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href={"/"} className="hover:underline">
                Sign Up
              </Link>
            </li>
          </ul>

          {/* Search Image */}
          <Image
            src={"/Search Component Set.png"}
            alt="Search"
            width={243}
            height={38}
            className="ml-4"
          />
          {/* Heart */}
         <Image 
         src={"/Wishlist (1).png"}
         alt=""
         width={32}
         height={32}
         />
          {/* Cart */}
          <Image 
         src={"/Cart1 with buy (1).png"}
         alt=""
         width={32}
         height={32}
         />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
