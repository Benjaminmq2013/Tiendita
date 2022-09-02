import React, { useContext } from 'react'
import { cartContext } from '../../context/cart/cartContext';
import styles from "../../styles/index.module.scss"
import { getActualPrice } from '../../helpers/getActualPrice';

export const PayButton = () => {
  const { cartState, setCartState } = useContext(cartContext)
  

  const initialValue = 0;

  const getTotalCart = cartState.reduce(
    (previousValue, currentValue) => previousValue + (getActualPrice(currentValue) * currentValue.productQuantity ),
    initialValue
  );

  return (
    <div className={styles.pay_button_container}>
      <h2 className={styles.subtotal}>Subtotal: ${ getTotalCart.toFixed(2) } USD</h2>
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
