import React, { useContext } from 'react'
import styles from "../../styles/index.module.scss"
import { productTypes as params } from '../../interfaces/productTypes';
import { cartContext } from '../../context/cart/cartContext';
import { getActualPrice } from '../../helpers/getActualPrice';
import { StylesContext } from '../../context/styles/stylesContext';

export const AddToCart = (params:params) => {

  const { cartState, dispatch } = useContext(cartContext)
  const { activeStyles, setActiveStyles } = useContext(StylesContext)


  const price = getActualPrice(params)

  const handleAddProduct = () => {
    const isAlreadyInCart = cartState.find(product => product.id === params.id)
    isAlreadyInCart === undefined
    ?dispatch({ type: "addToCart", payload: { ...params, productQuantity: 1, totalPrice: price } })
    : dispatch({ type: 'Increase', payload: {id: `${params.id}`} })

    //Adding Animations to Alert the user the product was added.
    setActiveStyles({ ...activeStyles, "addProductAlert": styles.add_product_alert })
    setTimeout(()=> {
      setActiveStyles({ ...activeStyles, "addProductAlert": "" })
    },500 )
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