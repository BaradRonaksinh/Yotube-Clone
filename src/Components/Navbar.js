import React from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { FaMicrophone, FaYoutube } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { RiVideoOnAiFill } from "react-icons/ri";
import { MdNotificationsActive } from "react-icons/md"

const Navbar = () => {
    return (
        <>
            {/* //main div of a navbar */}
            <div className='flex justify-between px-14 h-14 items-center bg-[#0d0d0d] opacity-95 sticky '>   {/* color-212121 */}
                <div className='flex items-center text-xl  gap-8'>
                    <div>
                        <CiMenuBurger />
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <FaYoutube className='text-5xl text-red-600' />
                        <span className='text-2xl font-serif'>YouTube<sup className='text-xs font-light text-gray-500 ml-1'>IN</sup></span> {/* yt name ---------- */}
                    </div>
                </div>
                <div className='flex justify-center items-center gap-5'>
                    <form action="">
                        <div className='flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl '>
                            <div className='flex items-center gap-5 pr '>
                                <input type="text" placeholder='Search' className='w-96 bg-zinc-900 focus:outline-none border-none' />
                            </div>
                            <button className='h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl '>
                                <FiSearch className='text-xl ' />
                            </button>

                        </div>
                    </form>

                    <div className='text-xl p-3 bg-zinc-900 rounded-full'>
                        <FaMicrophone />
                    </div>
                </div>
                <div className='flex gap-8 items-center text-xl'>
                    <RiVideoOnAiFill />
                    <div className='relative'>
                        <MdNotificationsActive />
                        <span className='absolute bottom-2 left-2 text-xs bg-red-700 rounded-3xl p-0.5 '>+10</span>
                    </div>
                    <img src="https://imgs.search.brave.com/HuMF8aj95V90eORCUfXNnEU2zObTzLHj0TxKsz1TpJA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jdXRl/ZHAub3JnL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzEwL2Rw/X2ltYWdlX180Mi0x/MjA2LmpwZw" alt="Profile logo"
                        className='w-9 h-9 rounded-full' />
                </div>
            </div>


        </>
    )
}

export default Navbar
