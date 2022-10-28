import nextIcon from '../assets/icon-next.svg'
import prevIcon from '../assets/icon-previous.svg'
// styles 
import './Modal.css'

export default function Modal({handleClose, items, handleClick, handleOpen, productImage}) {

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
                <div>
      {items.map((item, index) => (
        <div key={item.title}>
            <div className='modal-image'>
              <img
                src={productImage}
                onClick={handleOpen}
                alt='Sneakers'>
              </img>
            </div>
            <div className='thumbnails-img'>
              <ul>
                {
                  item.thumbnail.map((thumb, id) => {
                    return (
                      <li key={thumb.id} className={'thumbnails'} >
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
      ))}
    </div>
        </div>
    </div>
  )
}
