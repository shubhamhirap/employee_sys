import React, { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const [data, setData] = useState([]);

//   var sortedData = [];
//   let filterData = data;
//   let regex = new RegExp(/^\b(?=\w*[ai])\w+\b$/);

//   filterData = filterData.sort((emp) => {
//     const e_name = emp.employee_name;
//     if (e_name.match(regex)) {
//       console.log("here");
//       return sortedData.push(emp.employee_name);
//     }
//   });
  useEffect(() => {
    axios
      .get(`http://dummy.restapiexample.com/api/v1/employees`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <ol className="mt-2">
        {data.map((emp) => (
          <li key={emp.id}>{emp.employee_name}</li>
        ))}
      </ol>
    </div>
  );
};

export default HomePage;
