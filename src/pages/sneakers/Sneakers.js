import Product1 from '../../assets/image-product-1.jpg'

import './Sneakers.css'

import { useState } from "react"

export default function Sneakers({handleOpen, handleAddToCart, items, amount, increase, decrease}) {
  
  const [productImage, setProductImage] = useState(Product1)
  const [isActive, setIsActive] = useState(false) 
   
  const handleClick = (id, items) => {
            
        if (id === items.thumbnail[1].id) {
            setIsActive (true)
        } else 
        {
            setIsActive (false)
            
        }
 }
 
  return (
        <div>
        {items.map(item => ( 
          <div className='sneakers-page' key={item.title}>
            <div className='products'> 
              <div className='sneakers'>
                <img 
                    src={productImage}
                    onClick={handleOpen} 
                    alt = 'Sneakers'>
                </img>
              </div>
                  <div key={item.thumbnail[1].id} className='thumbnail-img'>
                      <ul>
                          <li className={isActive ? 'active thumbnail'  : 'thumbnail'} onClick = {() => handleClick()}>
                              <img
                              src={item.thumbnail[0].thumbnail} 
                              alt = 'Thumbnail'
                              onClick={() => setProductImage(item.picture[0])}></img>
                          </li>
                          <li className={isActive ? 'active thumbnail'  : 'thumbnail'} onClick = {() => handleClick()} >
                              <img 
                              src={item.thumbnail[1].thumbnail} 
                              alt = 'Thumbnail'
                              onClick={() => setProductImage(item.picture[1])}></img>
                          </li>
                          <li className={isActive ? 'active thumbnail'  : 'thumbnail'} onClick = {() => handleClick()} >
                              <img 
                              src={item.thumbnail[2].thumbnail} 
                              alt = 'Thumbnail'
                              onClick={() => setProductImage(item.picture[2])}></img>
                          </li>
                          <li className={ isActive ? 'active thumbnail'  : 'thumbnail'} onClick = {() => handleClick()}>
                              <img 
                              src={item.thumbnail[3].thumbnail} 
                              alt = 'Thumbnail'
                              onClick={() => setProductImage(item.picture[3])}></img>
                          </li>
                      </ul>
                  </div>
            </div>
        <div className='product-info'> 
            <h4>{item.Name}</h4>
            <h1>{item.title}</h1>
            <p>{item.Detail}</p>
            <p>£{item.price}</p>
            <p>50%</p>
            <button className='cart-item-remove' onClick={decrease}>-</button>
            <span>{amount}</span>
            <button className='cart-item-add' onClick={increase}>+</button>
            <button className='btn' onClick={() =>handleAddToCart(item)}>Add to Cart</button>
        </div>
          </div>   
        ))}
    </div>  
  )
        
    }
