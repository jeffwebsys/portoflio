import React from "react";
import pix from "../images/main.png";
import { BsFillPersonFill } from "react-icons/bs";
import { FiPackage } from "react-icons/fi";

const Hero = () => {
    return (
        <section>
            <div className="home flex flex-auto items-end md:flex-col-reverse">
                <div className="w-2/4 flex flex-col md:w-full md:pt-8 md:items-center">
                    <h3 className="text-3xl font-medium pb-4 md:text-xl md:pb-2">Hello, I'm</h3>
                    <h2 className="font-semibold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 md:text-4xl">Jeffrey Garcia</h2>
                    <p className="pt-10 md:pr-0 md:text-center md:pt-5">I'm Proficient in the React JavaScript library, with a strong understanding of front-end development principles and best practices.</p>

                    <div className="pt-5 flex pb-20">
                        <button className="py-2 px-4 text-sm flex items-center font-semibold rounded-md mr-5" style={{ backgroundColor: "#7562E0" }}>
                            About Me <BsFillPersonFill size={25} style={{ "paddingLeft": "5px" }} />
                        </button>

                        <button className="py-2 px-4 text-sm flex items-center font-semibold rounded-md" style={{ backgroundColor: "transparent",
                                                                                                                    border: '1px solid #7562E0' }}>
                            Projects <FiPackage size={25} style={{ "paddingLeft": "5px" }} />
                        </button>
                    </div>
                </div>

                <div className="w-2/4 flex justify-end md:w-full md:justify-center">
                    <img src={pix} alt="Profile" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
