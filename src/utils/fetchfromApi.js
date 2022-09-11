import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '62d8c297f9mshfb8dcce3eadbd3bp150bc6jsn0c234f7cd15f',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchApi = async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options)
    return data  
  }