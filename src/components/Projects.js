import React from "react";
// import { BsPhoneVibrate, BsBoxSeam, BsCalendar2Event, BsInfoCircle } from "react-icons/bs";

const Projects = () => {
    const featured = [
        {
            name: "Smart WEMS",
            description: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
            link: "https://test.com",
            github: "https://github.com",
            gradient: 'bg-gradient-to-r from-blue-700 to-blue-300',
            img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80'
        },
        {
            name: "Architecture Site",
            description: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
            link: "https://test.com",
            github: "https://github.com",
            gradient: 'bg-gradient-to-r from-amber-600 to-amber-300',
            img: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        },
        {
            name: "eVMS",
            description: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
            link: "https://test.com",
            github: "https://github.com",
            gradient: 'bg-gradient-to-r from-purple-700 to-purple-400',
            img: 'https://images.unsplash.com/photo-1504904126298-3fde501c9b31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        },
        {
            name: "eChurch",
            description: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
            link: "https://test.com",
            github: "https://github.com",
            gradient: 'bg-gradient-to-r from-gray-900 to-gray-500',
            img: 'https://images.unsplash.com/photo-1620678902307-c3a334984277?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        },
    ];
    return (
        <section>
            <div className="proj md:pb-5 flex flex-col">
            <h3 className="pt-20 pb-10 text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-amber-500 to-amber-400 text-4xl md:pb-4 md:pt-12 md:text-3xl">Featured Projects</h3>
            <p>You may find some work over the years</p>
            </div>
            <div className="projects grid grid-cols-4 gap-8 justify-items-center items-center pt-20 drop-shadow-2xl md:grid-cols-1 lg:grid-cols-2">
                {featured.map((item, i) => (
                    <div className={`w-full h-80 pb-20 flex flex-col justify-center items-center rounded-sm ${item.gradient} hover:bg-purple-500 md:mb-20 md:h-96 lg:h-96 lg:mb-10`} key={i}>
                        <img src={item.img} className="rounded-t-md"></img>
                        <span className="pb-10">{item.icon}</span>
                        <h3 className="font-bold">{item.name}</h3>
                        <p className="text-center text-sm">{item.description}</p>
                        <div className="pt-10 w-60 flex justify-around">
                            <a className="bg-white hover:bg-purple-500 hover:text-white py-2 px-8 rounded-sm text-sm text-black" href={item.link}>
                                View
                            </a>
                            <a className="bg-transparent hover:bg-purple-800 py-2 px-8 rounded-sm text-sm border-purple-500 shadow-md" href={item.github}>
                                Github
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
