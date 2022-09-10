import React, { useContext } from 'react'
import styles from "../../styles/index.module.scss"
import { productTypes as params } from '../../interfaces/productTypes';
import { getActualPrice } from '../../helpers/getActualPrice';
import { StylesContext } from '../../context/styles/stylesContext';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseAmount } from '../../store/cart/cartSlice';
import { RootState } from '../../store/store';

export const AddToCart = (params:params):JSX.Element => {

  const { activeStyles, setActiveStyles } = useContext(StylesContext)
  const price = getActualPrice(params)

  const dispatch = useDispatch()  
  const cartState = useSelector((state: RootState)=> state.cart)

  const handleAddProduct = () => {
    

    const isAlreadyInCart = cartState.find(product => product.id === params.id)
    isAlreadyInCart === undefined
    ? dispatch(addToCart({ ...params, productQuantity: 1, totalPrice: price }))
    : dispatch(increaseAmount(params.id))


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