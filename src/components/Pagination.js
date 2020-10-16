import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ currentPage ,perPage, totalEmp, paginate, prevPaginate, nextPaginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEmp / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" onClick={() => prevPaginate(currentPage)}>prev</a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" onClick={() => nextPaginate(currentPage)}>next</a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
