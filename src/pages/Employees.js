import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";

let data = [];
const Employees = () => {
 
  let [filterData, setFilterData] = useState([]);
  let [tempData, setTempData] = useState([]);
  const [perPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(`http://dummy.restapiexample.com/api/v1/employees`)
      .then((res) => {
        data = res.data.data;
        setTempData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const searchRes = (searchQuery) => {
    let filteredData = JSON.parse(JSON.stringify(data));
    setTempData(filteredData.filter(data => data.employee_name.toLowerCase().includes(searchQuery.toLowerCase())));
  };
  
  useEffect(() => {
    const indexOfLastEmp = currentPage * perPage;
    const indexOfFirstEmp = indexOfLastEmp - perPage;
    setFilterData(tempData.slice(indexOfFirstEmp, indexOfLastEmp));
  }, [tempData, currentPage]) 

  const prevPaginate = (pageNumber) => {
    setCurrentPage(pageNumber - 1);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPaginate = (pageNumber) => {
    setCurrentPage(pageNumber + 1);
  };

  return (
    <>
      <div className="col-8 m-auto">
        <SearchBar data={data} searchRes={searchRes} />
        <table className="table table-striped table-bordered responsive mt-3">
          <thead>
            <tr>
              <th>Id</th>
              <th>E Name</th>
              <th>E Salary</th>
              <th>E Age</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {filterData.map((emp) => (
              <tr>
                <td>{emp.id}</td>
                <td>{emp.employee_name}</td>
                <td>{emp.employee_salary}</td>
                <td>{emp.employee_age}</td>
                <td>
                <Link
                    to={{pathname:`/employee/${emp.employee_name}${emp.id}`, state:{emp}}}
                    key={emp.id}
                  >
                    Details
                  </Link>                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          perPage={perPage}
          totalEmp={tempData.length}
          paginate={paginate}
          prevPaginate={prevPaginate}
          nextPaginate={nextPaginate}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default Employees;