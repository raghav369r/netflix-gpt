import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function SecondaryContainer() {
    const movies=useSelector(data=>data.movies.movies)
    // console.log(movies);
    return ( 
        <div className="px-10" >
            <div className="md:-mt-60 relative z-20">
                <MovieList title="Now Playing"  movies={movies?.nowPlaying}/>
            </div>
            <MovieList title="Popular" movies={movies?.popular}/>
            <MovieList title="Top Rated" movies={movies?.topRated}/>
            <MovieList title="Up coming" movies={movies?.upcoming}/>
        </div>
    );
}

export default SecondaryContainer;