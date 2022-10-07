import Product1 from '../../assets/image-product-1.jpg'
import Product2 from '../../assets/image-product-2.jpg'
import Product3 from '../../assets/image-product-3.jpg'
import Product4 from '../../assets/image-product-4.jpg'
import Thumbnail_1 from '../../assets/image-product-1-thumbnail.jpg'
import Thumbnail_2 from '../../assets/image-product-2-thumbnail.jpg'
import Thumbnail_3 from '../../assets/image-product-3-thumbnail.jpg'
import Thumbnail_4 from '../../assets/image-product-4-thumbnail.jpg'
// styles 
import './Sneakers.css'


import React, { useState } from 'react'

export default function Sneakers({handleOpen}) {

    let [productImage, setProductImage] = useState(Product1)
    const [isActive, setIsActive] = useState(false)
    
    const handleClick = () => {
            
           setIsActive (true)
    }

    const handleAdd = ()  => {


    }

    const handleReduce = ()  => {

        
    }

  return (
   
        <div className='sneakers-page'>
        <div className='products'> 
            <div className='sneakers'>
            <img 
                src={productImage} alt = 'Sneakers' onClick={handleOpen}>
            </img>
            </div>
            <div className='thumbnail-img'>
                <ul>
                    <li className={isActive ? 'active thumbnail'  : 'thumbnail'} onClick = {() => handleClick()} id={1}>
                        <img
                        src={Thumbnail_1} 
                        alt = 'Thumbnail'
                        onClick={() => setProductImage(Product1)}></img>
                    </li>
                    <li className={isActive ? 'active thumbnail'  : 'thumbnail'} onClick = {() => handleClick()} id={2}>
                        <img 
                        src={Thumbnail_2} 
                        alt = 'Thumbnail'
                        onClick={() => setProductImage(Product2)}></img>
                    </li>
                    <li className={isActive ? 'active thumbnail'  : 'thumbnail'} onClick = {() => handleClick()} id={3}>
                        <img 
                        src={Thumbnail_3} 
                        alt = 'Thumbnail'
                        onClick={() => setProductImage(Product3)}></img>
                    </li>
                    <li className={isActive ? 'active thumbnail'  : 'thumbnail'} onClick = {() => handleClick()} id={4}>
                        <img 
                        src={Thumbnail_4} 
                        alt = 'Thumbnail'
                        onClick={() => setProductImage(Product4)}></img>
                    </li>
                </ul>
            </div>
        </div>  
        <div className='product-info'> 
            <h4>Sneaker Company</h4>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>Fall Limited Edition Sneakers

                These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <p>$125.00</p>
            <p>50%</p>
            <p>$250.00</p>
            <button className='cart-item-remove'>-</button>
            <span>0</span>
            <button className='cart-item-add'>+</button>
            <button className='btn'>Add to Cart</button>
            
        </div>
    </div>  
  )
}
