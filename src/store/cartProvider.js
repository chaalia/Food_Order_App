import React from "react";
import CartContext from "./cart-context";


const CartProvider = (props) => {

    const addItemToCart = () => {
        console.log("addItemToCart");
    }

    const removeItemToCart = () => {
        console.log("addItemToCart");
    }
    
    
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCart,
        removeItem: removeItemToCart,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;