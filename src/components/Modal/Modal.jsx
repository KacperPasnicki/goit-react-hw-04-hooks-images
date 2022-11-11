
import PropTypes from 'prop-types';
export const Modal = ({clickedImg, closeImg}) => {

    return(

     
      <div className='Overlay' onClick={() => closeImg()} >

<img className='Modal' src={clickedImg.largeImageURL}
alt={clickedImg.tags}
style={{
    height:'auto',
    width: '90%'
}}
/>

      </div>)
      
}

Modal.propTypes = {
    clickedImg: PropTypes.object.isRequired,
    closeImg: PropTypes.func.isRequired
      }
