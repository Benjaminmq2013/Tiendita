import React, { useContext } from 'react'
import styles from "../../styles/index.module.scss"
import animations from "../../styles/animations.module.scss"

import { StylesContext } from '../../context/styles/stylesContext';
import { cartContext } from '../../context/cart/cartContext';

export const CartBtn = () => {
  const { cartState } = useContext(cartContext);

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
