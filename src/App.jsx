import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/Home/Home.jsx'
import Cart from './pages/Cart/Cart.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'
import Menu from './components/Menu/Menu.jsx'
import { Routes, Route } from 'react-router-dom'
import LogInPopup from './components/LogInPopup/LogInPopup.jsx'

function App() {
  const [showLogin, setShowLogin] = useState(false)
  // So we will create a functionality that basiaclly shows and hides the login pop up if the vlue is false we will not show thr login and if it is not then we will show the login
  return (
    <>
      {showLogin ? <LogInPopup setShowLogin={setShowLogin} /> : <></>
      }
      < div className='app' >
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/menu' element={<Menu />} />
        </Routes>
      </div >
    </>
  )
}

export default App
