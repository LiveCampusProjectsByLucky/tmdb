import { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { MovieResultsI } from "../../types/MoviesI";
import { getMovies } from "../../api/moviesRequest";
import styled from "styled-components";

export default function Dashboard() {
// Redux
  const auth = useAppSelector((state) => state.auth);

//   States
  const [movies, setMovies] = useState<MovieResultsI[]>([]);

  useEffect(() => {
    if (!auth.api_key) return;

    (async () => {
      const res = await getMovies(auth.api_key as string);
      
      if (res) {
        setMovies(res.results);
      }
    })()

  }, [])



    return (
        <DashboardStyled>
            {movies.map((movie) => (
                <li key={movie.id}><img src={movie.poster_path} /> {movie.title}</li>
            ))}
        </DashboardStyled>
    )
}


const DashboardStyled = styled.ul`
  display: flex;
  gap: 10px;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;

    img {
      width: 200px;
      height: 300px;
      object-fit: cover;
      border-radius: 10px;
    }
  }
`;