import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCast = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTYwMjBiMGI4ZDFhNzIwMGVjMzNhNmEwNGI4ZGE3YyIsIm5iZiI6MTc0OTM5NDMzMi45MzgsInN1YiI6IjY4NDVhMzljOGQxZjI4NjYzZTNmYzRlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.crT0hh6h34hPOiDiz1vnxODChEzzJniuysRO2UIHQFk",
            },
          }
        );

        setCast(response.data.cast || []);
        
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    getCast();
  }, [movieId]);

  if (isLoading) {
    return <p>Loading cast…</p>;
  }

  if (error) {
    return <p>Failed to load cast.</p>;
  }

  if (!cast.length) {
    return <p>No cast information available.</p>;
  }

  return (
    <div>
      <h2>Cast</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {cast.slice(0, 20).map((actor) => {
          const profileUrl = actor.profile_path
            ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
            : "https://via.placeholder.com/80x120?text=No+Photo";

          return (
            <li
              key={actor.cast_id || actor.credit_id}
              style={{
                marginBottom: 16,
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
              }}
            >
              <img
                src={profileUrl}
                alt={actor.name}
                style={{
                  width: 80,
                  height: 120,
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />

              <div>
                <strong>{actor.name}</strong>
                <div>as {actor.character}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
