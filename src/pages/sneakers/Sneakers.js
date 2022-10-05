import Sneak from '../../assets/image-product-1.jpg'
// styles 
import './Sneakers.css'


import React from 'react'

export default function Sneakers() {
  return (
    <div className='sneakers-page'>
      <div className='sneakers'> 
        <img src={Sneak} alt = 'Sneakers'>
        </img>
        </div>

      <div> 
      <h4>Sneaker Company</h4>

<h1>Fall Limited Edition Sneakers</h1>

<p>$125.00</p>
<p>50%</p>
<p>$250.00</p>
<button className='btn'>Add to Cart</button>
        </div>
    </div>
  )
}
