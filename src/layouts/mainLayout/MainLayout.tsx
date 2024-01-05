import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Slider from "./Slider";
import { useAppSelector } from "../../app/hooks";
import { useEffect, useState } from "react";
import { MovieResultsI } from "../../types/MoviesI";
import { getMovies } from "../../api/moviesRequest";

export default function MainLayout() {
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
        <>
            <Header />
            <Outlet context={[movies]} />
            <Footer />
        </>
    )
}