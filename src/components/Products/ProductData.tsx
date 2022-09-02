import React from 'react'
import styles from "../../styles/index.module.scss"
import { productTypes as params } from '../../interfaces/productTypes';
import { getActualPrice } from '../../helpers/getActualPrice';

export const ProductData = (params:params) => {
  const price = getActualPrice(params)

  return (
    <>
      <div className={styles.product__title}>
        <span className={styles.product__price}>${ price }/{ params.unitOfMeasurement }</span>
        { params.isOffer && <span className={styles.product__lastprice}>{` ${ params.normal_price }/${ params.unitOfMeasurement }`}</span> }
      </div>
      <span className={styles.product__name}>{params.product_name}</span>
    </>
  );
}
