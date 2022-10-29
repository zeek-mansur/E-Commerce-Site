import Avatar from '../assets/image-avatar.png'
import Cart from '../assets/icon-cart.svg'
import { NavLink } from 'react-router-dom'
// styles 
import './Navbar.css'

import React from 'react'

export default function NavBar({amount, openCart, closeCart}) {

  let activeStyle = { 
   
  };

  return (
    <div>
      <nav className="navbar">
      <ul>
      <li className="logo">
        <span>sneakers</span>
        </li>
       <div className='nav-links'>
       <li>
         <NavLink exact to = 'sneakers' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Collections</NavLink>
        </li>
        <li><NavLink to = 'men' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Men</NavLink></li>
        <li><NavLink to = 'women' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Women</NavLink> </li>
        <li><NavLink to = 'about' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>About</NavLink> </li>
       </div>
        <li className='cart'>
        <span onClick={closeCart}>1</span> <img onClick={openCart}  
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
