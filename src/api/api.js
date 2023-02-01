import axios from 'axios';
import toast from 'react-hot-toast';

const BASIC_URL = 'https://api.themoviedb.org/';
const PERSONAL_KEY = '9f85e8fb1a6cfbaec434c3044880fa56';
const PERSONAL_KEY_V4 =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Zjg1ZThmYjFhNmNmYmFlYzQzNGMzMDQ0ODgwZmE1NiIsInN1YiI6IjYzZDhkOTVkOTU1YzY1MDBjZTBkNmE0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uYaQ3VBHL1Qtnw7fToXKMmjgKrxBSZro0zcmp2TbLK0';


  const getData = async url => {
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      toast.error('Sorry, We don`t have this film`s information');
    }
  };

  export const getReviews = movieId => {
    const url = `${BASIC_URL}3/movie/${movieId}/reviews?api_key=${PERSONAL_KEY}&language=en-US&page=1`;
    return getData(url);
  };

  export const getMovieDetails = movieId => {
    const url = `${BASIC_URL}3/movie/${movieId}?api_key=${PERSONAL_KEY}&language=en-US&page=1`;
    return getData(url);
  };

  export const getTranding = () => {
    const url = `${BASIC_URL}3/trending/all/day?api_key=${PERSONAL_KEY}`;
    return getData(url);
  };

  export const getMovies = query => {
    const url = `${BASIC_URL}3/search/movie?api_key=${PERSONAL_KEY}&query=${query}&language=en-US&page=1&include_adult=false`;
    return getData(url);
  };

  export const getCast = movieId => {
    const url = `${BASIC_URL}3/movie/${movieId}/credits?api_key=${PERSONAL_KEY}&language=en-US`;
    return getData(url);
  };