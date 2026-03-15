import { Header } from "./Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export const MainPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/movie/day",
          {
            headers: {
              accept: "application/json",
              Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTYwMjBiMGI4ZDFhNzIwMGVjMzNhNmEwNGI4ZGE3YyIsIm5iZiI6MTc0OTM5NDMzMi45MzgsInN1YiI6IjY4NDVhMzljOGQxZjI4NjYzZTNmYzRlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.crT0hh6h34hPOiDiz1vnxODChEzzJniuysRO2UIHQFk",
            },
          }
        );

        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      <Header isMainPage={true}/>
      <h1>Tranding today</h1>
<div className="BOX">
      {movies.map((movie) => (
        <NavLink key={movie.id} to={`/movies/${movie.id}`}>{movie.title || movie.name}</NavLink>
      ))}
    </div>
    </div>
  );
};