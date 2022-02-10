import { GET_MOVIES } from "../actions/types";

export const moviesReducer = (movies = [], action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        movies: action.payload,
      };
    default:
      return { movies };
  }
};
