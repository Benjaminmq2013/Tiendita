import React from 'react'
import styles from "../../styles/index.module.scss"
import { productTypes as params } from '../../interfaces/productTypes';

export const ProductImage = (params:params) => {
  return (
    <figure className={styles.product_image__container}>
      <img
        className={styles.product__image}
        src={params.image_url}
        alt={`${params.product_name} ${params.isOffer ? "En oferta" : ""}`}
      />
    </figure>
  );
}
