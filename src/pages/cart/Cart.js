import './Cart.css'

import React from 'react'

export default function Cart({cart, setCart}) {
  return (
    <div>
      <span className='header'> Cart </span>
      <div>
        {cart.map(item => (
          <div key={item.title}>
            <img className='sneakers' src={item.picture[0]} alt="product" />
            <h4>{item.title}</h4>
            <p>£{item.price}</p>
          </div>
        ))}
      </div>
          <button className='btn'>Checkout</button>
    </div>
  )
}
