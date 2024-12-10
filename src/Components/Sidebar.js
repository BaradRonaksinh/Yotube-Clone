import React from 'react'
import { MdHome,
     MdOutlineSlowMotionVideo,
      MdOutlineSubscriptions,
       MdOutlineVideoLibrary,
       MdOutlineHistory ,
       MdOutlineWatchLater,
       MdThumbUp   } from "react-icons/md";


const Sidebar = () => {

    // create a main icons for yt
    const mainLinks = [
        {
            icon:<MdHome className='text-xl' />,
            name:'Home'
        },
        {
            icon:<MdOutlineSlowMotionVideo  className='text-xl'/>,
            name:'Shorts'
        },
        {
            icon:<MdOutlineSubscriptions className='text-xl' />,
            name:'Subscription'
        }
    ];

    // create a other icon of yt
    const otherLinks = [
        {
            icon:<MdOutlineHistory  className='text-xl'/>,
            name:'History'
        },
        {
            icon:<MdOutlineVideoLibrary  className='text-xl'/>,
            name:'Library'
        },
        {
            icon:<MdOutlineWatchLater className='text-xl' />,
            name:'Watch Later'
        },
        {
            icon:<MdThumbUp className='text-xl' />,
            name:'Liked Videos'
        }
    ];


    return (
        <>
        <div className='w-2/12 p-2 bg-[#212121] pr-5 overflow-auto pb-8 h-screen'>
            {/* Main-Links  ------------> */}
            <ul className='flex flex-col border-b-2  border-zinc-700'>
                {
                    mainLinks.map(({icon,name}) => {
                        return(
                            <li key={name} className={`pl-6 py-3 hover:bg-orange-800 ${name === 'Home' ? 'bg-zinc-700' : ''} rounded-r-full`}>
                                <a href='#' className='flex items-center gap-5'>  
                                    {icon}
                                    <span className='text-sm tracking-wider'>{name}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>

            {/* Other-Links  ------------> */}
            <ul className='flex flex-col border-b-1 border-gray-800'>
                {
                    otherLinks.map(({icon,name}) => {
                        return(
                            <li key={name} className={`pl-6 py-3 hover:bg-orange-800 ${name === 'Home' ? 'bg-zinc-700' : ''} rounded-r-full`}>
                                <a href='#' className='flex items-center gap-5'>  
                                    {icon}
                                    <span className='text-sm tracking-wider'>{name}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        </>
    )
}

export default Sidebar
