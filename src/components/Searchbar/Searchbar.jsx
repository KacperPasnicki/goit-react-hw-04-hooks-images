
import PropTypes from 'prop-types';


export const Searchbar  = ({handleGetRequest}) => {
   
      
    
      
       
        return (
            <header className="Searchbar">
          <form className='SearchForm' 
          onSubmit={handleGetRequest}
         >
            <label >
            <input
            className='SearchForm-input'
            name='inputValue'
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            />
            </label>
            <label>
            <button className='SearchForm-button' type="submit">&rArr;</button>
            </label>
         
        
            
          </form>
          </header>
        );
      }
  
      Searchbar.propTypes = {
        handleGetRequest: PropTypes.func.isRequired,
        
          }
    