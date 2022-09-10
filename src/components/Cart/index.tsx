import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import styles from "../../styles/index.module.scss"
import { EmptyCart } from './EmptyCart';
import { Layout } from './Layout';
import { ProductsContainer } from './ProductsContainer';
import { RootState } from '../../store/store';


export const ShoppingCart = () => {
  const cartState = useSelector((state: RootState)=> state.cart)
  return (
    
    <Layout>
      {cartState.length === 0
      ? <EmptyCart />
      : <ProductsContainer />}
    </Layout>
    
  );
}
