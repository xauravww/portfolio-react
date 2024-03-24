import React, { useState } from "react"
// import "./projectitem.css"
const ProjectItem = ({ img, description, techStacks, url }) => {
  const [hoverItem, sethoverItem] = useState(false)
  const repo = url.repo
  const live = url.live
  return (
    <div className="project-item-container z-[7] bg-white rounded-md shadow-md relative h-[50vw] lg:h-[20vw]" onMouseEnter={() => sethoverItem(true)} onMouseLeave={() => sethoverItem(false)}>
      <img className="project-item-img rounded-t-md h-full object-cover" src={img} alt="" />
   <div className="wrapper-description-and-btns absolute inset-x-0 bottom-0 bg-slate-100 ease-in duration-300" >
   {hoverItem && (
        <div className="project-item-description p-4 ">
          {description.length > 100
            ? `${description.slice(0, 170)}...`
            : description}
        </div>
      )}
      {hoverItem && (
        <div className="project-item-helper-wrapper flex justify-between items-center p-4">
          <div className="wrapper-tech-stacks ">{techStacks}</div>
          <div className="project-item-urls-wrapper flex gap-2">
            <button
              className="btn-project-item-helper bg-[#46285a] text-white px-2 py-1 rounded-md"
              onClick={() => window.open(repo, "_blank")}
            >
              repo
            </button>
            {url.live && (
              <button
                className="btn-project-item-helper bg-[#46285a] text-white px-2 py-1 rounded-md"
                onClick={() => window.open(live, "_blank")}
              >
                Live
              </button>
            )}
          </div>
        </div>
      )}
   </div>
    </div>
  )
}

export default ProjectItem
