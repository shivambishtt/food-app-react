import React, { useState } from 'react'
import '../Home/Home.css'
import Header from '../../components/Header/Header.jsx'
import Menu from '../../components/Menu/Menu.jsx'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.jsx'


function Home() {
  const [category, setCategory] = useState("All")
  return (
    <div>
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} setCategory={setCategory} />
    </div>
  )
}

export default Home
