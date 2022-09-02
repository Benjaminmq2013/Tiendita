import React, { useContext } from 'react'
import styles from "../../styles/index.module.scss"
import { productTypes as params } from '../../interfaces/productTypes';
import { cartContext } from '../../context/cart/cartContext';
import { getActualPrice } from '../../helpers/getActualPrice';
import { AddMoreProduct } from '../../helpers/AddProduct';


export const AddToCart = (params:params) => {

  const { cartState, setCartState } = useContext( cartContext );

  // This evaluates if the price is an offer or in normal price and returns it.
  const price = getActualPrice(params)

  const handleAddProduct = () => {

    // Is the product already in cart?
    isAlreadyAdded() === undefined
    // If not, we add it for the first time
    ? setCartState([ ...cartState, { ...params, productQuantity: 1, totalPrice: price } ])
    // If it was already, we increase it's quantity
    : AddMoreProduct({ cartState, setCartState, product: params })

  }

  const isAlreadyAdded = () => {
    return cartState.find(elem => elem.id === params.id)
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