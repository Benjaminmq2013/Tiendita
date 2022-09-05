import { shoppingCartProps } from '../../interfaces/shoppingCart';

export type CartActions = 
    | { type: "addToCart", payload: shoppingCartProps }
    | { type: "DeleteFromCart", payload:{id: string} }
    | { type: "Increase", payload:{id: string} }
    | { type: "Descrease", payload:{id: string} }

export const cartReducer = ( state: shoppingCartProps[], action: CartActions ): shoppingCartProps[] => {
    switch (action.type) {
        case "addToCart":
            return [ ...state, action.payload ]
        case 'DeleteFromCart':
            console.log()
            return state.filter(product => product.id !== Number(action.payload.id) )
        case 'Increase':
            return state.map(elem => {
                if( elem.id === Number(action.payload.id) ){
                    return { ...elem, productQuantity: elem.productQuantity ++ }
                } else{
                    return elem
                }
            })
        case 'Descrease':    
        return state.map(elem => {
            if( elem.id === Number(action.payload.id ) && elem.productQuantity > 1 ){
                return { ...elem, productQuantity: elem.productQuantity -- }
            } else{
                return elem
            }})
            
        default:
            return state; 
        
    }
}