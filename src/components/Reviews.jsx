import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { RedText, Text } from "./components.styled";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTYwMjBiMGI4ZDFhNzIwMGVjMzNhNmEwNGI4ZGE3YyIsIm5iZiI6MTc0OTM5NDMzMi45MzgsInN1YiI6IjY4NDVhMzljOGQxZjI4NjYzZTNmYzRlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.crT0hh6h34hPOiDiz1vnxODChEzzJniuysRO2UIHQFk",
            },
          }
        );

        setReviews(response.data.results || []);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    getReviews();
  }, [movieId]);

  if (isLoading) {
    return <p>Loading reviews…</p>;
  }

  if (error) {
    return <p>Failed to load reviews.</p>;
  }

  if (!reviews.length) {
    return <p>No reviews available for this movie.</p>;
  }

  return (
    <div>
      <title>Reviews</title>
      <ul>
        {reviews.map((review) => (
          <li key={review.id} style={{ marginBottom: 16 }}>
            <RedText>{review.author}</RedText>
            <Text>{review.content}</Text>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews