import React from 'react'
import './Menu.css'
import { menuList } from '../../assets/assets'

function Menu({ category, setCategory }) {
    return (
        <div className='menu'>
            <h1>Explore our menu</h1>
            <p className='menu-text'>Choose from a diverse menu featuring a delectable array of mouthwatering dishes, each crafted to satisfy your cravings. From sizzling appetizers and fresh salads to savory main courses and indulgent desserts, our selection has something to delight every palate.</p>
            <div className='menu-list'>
                {menuList.map((menuItem, index) => {
                    return (<div onClick={() => setCategory(prev => prev === menuItem.menuName ? "All" : menuItem.menuName)}
                        key={index}
                        className='menu-item'>
                        <img className={category === menuItem.menuName ? "active" : ""} src={menuItem.menuImage} alt="" srcset="" />
                        <p className='menu-item-name'>{menuItem.menuName}</p>
                    </div>)
                })}
            </div>
            <hr />
        </div >
    )
}

export default Menu
