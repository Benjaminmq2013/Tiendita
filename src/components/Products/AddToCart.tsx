import React from 'react'
import styles from "../../styles/index.module.scss"
import { productTypes as params } from '../../interfaces/productTypes';

export const AddToCart = (params:params) => {
  return (
    <button
        className={styles.card__button}
        // onclick="add_product(1000)"
      >
        Agregar
    </button>
  )
}