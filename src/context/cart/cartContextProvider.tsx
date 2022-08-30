import { useState } from 'react';
import { shoppingCartProps } from '../../interfaces/shoppingCart';
import { cartContext } from './cartContext';

interface params{
    children: JSX.Element | JSX.Element[]
}

export const CartContextProvider = (params:params):JSX.Element => {

    const [cartState, setCartState] = useState<shoppingCartProps[]>([])

    return(
        <cartContext.Provider value={{ cartState, setCartState }} >
            { params.children }
        </cartContext.Provider>
    )
}