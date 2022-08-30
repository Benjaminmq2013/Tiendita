import React, { useContext } from 'react'
import styles from "../../styles/index.module.scss"
import { productTypes as params } from '../../interfaces/productTypes';
import { cartContext } from '../../context/cart/cartContext';


export const AddToCart = (params:params) => {
  const { cartState, setCartState } = useContext( cartContext );

  const handleAddProduct = () => {
    setCartState([ ...cartState, { ...params, productQuantity: 1 } ])    
  }

  return (
    <button
        className={styles.card__button}
        onClick = { handleAddProduct }
        // onclick="add_product(1000)"
        
      >
        Agregar
    </button>
  )
}