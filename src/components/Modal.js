import Product1 from '../assets/image-product-1.jpg'
import Product2 from '../assets/image-product-2.jpg'
import Product3 from '../assets/image-product-3.jpg'
import Product4 from '../assets/image-product-4.jpg'
import Thumbnail_1 from '../assets/image-product-1-thumbnail.jpg'
import Thumbnail_2 from '../assets/image-product-2-thumbnail.jpg'
import Thumbnail_3 from '../assets/image-product-3-thumbnail.jpg'
import Thumbnail_4 from '../assets/image-product-4-thumbnail.jpg'
import nextIcon from '../assets/icon-next.svg'
import prevIcon from '../assets/icon-previous.svg'

// styles 
import './Modal.css'
// hooks
import React, { useState } from 'react'


export default function Modal({handleClose}) {

    let [productImage, setProductImage] = useState(Product1)
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {  
        setIsActive (true)
 }

  return (
    <div className='modal-backdrop'> 
        <div className='modal'>
                <p className='close-icon' onClick={handleClose}>x</p>
                <div className='icons-container'>
                    <div className='icons'>
                    <img src = {prevIcon} alt = 'Previous'></img>
                    </div>
                     <div className='icons'>
                        <img src = {nextIcon} alt = 'Next'></img>
                    </div>
                </div>       
        <div className='modal-image'>
            <img 
                src={productImage} alt = 'Sneakers'>
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
    </div>
  )
}
