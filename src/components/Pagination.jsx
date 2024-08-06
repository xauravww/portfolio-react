import PropTypes from 'prop-types'
import { useMemo } from 'react';

const Pagination = ({ totalPosts, postPerPage, setcurrentPage, currentPage }) => {
    // Calculate the total number of pages
    const totalPages = Math.ceil(totalPosts / postPerPage);

    // Define the range of pages to display
    const PAGE_LIMIT = 5; // Number of pages to show around the current page

    // Determine the range of pages to show
    const getPageRange = () => {
        let startPage, endPage;

        if (totalPages <= PAGE_LIMIT) {
            // If total pages are less than or equal to PAGE_LIMIT, show all pages
            startPage = 1;
            endPage = totalPages;
        } else {
            // Calculate start and end page based on the current page
            const halfLimit = Math.floor(PAGE_LIMIT / 2);
            if (currentPage <= halfLimit) {
                startPage = 1;
                endPage = PAGE_LIMIT;
            } else if (currentPage + halfLimit >= totalPages) {
                startPage = totalPages - PAGE_LIMIT + 1;
                endPage = totalPages;
            } else {
                startPage = currentPage - halfLimit;
                endPage = currentPage + halfLimit;
            }
        }

        return { startPage, endPage };
    };

    const { startPage, endPage } = useMemo(getPageRange, [currentPage, totalPages]);

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    return (
        <div className='pagination-container flex justify-center gap-2 md:mt-5'>
            {startPage > 1 && <button className='text-white text-4xl px-2 font-bold' style={{ backgroundColor: "black" }} onClick={() => setcurrentPage(1)}>1</button>}
            {startPage > 2 && <span className='text-white text-4xl px-2 font-bold'>...</span>}
            
            {pages.map((page) => (
                <button
                    key={page}
                    className='text-white text-4xl px-2 font-bold'
                    style={page === currentPage ? { backgroundColor: "yellow", color: "black" } : { backgroundColor: "black" }}
                    onClick={() => setcurrentPage(page)}
                >
                    {page}
                </button>
            ))}

            {endPage < totalPages - 1 && <span className='text-white text-4xl px-2 font-bold'>...</span>}
            {endPage < totalPages && <button className='text-white text-4xl px-2 font-bold' style={{ backgroundColor: "black" }} onClick={() => setcurrentPage(totalPages)}>{totalPages}</button>}
        </div>
    );
}

Pagination.propTypes = {
    totalPosts: PropTypes.number.isRequired,
    postPerPage: PropTypes.number.isRequired,
    setcurrentPage: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
}

export default Pagination;
