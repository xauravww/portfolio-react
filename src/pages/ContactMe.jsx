import PropTypes from "prop-types";
import React, { useState } from 'react';
import Pagination from "../components/Pagination";
import X from "/assets/X.jpeg";
import Linkedin from "/assets/linkedin.png";
import Showwcase from "/assets/showwcase.png";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactMe = ({ containerId }) => {
    const sidebarImgCSS = "sidebar-img w-16 hover:scale-125";
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        query: ''
    });
    const [loader, setloader] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setloader(true);
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/queries`, formData);
            toast.success('Your query has been submitted successfully!');
            setloader(false);
        } catch (error) {
            console.error('There was an error submitting your query:', error);
            toast.error('There was an error submitting your query.');
            setloader(false);
        }finally{
            setloader(false);
            setFormData({
                name: '',
                email: '',
                query: ''
            })
        }
    };

    return (
        <div
            className="ContactMe min-h-screen relative bg-gradient-to-r from-[#2a1836] to-[#150c1b] flex flex-col justify-evenly items-center overflow-hidden"
            id={containerId}
        >
    
            <header className="text-3xl md:text-5xl text-white font-bold relative z-[3] text-center px-4">
                Contact Me
                <div className="underline-below-header absolute w-3/5 h-1 bg-white bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </header>
            <div className="pattern2 absolute top-0 left-0 right-0 h-full w-full bg-[url('/assets/pattern2.png')] z-[1] backdrop-blur bg-fixed bg-center bg-norepeat- bg-cover"></div>
            <div className="mask absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.6)] z-[2]"></div>

            <div className="main-content bg-[#000] border-[#46285a] scale-95 shadow-[0px_0px_50px_-30px_rgba(255,255,255,.6)] p-4 flex flex-col items-center justify-center w-[90vw] lg:w-[30vw] text-2xl text-white text-center z-[3]">
                <form onSubmit={handleSubmit} className="space-y-6 w-full">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-2xl lg:text-2xl font-medium mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            maxLength={"30"}
                            className="text-black p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-2xl lg:text-2xl font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="text-black p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            maxLength={"50"}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="query" className="text-2xl lg:text-2xl font-medium mb-2">Message</label>
                        <textarea
                            id="query"
                            name="query"
                            value={formData.query}
                            onChange={handleChange}
                            required
                            rows="4"
                            maxLength={"500"}
                            className="text-black resize-none p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className={`bg-[#f3d800] text-black py-3 px-6 rounded-lg shadow-md hover:bg-[#f8e866] focus:outline-none focus:ring-2  $loader-active:scale-125 transition duration-300 ease-in-out scale-75 lg:scale-100`}
                    >
                        {loader? "Sending..." : "Submit"  }
                    </button>
                </form>
            </div>

            {/* for small screens and medium */}
            <div className="sidebar-wrapper z-50 lg:hidden">
                <div className="sidebar flex justify-center items-center gap-2 border-2 border-black p-1 bg-black-opacity-50 backdrop-blur-sm bg-slate-400/50 rounded-md lg:gap-2 lg:p-2 scale-75">
                    <div onClick={() => window.open(`${import.meta.env.VITE_X_URL}`, "_blank")}>
                        <img className={sidebarImgCSS} src={X} alt="X" />
                    </div>
                    <div onClick={() => window.open(`${import.meta.env.VITE_LINKEDIN_URL}`, "_blank")}>
                        <img className={sidebarImgCSS} src={Linkedin} alt="LinkedIn" />
                    </div>
                    <div onClick={() => window.open(`${import.meta.env.VITE_SHOWWCASE_URL}`, "_blank")}>
                        <img className={sidebarImgCSS} src={Showwcase} alt="Showwcase" />
                    </div>
                </div>
            </div>

            {/* for large screens */}
            <div className="hidden sidebar-wrapper absolute top-[40vh] left-8  z-50 flex flex-col justify-center items-center lg:block lg:w-[4vw] scale-150">
                <div className="sidebar flex flex-col justify-center items-center gap-1 border-2 border-black p-1 bg-black-opacity-50 backdrop-blur-sm bg-slate-400/50 rounded-md lg:gap-2 lg:p-2">
                    <div onClick={() => window.open(`${import.meta.env.VITE_X_URL}`, "_blank")}>
                        <img className={sidebarImgCSS} src={X} alt="X" />
                    </div>
                    <div onClick={() => window.open(`${import.meta.env.VITE_LINKEDIN_URL}`, "_blank")}>
                        <img className={sidebarImgCSS} src={Linkedin} alt="LinkedIn" />
                    </div>
                    <div onClick={() => window.open(`${import.meta.env.VITE_SHOWWCASE_URL}`, "_blank")}>
                        <img className={sidebarImgCSS} src={Showwcase} alt="Showwcase" />
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

ContactMe.propTypes = {
    containerId: PropTypes.string.isRequired,
};

export default ContactMe;
