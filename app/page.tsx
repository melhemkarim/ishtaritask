import { useState, useEffect } from 'react';
import Image from "next/image"; 
import ProductList from "./components/ProductList";




const Home = () => {
  return (
   <main  className='bg-white'>
    <div className='text-black bg-white-300 p-3 columns-3 pt-5 flex items-center justify-between py-4 h-22 container mx-auto'>
    <Image src='/logo-redd.webp' width={150} height={280} alt={""} />
    <div className="relative flex justify-center lg:flex-grow bg-gr">
    <input  className="hidden lg:block rounded-sm   w-4/5  outline-none p-4 bg-gray-200 sm: h-20 w-400 "
          placeholder="Search Here"
          style={{ height:'40px',width:'700px'}} 
          title='Search bar'
        /> 
        </div>
        <div className="columns-3">
        <h4>Country</h4>
          <h4>Sign in</h4>
          <h4>Cart</h4>
        </div>
      
    </div>
    <div className=" max-w-7xl px-2 sm:px-4 lg:px-8 flex my-8 pr-5 pl-5  justify-between py-4 md:container md:mx-auto bg-gray-100 " >
    <a className="hover:text-red-400" href="./" >All categories</a>
    <a className="hover:text-red-400" href="./">Home & Kitchen</a>
    <a className="hover:text-red-400" href="./">Electronics</a>
    <a className="hover:text-red-400" href="./">Fashion</a>
    <a className="hover:text-red-400" href="./">Health & Beauty</a>
    </div>
    <div>
    <div>
   
    
    <ProductList />
        </div>
    </div>
    </main>
  );
    };

export default Home;