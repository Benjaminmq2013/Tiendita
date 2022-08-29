import React from 'react'
import styles from "../../styles/index.module.scss"
import { PayButton } from './PayButton';

export const ProductsContainer = () => {
  return (
    <div className={`${styles.products_cart_container} ${styles.display_none}`}>
      <div className={styles.products_cart_instructions}>
        <span>Cantidad:</span>
        <span>Total:</span>
      </div>

      <div className={styles.products__container}>
        {/* ******  Here the products will be displayed using JavaScript  *****  */}
      </div>

      <PayButton />
    </div>
  );
}
