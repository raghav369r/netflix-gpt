import { IMG_URL } from "../utils/constants";
function MovieCard(movie) {
    const {poster_path}=movie?.movie;
    return (
        <div>
            <img className="h-20 w-16 rounded-sm md:w-40 md:h-52 max-w-96" alt="Image Poster" src={IMG_URL+poster_path}></img>
        </div>
    );
}

export default MovieCard;   