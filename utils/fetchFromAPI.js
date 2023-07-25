import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'b404e5448amshfa1998c921dc783p1fcf70jsn6e77db9ba079', ///process.env.REACT_APP_RAPID_API_KEY
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  }