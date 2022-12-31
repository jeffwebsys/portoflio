import React from "react";

const Footer = () => {
    return (
        <section
            style={{
                backgroundColor: "#181824",
            }}
        >
            <div className="footer flex justify-between items-center py-8 md:flex-col">
                <p>
                    &copy; {new Date().getFullYear()} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400 font-bold md:text-md">jeffwebsys</span>
                </p>
                <p>
                    Created with <span className="text-transparent bg-clip-text bg-gradient-to-r text-lg from-red-500 to-pink-400 font-bold md:text-md">Love</span>
                </p>

                <p>
                    Designed by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400 font-semibold md:text-md">Jeffrey Garcia</span>
                </p>
            </div>
        </section>
    );
};

export default Footer;
