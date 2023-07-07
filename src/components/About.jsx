import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-2'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>

            <p className='text-xl mt-10'>
            I'm Rahul Ranjan, a front-end developer specializing in creating engaging user experiences. With expertise in HTML, CSS, and JavaScript, I build modern, responsive websites using frameworks like React.
            </p>

            <br />

            <p className='text-xl'>
            In addition to technical skills, I bring a strong sense of creativity and attention to detail to all my projects. I believe that every line of code has the potential to make a difference, and I strive for perfection in my work. I am constantly seeking opportunities to learn and grow, embracing new technologies and challenges.
            </p>
        </div>

    </div>
  )
}

export default About