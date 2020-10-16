import React from "react";

const EmployeeDetails = (props) => {
  let emp = props.location.state.emp;
  console.log(props.location.state)

  return (
    <>
    <div className="col-6 m-auto">
    <table className="table table-bordered mt-5 shadow-lg">
      <thead>
        <th colSpan={2}>Employee Details</th>
      </thead>
      <tbody>
        <tr>
          <td>ID</td>
          <td>
            {emp.id}
          </td>
        </tr>
        <tr>
          <td>Name</td>
          <td>
            {emp.employee_name}
          </td>
        </tr>
        <tr>
          <td>Salary</td>
          <td>
            {emp.employee_salary}
          </td>
        </tr>
        <tr>
          <td>Age</td>
          <td>
            {emp.employee_age}
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    </>
  );
};

export default EmployeeDetails;
