import VideoCard from "./VideoCard";
import VideoBg from "./VideoBg";
import Header from "./Header";
import { useSelector } from "react-redux";

const MainContainer = () => {
    const movie=useSelector(data=>data.movies.movies?.nowPlaying?.[0]);
    // console.log(movie)
    return ( 
    <div className="m-0">
        <Header/>
        <VideoCard movie={movie}/>
        <VideoBg/>
    </div> );
}
 
export default MainContainer;