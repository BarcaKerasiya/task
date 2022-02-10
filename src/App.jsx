import { useState, useEffect } from "react";
import Axios from "axios";
import { getMoviesAction } from "./actions/movies";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);
  // const [movies, setMovies] = useState([]);
  console.log("movies", movies);
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    dispatch(getMoviesAction());
  };

  return (
    <>
      {movies.map((item, index) => {
        return (
          <div key={item.id}>
            <span>{item.title}</span>
            <br />
          </div>
        );
      })}
    </>
  );
}

export default App;
