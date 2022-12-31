import React from "react";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import Form from "./Form";

const Contact = () => {
    return (
        <section className="pt-20 md:pt-0">
            <div className="contact grid grid-cols-2 items-start md:grid-cols-1">
                <div>
                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-400 font-semibold text-2xl md:text-3xl">Connect with me</h3>
                    <p className="pt-5 pb-5">Need to discuss your Project?</p>
                    <div className="flex gap-4">
                        <BsFacebook size={25} /> <BsLinkedin size={25} /> <BsGithub size={25} />
                    </div>
                </div>
                <div className="md:pt-20">
                    Contact me, let's make magic together
                    <div>
                        <Form/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
