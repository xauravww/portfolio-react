import React, { useEffect, useState } from "react"
import "./style.css"
import Project from "../../components/Project/Project"
const ProjectOverview = ({ containerId }) => {
  const PROJECT_DETAILS = [
    {
      id: "1",
      img: "/src/assets/projects/pixtract_bg.png",
      title: "Pixtract",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint autincidunt hic. Est, placeat tenetur? Mollitia repudiandae sit similique",
      // techStacks: ["ReactJS", "Sanity CMS"],
      techStacks: "ReactJS",
      url: "https://pixtract.netlify.app"
    }
  ]

  const MINI_PROJECT_DETAILS = [
    {
      id: "1",
      img: "/src/assets/projects/pixtract_bg.png",
      title: "Birthday Reminder",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint autincidunt hic. Est, placeat tenetur? Mollitia repudiandae sit similique",
      // techStacks: ["ReactJS", "Sanity CMS"],
      techStacks: "ReactJS",
      url: "https://pixtract.netlify.app"
    }
  ]
  const [isActive, setIsActive] = useState(true)
  const [countItem, setCountItem] = useState(0)
  const [countIndex, setcountIndex] = useState(0)
  useEffect(() => {
    if (isActive) {
      let length = PROJECT_DETAILS.length
      setCountItem(length)
    } else {
      let length = MINI_PROJECT_DETAILS.length
      setCountItem(length)
    }
  }, [isActive])
  return (
    <div className="project-container" id={containerId}>
      <div className="project-counter">Project {countItem}/ 100</div>
      <div className="wrapper">
        {isActive &&
          PROJECT_DETAILS.map((item) => (
            <>
              <Project
                key={item.id}
                img={item.img}
                title={item.title}
                description={item.description}
                techStacks={item.techStacks}
                url={item.url}
              />
            </>
          ))}
        {!isActive &&
          MINI_PROJECT_DETAILS.map((item) => (
            <>
              <Project
                key={item.id}
                img={item.img}
                title={item.title}
                description={item.description}
                techStacks={item.techStacks}
                url={item.url}
              />
            </>
          ))}
      </div>
      <div className="prev-next-btns">
        <button>Prev</button>
        <button>next</button>
      </div>
      <div className="mask"></div>
      <div className="pattern"></div>
      <div className="toggle">
        <button
          className={isActive ? "active" : ""}
          onClick={() => setIsActive(!isActive)}
        >
          Projects
        </button>
        <button
          className={isActive ? "" : "active"}
          onClick={() => setIsActive(!isActive)}
        >
          MiniProjects
        </button>
      </div>
    </div>
  )
}

export default ProjectOverview
