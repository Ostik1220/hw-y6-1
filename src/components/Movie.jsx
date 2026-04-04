import { Header } from "./Header";
import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Button } from "./components.styled";

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  const findMovie = async (e) => {
    e.preventDefault();

    const movieName = e.target.movie.value;
     e.target.movie.value = ''


    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          params: {
            query: movieName,
          },
          headers: {
            accept: "application/json",
              Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTYwMjBiMGI4ZDFhNzIwMGVjMzNhNmEwNGI4ZGE3YyIsIm5iZiI6MTc0OTM5NDMzMi45MzgsInN1YiI6IjY4NDVhMzljOGQxZjI4NjYzZTNmYzRlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.crT0hh6h34hPOiDiz1vnxODChEzzJniuysRO2UIHQFk",
          },
        }
      );

      setMovies(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />

      <form onSubmit={findMovie} className="SearchForm">
        <input type="text" name="movie" placeholder="Search movie..." />
        <Button type="submit">search</Button>
      </form>
      <div className="BOX">
      {movies.map((film) => (
        <NavLink key={film.id} to={`/movies/${film.id}`} className="Link">
  {film.title}
</NavLink>
      ))}
      </div>
    </div>
  );
};