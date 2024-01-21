import React from "react"
import "./projectitem.css"
const ProjectItem = ({ img, description, techStacks, url }) => {
  return (
    <div className="project-item-container">
      <img className="project-item-img" src={img} alt="" />
      <div className="project-item-description">{description}</div>
      <div className="project-item-helper-wrapper">
        <div className="wrapper-tech-stacks">{techStacks}</div>
        <div className="project-item-urls-wrapper">
          <button className="btn-project-item-helper">repo</button>
          <button className="btn-project-item-helper">Live</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
