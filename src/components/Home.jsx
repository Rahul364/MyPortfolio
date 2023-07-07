import React from 'react'
import Pic from '../assets/pic.jpg';
import {MdKeyboardArrowRight} from 'react-icons/md';
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home"
    className="h-screen w-full bg-gradient-to-b from-black
     to-gray-800">
        <div className="max-w-screen-lg mx-auto my-auto flex flex-col
        items-center justify-center h-full px-6 md:flex-row">
            <div className="flex flex-col justify-center mr-5 h-full">
                <h2 className="text-4xl sm:text-7xl font-bold
                text-white">
                    I'm a Front-End Developer
                </h2>
                <p className="text-gray-500 py-4 max-w-mid">
                    I love to work on web Applictiion using
                    technologies like
                    React, Tailwind.
                </p>

                <div>
                    <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2
                    flex items-center rounded-md bg-gradient-to-r
                    from-cyan-500 to-blue-500 cursor-pointer">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                        <MdKeyboardArrowRight size={25}
                        className="ml-1" />
                        </span>
                    </Link>
                </div>
            </div>
            <div className="ml-5 px-4">
                <img src={Pic} alt="My Profile" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
            </div>
        </div>
    </div>
  )
}

export default Home