// import Header from "../components/common/Header";

// const Department = () => {
//   return (
//     <div className="flex-1 overflow-auto relative z-10">
//       <Header title="Department" />
//       <div className="border border-indigo-600 ...">
//         <button className="border border-indigo-600 margin-auto">
//           New Department
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Department;

import { useState } from "react";
import Header from "../components/common/Header";

const Department = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null); // Track which dropdown is open
  const [modalOpen, setModalOpen] = useState(false);
  const [departmentName, setDepartmentName] = useState("");
  const [departments, setDepartments] = useState(["Web Developer"]);

  const handleAddDepartment = () => {
    if (departmentName.trim() === "") return; // Don't add empty departments
    setDepartments([...departments, departmentName]);
    setDepartmentName("");
    setModalOpen(false); // Close the modal after adding
  };

  const handleDropdownToggle = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleActionClick = (action) => {
    alert(action); // Replace this with the actual action handling logic
    setDropdownOpen(null); // Close the dropdown after an action is selected
  };

  return (
    // <div className="flex-1 overflow-auto relative z-10 p-6">
    //   <Header title="Department" />
      <div className="flex-1 overflow-auto relative z-10">
       <Header title="Department" />
<div className="p-6">
      {/* Action buttons */}
      <div className="flex justify-between items-center mb-4 ">
        {/* <button
          onClick={() => setModalOpen(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          New Department
        </button> */}
        <button
              onClick={() => setModalOpen(true)}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg shadow-md transform transition-transform hover:scale-105"
            >
              New Department
            </button>
        <div className="flex space-x-2">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Export CSV/Excel
          </button>
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg shadow ">
        <table className="min-w-full bg-white ">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Department Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tools
              </th>
            </tr>
          </thead>
          <tbody>
            {departments.map((department, index) => (
              <tr key={index} className="border-b">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {department}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                    >
                      View Details
                    </button>
                    {dropdownOpen === index && (
                      <div className="absolute right-0 -mt-2 mr-28 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                        <ul className="py-1">
                          <li>
                            <button
                              onClick={() => handleActionClick("Update Details")}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            >
                              Update Details
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => handleActionClick("Delete Details")}
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

      {/* Modal for New Department */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-30">
          <div className="bg-black bg-opacity-50 absolute inset-0"></div>
          <div className="bg-white p-6 rounded-lg shadow-lg z-40 w-1/3">
            <h2 className="text-lg font-semibold mb-4">Add New Department</h2>
            <input
              type="text"
              value={departmentName}
              onChange={(e) => setDepartmentName(e.target.value)}
              placeholder="Department Name"
              className="text-gray-900 border border-gray-300 rounded px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setModalOpen(false)}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Close
              </button>
              <button
                onClick={handleAddDepartment}
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Department;
