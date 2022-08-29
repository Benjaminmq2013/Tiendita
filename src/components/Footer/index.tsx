import React from 'react'
import styles from "../../styles/index.module.scss"

export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <a className={ styles.footer__link } href="callto:555-555">Tel: 555-555</a>
        <a className={ styles.footer__link } href="">Cómo llegar</a>
        <a className={ styles.footer__link } href="">Dirección</a>
        <a className={ styles.footer__link } href="mailto:tiendita@gmail.com">Email</a>
    </footer>
  )
}
