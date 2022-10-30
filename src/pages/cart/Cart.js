import './Cart.css'
import deleteIcon from '../../assets/icon-delete.svg'

export default function Cart({cart, setCart, amount, handleAddToCart, closeCart, items}) {

  const handleRemove = (title) => {

    setCart((prevCart) => {
     return prevCart.filter((cart) => {
      return title !== cart.title
    })
  })
  handleAddToCart()
  }

  // const handleRemove = (title) => {

  //   const arr = cart.filter((item) => item.title !== title)
  //   setCart(arr)
  //   handleAddToCart()

  // }


  return (
    <div className='cartmodal-backdrop'>     
      <div className='cart-modal'>
      <div className='header'> Cart </div>
      <div className='border'></div>
     <div className='cart-container'>
      {cart.length === 0 && <p className='cart-message'>Your cart is empty</p>}
     <div>
        {cart.map(item => (
          <div className='details' key={item.title}>
            <img className='cart-sneakers' src={item.thumbnail[0].thumbnail} alt="product" />
            <div className='items'><p>{item.title}</p>
            <p>${item.price} x {amount} <span>${item.price * amount}</span></p></div>
          </div>
        ))}         
      </div>      
          {cart.length === 1 && <div className='cart-icon'><img onClick={()=>handleRemove(cart.title)} src={deleteIcon} alt = 'delete'></img></div>}
     </div>
         {cart.length === 1 && <button className='btn'>Checkout</button>}
      </div>
    </div>
  )
}
