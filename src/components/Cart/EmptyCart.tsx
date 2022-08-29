import React from 'react'
import styles from "../../styles/index.module.scss"

export const EmptyCart = () => {
  return (
    <div className={` ${styles.empty_cart_message} ${styles.empty_cart_anim} `}>
      <img
        className={styles.empty_cart_icon}
        src="./icons/empty_cart.svg"
        alt="ícono de carrito vacío"
      />

      <h3 className={styles.empty_cart_title}>
        Tu carrito está vacío <br /> Añade un producto para comenzar
      </h3>

      <img
        className={styles.arrow_bottom}
        src="/icons/arrow_bottom.svg"
        alt=""
      />
    </div>
  );
}
