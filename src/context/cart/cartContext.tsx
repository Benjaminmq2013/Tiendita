import { createContext } from 'react';
import { shoppingCartProps } from '../../interfaces/shoppingCart';
import { CartActions } from "./cartReducer"

interface cartContextProps{
    cartState: shoppingCartProps[],
    dispatch: React.Dispatch<CartActions>,
}


export const cartContext = createContext<cartContextProps>( {} as cartContextProps )