import React, { useEffect, useState } from "react"

import { PROJECT_DETAILS } from "../utils/data"
import ProjectItem from "../components/ProjectItem"
import Pagination from "../components/Pagination"

const ProjectOverview = ({ containerId }) => {
  const [isActive, setIsActive] = useState(true)

  const [bgImg, setbgImg] = useState(PROJECT_DETAILS[0].img)
  const [isSearchActive, setisSearchActive] = useState(false)


  const whiteColorFilter =
    "invert(99%) sepia(1%) saturate(7473%) hue-rotate(186deg) brightness(116%) contrast(86%)"




  const [currentPage, setcurrentPage] = useState(1)
  const [postPerPage, setpostPerPage] = useState(4)
  const lastPageIndex = currentPage * postPerPage
  const firstPageIndex = lastPageIndex - postPerPage
  const currentPost = PROJECT_DETAILS.slice(firstPageIndex, lastPageIndex)


  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {

        setpostPerPage(2)

      } else if (width >= 768 && width < 1024) {

        setpostPerPage(2)

      } else if (width >= 1024) {

        setpostPerPage(4)

      }
    };


    handleResize();


    window.addEventListener("resize", handleResize);


    return () => {

      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className="ProjectOverview h-screen relative bg-[#46285a] flex flex-col justify-center "
      id={containerId}
    >
      <div className="search-filter-toggle-wrapper flex justify-center items-center relative p-4 z-[5]">
        {!isSearchActive && (
          <div className="toggle-views-wrapper flex justify-center items-center relative   ">
            <button
              className="toggle-btn active text-black cursor-pointer p-2 font-bold text-xl"
              onClick={() => setIsActive(!isActive)}
              style={
                isActive
                  ? {
                    backgroundColor: "rgb(243, 216, 0)"
                  }
                  : { backgroundColor: "white" }
              }
            >
              Projects
            </button>
            <button
              className="toggle-btn text-black cursor-pointer  p-2 font-bold text-xl"
              onClick={() => setIsActive(!isActive)}
              style={
                isActive
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "rgb(243, 216, 0)" }
              }
            >
              Blogs
            </button>
          </div>
        )}
        {isSearchActive && (
          <div className="input-wrapper flex justify-center items-center relative w-[70vw] mr-6 relative ">
            <input
              type="text"
              className="search-input w-full h-10  p-2 rounded-md outline-none"
              placeholder="Search"
            />
            <img
              className="cross cursor-pointer w-5 h-5 absolute right-2 top-50"
              src="https://res.cloudinary.com/drvntsbpo/image/upload/v1705565883/cross_twmgud.svg"
              alt="cross"
              onClick={() => setisSearchActive(!isSearchActive)}
            />
          </div>
        )}
        <div className="search-filter-wrapper flex justify-center items-center absolute top-50 right-0 mr-4 z-[7]  rounded-md p-2">
          {!isSearchActive && (
            <img
              className="search cursor-pointer w-10 "
              src="https://res.cloudinary.com/drvntsbpo/image/upload/v1705839155/search-alt-2-svgrepo-com_urftri.svg"
              alt=""
              onClick={() => setisSearchActive(!isSearchActive)}
              style={{
                filter: whiteColorFilter
              }}
            />
          )}
          <img
            className="filter cursor-pointer w-10"
            style={{
              filter: whiteColorFilter
            }}
            src="https://res.cloudinary.com/drvntsbpo/image/upload/v1705781444/filter-edit-svgrepo-com_ib6yzu.svg"
            alt=""
          />
        </div>
      </div>
      <div
        className="projects-wrapper z-[6]  mt-6 overflow-y-scroll h-[60vh]  rounded-md p-4 m-6"
        style={{
          scrollbarColor: "rgb(243, 216, 0) transparent",
          scrollbarWidth: "5px",

          zIndex: 10
        }}
      >
        {isActive && (
          <div className="grid-container grid grid-cols-1 z-[5] md:grid-cols-2 lg:grid-cols-4 gap-10  ">
            {currentPost.map((item) => (
              <ProjectItem
                key={item.id}
                img={item.img}
                description={item.description}
                techStacks={item.techStacks}
                url={item.url}
              />
            ))}

          </div>
        )}

      </div>
      <div className="z-[5]">
        <Pagination totalPosts={PROJECT_DETAILS.length} postPerPage={postPerPage} setcurrentPage={setcurrentPage} currentPage={currentPage} />
      </div>
      <div className="mask-projectoverview absolute top-0 left-0 h-full w-full   bg-[rgba(0,0,0,0.6)] z-[2]"></div>
      <div className="pattern-projectoverview  absolute top-0 left-0 h-full w-full   bg-[url('../public/assets/pattern2.png')] z-[1] backdrop-blur bg-cover bg-position-center"></div>
    </div>
  )
}

export default ProjectOverview
