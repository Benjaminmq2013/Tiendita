import React from 'react'
import styles from "../../styles/index.module.scss"
import { App as Swiper } from "../swiper/index"

interface params{
    children:JSX.Element | JSX.Element[]
}

export const ProductsLayout = (params:params):JSX.Element => {
  return (
    <section className={styles.products_group_container}>
        <h2 className={styles.products_group__title}>Ofertas</h2>
        <div className={styles.cards_container}>
            <Swiper>
              { params.children }
            </Swiper>
        </div>
    </section>
  )
}
