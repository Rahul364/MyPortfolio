import React from 'react'
import Pic1 from '../assets/portfolio.png'
import Pic from '../assets/pic.jpg'
// import arrayDestruct from '../assets/portfolio/arrrayDestruct.jpg'
// import installNode from '../assets/portfolio/installNode.jpg'
// import navbar from '../assets/portfolio/navbar.jpg'
// import reactParallax from '../assets/portfolio/reactParallax.jpg'
// import reactSmooth from '../assets/portfolio/reactsmooth.jpg'
// import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: Pic1,
            demo: 'https://myportfolio-rahul.netlify.app/',
            code: 'https://github.com/Rahul364/MyPortfolio'
        },
        {
            id: 2,
            src: Pic
        },
        {
            id: 3,
            src: Pic
        },
    ]

    return (
        <div name="portfolio" className="pb-20 bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen ">

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 boredr-gray-500'>
                        Portfolio
                    </p>
                    <p className='py-6'>
                        Check out some of my work right here
                    </p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    portfolios.map(({id,src,demo,code}) => (
                        
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                                <div className='flex items-center justify-center'>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={demo} target='_blank' rel='noreferrer'>Demo</a></button>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={code} target='_blank' rel='noreferrer'>Code</a></button>
                                </div>
                            </div>
                    ))
                }
                </div>

                
            </div>

        </div>
    )
}

export default Portfolio