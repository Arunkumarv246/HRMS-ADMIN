import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";
import Header from "../components/common/Header";


const EmployeeSalary = ({ employees }) => {
    console.log(employees);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmployee, setFilteredEmployee] = useState(employees);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(term) ||
        employee.email.toLowerCase().includes(term)
    );

    setFilteredEmployee(filtered);
  };

  return (
    <div className='flex-1 overflow-auto relative z-10'>
    <Header title ='Employee Salary' />
    <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
    <motion.div
      className="bg-white  backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-serif font-bold text-black">
          Employee Salary List
        </h2>
        <div className="relative">

        
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded ml-[530px]"
          onClick={() => window.location.href='/add-salary'}
        >
          Add Salary Item
        </button>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Employee..."
            className="border border-gray-300 bg-white text-black placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className=" absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
        {/* <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => window.location.href='/add-salary'}
        >
          Add Salary Item
        </button> */}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-base font-serif text-black uppercase tracking-wider">
                Employee Name
              </th>
              <th className="px-6 py-3 text-left text-base font-serif text-black uppercase tracking-wider">
              Employee ID
              </th>
              <th className="px-6 py-3 text-left text-base font-serif text-black uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-base font-serif text-black uppercase tracking-wider">
                Joining date
              </th>
              <th className="px-6 py-3 text-left text-base font-serif text-black uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-base font-serif text-black uppercase tracking-wider">
                Salary
              </th>
              <th className="px-6 py-3 text-left text-base font-serif text-black uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {filteredEmployee.map((employee) => (
              <motion.tr
                key={employee.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black flex gap-2 items-center">
                  {employee.name}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
                  {employee.id}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
                  {employee.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
                  {employee.joiningDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
                  {employee.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
                  {employee.salary}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
                  <button className="text-indigo-600 hover:text-indigo-300 mr-2">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    <Trash2 size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
    </main>
    </div>
  );
};
export default EmployeeSalary;
