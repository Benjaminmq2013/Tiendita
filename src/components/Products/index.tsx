import React from 'react'
import { ProductCard } from './ProductCard';
import { ProductsLayout } from './ProductsLayout';
import { products as data } from '../../data/Products';
import { Swiper, SwiperSlide } from "swiper/react";

const Products = () => {
  return (
    <>
      <ProductsLayout>
          {data.filter(product => product.isOffer === true ).map(product => (
             <SwiperSlide key={ product.id } >
               <ProductCard { ...product } />
             </SwiperSlide>
          ))}
      </ProductsLayout>
      
      <ProductsLayout>
          {data.filter(product => product.isPopular === true ).map(product => (
             <SwiperSlide  key={ product.id } >
               <ProductCard key={ product.id } { ...product } />
             </SwiperSlide>
          ))}
      </ProductsLayout>
    </>
  );
}

export default Products