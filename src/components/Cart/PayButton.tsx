import React, { useContext } from 'react'
import styles from "../../styles/index.module.scss"
import { cartContext } from '../../context/cart/cartContext';
import { getActualPrice } from '../../helpers/getActualPrice';

export const PayButton = () => {
  const { cartState, dispatch } = useContext(cartContext)
  const INITIAL_STATE:number = 0;

  const getTotal = cartState.reduce(
      ( previousValue, currentValue ) => previousValue + (currentValue.productQuantity * getActualPrice(currentValue)) ,
      INITIAL_STATE
    )
   


  return (
    <div className={styles.pay_button_container}>
      <h2 className={styles.subtotal}>Subtotal: ${ getTotal.toFixed(2) }USD</h2>
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="ZXHBBP53VTW9U" />
        <button className={styles.pay_button} name="submit">
          Pagar
        </button>
      </form>
    </div>
  );
}
