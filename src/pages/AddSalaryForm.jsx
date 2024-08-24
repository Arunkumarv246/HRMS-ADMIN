import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddSalaryForm = ({ addEmployee }) => {
  const [employee, setEmployee] = useState({
    name: '',
    id: '',
    email: '',
    joiningDate: '',
    role: '',
    salary: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(employee); 
    navigate('/payroll/EmployeeSalary');  
  };

  const handleClose = () => {
    navigate('/payroll/EmployeeSalary'); 
  };

  return (
    // <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
    //   <div className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />

      <div className="w-1/3 mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Add Salary Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Employee Name</label>
            <input
              type="text"
              name="name"
              value={employee.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Employee ID</label>
            <input
              type="text"
              name="id"
              value={employee.id}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={employee.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Joining Date</label>
            <input
              type="date"
              name="joiningDate"
              value={employee.joiningDate}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Role</label>
            <input
              type="text"
              name="role"
              value={employee.role}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Salary</label>
            <input
              type="text"
              name="salary"
              value={employee.salary}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded text-black"
              required
            />
          </div>
          <div className='flex justify-between'>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded w-36"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="bg-blue-500 text-white px-4 py-2 rounded w-36"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    // </div>
  );
};

export default AddSalaryForm;
