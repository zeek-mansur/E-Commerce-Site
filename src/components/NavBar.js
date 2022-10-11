import Avatar from '../assets/image-avatar.png'
import Cart from '../assets/icon-cart.svg'
import { Link } from 'react-router-dom'
// styles 
import './Navbar.css'

import React from 'react'

export default function NavBar() {
  return (
    <div>
      <nav className="navbar">
      <ul>
        <li className="logo">
         <Link to = '/'><span>sneakers</span></Link>
        </li>
       <div className='nav-links'>
       <li><Link to = './collections'>Collections</Link></li>
        <li><Link to = './men'>Men</Link></li>
        <li><Link to = './women'>Women</Link> </li>
        <li><Link to = './about'>About</Link> </li>
       </div>
        <li>
        <Link to = './cart'><img src ={Cart} alt = 'Cart'></img></Link> 
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
