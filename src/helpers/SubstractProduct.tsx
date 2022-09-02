import { shoppingCartProps } from "../interfaces/shoppingCart";
import { productTypes } from "../interfaces/productTypes";

interface params{
  product: productTypes,
  setCartState: React.Dispatch<React.SetStateAction<shoppingCartProps[]>>,
  cartState: shoppingCartProps[],
}

export const SubstractProduct = (params:params) => { 
    
    let addMore:shoppingCartProps[] = params.cartState.map(elem => {
      if( elem.id === params.product.id ) return { ...elem, productQuantity: elem.productQuantity -=1 }
      else {
        return elem
      }
    })
    params.setCartState([...addMore ])
    
  }