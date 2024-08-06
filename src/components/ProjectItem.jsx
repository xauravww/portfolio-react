import PropTypes from 'prop-types';
import { useState } from "react";

const techStackImages = {
  "React Native": "../../public/assets/react-native.png",
  "Express.js": "../../public/assets/techstack/express-js.webp",
  "MongoDB": "../../public/assets/techstack/mongodb.png",
  "Tailwind CSS": "../../public/assets/tailwind.png",
  "ReactJS": "../../public/assets/techstack/react.png",
  "React Native": "../../public/assets/techstack/react-native.png",
  "NotionDB": "../../public/assets/techstack/notion.png", 
  "Sanity CMS": "../../public/assets/techstack/sanity.png", 
  "VanillaJs": "../../public/assets/techstack/js.png",
  "Node.js": "../../public/assets/techstack/nodejs.png",
  "Redux-Toolkit": "../../public/assets/techstack/redux-toolkit.png",
  
};

const ProjectItem = ({ img, description, techStacks = [], url }) => {
  const [hoverItem, setHoverItem] = useState(false);
  const repo = url.repo;
  const live = url.live;

  return (
    <div
      className="relative w-full bg-white rounded-md shadow-md h-[50vw] lg:h-[20vw]"
      onMouseEnter={() => setHoverItem(true)}
      onMouseLeave={() => setHoverItem(false)}
    >
      <img
        className="rounded-t-md h-full w-full object-cover"
        src={img}
        alt="Project"
      />
      <div
        className={`absolute inset-x-0 bottom-0 bg-[rgb(70,40,90)] transition-opacity duration-300 ease-in-out ${hoverItem ? 'opacity-100' : 'opacity-0'} border-2 border-black text-white flex flex-col`}
      >
        {hoverItem && (
          <div className="flex flex-col p-4 w-full">
            <div className="flex flex-row gap-2 mb-4">
              {techStacks.map((tech, index) => (
                <img
                  key={index}
                  className="rounded-full border-2 border-white"
                  src={techStackImages[tech] || 'default-image-path.png'} // Replace with a default image path if needed
                  alt={tech}
                  style={{ width: `${30 - index * 4}px`, height: `${30 - index * 4}px`, zIndex: techStacks.length - index }}
                />
              ))}
            </div>
            <p className="text-sm mb-4">{description}</p>
            <div className="flex gap-2">
              <button
                className="bg-black text-white px-2 py-1 rounded-md"
                onClick={() => window.open(repo, "_blank")}
              >
                Repo
              </button>
              {live && (
                <button
                  className="bg-black text-white px-2 py-1 rounded-md"
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
  );
};

ProjectItem.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStacks: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.shape({
    repo: PropTypes.string.isRequired,
    live: PropTypes.string,
  }).isRequired,
};

export default ProjectItem;
