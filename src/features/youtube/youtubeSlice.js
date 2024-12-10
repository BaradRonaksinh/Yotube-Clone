import { createSlice } from "@reduxjs/toolkit";

// create a initial state for help to reducer
const initialState = {
    video:[],
    currentPlaying:null,
    searchTerm:"",
    searchResult:[],
    nextPageToker:null,
    recommendedVideo:[]
};

const youtubeSlice = createSlice({
    name:"youtubeAPP",
    initialState,
    reducers:{

    }
})

export default youtubeSlice.reducer;