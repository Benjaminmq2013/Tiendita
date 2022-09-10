import React, { useContext } from 'react'
import styles from "../../styles/index.module.scss"
import animations from "../../styles/animations.module.scss"

import { StylesContext } from '../../context/styles/stylesContext';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const CartBtn = () => {
  const cartState = useSelector((state: RootState)=> state.cart)

  const { activeStyles, setActiveStyles }  = useContext(StylesContext)
  const handleCloseCart = () => {
    setActiveStyles({ ...activeStyles, "isVisible": "", "openCartAnimation": animations.open_cart })
  }

  return (
    <button 
      className={`${styles.shopping_cart_btn} ${ activeStyles.addProductAlert }`}
      onClick={ handleCloseCart }
    >
      <img
        className={styles.shopping_cart_icon}
        src="./icons/Property 1=shopping-cart.svg"
        alt="shopping cart icon, tiendita"
      />
      <span className={styles.number_of_items}>{ cartState.length }</span>
    </button>
  );
}
