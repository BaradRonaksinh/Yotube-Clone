import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {parseData} from "../../utils/parseData"

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;


// create a async thunk...
export const getHomePageVideos = createAsyncThunk(
    "youtube/App/homePageVideos",
    async(isNext,{getState}) => {
        const { 
            youtubeApp : {nextPageToken : nextPageTokenFromState, video}
        } = getState();

        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="drop x out"&key=${API_KEY}&part=snippet&type=video`);
        
        console.log(response.data.items);
        
        const items = response.data.items;
        
        console.log(items);

        const parseData = await parseData(items)
    }
)