import React, {createContext} from "react";

export const CartContextProvider = createContext();

const initialState = { cartItems: []}

const createContextProvider = ({children}) => {

    const addProduct = payload => {
        dispatch({ type: 'ADD', payload });
        return state.cartItems;
      }
    
      const removeProduct = payload =>
      {
        dispatch({ type: 'REMOVE', payload });
        return state.cartItems;
      }
    
      const increaseQuantity = payload => 
      {
        dispatch({ type: 'INCQTY', payload });
        return state.cartItems;
      }
    
      const decreaseQuantity = payload => 
      {
        dispatch({ type: 'DECQTY', payload });
        return state.cartItems;
      }
    
      const clearBasket = () => {
        dispatch({ type: 'CLEAR', payload: undefined });
        return state.cartItems;
      }
    
      const getCartItems = () => {
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