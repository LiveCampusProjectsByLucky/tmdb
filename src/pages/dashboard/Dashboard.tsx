import Listing from "../../components/Listing";
import useGetMovies from "../../hooks/useGetMovies";
import Slider from "../../layouts/mainLayout/Slider";
import { MovieResultsI } from "../../types/MoviesI";

export default function Dashboard() {
  const { movies }: { movies: MovieResultsI[] } = useGetMovies();

  return (
    <>
      <Slider />
      <Listing movies={movies} className="horizontal" />
    </>
  )
}
