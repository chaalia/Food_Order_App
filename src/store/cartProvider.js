import React ,{useReducer} from "react";
import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultcartState  = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems, updatedTotalAmount: updatedTotalAmount
    }
    }
    return defaultcartState
}

const CartProvider = (props) => {
    const[cartState, dispatchCartAction]=  useReducer(cartReducer, defaultcartState)

    const addItemToCart = (item) => {
        dispatchCartAction({type: 'ADD_ITEM', item: item})
        console.log("addItemToCart");
    }

    const removeItemToCart = (id) => {
        dispatchCartAction({type: 'REMOVE_ITEM', id: id})
        console.log("addItemToCart");
    }
    
    
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
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