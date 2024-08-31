import { FoodListContext } from './FoodListContext.jsx'
import { foodList } from "../assets/assets.js";
import { useState } from 'react';


const FoodListContextProvider = ({ children }) => {
    // Now we want to create a functionality that removes the cartItem from the cart
    // So in order to achieve this functionality what we can do is we will take the setCartItem then we will access to the itemId after that we will simply return an object which will have access to the previous cart items and i will simply -1 itemId from it
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
        <FoodListContext.Provider value={{ foodList, addToCart, removeFromCart, setCartItems, cartItems }}>
            {children}
        </FoodListContext.Provider>
    )
}
export default FoodListContextProvider 