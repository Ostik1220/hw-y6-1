import { Header } from "./Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, NavLink, Outlet } from "react-router-dom";

export const MoviePage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            headers: {
              accept: "application/json",
              Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTYwMjBiMGI4ZDFhNzIwMGVjMzNhNmEwNGI4ZGE3YyIsIm5iZiI6MTc0OTM5NDMzMi45MzgsInN1YiI6IjY4NDVhMzljOGQxZjI4NjYzZTNmYzRlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.crT0hh6h34hPOiDiz1vnxODChEzzJniuysRO2UIHQFk",
            },
          }
        );

        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getMovie();
  }, [movieId]);

  return (
    <div>
      <Header />

      <button onClick={() => navigate(-1)}>← go back</button>

      {movie && (
        <div className="movie">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />

          <div>
            <h1>
              {movie.title} ({movie.release_date.slice(0, 4)})
            </h1>

            <p>User score: {movie.vote_average}/10⭐</p>

            <h2>Overview</h2>
            <p>{movie.overview}</p>

            <h3>Genres</h3>
            <p>{movie.genres.map((g) => g.name).join(", ")}</p>
          </div>
        </div>
      )}
      <div className="nav">
        <NavLink
          to="reviews"
          className={({ isActive }) => (isActive ? "active" : "navLink")}
        >
          Reviews
        </NavLink>

        <NavLink
          to="cast"
          className={({ isActive }) => (isActive ? "active" : "navLink")}
        >
          Cast
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
};