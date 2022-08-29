import React, { useContext } from 'react'
import styles from "../../styles/index.module.scss"
import { ShoppingCart } from '../Cart/index'
import { CartBtn } from './CartBtn'
import { Location } from "./Location"



const App = () => {
      
  return (
    <header className={ styles.header }>
        
        <nav className={ styles.navbar }>
            <h1 className={ styles.logo }> <i>Tiendita</i> </h1>

            <div className={ styles.nav_options_container }>

                <Location />

                <div className={ styles.shopping_cart_container }>
                    <CartBtn />
                    <ShoppingCart />  
                </div>

                
            </div>

        </nav>

    </header>
  )
}

export default App