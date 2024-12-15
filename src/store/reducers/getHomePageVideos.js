import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
 '@reduxjs/toolkit';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const getHomePageVideos = createAsyncThunk(
    "youtube/App/homePageVideos",
    async(isNext,{getState}) => {
        const { 
            youtubeApp : {nextPageToken : nextPageTokenFromState, video}
        } = getState();

        const {
            data: {items, nextPageToken}
        } = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="drop x out"&key=${API_KEY}&part=snippet&type=video`);
        console.log(items);
    }
)