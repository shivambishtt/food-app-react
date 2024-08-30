import { FoodListContext } from './FoodListContext.jsx'
import { foodList } from "../assets/assets.js";


const FoodListContextProvider = ({ children }) => {
    return (
        <FoodListContext.Provider value={{ foodList }}>
            {children}
        </FoodListContext.Provider>
    )
}
export default FoodListContextProvider 