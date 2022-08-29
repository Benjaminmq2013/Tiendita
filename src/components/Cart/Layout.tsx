import React, { useContext } from 'react'
import styles from "../../styles/index.module.scss"
import animations from "../../styles/animations.module.scss"
import { StylesContext } from '../../context/styles/stylesContext';

interface params{
    children: JSX.Element | JSX.Element[]
}

export const Layout = (params:params):JSX.Element => {

  const { activeStyles, setActiveStyles }  = useContext(StylesContext)

  const close_cart = () => {
    setActiveStyles({ ...activeStyles, "openCartAnimation": "", "closeCartAnimation": animations.close_cart })


    setTimeout(()=> {
      setActiveStyles({ 
        ...activeStyles, 
        "isVisible": styles.display_none,
        "closeCartAnimation": ""
      })
    }, 200)
  }


  return (
    <section className={`${styles.cart } ${ activeStyles.isVisible } ${ activeStyles.closeCartAnimation } ${ activeStyles.openCartAnimation } `}>
      <div className={styles.cart__title}>
        <img
          className={styles.cart__icon}
          src="./icons/Property 1=shopping-cart-black.svg"
          alt=""
        />
        <h3>Esta compra:</h3>

        <img
          className={styles.close_icon}
          src="./icons/Property 1=close-x.svg"
          onClick={ close_cart }
        />
      </div>

        { params.children }

    </section>
  );
}