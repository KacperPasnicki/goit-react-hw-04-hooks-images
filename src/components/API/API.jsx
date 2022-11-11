import axios from "axios";
const KEY = '29532345-deb84d68428e9d4fffb51e10d'
const URL =`https://pixabay.com/api/?key=${KEY}&q=yellow+flowers&image+type=photo`

// axios.defaults.baseURL = 
// 'https://pixabay.com/api/?key=29532345-deb84d68428e9d4fffb51e10d'
// const KEY = '29532345-deb84d68428e9d4fffb51e10d'

export const API = async (searchValue, page, per_page ) => {
  const response = await axios.get(
          `https://pixabay.com/api/?key=${KEY}&q=${searchValue}&image+type=photo&page=${page}&per_page=${per_page}`
        );
        return response.data
}