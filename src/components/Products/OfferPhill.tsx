import React from 'react'
import styles from "../../styles/index.module.scss"
import { productTypes as params } from '../../interfaces/productTypes';

export const OfferPhill = (params:params) => {
  return (
    <>
        {
            params.isOffer
            ?<span className={styles.offer_phill}>{params.discountRate}% dto.</span>
            :<span style={{ opacity:"0" }} className={styles.offer_phill}></span>
        }
    </>
  )
}
