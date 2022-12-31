import React from "react";
import { useState } from "react";
import axios from "axios";

const Form = () => {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
    });
    const [formError, setFormError] = useState(null);
    const [formSuccess, setFormSuccess] = useState(null);


    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormError(null);
        setFormSuccess(null);
        // Validate form data
      if (formData.name === '') {
        setFormError('Name field is required');
        return;
      }
      if (formData.email === '') {
        setFormError('Email field is required');
        return;
      }
      if (formData.message === '') {
        setFormError('Message field is required');
        return;
      }
        sendEmail(formData)
            .then(() => {
                setFormSuccess("Email sent successfully");
                setFormData({
                  name: '',
                  email: '',
                  message: ''
                });
               
            })
            .catch((error) => {
                setFormError(error.response.data.message);
               
            });
    };
      

    const sendEmail = (formData) => {
        const requestBody = {
            sender: {
                email: formData.email,
                name: formData.name,
            },
            to: [
                {
                    email: "jeffwebsys@gmail.com",
                    name: "Contact Us - Submission",
                },
            ],
            subject: "Contact Form Submission",
            htmlContent: formData.message,
        };

        return axios.post("https://api.sendinblue.com/v3/smtp/email", JSON.stringify(requestBody), {
            headers: {
                "Content-Type": "application/json",
                "api-key": "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",
            },
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="bg-transparent rounded pt-6 pb-8 mb-4">
                {formError && <p className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-500 font-medium">{formError}</p>}
                {formSuccess && <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500 font-medium">{formSuccess}</p>}
                <label className="block text-white text-sm font-bold mb-1" for="name">
                    Name:  </label>
                    <input type="text" value={formData.name} name="name" onChange={handleChange} className="shadow appearance-none rounded w-full py-4 px-3 bg-gray-700 text-white leading-tight focus:outline-none mb-2" />
              
                <br />
                <label className="block text-white text-sm font-bold mb-1" for="name">
                    Email: </label>
                    <input type="email" value={formData.email} name="email" onChange={handleChange} className="shadow appearance-none rounded w-full py-4 px-3 bg-gray-700 text-white leading-tight focus:outline-none mb-2" />
               
                <br />
                <label className="block text-white text-sm font-bold mb-1" for="name">
                    Message:  </label>
                    <textarea name="message" value={formData.message} onChange={handleChange} className="shadow appearance-none rounded w-full py-6 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:shadow-outline mb-2" />
              
                <br />
                <input type="submit" value="Send" className="py-2 px-4 rounded-md bg-purple-500" />
            </form>
        </div>
    );
};

export default Form;
