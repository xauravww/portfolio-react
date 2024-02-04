import React from "react"
// import "./projectitem.css"
const ProjectItem = ({ img, description, techStacks, url }) => {
  return (
    <div className="project-item-container z-[7] bg-white rounded-md shadow-md ">
      <img className="project-item-img rounded-t-md " src={img} alt="" />
      <div className="project-item-description p-4 ">
        {description.length > 100
          ? `${description.slice(0, 170)}...`
          : description}
      </div>
      <div className="project-item-helper-wrapper flex justify-between items-center p-4">
        <div className="wrapper-tech-stacks ">{techStacks}</div>
        <div className="project-item-urls-wrapper flex gap-2">
          <button
            className="btn-project-item-helper bg-[#46285a] text-white px-2 py-1 rounded-md"
            onClick={() => window.open(url, "_blank")}
          >
            repo
          </button>
          <button
            className="btn-project-item-helper bg-[#46285a] text-white px-2 py-1 rounded-md"
            onClick={() => window.open(url, "_blank")}
          >
            Live
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
