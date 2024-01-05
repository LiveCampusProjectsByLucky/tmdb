import { MovieResultsI } from "../../types/MoviesI";
import styled from "styled-components";
import Slider from "../../layouts/mainLayout/Slider";
import useGetMovies from "../../hooks/useGetMovies";

export default function Dashboard() {
  const { movies } : {movies: MovieResultsI[]} = useGetMovies();


  return (
    <>
      <Slider />

      <DashboardStyled>
        {movies.map((movie) => (
          <li key={movie.id}><img src={movie.poster_path} /> {movie.title}</li>
        ))}
      </DashboardStyled>
    </>
  )
}


const DashboardStyled = styled.ul`
  display: flex;
  gap: 10px;
  overflow-x: scroll;

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