import React from 'react'
import styles from "../../styles/index.module.scss"
import { productTypes as params } from '../../interfaces/productTypes';
import { OfferPhill } from './OfferPhill';
import { ProductImage } from './ProductImage';
import { AddToCart } from './AddToCart';
import { ProductData } from './ProductData';
import { Swiper, SwiperSlide } from 'swiper/react';


export const ProductCard = (params:params):JSX.Element => {
  return (
    <div className={styles.product_card}>
      <OfferPhill {...params} />
      <ProductImage {...params} />
      <ProductData {...params} />
      <AddToCart {...params} />
    </div>
  );
}
