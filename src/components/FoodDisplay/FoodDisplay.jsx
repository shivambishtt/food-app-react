import React from 'react'
import './FoodDisplay.css'
import { FoodListContext } from '../../context/FoodListContext.jsx'
import FoodItem from '../FoodItem/FoodItem.jsx'
function FoodDisplay({ item, category }) {
    const { foodList } = React.useContext(FoodListContext)
    return (
        <div className='food-display'>
            <h2>Top dishes near you</h2>
            {/* <p>Filter by:</p>
            <button onClick={() => filterByVeg(item)} >Veg</button>
            <button onClick={() => filterByNonVeg(item)}>Non-Veg</button> */}
            <div className='food-list'>
                {foodList.map((foodItemName, index) => {
                    if (category === "All" || category === foodItemName.category) {
                        return (
                            <FoodItem key={index}
                                id={foodItemName._id}
                                name={foodItemName.name}
                                price={foodItemName.price}
                                description={foodItemName.description}
                                image={foodItemName.image}
                                type={foodItemName.type}
                            />
                        )
                    }

                })}
            </div>
        </div>
    )
}

export default FoodDisplay
