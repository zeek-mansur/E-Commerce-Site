import Avatar from '../assets/image-avatar.png'
import Cart from '../assets/icon-cart.svg'
import { NavLink } from 'react-router-dom'
// styles 
import './Navbar.css'

import React from 'react'

export default function NavBar(amount) {

  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <div>
      <nav className="navbar">
      <ul>
      <li className="logo">
        <span>sneakers</span>
        </li>
        <li className="logo">
         <NavLink exact to = 'sneakers' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }><span>sneakers</span></NavLink>
        </li>
       <div className='nav-links'>
       <li><NavLink to = 'collections' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Collections</NavLink></li>
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
        <span>1</span> <NavLink to = 'cart' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }><img src ={Cart} alt = 'Cart'></img></NavLink>
        </li>
       <li className='avatar'>
        <img src={Avatar} alt = 'Avatar'></img>
       </li>
        <li>
          <button className="btn">Logout</button>
        </li>        
      </ul>
    </nav>
    </div>
  )
}
