import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"Movies",
    initialState:{
        movies:{},
        trailer:null
    },
    reducers:{
        addTopRated:(state,action)=>{
            state.movies.topRated=action.payload;
        },
        addNowPlaying:(state,action)=>{
            state.movies.nowPlaying=action.payload;
        },
        addUpcoimg:(state,action)=>{
            state.movies.upcoming=action.payload;
        },
        addPopular:(state,action)=>{
            state.movies.popular=action.payload;
        },
        addTrailer:(state,action)=>{
            state.trailer=action.payload;
        }
    }
});

export const {addNowPlaying, addTopRated, addUpcoimg, addPopular, addTrailer} =movieSlice.actions;
export default movieSlice.reducer;
