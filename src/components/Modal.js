import { useState } from 'react'
import nextIcon from '../assets/icon-next.svg'
import prevIcon from '../assets/icon-previous.svg'
// styles 
import './Modal.css'

export default function Modal({handleClose, items, productImage, picture}) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const handleClick = (event) => {
 
        const thumbnailContainers = document.querySelectorAll('.thumbnails')
        thumbnailContainers.forEach(container => {
          container.classList.remove('activee')
        }) 

        setCurrentIndex(items[parseInt(event.target.dataset.itemid)].picture[parseInt(event.target.id)])
        event.target.parentElement.classList.add('activee')
        setActiveImage(event)
      }
     
      const setActiveImage = (event) => {
        const imageId = event.target.id
        return imageId
    }
    

    const goToPrevious = ()  => {

        const isFirstPicture = currentIndex === 0
        const newIndex = isFirstPicture ? picture.length -1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = ()  => {

        const isLastPicture = currentIndex === picture.length -1
        const newIndex = isLastPicture ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }


  return (
    <div className='modal-backdrop'> 
        <div className='modal'>
                <p className='close-icon' onClick={handleClose}>x</p>
                <button onClick={goToPrevious} ></button>
                <button onClick={goToNext} ></button>
                <div className='icons-container'>
                    <div className='icons'>
                    <img onClick={goToPrevious} src = {prevIcon} alt = 'Previous'></img>
                    </div>
                     <div className='icons'>
                        <img onClick={goToNext} src = {nextIcon} alt = 'Next'></img>
                    </div>
                </div>                  
                <div>
      {items.map((item, index) => (
        <div key={item.title}>
            <div className='modal-image'>
              <img
                src={item.picture[currentIndex]}
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
