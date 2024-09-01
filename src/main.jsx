import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Footer from './components/Footer/Footer.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import FoodListContextProvider from './context/FoodListContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <FoodListContextProvider>
      <App />
      <Footer />
    </FoodListContextProvider>
  </BrowserRouter>
)
