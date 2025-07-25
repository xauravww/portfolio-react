import { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { PROJECT_DETAILS } from "../utils/data";
import ProjectItem from "../components/ProjectItem";
import Pagination from "../components/Pagination";
import FilterModal from "../components/FilterModal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectOverview = ({ containerId }) => {
  const [isActive, setIsActive] = useState(true);

  const [isSearchActive, setisSearchActive] = useState(false);

  const whiteColorFilter =
    "invert(99%) sepia(1%) saturate(7473%) hue-rotate(186deg) brightness(116%) contrast(86%)";

  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(3);

  // Updated activeFilters state to include techFilterMode
  const [activeFilters, setActiveFilters] = useState({
    techStacks: [],
    difficulty: null,
    techFilterMode: 'AND', // Default to AND mode
  });

  const availableTechStacks = useMemo(() => {
    const allStacks = PROJECT_DETAILS.reduce((acc, project) => {
      project.techStacks.forEach(stack => acc.add(stack));
      return acc;
    }, new Set());
    return Array.from(allStacks);
  }, []);

  // Updated filtering logic to use techFilterMode
  const filteredProjects = useMemo(() => {
    return PROJECT_DETAILS.filter(project => {
      // Tech Stack check (using AND or OR based on mode)
      if (activeFilters.techStacks.length > 0) {
        if (activeFilters.techFilterMode === 'AND') {
          // AND logic: Project must include ALL selected techs
          if (!activeFilters.techStacks.every(filterStack => project.techStacks.includes(filterStack))) {
            return false;
          }
        } else {
          // OR logic: Project must include AT LEAST ONE selected tech
          if (!activeFilters.techStacks.some(filterStack => project.techStacks.includes(filterStack))) {
            return false;
          }
        }
      }
      // Difficulty check
      if (activeFilters.difficulty && project.difficulty !== activeFilters.difficulty) {
        return false;
      }
      return true;
    });
  }, [activeFilters]); // Re-filter when ANY active filter changes

  const lastPageIndex = currentPage * postPerPage;
  const firstPageIndex = lastPageIndex - postPerPage;
  const currentPosts = filteredProjects.slice(firstPageIndex, lastPageIndex);

  const handleApplyFilters = (filters) => {
    setActiveFilters(filters); // Update the entire filter state
    setcurrentPage(1);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

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
        setpostPerPage(1);
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
      className="ProjectOverview min-h-screen relative flex flex-col items-center py-16 md:py-24"
      id={containerId}
    >
      <div className="pattern2 absolute top-0 left-0 right-0 h-full w-full bg-[url('/assets/pattern2.png')] z-[1] backdrop-blur bg-fixed bg-center bg-norepeat- bg-cover"></div>
      <div className="mask absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.6)] z-[2]"></div>

      <div className="flex items-center justify-center gap-4 mb-6 md:mb-10 z-[3]">
        <header className="text-3xl md:text-5xl text-white font-bold relative text-center px-4">
          Projects
          <div className="underline-below-header absolute w-3/5 h-1 bg-[var(--accent-blue)] bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1"></div>
        </header>
        <button
          onClick={() => setIsModalOpen(true)}
          className="filter-button p-2 border border-[var(--border-color)] bg-[#1A1D24]/60 backdrop-blur-sm rounded-md hover:bg-[var(--border-color)] transition-colors"
          title="Filter Projects"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--text-light)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        </button>
      </div>
      <div
        className="projects-wrapper z-[6] mt-6 overflow-y-auto h-[60vh] w-full max-w-6xl rounded-md p-4 m-6 opacity-0"
        style={{
          scrollbarColor: "var(--accent-blue) transparent",
          scrollbarWidth: "thin",
          zIndex: 10,
        }}
      >
        {isActive && (
          <div className="grid-container rounded-md grid grid-cols-1 z-[5] md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ">
            {currentPosts.length > 0 ? (
              currentPosts.map((item) => (
                <ProjectItem
                  key={item.id}
                  img={item.img}
                  description={item.description}
                  techStacks={item.techStacks}
                  url={item.url}
                  projectTitle={item.title}
                />
              ))
            ) : (
              <p className="text-[var(--text-medium)] text-center md:col-span-2 lg:col-span-3">No projects found matching your criteria.</p>
            )}
          </div>
        )}
      </div>
      <div className="pagination-container z-[5] opacity-0 mt-4">
        {isActive && filteredProjects.length > postPerPage && (
          <Pagination
            totalPosts={filteredProjects.length}
            postPerPage={postPerPage}
            setcurrentPage={setcurrentPage}
            currentPage={currentPage}
          />
        )}
      </div>

      <FilterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onApplyFilters={handleApplyFilters}
        availableTechStacks={availableTechStacks}
        activeFilters={activeFilters}
      />
    </div>
  );
};

ProjectOverview.propTypes = {
  containerId: PropTypes.string.isRequired,
};

export default ProjectOverview;
