import { FoodListContext } from './FoodListContext.jsx'
import { foodList } from "../assets/assets.js";
import { useState } from 'react';


const FoodListContextProvider = ({ children }) => {
    // In order to create a functionality that filters the document based on the veg or non veg
    const [cartItems, setCartItems] = useState({})

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((cartItems) => {
                return { ...cartItems, [itemId]: 1 }
            })
        }
        else {
            setCartItems((cartItems) => {
                return { ...cartItems, [itemId]: cartItems[itemId] + 1 }
            })
        }
    }
    const removeFromCart = (itemId) => {
        setCartItems((cartItems) => {
            return { ...cartItems, [itemId]: cartItems[itemId] - 1 }
        })
    }



    return (
        <FoodListContext.Provider value={{ foodList, addToCart, removeFromCart, cartItems }}>
            {children}
        </FoodListContext.Provider>
    )
}
export default FoodListContextProvider 