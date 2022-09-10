import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { shoppingCartProps } from '../../interfaces/shoppingCart';

const initialState:shoppingCartProps[] = [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {        
        addToCart: (state, action:PayloadAction<shoppingCartProps>) => {
            state.push(action.payload)
        },
        increaseAmount:( state, action:PayloadAction<number> ) => {
            return state.map(product => {
                if(product.id === action.payload) {
                    return { ...product, productQuantity: product.productQuantity + 1 }
            } else return product;
           })
           
          
        },
        decreaseAmount:( state, action:PayloadAction<number> ) => {
           return state.map(product => {
            if(product.id === action.payload && product.productQuantity > 1) {
                return { ...product, productQuantity: product.productQuantity - 1 }
            } else return product;
           })
        },
        removeProduct:(state, action:PayloadAction<number>)=> {
            return state.filter(product => product.id !== action.payload)
        }
    }
});

export const { addToCart, increaseAmount, decreaseAmount, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;