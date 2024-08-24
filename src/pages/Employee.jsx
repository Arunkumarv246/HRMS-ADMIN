// import Header from "../components/common/Header"

// const Employee = () => {
//   return (
//     <div className='flex-1 overflow-auto relative z-10'>
//       <Header title ='Employee' />
//     </div>
//   )
// }

// export default Employee

import { useState } from "react";
import Header from "../components/common/Header";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

const Employee = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    id: "",
    photo: "",
    name: "",
    position: "",
    email: "",
  });
  const [employees, setEmployees] = useState([
    {
      id: "001",
      photo: "/path/to/photo.jpg",
      name: "Ranjani",
      position: "Web Developer",
      email: "ranjani@gmail.com",
    },
  ]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleDropdownToggle = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleActionClick = (action) => {
    alert(action);
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
      newEmployee.id.trim() === "" ||
      newEmployee.name.trim() === "" ||
      newEmployee.position.trim() === "" ||
      newEmployee.email.trim() === ""
    ) {
      alert("All fields are required!");
      return;
    }

    setEmployees([...employees, newEmployee]);
    setNewEmployee({ id: "", photo: "", name: "", position: "", email: "" });
    setModalOpen(false);
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
      <Header title="Employees" />
      <div className="p-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg shadow-md transform transition-transform hover:scale-105"
            >
              New Employee
            </button>
            <div className="flex space-x-4">
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
                    onClick={() => handleSort("id")}
                    className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
                  >
                    Employee ID
                    {sortConfig.key === "id" ? (
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
                    Photo
                  </th>
                  <th
                    onClick={() => handleSort("name")}
                    className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
                  >
                    Name
                    {sortConfig.key === "name" ? (
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
                    onClick={() => handleSort("position")}
                    className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
                  >
                    Position
                    {sortConfig.key === "position" ? (
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
                    onClick={() => handleSort("email")}
                    className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
                  >
                    Email
                    {sortConfig.key === "email" ? (
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
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {employee.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      <img
                        src={employee.photo}
                        alt={employee.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {employee.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {employee.position}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {employee.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      <div className="relative">
                        <button
                          onClick={() => handleDropdownToggle(index)}
                          className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700"
                        >
                          View Details
                        </button>
                        {dropdownOpen === index && (
                          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                            <ul className="py-1">
                              <li>
                                <button
                                  onClick={() =>
                                    handleActionClick("Update Details")
                                  }
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                >
                                  Update Details
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() =>
                                    handleActionClick("Delete Details")
                                  }
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                >
                                  Delete Details
                                </button>
                              </li>
                            </ul>
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

          {modalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-30">
              <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl font-semibold mb-6">Add New Employee</h2>
                <input
                  type="text"
                  name="id"
                  value={newEmployee.id}
                  onChange={handleInputChange}
                  placeholder="Employee ID"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4"
                />
                <input
                  type="text"
                  name="photo"
                  value={newEmployee.photo}
                  onChange={handleInputChange}
                  placeholder="Photo URL"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4"
                />
                <input
                  type="text"
                  name="name"
                  value={newEmployee.name}
                  onChange={handleInputChange}
                  placeholder="Employee Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4"
                />
                <input
                  type="text"
                  name="position"
                  value={newEmployee.position}
                  onChange={handleInputChange}
                  placeholder="Position"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4"
                />
                <input
                  type="email"
                  name="email"
                  value={newEmployee.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4"
                />
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddEmployee}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700"
                  >
                    Add Employee
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Employee;
