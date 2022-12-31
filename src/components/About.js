import React from 'react'
import { FaReact, FaWordpress } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'
import { GrGraphQl } from 'react-icons/gr'
import { SiStrapi, SiTailwindcss } from 'react-icons/si'



const About = () => {

  const stack = [
    {
      name: "React JS",
      icon: <FaReact size={28} style={{color: '#59A3FA'}}/>,
      color: 'bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-sky-200'
    },
    {
      name: "Javascript",
      icon: <DiJavascript1  size={28}/>,
      color: 'bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-400'
    },
    {
      name: "GraphQL",
      icon: <GrGraphQl  size={28} style={{ color: '#EC4899'}}/>,
      color: 'bg-clip-text text-transparent bg-gradient-to-r from-pink-700 to-pink-200'
    },
    {
      name: "Wordpress",
      icon: <FaWordpress  size={28}/>,
      color: 'bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-pink-200'
    },
    {
      name: "Strapi",
      icon: <SiStrapi  size={28}/>,
      color: 'bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-200'
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss  size={28}/>,
      color: 'bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-200'
    }
  ];

  return (
    <section style={{
        backgroundColor: '#181824',
    }}>
       
  <div className='about grid grid-cols-6 gap-4 justify-items-center items-center md:grid-cols-2'>
  
    {stack.map((item, i) => (
        <div className='flex flex-col items-center' key={i}> <span>{item.icon} </span><button className={`font-semibold text-sm hover:text-white ${item.color} pt-3`}>{item.name}</button> </div>
    ))
    }
  </div>
    </section>
  )
}

export default About