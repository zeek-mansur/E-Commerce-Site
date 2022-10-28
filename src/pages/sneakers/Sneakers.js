// styles
import './Sneakers.css'
 
export default function Sneakers({ handleOpen, handleAddToCart, items, amount, increase, decrease, handleClick, productImage }) {
 
  return (
    <div>
      {items.map((item, index) => (
        <div className='sneakers-page' key={item.title}>
          <div className='products'>
            <div className='sneakers'>
              <img
                src={productImage}
                onClick={handleOpen}
                alt='Sneakers'>
              </img>
            </div>
            <div className='thumbnail-img'>
              <ul>
                {
                  item.thumbnail.map((thumb, id) => {
                    return (
                      <li key={thumb.id} className={'thumbnail'} >
                      <img
                        id={id}
                        data-itemid={index}
                        src={thumb.thumbnail}
                        alt='Thumbnail'
                        onClick={(event) => handleClick(event)}></img>
                    </li>
                    )
                  })
                }
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
            <button className='btn' onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  )
 
}