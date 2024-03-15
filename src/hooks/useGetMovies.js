import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNowplaying,
  getPopular,
  getTrailer,
  getTopRated,
  getUpcoming,
} from "../services/movies";
import {
  addTrailer,
  addPopular,
  addNowPlaying,
  addTopRated,
  addUpcoimg,
} from "../utils/moviesSlice";

function useGetMovies() {
  const dispatch = useDispatch();
  const movies=useSelector(store=>store.movies.movies);
  useEffect(() => {
    const getData = async () => {
      try {
        var data = await getNowplaying();
        dispatch(addNowPlaying(data.results));
        const id = data.results[0].id;
        const link = await getTrailer(id);

        dispatch(addTrailer(link));
        data = await getPopular();
        dispatch(addPopular(data.results));

        data = await getUpcoming();
        dispatch(addUpcoimg(data.results));

        data = await getTopRated();
        dispatch(addTopRated(data.results));
      } catch (ex) {
        console.log(ex);
      }
    };
    !movies.length && getData();
  }, []);
  return;
}

export default useGetMovies;
