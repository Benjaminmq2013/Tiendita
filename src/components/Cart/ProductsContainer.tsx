import React, { useContext } from 'react'
import styles from "../../styles/index.module.scss"
import { PayButton } from './PayButton';
import { ProductItem } from './ProductItem';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

export const ProductsContainer = () => {
  const cartState = useSelector((state: RootState) => state.cart)

  return (
    <div className={`${styles.products_cart_container}`}>
      <div className={styles.products_cart_instructions}>
        <span>Cantidad:</span>
        <span>Total:</span>
      </div>

      <div className={styles.products__container}>
        <>
          {cartState.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </>
      </div>

      <PayButton />
    </div>
  );
}
