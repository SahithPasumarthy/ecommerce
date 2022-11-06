import React from 'react'
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import MensProducts from "./pages/MensProducts"; 
import WomensProducts from "./pages/WomensProducts"; 
import Footwear from "./pages/Footwear";
import { Route, Routes } from 'react-router';
import Announcement from './components/Announcement';
import Wishlist from './pages/Wishlist';

const App = () => {
  return (
    <>
      <Announcement/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='men' element={<MensProducts/>}/>
        <Route path='women' element={<WomensProducts/>}/>
        <Route path='footwear' element={<Footwear/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='signin' element={<Login/>}/>
        <Route path='wishlist' element={<Wishlist/>}/>
        <Route path='product' element={<Product/>}/>
      </Routes>
    </>
  )
}

export default App
