import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

const Employees = () => {
  const [data, setData] = useState([]);
  const [queryText, setQueryText] = useState("");
  const [perPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  let filterData = data;

  filterData = filterData.filter((eachEmp) => {
    return eachEmp["employee_name"]
      .toLowerCase()
      .includes(queryText.toLowerCase());
  });

  useEffect(() => {
    axios
      .get(`http://dummy.restapiexample.com/api/v1/employees`)
      .then((res) => {
        console.log(res.data);

        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const indexOfLastEmp = currentPage * perPage;
  const indexOfFirstEmp = indexOfLastEmp - perPage;
  filterData = data.slice(indexOfFirstEmp, indexOfLastEmp);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="col-8 m-auto">
        <input
          type="text"
          className="form-control mt-3"
          onChange={(e) => setQueryText(e.target.value)}
          placeholder="search..."
        />
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
                  <Link to="/employee/:name:id">Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          perPage={perPage}
          totalEmp={data.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default Employees;
