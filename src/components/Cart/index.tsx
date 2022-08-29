import React from 'react'
import styles from "../../styles/index.module.scss"
import { EmptyCart } from './EmptyCart';
import { Layout } from './Layout';
import { ProductsContainer } from './ProductsContainer';

export const ShoppingCart = () => {
  return (
    
    <Layout>
      <ProductsContainer />
      <EmptyCart />
    </Layout>
    
  );
}
