import React, {createContext} from "react";

export const CartContextProvider = createContext();

const initialState = { cartItems: []}

const createContextProvider = ({children}) => {

    const addProduct = payload => {
        dispatch({ type: 'ADD', payload });
        return state.cartItems;
      }
    const contextValues = {
        addProduct,
        ...initialState
    }

    return(
            <CartContext.Provider value={contextValues} >
              {children}
            </CartContext.Provider>
    )
}

export default CartContextProvider; 