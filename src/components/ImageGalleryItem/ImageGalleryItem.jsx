

import PropTypes from 'prop-types';

export const ImageGalleryItem = ({images, onCLick}) =>  {
   
    
     
      return (
        
             images.map(image => (
                    <li onClick={()=>onCLick(image.id)} key={image.id} className="ImageGalleryItem"> 
  <img src= {image.largeImageURL} alt={image.tags}  className='ImageGalleryItem-image'
  
  />
 
      </li>
              
            
             ))
        
      )

          }

          ImageGalleryItem.propTypes = {
              images: PropTypes.array.isRequired,
              onCLick: PropTypes.func.isRequired
                }
          