import './Collections.css'

// cart image 
import Cart from '../../assets/icon-cart.svg'
 
export default function Collections({ openModal, handleAddToCart, items, amount, increase, decrease, handleThumbnails, productImage }) {

  return (
    <div>
      {items.map((item, index) => (
        <div className='sneakers-page' key={item.title}>
          <div className='products'>
            <div className='sneakers'>
              <img
                src={productImage}
                onClick={openModal}
                alt='Sneakers'>
              </img>
            </div>
            <div className='thumbnail-img'>
              <ul>
                {
                  item.thumbnails.map((thumb, id) => {
                    return (
                      <li key={thumb.id} className={'thumbnail'} >
                      <img
                        id={id}
                        data-itemid={index}
                        src={thumb.thumbnail}
                        alt='Thumbnail'
                        onClick={(event) => handleThumbnails(event)}></img>
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
            <div className='price-area'>
            <div className='price'>
              <p className='item-price'>${item.price}.00</p>
              <p className='item-discount'>50%</p>
            </div>
            <p className='main-price'>$250.00</p>
            </div>
            <div className='button-area'>
            <div className='buttons'>
            <button className='cart-item-remove' onClick={decrease}>-</button>
            <span>{amount}</span>
            <button className='cart-item-add' onClick={increase}>+</button>
            </div>
            <button className='cart-btn' onClick={() => handleAddToCart(item)}> <img className='cart-img' src={Cart} alt = 'cart'></img>Add to cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
 
}
