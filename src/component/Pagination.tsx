import "../styles/Pagination.scss";
import React from "react";


interface PaginationProps {
    totalPosts: number;
    postsPerPage: number;
    setCurrentPage: (page: number) => void;
    currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages: number[] = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='pagination'>
            {pages.map((page: number, index: number) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page === currentPage ? "active" : ""}>
                        {page}
                    </button>
                    // <button key={index}>{page}</button>
                );
            })}
        </div>
    );
};

export default Pagination;