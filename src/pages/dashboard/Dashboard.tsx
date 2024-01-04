import { useEffect, useState } from "react";
import { getMovieImage, getMoviesTrending } from "../../api/apiRequest";
import { useAppSelector } from "../../app/hooks";
import { Result } from "../../types/MoviesTrandingI";

export default function Dashboard() {
// Redux
  const auth = useAppSelector((state) => state.auth);

//   States
  const [movies, setMovies] = useState<Result[]>([]);

  useEffect(() => {
    if (!auth.api_key) return;

    const fetchMovies = async () => {
      const res = await getMoviesTrending(auth.api_key as string);
      setMovies(res.results);
    };

    fetchMovies();
  }, [])



    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>{movie.title} <img src={getMovieImage(movie.backdrop_path)} /></li>
            ))}
        </ul>
    )
}
