import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
function FoodItem({ name, price, description, image }) {
    const [itemCount, setItemCount] = useState(0)
    return (
        <div className='food-item'>
            <div className="food-item-image-container">
                <img className='food-item-image' src={image} alt="" />
                {!itemCount ?
                    <img className='add-image' onClick={() => setItemCount((prevVal) => prevVal + 1)} src={assets.add_icon_white} /> : <div className='food-item-container'>
                        <img onClick={() => setItemCount((prevVal) => prevVal - 1)} src={assets.remove_icon_red} alt="" />
                        <p>{itemCount}</p>
                        <img onClick={() => setItemCount((prevVal) => prevVal + 1)} src={assets.add_icon_green} alt="" />
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
