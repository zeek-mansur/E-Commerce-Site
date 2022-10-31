import { useState } from 'react'
import nextIcon from '../assets/icon-next.svg'
import prevIcon from '../assets/icon-previous.svg'
// styles 
import './Modal.css'

export default function Modal({handleClose, items, productImage}) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPicture = (pictureIndex) => {
     
      setCurrentIndex(pictureIndex)
    }
 

    const handleClick = (event) => {

        const thumbnailContainers = document.querySelectorAll('.thumbnails')
        thumbnailContainers.forEach(container => {
          container.classList.remove('activee')
        }) 

        setCurrentIndex(items[parseInt(event.target.dataset.itemid)].picture[parseInt(event.target.id)])
        event.target.parentElement.classList.add('activee')
        setActiveImage(event)
        goToPicture(parseInt(event.target.id))
      }
     
      const setActiveImage = (event) => {
        const imageId = event.target.id
        return imageId
    }
    
    const pictureLength = items[0].picture.length
    
    const goToPrevious = ()  => {

        const isFirstPicture = currentIndex === 0
        const newIndex = isFirstPicture ? pictureLength - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = ()  => {
     
        const isLastPicture = currentIndex === pictureLength -1
        const newIndex = isLastPicture ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }


  return (
    <div className='modal-backdrop'> 
        <div className='modal'>
                <p className='close-icon' onClick={handleClose}>x</p>
                <div className='icons-container'>
                    <div  className='icons'>
                    <img onClick={() => goToPrevious()} src = {prevIcon} alt = 'Previous'></img>
                    </div>
                     <div className='icons'>
                        <img onClick={()=>goToNext()} src = {nextIcon} alt = 'Next'></img>
                    </div>
                </div>                  
                <div>
      {items.map((item, index ) => (
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
                  item.thumbnail.map((thumb, thumbIndex) => {
                    return (
                      <li key={thumb.id} className={'thumbnails'} >
                      <img
                        id={thumbIndex}
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
