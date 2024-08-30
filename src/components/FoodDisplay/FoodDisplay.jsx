import React from 'react'
import './FoodDisplay.css'
import { FoodListContext } from '../../context/FoodListContext.jsx'
import FoodItem from '../FoodItem/FoodItem.jsx'
function FoodDisplay({ category }) {
    const { foodList } = React.useContext(FoodListContext)

    return (
        <div className='food-display'>
            <h2>Top dishes near you</h2>
            <div className='food-list'>
                {foodList.map((foodItemName, index) => {
                    return (
                        <FoodItem key={index}
                            id={foodItemName._id}
                            name={foodItemName.name}
                            price={foodItemName.price}
                            description={foodItemName.description}
                            image={foodItemName.image} />
                    )
                })}
            </div>
        </div>
    )
}

export default FoodDisplay
