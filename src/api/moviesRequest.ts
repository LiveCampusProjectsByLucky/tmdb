import { MoviesI } from "../types/MoviesI";
import { fetchData } from "./utilis";

// MOVIES
export async function getMovies(api_key: string, page?: number) {
    const url = "https://api.themoviedb.org/3/discover/movie?";
    const params = {
        api_key,
        page,
    };

    const res = await fetchData<MoviesI>(url, params);
    if (res) {
        const { results } = res;
        const resultsWithFullUrl = results.map((result) => {
            const { backdrop_path, poster_path } = result;
            return { 
                ...result, 
                backdrop_path: `https://image.tmdb.org/t/p/w185${poster_path}`,
                poster_path: `https://image.tmdb.org/t/p/w185${poster_path}`,
            };
        });

        return { ...res, results: resultsWithFullUrl };
    }
};