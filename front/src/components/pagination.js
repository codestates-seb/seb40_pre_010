import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumber = [];

  // Math.ceil: 올림
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="s-pagination p12">
      {pageNumber.map((pageNum) => {
        return pageNum === currentPage ? (
          <span className="s-pagination--item is-selected" aria-current="page">
            {pageNum}
          </span>
        ) : (
          <button
            key={pageNum}
            className="s-pagination--item"
            onClick={() => paginate(pageNum)}
          >
            {pageNum}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
