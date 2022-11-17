import axios from "axios";
import  { useState, useEffect } from "react";
const KEY = '29532345-deb84d68428e9d4fffb51e10d'
const URL =`https://pixabay.com/api/?key=${KEY}&q=yellow+flowers&image+type=photo`

// axios.defaults.baseURL = 
// 'https://pixabay.com/api/?key=29532345-deb84d68428e9d4fffb51e10d'
// const KEY = '29532345-deb84d68428e9d4fffb51e10d'

export const useAPI = (searchValue, page, per_page) => {
  const [images, setImages] = useState([]);
 const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false);
 
  const handleLoadingTrue = () => setIsLoading(true);
  const handleLoadingFalse = () => setIsLoading(false);
  const handleError = () => setError(true);
  const clearImages = () => setImages([]);

useEffect(() => {
  if (searchValue === "" ) return;
  handleLoadingTrue()
  setError(false)
  try {
      const fetchApi = async () => {
      await axios
      .get(
          `https://pixabay.com/api/?key=${KEY}&q=${searchValue}&image+type=photo&page=${page}&per_page=${per_page}`
        ).then(response => {
          setImages(images => [...images, ...response.data.hits])
          handleLoadingFalse() })
          
   }  
   fetchApi()
        }
       catch (error){handleError()}  
    },[searchValue,page,per_page])

return {
  images,
  error,
  isLoading,
  handleLoadingFalse,
  handleLoadingTrue,
  clearImages
}
}