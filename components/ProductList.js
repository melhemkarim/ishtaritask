"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchData();
    }, []); 

    return (
        <>
        <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 pb-20">Products</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {products.map((product) => (
            <div className='border-solid border-2 border-black'> 
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80  ">
                <img
                  src={product.image}
                  className="h-full w-full object-cover object-center h-170 w-170 "
                />
              </div >
              <div className="mt-4 flex justify-between">
                <div className='bg-gray-300'>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                </div>
                <p className=" bg-gray-300 text-sm font-large font-bold text-black">{product.price} $</p>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductList;
