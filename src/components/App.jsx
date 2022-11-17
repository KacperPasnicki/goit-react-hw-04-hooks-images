import React, {useState, useEffect} from 'react';

import { Searchbar } from "./Searchbar/Searchbar";

import {ImageGallery} from './ImageGallery/ImageGallery'
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';

import {useAPI} from './API/API'
import { Loader } from './Loader/Loader';

// const API_URL=`https://pixabay.com/api/?key=${KEY}&q=pokemon&image+type=photo&page=${page}&per_page=${per_page}`

// const KEY = '29532345-deb84d68428e9d4fffb51e10d'
// const URL =`https://pixabay.com/api/?key=${KEY}&q=yellow+flowers&image+type=photo`

// const INITIAL_STATE = {
//   images: [],
//       isLoading: false,
//         error: null,
//         isOpen:false,
//         modalImg: '',
//         page: 1,
        
//         searchValue: ''

//     };
  
export const App = () => {
  // const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');

  const {
    images,
    error,
    isLoading,
    handleLoadingFalse,
    handleLoadingTrue,
    clearImages
  } = useAPI(query, page, 12)

  useEffect(() => {
   
    const onStart= async () => {
      
      setPage(1)
  }
  onStart()
  .catch(console.error)
  },[])
  

  
 const searchMovie  = async(e) =>
     // if (page !== this.state.page || prevState.searchValue !== this.state.searchValue) 
        { 
      e.preventDefault();
      handleLoadingTrue();
      console.log('componentDidUpdate()')
      try {
        
      const url = `https://pixabay.com/api/?key={29532345-deb84d68428e9d4fffb51e10d}&q=${query}&image+type=photo&page={1}&per_page={12}`;

      const res = await fetch(url)
      const data = await res.json()
      console.log(data);
      images(data.hits)
      }
    

    catch (error) {
      
        console.log( 'Error while loading data. Try again later.')
      ;
    } 
    finally {
      handleLoadingFalse();
    }
    
  }
  



 const openModal = (ID) => {
    const clicked = images.filter(image =>
      {
        console.log('Image clicked')
        return image.id === ID
      }
      )
      const Img = clicked[0]
      setIsOpen(true);
        setModalImg(Img)
      // this.setState(state => ({isOpen:true, modalImg: Img}))
  }

 const handleGetRequest = e => {
    
    e.preventDefault();
    console.log('submit')
    const form = e.currentTarget;
    const inputValue = e.target.elements.inputValue.value
    setQuery(inputValue)
    clearImages()
    setPage(1)
    console.log(inputValue)
    form.reset();
  };

 const closeImg = () => {
  setIsOpen(false)
  }
 

  const nextPage = () => {
    handleLoadingTrue()
  
    console.log('nextPage()')
  try {  
    setPage( page +1 )}
  
  catch (error) {
    error()
  }
  finally {
    handleLoadingFalse()
  }
  }



   
  //  const {images, modalImg, isOpen, isLoading,  page} = this.state
  return (
    <div
    className='App'
        >
      {isOpen ?
   (<Modal 
    
    closeImg ={closeImg}
    clickedImg ={modalImg}
    />) : null
  
  }
 <Searchbar handleGetRequest={handleGetRequest}/>
 {isLoading && (page <= 1) ? <Loader/> :null}
 <ImageGallery>
 
    <ImageGalleryItem images={images}
    onCLick ={openModal}
     loading={isLoading}
    />
    
    </ImageGallery>
    {
    isLoading && (page >= 2) ? <Loader/> :null  }   
    {images.length === 0 ? null : (
        <Button nextPage={nextPage}/>
          
       
    )}
    </div> 
  );
};



