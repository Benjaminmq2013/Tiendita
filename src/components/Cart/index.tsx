import React, { useContext } from 'react'
import styles from "../../styles/index.module.scss"
import { EmptyCart } from './EmptyCart';
import { Layout } from './Layout';
import { ProductsContainer } from './ProductsContainer';
import { cartContext } from '../../context/cart/cartContext';

export const ShoppingCart = () => {
  const { cartState, dispatch } = useContext(cartContext)
  return (
    
    <Layout>
      {cartState.length === 0
      ? <EmptyCart />
      : <ProductsContainer />}
    </Layout>
    
  );
}
