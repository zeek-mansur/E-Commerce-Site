import './Cart.css'
import deleteIcon from '../../assets/icon-delete.svg'

export default function Cart({cart, setCart, amount, handleAddToCart, closeCart}) {

  
  const refreshPage = () => {
    window.location.reload(false);
  }
  
  const handleRemove = (title) => {

    setCart((prevCart) => {
     return prevCart.filter((cart) => {
      return title !== cart.title
    })
  })
  handleAddToCart()
  closeCart()
  refreshPage()
  }

  return (
    <div className='cartmodal-backdrop'>     
      <div className='cart-modal'>
      <p onClick={closeCart} className='cart-close'>X</p>  
      <div className='header'> Cart </div>
      <div className='border'></div>
     <div className='cart-container'>
    {cart.length === 0 && <p className='cart-message'>Your Cart is empty</p>}
     {cart.length === 1  && <div>
        {cart.map(item => (
           <div className='details' key={item.title}>
            <img className='cart-sneakers' src={item.thumbnails[0].thumbnail} alt="product" />
            <div className='items'><p>{item.title}</p>
            <p>${item.price} x {amount} <span>${item.price * amount}</span></p></div>
          </div>
        ))}         
      </div>  }    
          {cart.length === 1 && <div className='cart-icon'><img onClick={()=>handleRemove(cart.title)} src={deleteIcon} alt = 'delete'></img></div>}
     </div>
         {cart.length === 1 && <button className='btn'>Checkout</button>}
      </div>
    </div>
  )
}
