import Image from "next/image";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Sale from "./component/sale";
import Categories from "./component/Categories";
import Product from "./component/product";
import Hero2 from "./component/hero2";
import Product2 from "./component/product2";
import Feature from "./component/feature";



export default function Home() {
  return (
   <div>
    
<Header />
<Navbar />
<Hero />
<Sale />
<Categories />
<Product />
<Hero2 />
<Product2 />
<Feature />
   </div>
  );
}
