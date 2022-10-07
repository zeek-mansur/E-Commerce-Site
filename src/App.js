import { BrowserRouter, Link, Navigate, Route, Routes  } from 'react-router-dom'
import React, { useState } from 'react'


// styles
import './App.css';
import Modal from './components/Modal';

import NavBar from './components/NavBar';
import Cart from './pages/cart/Cart';
import Sneakers from './pages/sneakers/Sneakers';
import Men from './pages/men/Men';
import Women from './pages/women/Women';
import Collections from './pages/collections/Collections';
import About from './pages/collections/about/About';

function App() {
  const [showModal, setShowModal] = useState(false)

  const handleClose = () => {

    setShowModal(false)
        }
   
  const handleOpen = ()  =>  {

    setShowModal(true)
  }      
  return (
    <div className="App">
      
      <div className='container'>
      <BrowserRouter>
       <NavBar />
        <Routes>
        <Route path="/" element={ <Sneakers handleOpen = {handleOpen} />} />
        <Route path="/cart" element={ <Cart />} />
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
