// react libries 
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
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
    {   Name: 'SNEAKER COMPANY',
        title: 'Fall Limited Edition Sneakers', 
        price: 125,
        Detail:'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
        picture: [Product1, Product2, Product3,Product4],
        thumbnail: [
          {id: 1, thumbnail: Thumbnail_1}, 
          {id: 2, thumbnail: Thumbnail_2}, 
          {id: 3, thumbnail: Thumbnail_3},
          {id: 4, thumbnail:  Thumbnail_4}
        ] 
    } 

  ])

  const picture = [Product1, Product2, Product3,Product4]
  
  const [showModal, setShowModal] = useState(false)
  const [showCartModal, setShowCartModal] = useState(false)
  const [cart, setCart] = useState([])
  const [amount, setAmount] = useState(1) 
  const [productImage, setProductImage] = useState(Product1)
  

  const handleClick = (event) => {
 
    const thumbnailContainers = document.querySelectorAll('.thumbnail')
    thumbnailContainers.forEach(container => {
      container.classList.remove('activee')
    })
 
    setProductImage(items[parseInt(event.target.dataset.itemid)].picture[parseInt(event.target.id)])
    event.target.parentElement.classList.add('activee')
    setActiveImage(event)
  }
 
  const setActiveImage = (event) => {
    const imageId = event.target.id
    return imageId
 
  }

  const handleClose = () => {
        setShowModal(false)
    }
   
  const handleOpen = ()  =>  {
    setShowModal(true)
  } 
  
  const closeCart = () => {
    setShowCartModal(false)
}

const openCart = ()  =>  {
setShowCartModal(true)
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
  if (cart.indexOf(items) !== -1) return
  setCart([...cart, items])

 }
  
  return (
    <div className="App">
      
      <div className='container'>
      <BrowserRouter>
       <NavBar 
       amount = {amount} 
       openCart = {openCart} 
       closeCart = {closeCart}
        cart = {cart}/>
        <Routes>
        <Route exact path="sneakers" 
          element={ <Sneakers handleOpen = {handleOpen} 
          handleAddToCart = {handleAddToCart} 
          items = {items} 
          amount = {amount} 
          increase = {increase} 
          decrease = {decrease}
          handleClick = {handleClick}
          productImage = {productImage} />} />
        <Route path="/men" element={ <Men />} />
        <Route path="/women" element={ <Women />} />
        <Route path="/collections" element={ <Collections />} />
        <Route path="/about" element={ <About />} />
        </Routes>
        {showModal && <Modal 
        handleClose = {handleClose}
        items={items}
        handleClick = {handleClick}
        handleOpen = {handleOpen}
        productImage = {productImage}
        picture = {picture}/>}
        {showCartModal && <Cart cart = {cart} 
         closeCart = {closeCart}
         setCart = {setCart} 
         amount= {amount} 
         handleAddToCart = {handleAddToCart}
         items = {items} />}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
