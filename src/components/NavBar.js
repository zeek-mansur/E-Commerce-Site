import Avatar from '../assets/image-avatar.png'
import Cart from '../assets/icon-cart.svg'
// styles 
import './Navbar.css'

import React from 'react'

export default function NavBar() {
  return (
    <div>
      <nav className="navbar">
      <ul>
        <li className="logo">
          <span>sneakers</span>
        </li>
       <div className='nav-links'>
       <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
       </div>
        <li>
        <img src ={Cart} alt = 'Cart'></img>
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
