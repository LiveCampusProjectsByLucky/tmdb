import styled from "styled-components";
import { MovieResultsI } from "../types/MoviesI";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ListingProps {
  movies: MovieResultsI[];
  className?: "horizontal" | "vertical";
}

export default function Listing({ movies, className }: ListingProps) {
  const scrollHorizontally = (
    e: React.MouseEvent<HTMLButtonElement>,
    direction: "left" | "right"
  ) => {
    const container =
      ((e.target as HTMLElement)?.parentElement?.previousSibling as HTMLElement)
        ?.tagName === "svg"
        ? ((e.target as HTMLElement)?.parentElement?.parentElement
            ?.previousSibling as HTMLElement)
        : ((e.target as HTMLElement)?.parentElement
            ?.previousSibling as HTMLElement);

    const scrollDistance = 300;
    const scrollAmount =
      direction === "left" ? -scrollDistance : scrollDistance;
    container?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div>
      <DashboardStyled className={className && className}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <article>
              <img src={movie.poster_path} />
              <div>{movie.title}</div>
            </article>
          </li>
        ))}
      </DashboardStyled>

      
      {className === "horizontal" && (
        <ControleStyled>
          <FaChevronLeft
            style={{ cursor: "pointer" }}
            fontSize="2rem"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              scrollHorizontally(e, "left")
            }
          />
          <FaChevronRight
            style={{ cursor: "pointer" }}
            fontSize="2rem"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              scrollHorizontally(e, "right")
            }
          />
        </ControleStyled>
      )}
    </div>
  );
}

const DashboardStyled = styled.ul`
  display: flex;
  gap: 10px;
  overflow-x: hidden;
  padding-top: 25px;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;

    article {
      width: 100%;

      img {
        height: auto;
        aspect-ratio: 2/3;
        object-fit: cover;
        border-radius: 10px;
      }
    }
  }

  &.horizontal {
    img {
      width: unset;
    }
  }

  &.vertical {
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    gap: 10px;
  }
`;

const ControleStyled = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    margin-top: 10px;
    gap: 25px;
    padding-bottom: 25px;
`;