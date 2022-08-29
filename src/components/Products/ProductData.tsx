import React from 'react'
import styles from "../../styles/index.module.scss"
import { productTypes as params } from '../../interfaces/productTypes';

export const ProductData = (params:params) => {
  let price: number = 0;

  params.isOffer === true 
  ? price = params.offer_price
  : price = params.normal_price

  return (
    <>
      <div className={styles.product__title}>
        <span className={styles.product__price}>${ price }/kg</span>
        { params.isOffer && <span className={styles.product__lastprice}>{` ${ params.normal_price }/kg`}</span> }
      </div>
      <span className={styles.product__name}>{params.product_name}</span>
    </>
  );
}
