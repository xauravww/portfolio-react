import PropTypes from "prop-types";

import Pagination from "../components/Pagination";

const Blogs = ({ containerId }) => {
  return (
    <div
      className="Blogs h-screen relative bg-[#46285a] flex flex-col justify-around items-center"
      id={containerId}
    >
    <header className="text-3xl md:text-5xl text-white font-bold relative z-[3] text-center px-4">
        Blogs
        <div className="underline-below-header absolute w-3/5 h-1 bg-white bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </header>
    <div className="pattern2 absolute top-0 left-0 right-0 h-full w-full bg-[url('/assets/pattern2.png')] z-[1] backdrop-blur bg-fixed bg-center bg-norepeat- bg-cover"></div>
    <div className="mask absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.6)] z-[2]"></div>
      <div className="blog-content bg-[rgb(70,40,90)] h-1/2 w-96 flex flex-col items-center justify-center text-2xl text-white text-center z-[3]">
        Integration Coming Soon...
        <br />
        For now Visit my blog directly!
        <a
          href="https://xauravww.hashnode.dev"
          target="_blank"
          className="underline"
        >
          Blog Link
        </a>
      </div>
    </div>
  );
};

Blogs.propTypes = {
  containerId: PropTypes.string.isRequired,
};

export default Blogs;
