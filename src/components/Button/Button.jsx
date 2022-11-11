import PropTypes from 'prop-types';

export const Button = ({nextPage}) =>


{
    
return (

    <button type="button" className="Button" onClick={()=>nextPage()}>load More</button>
)


}

Button.propTypes = {
    nextPage: PropTypes.func.isRequired,
    
      }