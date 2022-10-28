import './Cart.css'
import deleteIcon from '../../assets/icon-delete.svg'

import React from 'react'

export default function Cart({cart, setCart, amount, handleAddToCart, closeCart}) {

  const handleRemove = (title) => {

    const arr = cart.filter((item) => item.title !== title)
    setCart(arr)
    handleAddToCart()
  }

  return (
    <div className='cartmodal-backdrop'>     
      <div className='cart-modal'>
      <div className='header'> Cart </div>
      <div className='border'></div>
     <div className='cart-container'>
     <div>
        {cart.map(item => (
          <div className='details' key={item.title}>
            <img className='cart-sneakers' src={item.thumbnail[0].thumbnail} alt="product" />
            <div className='items'><p>{item.title}</p>
            <p>${item.price} x {amount} <span>${item.price * amount}</span></p></div>
          </div>
        ))}      
      </div>        
          <div className='cart-icon'><img onClick={handleRemove} src={deleteIcon} alt = 'delete'></img></div>
     </div>
          <button className='btn'>Checkout</button>
      </div>
    </div>
  )
}
