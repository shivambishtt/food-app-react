import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { FoodListContext } from '../../context/FoodListContext'
function FoodItem({ id, name, price, description, image }) {
    const { cartItem, addToCart, removeFromCart, setCartItems } = useContext(FoodListContext)
    return (
        <div className='food-item'>

            <div className="food-item-image-container">
                <img className='food-item-image' src={image} alt="" />
                {!cartItem[id] ?
                    <img className='add-image' onClick={() => addToCart(id)} src={assets.add_icon_white} /> : <div className='food-item-counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItem[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>}
            </div>

            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" srcSet="" />
                </div>
                <p className="food-item-description">
                    {description}
                </p>
                <p className="food-item-pricing">
                    ${price}
                </p>

            </div>
        </div>
    )
}

export default FoodItem
