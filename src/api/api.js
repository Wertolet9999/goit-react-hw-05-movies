import axios from 'axios';
import toast from 'react-hot-toast';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '9f85e8fb1a6cfbaec434c3044880fa56';


  const getData = async url => {
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      toast.error('Sorry, We don`t have this film`s information');
    }
  };

  export const getReviews = movieId => {
    const url = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    return getData(url);
  };

  export const getMovieDetails = movieId => {
    const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US&page=1`;
    return getData(url);
  };

  export const getTranding = () => {
    const url = `${BASE_URL}/trending/all/day?api_key=${API_KEY}`;
    return getData(url);
  };

  export const getMovies = query => {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`;
    return getData(url);
  };

  export const getCast = movieId => {
    const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
    return getData(url);
  };