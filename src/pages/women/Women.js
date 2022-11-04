import  './Women.css'

import React, { useState } from 'react'

export default function Women() {

  const [items] = useState([
    { title: 'Hoodie', price: 21.99 },
    { title: 'Women Sneakers', price: 34.99 },
    { title: 'Women Tee', price: 12.99 }
  ])

  return (
    <div>
    <h3>Latest Offers</h3>
    <div className="offers">
      {items.map(item => (
        <div key={item.title}>
          <img className='offer-img' src="https://via.placeholder.com/350x200" alt="product" />
          <h4>{item.title}</h4>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  </div>
  )
}
