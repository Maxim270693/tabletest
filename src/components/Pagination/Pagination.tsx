import React from 'react';
import './pagination.css';

type PropsType = {
    totalPosts: number,
    perPage: number,
    paginate: (pageNumber: number) => void
    currentPage: number,
}

const Pagination: React.FC<PropsType> = ({totalPosts,
                                             perPage,
                                             paginate,
                                             currentPage
}) => {
    const pageNumbers = [] as number[];

    for (let i = 1; i <= Math.ceil(totalPosts / perPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="paginationWrapper">
            {
                pageNumbers.map(page => (
                    <li key={page} className="paginationWrapperList">
                        <a href="!#"
                           onClick={() => paginate(page)}
                           className={currentPage === page ? "active" : "pagination"}
                        >
                            {page}
                        </a>
                    </li>
                ))
            }
        </div>
    );
};

export default Pagination;