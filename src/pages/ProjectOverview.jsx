import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PROJECT_DETAILS } from "../utils/data";
import ProjectItem from "../components/ProjectItem";
import Pagination from "../components/Pagination";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectOverview = ({ containerId }) => {
  const [isActive, setIsActive] = useState(true);

  const [isSearchActive, setisSearchActive] = useState(false);

  const whiteColorFilter =
    "invert(99%) sepia(1%) saturate(7473%) hue-rotate(186deg) brightness(116%) contrast(86%)";

  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(4);
  const lastPageIndex = currentPage * postPerPage;
  const firstPageIndex = lastPageIndex - postPerPage;
  const currentPost = PROJECT_DETAILS.slice(firstPageIndex, lastPageIndex);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".projects-wrapper",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".ProjectOverview",
          start: "top 70%",
        }
      }
    );

    gsap.fromTo(".pagination-container",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        delay: 0.4,
        scrollTrigger: {
          trigger: ".ProjectOverview",
          start: "top 70%",
        }
      }
    );

    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setpostPerPage(2);
      } else if (width >= 768 && width < 1024) {
        setpostPerPage(2);
      } else if (width >= 1024) {
        setpostPerPage(3);
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
      className="ProjectOverview min-h-screen relative flex flex-col justify-center items-center py-16 md:py-24"
      id={containerId}
    >
      <div className="pattern2 absolute top-0 left-0 right-0 h-full w-full bg-[url('/assets/pattern2.png')] z-[1] backdrop-blur bg-fixed bg-center bg-norepeat- bg-cover"></div>
      <div className="mask absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.6)] z-[2]"></div>

      <header className="text-3xl md:text-5xl text-white font-bold relative z-[3] text-center px-4">
        Projects
        <div className="underline-below-header absolute w-3/5 h-1 bg-[var(--accent-blue)] bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </header>
      <div
        className="projects-wrapper z-[6] mt-6 overflow-y-auto h-[60vh] rounded-md p-4 m-6 opacity-0"
        style={{
          scrollbarColor: "var(--accent-blue) transparent",
          scrollbarWidth: "5px",
          zIndex: 10,
        }}
      >
        {isActive && (
          <div className="grid-container rounded-md grid grid-cols-1 z-[5] md:grid-cols-2 lg:grid-cols-3 gap-10 ">
           
            {currentPost.map((item) => (
              <ProjectItem
                key={item.id}
                img={item.img}
                description={item.description}
                techStacks={item.techStacks}
                url={item.url}
                projectTitle={item.title}
              />
            ))}
          </div>
        )}
      </div>
      <div className="pagination-container z-[5] opacity-0">
        {isActive && (
          <Pagination
            totalPosts={PROJECT_DETAILS.length}
            postPerPage={postPerPage}
            setcurrentPage={setcurrentPage}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  );
};

ProjectOverview.propTypes = {
  containerId: PropTypes.string.isRequired,
};

export default ProjectOverview;
