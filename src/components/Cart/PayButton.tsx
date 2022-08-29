import React from 'react'
import styles from "../../styles/index.module.scss"

export const PayButton = () => {
  return (
    <div className={styles.pay_button_container}>
      <h2 className={styles.subtotal}>Subtotal: $25.55</h2>
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
