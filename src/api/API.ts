import axios from 'axios';
const MOVIE_API_URL = process.env.REACT_APP_MOVIE_API_URL;
const MOVIE_API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
export const API_HOST =
  process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_URL : process.env.REACT_APP_DEV_URL;

class Api {
  static async requestMovieData(page: number) {
    try {
      const res: { msg?: string; data: any } = await axios({
        url: `${MOVIE_API_URL}movie/popular?api_key=${MOVIE_API_KEY}&language=en-US&page=${page}`,
        method: 'GET',
      });
      if (res?.msg) {
        console.log('error', res?.msg);
        return;
      }
      return res.data;
    } catch (e) {
      console.log('error', e);
    }
  }
}

export default Api;
