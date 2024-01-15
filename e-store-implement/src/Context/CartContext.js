import React, {createContext} from "react";

export const CartContextProvider = createContext();

const initialState = { cartItems: []}

const createContextProvider = ({children}) => {
    return(
        <CartContext.Provider value = {initialState}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider; 