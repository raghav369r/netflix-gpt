import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  // console.log(movies)  
  return (
    <div className="text-white">
      <h1 className="text-lg md:text-2xl font-bold m-2">{title}</h1>
      <div className="flex gap-3 overflow-x-scroll scrollbar-hide">
        {movies?.map((movie) => (
          <MovieCard key={movie?.key} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
