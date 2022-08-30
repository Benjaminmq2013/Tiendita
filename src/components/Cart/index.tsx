import React, { useContext } from 'react'
import { EmptyCart } from './EmptyCart';
import { Layout } from './Layout';
import { ProductsContainer } from './ProductsContainer';
import { cartContext } from '../../context/cart/cartContext';


export const ShoppingCart = () => {

  const { cartState, setCartState } = useContext( cartContext )
  return (
    
    <Layout>      
      { cartState.length > 0
      ? <ProductsContainer />
      : <EmptyCart /> }
    </Layout>
    
  );
}
