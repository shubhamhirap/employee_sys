import React from "react";

const Pagination = ({
  currentPage,
  perPage,
  totalEmp,
  paginate,
  prevPaginate,
  nextPaginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEmp / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {currentPage > 1 && (
          <li className="page-item">
            <a className="page-link" onClick={() => prevPaginate(currentPage)}>
              prev
            </a>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
        {currentPage < Math.ceil(totalEmp / perPage) && (
          <li className="page-item">
            <a className="page-link" onClick={() => nextPaginate(currentPage)}>
              next
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
