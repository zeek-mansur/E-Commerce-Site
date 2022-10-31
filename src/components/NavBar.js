import Avatar from '../assets/image-avatar.png'
import Cart from '../assets/icon-cart.svg'

// styles 
import './Navbar.css'

import React from 'react'
import Burger from './Burger'

export default function NavBar({amount, openCart, closeCart, cart}) {

  let activeStyle = { 
   
  };

  return (
    <div>
      <nav className="navbar">
      <ul>
      <li className="logo">
        <span>sneakers</span>
        </li>
        <Burger activeStyle = {activeStyle} />
        <li className='cart'>
        {cart.length === 1 && <span onClick={closeCart}>{amount}</span>} <img onClick={openCart}  
         src ={Cart} alt = 'Cart'></img>
        </li>
       <li className='avatar'>
        <img src={Avatar} alt = 'Avatar'></img>
       </li>
        <li>
          <button  className="btn">Logout</button>
        </li>        
      </ul>
    </nav>
    </div>
  )
}
