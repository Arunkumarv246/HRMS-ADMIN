// import Header from "../components/common/Header"

// const Leave = () => {
//   return (
//     <div className='flex-1 overflow-auto relative z-10'>
//       <Header title ='Leave' />
//     </div>
//   )
// }

// export default Leave


import { useState } from "react";
import Header from "../components/common/Header";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

const Leave = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [validateOpen, setValidateOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employees, setEmployees] = useState([
    {
      employeeCode: "001",
      fullname: "Ranjani",
      validation: "Valid",
      status: "Present",
      inclusiveLeaveDate: "2024-08-01 to 2024-08-07",
      noOfDays: "7",
      availableLeaveBalance: "12",
    },
  ]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [newEmployee, setNewEmployee] = useState({
    employeeCode: "",
    fullname: "",
    validation: "",
    status: "",
    inclusiveLeaveDate: "",
    noOfDays: "",
    availableLeaveBalance: "",
  });

  const handleDropdownToggle = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleActionClick = (action, employee) => {
    if (action === "Validate Leave") {
      setSelectedEmployee(employee);
      setValidateOpen(true);
    } else {
      alert(action);
    }
    setDropdownOpen(null);
  };

  const handleInputChange = (e) => {
    setNewEmployee({
      ...newEmployee,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddEmployee = () => {
    if (
      newEmployee.employeeCode.trim() === "" ||
      newEmployee.fullname.trim() === "" ||
      newEmployee.validation.trim() === "" ||
      newEmployee.status.trim() === "" ||
      newEmployee.inclusiveLeaveDate.trim() === "" ||
      newEmployee.noOfDays.trim() === "" ||
      newEmployee.availableLeaveBalance.trim() === ""
    ) {
      alert("All fields are required!");
      return;
    }

    setEmployees([...employees, newEmployee]);
    setNewEmployee({
      employeeCode: "",
      fullname: "",
      validation: "",
      status: "",
      inclusiveLeaveDate: "",
      noOfDays: "",
      availableLeaveBalance: "",
    });
    setValidateOpen(false);
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedEmployees = [...employees].sort((a, b) => {
    if (sortConfig.key) {
      if (sortConfig.direction === "asc") {
        return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
      } else {
        return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
      }
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedEmployees.length / itemsPerPage);
  const paginatedEmployees = sortedEmployees.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Leave" />
      <div className="p-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-8">
            <div className="ml-auto">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
              />
            </div>
          </div>

          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-lg">
            <table className="min-w-full bg-white rounded-lg">
              <thead className="bg-gradient-to-r from-gray-100 to-gray-200 border-b">
                <tr>
                  <th
                    onClick={() => handleSort("employeeCode")}
                    className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
                  >
                    Employee Code
                    {sortConfig.key === "employeeCode" ? (
                      sortConfig.direction === "asc" ? (
                        <FaSortUp className="inline ml-2" />
                      ) : (
                        <FaSortDown className="inline ml-2" />
                      )
                    ) : (
                      <FaSort className="inline ml-2" />
                    )}
                  </th>
                  <th
                    onClick={() => handleSort("fullname")}
                    className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
                  >
                    Full Name
                    {sortConfig.key === "fullname" ? (
                      sortConfig.direction === "asc" ? (
                        <FaSortUp className="inline ml-2" />
                      ) : (
                        <FaSortDown className="inline ml-2" />
                      )
                    ) : (
                      <FaSort className="inline ml-2" />
                    )}
                  </th>
                  <th
                    onClick={() => handleSort("validation")}
                    className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
                  >
                    Validation
                    {sortConfig.key === "validation" ? (
                      sortConfig.direction === "asc" ? (
                        <FaSortUp className="inline ml-2" />
                      ) : (
                        <FaSortDown className="inline ml-2" />
                      )
                    ) : (
                      <FaSort className="inline ml-2" />
                    )}
                  </th>
                  <th
                    onClick={() => handleSort("status")}
                    className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
                  >
                    Status
                    {sortConfig.key === "status" ? (
                      sortConfig.direction === "asc" ? (
                        <FaSortUp className="inline ml-2" />
                      ) : (
                        <FaSortDown className="inline ml-2" />
                      )
                    ) : (
                      <FaSort className="inline ml-2" />
                    )}
                  </th>
                  <th
                    onClick={() => handleSort("inclusiveLeaveDate")}
                    className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
                  >
                    Inclusive Leave Date
                    {sortConfig.key === "inclusiveLeaveDate" ? (
                      sortConfig.direction === "asc" ? (
                        <FaSortUp className="inline ml-2" />
                      ) : (
                        <FaSortDown className="inline ml-2" />
                      )
                    ) : (
                      <FaSort className="inline ml-2" />
                    )}
                  </th>
                  <th
                    onClick={() => handleSort("noOfDays")}
                    className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
                  >
                    No. of Days
                    {sortConfig.key === "noOfDays" ? (
                      sortConfig.direction === "asc" ? (
                        <FaSortUp className="inline ml-2" />
                      ) : (
                        <FaSortDown className="inline ml-2" />
                      )
                    ) : (
                      <FaSort className="inline ml-2" />
                    )}
                  </th>
                  <th
                    onClick={() => handleSort("availableLeaveBalance")}
                    className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
                  >
                    Available Leave Balance
                    {sortConfig.key === "availableLeaveBalance" ? (
                      sortConfig.direction === "asc" ? (
                        <FaSortUp className="inline ml-2" />
                      ) : (
                        <FaSortDown className="inline ml-2" />
                      )
                    ) : (
                      <FaSort className="inline ml-2" />
                    )}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Tools
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedEmployees.map((employee, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {employee.employeeCode}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {employee.fullname}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {employee.validation}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {employee.status}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {employee.inclusiveLeaveDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {employee.noOfDays}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {employee.availableLeaveBalance}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      <div className="relative">
                        <button
                          onClick={() => handleDropdownToggle(index)}
                          className="text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                          Actions
                        </button>
                        {dropdownOpen === index && (
                          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                            <button
                              onClick={() => handleActionClick("View Details", employee)}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            >
                              View Details
                            </button>
                            <button
                              onClick={() => handleActionClick("Validate Leave", employee)}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            >
                              Validate Leave
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end items-center mt-4 space-x-1">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`px-4 py-2 border border-gray-300 rounded-md ${
                      currentPage === pageNumber
                        ? "bg-indigo-600 text-white"
                        : "bg-white text-gray-700"
                    } hover:bg-indigo-700 hover:text-white`}
                  >
                    {pageNumber}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
          </div>


        {/* Validate Leave Modal */}
        {validateOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
              <h3 className="text-lg font-semibold mb-4">Validate Leave</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Employee Code</label>
                  <input
                    type="text"
                    name="employeeCode"
                    value={selectedEmployee?.employeeCode || ""}
                    readOnly
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="fullname"
                    value={selectedEmployee?.fullname || ""}
                    readOnly
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Validation</label>
                  <input
                    type="text"
                    name="validation"
                    value={newEmployee.validation}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <input
                    type="text"
                    name="status"
                    value={newEmployee.status}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Inclusive Leave Date</label>
                  <input
                    type="text"
                    name="inclusiveLeaveDate"
                    value={newEmployee.inclusiveLeaveDate}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">No. of Days</label>
                  <input
                    type="text"
                    name="noOfDays"
                    value={newEmployee.noOfDays}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Available Leave Balance</label>
                  <input
                    type="text"
                    name="availableLeaveBalance"
                    value={newEmployee.availableLeaveBalance}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => setValidateOpen(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={handleAddEmployee}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Leave;
