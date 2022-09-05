import React, { useContext } from 'react'
import styles from "../../styles/index.module.scss"
import { productTypes as params } from '../../interfaces/productTypes';
import { cartContext } from '../../context/cart/cartContext';
import { getActualPrice } from '../../helpers/getActualPrice';

export const AddToCart = (params:params) => {

  const { cartState, dispatch } = useContext(cartContext)


  const price = getActualPrice(params)

  const handleAddProduct = () => {
    const isAlreadyInCart = cartState.find(product => product.id === params.id)
    isAlreadyInCart === undefined
    ?dispatch({ type: "addToCart", payload: { ...params, productQuantity: 1, totalPrice: price } })
    : console.log("Previamente Añadido")
  }



  return (
    <button
        className={styles.card__button}
        onClick={()=> handleAddProduct() }
      >
        Agregar
    </button>
  )
}