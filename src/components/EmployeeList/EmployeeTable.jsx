import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const EMPLOYEE_DATA = [
  {
    id: 1,
    name: "Suriya",
    Email: "Suriya@gmail.com",
    Empid: 519986,
    department: "Web Developer",
  },
  {
    id: 2,
    name: "Jeeva",
    Email: "Jeeva@gmail.com",
    Empid: 519987,
    department: "Web Developer",
  },
  {
    id: 3,
    name: "Kalaranjani",
    Email: "Kala@gmail.com",
    Empid: 519988,
    department: "Web Developer",
  },
  {
    id: 4,
    name: "Arunkumar",
    Email: "arun@gmail.com",
    Empid: 519984,
    department: "Web Developer",
  },
  {
    id: 5,
    name: "Kavya",
    Email: "kavya@gmail.com",
    Empid: 519985,
    department: "HR",
  },
  {
    id: 6,
    name: "Rajesh",
    Email: "rajesh@gmail.com",
    Empid: 519986,
    department: "Sales",
  },
  {
    id: 7,
    name: "Kannan",
    Email: "kannan@gamil.com",
    Empid: 519987,
    department: "Marketing",
  },
  {
    id: 8,
    name: "sakthivel",
    Email: "sakthivel@gmail.com",
    Empid: 519982,
    department: "Web Developer",
  },
  {
    id: 9,
    name: "Ajith",
    Email: "ajith@gmail.com",
    Empid: 619984,
    department: "Marketing",
  },
  {
    id: 10,
    name: "Vijay",
    Email: "vijay@gmail.com",
    Empid: 619985,
    department: "HR",
  },
  {
    id: 11,
    name: "Harish",
    Email: "harish@gmail.com",
    Empid: 619986,
    department: "sales",
  },
  {
    id: 12,
    name: "Suresh",
    Email: "Suresh@gamil.com",
    Empid: 719987,
    department: "Marketing",
  },
  {
    id: 13,
    name: "Madhavan",
    Email: "madhavan@gmail.com",
    Empid: 719988,
    department: "sales",
  },
  {
    id: 14,
    name: "Dhanush",
    Email: "dhanush@gmail.com",
    Empid: 719984,
    department: "Marketing",
  },
  {
    id: 15,
    name: "Balaji",
    Email: "balaji@gmail.com",
    Empid: 719985,
    department: "HR",
  },
];

const EmployeeTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmployee, setFilteredEmployee] = useState(EMPLOYEE_DATA);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = EMPLOYEE_DATA.filter(
      (employee) =>
        employee.name.toLowerCase().includes(term) ||
        employee.Email.toLowerCase().includes(term)
    );

    setFilteredEmployee(filtered);
  };

  return (
    <motion.div
      className="bg-white  backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-serif font-bold text-black">
          Employee List
        </h2>
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
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-base font-serif text-black uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-base font-serif text-black uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-base font-serif text-black uppercase tracking-wider">
                Employee ID
              </th>
              <th className="px-6 py-3 text-left text-base font-serif text-black uppercase tracking-wider">
                Department
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
                  {employee.Email}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
                  {employee.Empid}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
                  {employee.department}
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
  );
};
export default EmployeeTable;
