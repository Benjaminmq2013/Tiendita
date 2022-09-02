import React, { useContext } from 'react'
import styles from "../../styles/header.module.scss"
import animations from "../../styles/animations.module.scss"

import { StylesContext } from '../../context/styles/stylesContext';

export const CartBtn = () => {

  const { activeStyles, setActiveStyles }  = useContext(StylesContext)
  const handleCloseCart = () => {
    setActiveStyles({ ...activeStyles, "isVisible": "", "openCartAnimation": animations.open_cart })
  }

  return (
    <button 
      className={styles.shopping_cart_btn}
      onClick={ handleCloseCart }
    >
      <img
        className={styles.shopping_cart_icon}
        src="./icons/Property 1=shopping-cart.svg"
        alt="shopping cart icon, tiendita"
      />
      <span className={styles.number_of_items}>0</span>
    </button>
  );
}
