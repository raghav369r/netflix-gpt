import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import VideoCard from "./VideoCard";
// import Header from "./Header";
import useGetMovies from "../hooks/useGetMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

function Browse() {
    useGetMovies();
    
    const user=useSelector(store=>store.user);
    const navigate=useNavigate();
    
    // useEffect(()=>{
    //     if(user==null) navigate("/login");
    // },[user]);

    return (
    <div className="relative bg-black">
        <MainContainer/>
        <SecondaryContainer/>    
    </div>);
}

export default Browse;