import { MovieResultsI } from "../../types/MoviesI";
import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import Slider from "../../layouts/mainLayout/Slider";

export default function Dashboard() {
  const [movies]: [MovieResultsI[]] = useOutletContext();


  return (
    <>
      <Slider movies={movies} />

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