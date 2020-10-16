import React from "react";

const SearchBar = ({ data, searchRes }) => {
  //   const [queryText, setQueryText] = useState("");

  //   let totalRecords = data;

  //   totalRecords = totalRecords.filter((eachEmp) => {
  //     return eachEmp["employee_name"]
  //       .toLowerCase()
  //       .includes(queryText.toLowerCase());
  //   });

  return (
    <div>
      <input
        type="text"
        className="form-control mt-3"
        onChange={(e) => searchRes(e.target.value)}
        placeholder="search..."
      />
      {/* <ul>
  {totalRecords.map(emp => (<li key={emp.id} >{emp.employee_name}</li>))}
      </ul> */}
    </div>
  );
};

export default SearchBar;
