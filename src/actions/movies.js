import { GET_MOVIES } from "./types";
import Axios from "axios";

export const getMoviesAction = () => {
  return async (dispatch) => {
    let movies = await Axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=ba4f3decbd81cc38175b3d6fbc4ac143&language=en-US&page=1"
    );
    dispatch({
      type: GET_MOVIES,
      payload: movies.data.results,
    });
  };
};
