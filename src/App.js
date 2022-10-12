// react libries 
import { BrowserRouter, Link, Navigate, Route, Routes  } from 'react-router-dom'
import React, { useState } from 'react'
// styles
import './App.css';
import Modal from './components/Modal';

// components and pages
import NavBar from './components/NavBar';
import Cart from './pages/cart/Cart';
import Sneakers from './pages/sneakers/Sneakers';
import Men from './pages/men/Men';
import Women from './pages/women/Women';
import Collections from './pages/collections/Collections';
import About from './pages/about/About';

// product images
import Product1 from './assets/image-product-1.jpg'
import Product2 from './assets/image-product-2.jpg'
import Product3 from './assets/image-product-3.jpg'
import Product4 from './assets/image-product-4.jpg'
import Thumbnail_1 from './assets/image-product-1-thumbnail.jpg'
import Thumbnail_2 from './assets/image-product-2-thumbnail.jpg'
import Thumbnail_3 from './assets/image-product-3-thumbnail.jpg'
import Thumbnail_4 from './assets/image-product-4-thumbnail.jpg'


function App() {

  const [items] = useState([
    {   Name: 'Sneakers Company',
        title: 'Fall Edition Sneakers', 
        price: 125,
        Detail:'Fall Limited Edition Sneakers. These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
        picture: [Product1, Product2, Product3,Product4],
        thumbnail: [Thumbnail_1, Thumbnail_2, Thumbnail_3, Thumbnail_4] } 

  ])

  const [showModal, setShowModal] = useState(false)
  const [cart, setCart] = useState([])
  const [amount, setAmount] = useState(1) 

  const handleClose = () => {
        setShowModal(false)
    }
   
  const handleOpen = ()  =>  {
    setShowModal(true)
  }  
  
   const increase = () => {
    setAmount(count => count + 1)
 }

 const decrease = () => {
  if (amount > 1) {
             setAmount(count => count - 1)
  }
  
 }

 const handleAddToCart = (items) => {

  setCart([...cart, items])

 }

 
   
  return (
    <div className="App">
      
      <div className='container'>
      <BrowserRouter>
       <NavBar />
        <Routes>
        <Route path="/" element={ <Sneakers handleOpen = {handleOpen} handleAddToCart = {handleAddToCart} items = {items} amount = {amount} increase = {increase} decrease = {decrease} />} />
        <Route path="/cart" element={ <Cart cart = {cart} setCart = {setCart} amount= {amount} />} />
        <Route path="/men" element={ <Men />} />
        <Route path="/women" element={ <Women />} />
        <Route path="/collections" element={ <Collections />} />
        <Route path="/about" element={ <About />} />
        </Routes>
        {showModal && <Modal handleClose = {handleClose}/>}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
