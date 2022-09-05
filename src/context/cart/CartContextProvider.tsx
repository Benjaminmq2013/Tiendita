import { useReducer } from "react";
import { cartContext } from "./cartContext";
import { cartReducer } from "./cartReducer";

interface params{
    children: JSX.Element | JSX.Element[];
}

export const CartContextProvider = (params:params) => {

    const [cartState, dispatch] = useReducer(cartReducer, [])

    return(
        <cartContext.Provider value={{ cartState, dispatch }}>
            { params.children }
        </cartContext.Provider>
    )
}