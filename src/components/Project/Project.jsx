import React from "react"
import "./style.css"
const Project = ({ img, title, description, techStacks }) => {
  return (
    <>
      <div className="project-container-item">
        <img src={img} alt="" />
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="info-container">
          <div className="tech-stacks">{techStacks}</div>
          <button>Visit Url</button>
        </div>
      </div>
    </>
  )
}

export default Project
