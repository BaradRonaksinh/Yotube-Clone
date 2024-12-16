import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import {useAppDispatch, useAppSelector} from '../hooks/useApp'
import { getHomePageVideos } from '../store/reducers/getHomePageVideos'

const Home = () => {

  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  },[dispatch])
  return (
    <>
        <Navbar />
        <Sidebar />
      
    </>
  )
}

export default Home
