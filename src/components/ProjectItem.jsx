import PropTypes from 'prop-types';
import { useState } from "react"
// import "./projectitem.css"




const ProjectItem = ({ img, description, techStacks, url }) => {
  const [hoverItem, sethoverItem] = useState(false)
  const repo = url.repo
  const live = url.live
  return (
    <div className="project-item-container w-full relative z-[7] bg-white rounded-md shadow-md  h-[50vw] lg:h-[20vw]" onMouseEnter={() => sethoverItem(true)} onMouseLeave={() => sethoverItem(false)}>
      <img className="project-item-img rounded-t-md h-full w-full object-cover" src={img} alt="" />
      <div 
        className={`wrapper-description-and-btns absolute inset-x-0 bottom-0 bg-[rgb(70,40,90)] opacity-0 scale-100 transition-all duration-300 ease-in-out transform-gpu ${hoverItem ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} border-2 border-black text-white`}
      >
   {hoverItem && (
        <div className="project-item-description p-4 w-full">
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
              className="btn-project-item-helper bg-black text-white px-2 py-1 rounded-md"
              onClick={() => window.open(repo, "_blank")}
            >
              repo
            </button>
            {url.live && (
              <button
                className="btn-project-item-helper bg-black text-white px-2 py-1 rounded-md"
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

ProjectItem.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStacks: PropTypes.arrayOf(PropTypes.string).isRequired,
  url: PropTypes.shape({
    repo: PropTypes.string.isRequired,
    live: PropTypes.string,
  }).isRequired,
};

export default ProjectItem
