import React, { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://dummy.restapiexample.com/api/v1/employees`)
      .then((res) => {
        let data = res.data.data.filter(
          (data) =>
            data.employee_name.toLowerCase().includes("a") &&
            data.employee_name.toLowerCase().includes("i")
        );
        setData(data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="col-6 m-auto">
      <table className="table table-striped table-bordered responsive mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th scope="col">Id</th>
            <th scope="col">Employee Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((emp, i) => (
            <tr key={emp.id}>
              <td>{i+1}</td>
              <td>{emp.id}</td>
              <td>{emp.employee_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
