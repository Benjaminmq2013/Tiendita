import { createContext } from 'react';
import { shoppingCartProps } from '../../interfaces/shoppingCart';

interface cartContextProps{
    cartState: shoppingCartProps[],
    setCartState: React.Dispatch<React.SetStateAction<shoppingCartProps[]>>
}

export const cartContext = createContext<cartContextProps>( {} as cartContextProps )