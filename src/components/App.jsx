import React from 'react';

import { Searchbar } from "./Searchbar/Searchbar";

import {ImageGallery} from './ImageGallery/ImageGallery'
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';

import {API} from './API/API'
import { Loader } from './Loader/Loader';

// const KEY = '29532345-deb84d68428e9d4fffb51e10d'
// const URL =`https://pixabay.com/api/?key=${KEY}&q=yellow+flowers&image+type=photo`

const INITIAL_STATE = {
  images: [],
      isLoading: false,
        error: null,
        isOpen:false,
        modalImg: '',
        page: 1,
        
        searchValue: ''

    };
  
export class App extends React.Component {
  state = { ...INITIAL_STATE };


  
 async componentDidUpdate(prevProps, prevState)
 
 {

    if (prevState.page !== this.state.page || prevState.searchValue !== this.state.searchValue) 
    
    { 
      this.setState({ isLoading: true });
      console.log('componentDidUpdate()')
      try {
        
      const Api = await API(this.state.searchValue, this.state.page, 12);
 this.setState(({images}) => ({
        images: [...images, ...Api.hits],
        errorMsg: ''
      }));
    } catch (error) {
      this.setState({
        errorMsg: 'Error while loading data. Try again later.'
      });
    } finally {
      this.setState({ isLoading: false });
    }
    
  }
  
}
async componentDidMount() {
  console.log('on start')
  
  this.setState({ images: [], page: 1 });
}


  openModal = (ID) => {
    const clicked = this.state.images.filter(image =>
      {
        console.log('Image clicked')
        return image.id === ID
      }
      )
      const Img = clicked[0]
      this.setState(state => ({isOpen:true, modalImg: Img}))
  }

  handleGetRequest = e => {
    
    e.preventDefault();
    console.log('submit')
    const form = e.currentTarget;
    const inputValue = e.target.elements.inputValue.value
    this.setState({ images: [], searchValue: inputValue, page: 1 });
    form.reset();
  };

  closeImg = () => {
    this.setState({isOpen: false})
  }
 

  nextPage = () => {
   this.setState({isLoading:true})
    console.log('nextPage()')
    
     this.setState(({page})=> ({
      page: page + 1
    }))}
   

// handleGetRequest = async (e) => {
  
//   const { page } = this.state;
//   e.preventDefault()
//   console.log('get API2')
//   const inputValue = e.target.elements.searchValue.value
//   const URL =`https://pixabay.com/api/?key=${KEY}&q=${inputValue}&image+type=photo&page=${page}&per_page=12`

//   const request = await fetch(URL)
//   const response = await request.json()

// this.setState({images: response.hits })
// console.log(this.state.images)
// }
// closeImg = () => {
//   this.setState({isOpen: false})
// }

// LoadImages = async (event) => {
  
//   try {
//     const { page } = this.state;
//     event.preventDefault()
//     console.log('LoadImages()')
//     const inputValue = event.target.elements.searchValue.value
//     this.setState({ isLoading: true });
//     const response = await axios.get(
//       `https://pixabay.com/api/?key=${KEY}&q=${inputValue}&image+type=photo&page=${page}&per_page=12`
//     );

//     this.setState((prevState) => ({
//       images: [...prevState.hits, ...response.hits],
//       errorMsg: ''
//     }));
//   } catch (error) {
//     this.setState({
//       errorMsg: 'Error while loading data. Try again later.'
//     });
//   } finally {
//     this.setState({ isLoading: false });
//   }
// };


  render() {
   const {images, modalImg, isOpen, isLoading,  page} = this.state
  return (
    <div
    className='App'
    style={{
      height: '100%',
      color: '#010101',
      padding: '50px 10px',
      justifyContent: 'space-around'


      
    }}
    >
      {isOpen ?
   (<Modal 
    
    closeImg ={this.closeImg}
    clickedImg ={modalImg}
    />) : null
  
  }
 <Searchbar handleGetRequest={this.handleGetRequest}/>
 {isLoading && (page <= 1) ? <Loader/> :null}
 <ImageGallery>
 
    <ImageGalleryItem images={images}
    onCLick ={this.openModal}
     loading={isLoading}
    />
    
    </ImageGallery>
    {
    isLoading && (page >= 2) ? <Loader/> :null  }   
    {images.length === 0 ? null : (
        <Button nextPage={this.nextPage}/>
          
       
    )}
    </div> 
  );
};
}


