import React, { useContext } from 'react'
import styles from "../../styles/index.module.scss"
import { shoppingCartProps as params } from '../../interfaces/shoppingCart'
import { cartContext } from '../../context/cart/cartContext';


export const ProductItem = (params:params) => {
    const { cartState, dispatch } = useContext(cartContext)

    const handleIngreaseProduct = () => {
        dispatch({ type:'Increase', payload:{ id: `${params.id}` } })
    }
    const handleDecreaseProduct = () => {
        dispatch({ type:'Descrease', payload:{ id: `${params.id}` } })
    }

  return (
    <div  className={styles.product_cart}>
    <div className={styles.product_division}>
        <img onClick={() => {}} className={styles.eliminate_btn} src="./icons/Property 1=delete-x.svg" alt="" />
        <img className={styles.cart_product_image} src={ params.image_url } alt="" />

        <div className={styles.product__cart_description}>
            <span className={styles.cart_product_name}>{ params.product_name }</span>
            <span className={styles.cart_product_weight}>${params.isOffer ? params.offer_price : params.normal_price }USD$/{ params.unitOfMeasurement }</span>
        </div>
    </div>

    
    <div className={`${styles.product_division} ${styles.product_details}`}>
        <div className={styles.product_quantity_container}>
            <button onClick={() => handleDecreaseProduct() } className={styles.less_product_btn}>-</button>
            <input className={styles.product_quantity} type="text" value={ params.productQuantity } readOnly />
            <button onClick={ ()=> handleIngreaseProduct() } className={styles.more_product_btn}>+</button>
        </div>

        <div className={styles.products_price_container}>
            {/* <span className={styles.products_price}>${ (params.productQuantity * price).toFixed(2) } USD</span> */}
        </div>
    </div>
    

</div>
  )
}
