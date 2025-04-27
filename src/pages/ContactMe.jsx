import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react';
import Pagination from "../components/Pagination";
import X from "/assets/X.jpeg";
import Linkedin from "/assets/linkedin.png";
import Showwcase from "/assets/showwcase.png";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(".contact-form-container",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ContactMe",
            start: "top 70%",
          }
        }
      );
      gsap.fromTo(".contact-sidebar",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: 0.3,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".ContactMe",
            start: "top 70%",
          }
        }
      );
    }, []);

    return (
        <div
            className="ContactMe min-h-screen relative bg-gradient-to-r from-[#2a1836] to-[#150c1b] flex flex-col justify-evenly items-center overflow-hidden py-16 md:py-24"
            id={containerId}
        >
             <div className="pattern2 absolute top-0 left-0 right-0 h-full w-full bg-[url('/assets/pattern2.png')] z-[1] backdrop-blur bg-fixed bg-center bg-norepeat- bg-cover"></div>
            <div className="mask absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.6)] z-[2]"></div>

            <header className="text-3xl md:text-5xl text-white font-bold relative z-[3] text-center px-4">
                Contact Me
                <div className="underline-below-header absolute w-3/5 h-1 bg-[var(--accent-blue)] bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </header>

            <div className="contact-form-container main-content border-double border-4 border-[var(--border-color)] bg-[var(--bg-dark)] scale-95 p-4 flex flex-col items-center justify-center max-w-[81vw] lg:w-[30vw] text-2xl text-[var(--text-light)] text-center z-[3] rounded-xl opacity-0">
                 <form onSubmit={handleSubmit} className="space-y-6 w-full">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-2xl lg:text-2xl font-medium mb-2 text-[var(--text-light)]">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            maxLength={"30"}
                            placeholder="Your Name"
                            className="bg-[var(--border-color)] border-[var(--border-color)] text-[var(--text-light)] placeholder:text-[var(--text-medium)] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-2xl lg:text-2xl font-medium mb-2 text-[var(--text-light)]">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your.email@example.com"
                            className="bg-[var(--border-color)] border-[var(--border-color)] text-[var(--text-light)] placeholder:text-[var(--text-medium)] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)]"
                            maxLength={"50"}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="query" className="text-2xl lg:text-2xl font-medium mb-2 text-[var(--text-light)]">Message</label>
                        <textarea
                            id="query"
                            name="query"
                            value={formData.query}
                            onChange={handleChange}
                            required
                            rows="4"
                            maxLength={"500"}
                            placeholder="Your message here..."
                            className="bg-[var(--border-color)] border-[var(--border-color)] text-[var(--text-light)] placeholder:text-[var(--text-medium)] resize-none p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)]"
                        />
                    </div>

                    <button
                        type="submit"
                        className={`bg-[var(--accent-blue)] text-[var(--bg-dark)] py-3 px-6 rounded-lg shadow-md hover:opacity-90 focus:outline-none focus:ring-2 $loader-active:scale-125 transition duration-300 ease-in-out scale-75 lg:scale-100`}
                    >
                        {loader? "Sending..." : "Submit"  }
                    </button>
                </form>
            </div>

            <div className="contact-sidebar sidebar-wrapper z-50 lg:hidden opacity-0">
                <div className="sidebar flex justify-center items-center gap-2 border-2 border-[var(--border-color)] p-1 bg-[var(--border-color)]/50 backdrop-blur-sm rounded-md lg:gap-2 lg:p-2 scale-75">
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

            <div className="contact-sidebar hidden sidebar-wrapper absolute top-[40vh] left-8 z-50 flex-col justify-center items-center lg:flex lg:w-[4vw] scale-150 opacity-0">
                 <div className="sidebar flex flex-col justify-center items-center gap-1 border-2 border-[var(--border-color)] p-1 bg-[var(--border-color)]/50 backdrop-blur-sm rounded-md lg:gap-2 lg:p-2">
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
