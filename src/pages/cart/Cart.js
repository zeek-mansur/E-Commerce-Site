import './Cart.css'

import React from 'react'

export default function Cart({cart, setCart, amount}) {

  return (
    <div>
      <span className='header'> Cart </span>
      <div>
        {cart.map(item => (
          <div key={item.title}>
            <img className='sneakers' src={item.picture[0]} alt="product" />
            <h4>{item.title}</h4>
            <p>${item.price} x {amount} <span>${item.price * amount}</span></p>
          </div>
        ))}
      </div>
          <button className='btn'>Checkout</button>
    </div>
  )
}
