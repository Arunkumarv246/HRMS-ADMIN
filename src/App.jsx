import { Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import Sidebar from "./components/common/Sidebar";
import Dashboard from "./pages/Dashboard";
import Employee from "./pages/Employee";
 import Payroll from "./pages/Payroll";
import Attendance from "./pages/Attendance";
import Leave from "./pages/Leave";
import Department from "./pages/Department";
import Calender from "./pages/Calender";
import Payslip from "./pages/Payslip";
import EmployeeSalary from "./pages/EmployeeSalary";
import AddSalaryForm from "./pages/AddSalaryForm";

const App = () => {
	const [employees, setEmployees] = useState([
	  {
		
		name: "Suriya",
		id: "519986",
		email:"Suriya@gmail.com",
		joiningDate:"11/03/2024",
		role: "Web Developer",
		salary:"10000"
	  },
	  {
		
		name: "Jeeva",
		id: "519987",
		email: "Jeeva@gmail.com",
		joiningDate:"11/03/2024",
		role: "Web Developer",
		salary:"10000",
	  },
	  {
		
		name: "Kalaranjani",
		id: "519988",
		email: "Kala@gmail.com",
		joiningDate:"11/03/2024",
		role: "Web Developer",
		salary:"10000",
	  },
	  {
		
		name: "Arunkumar",
		id: "519984",
		email: "arun@gmail.com",
		joiningDate:"11/03/2024",
		role: "Web Developer",
		salary:"10000",
	  },
	  {
		name: "Kavya",
		id: "519985",
		email: "kavya@gmail.com",
		joiningDate:"11/03/2024",
		role: "Web Developer",
		salary:"10000",
	  },
	  {
	
		name: "Rajesh",
		id: "519986",
		email: "rajesh@gmail.com",
		joiningDate:"11/03/2024",
		role: "Sales",
		salary:"10000",
	  },
	  {
		
		name: "Kannan",
		id: "519987",
		email: "kannan@gamil.com",
		joiningDate:"11/03/2024",
		role: "Marketing",
		salary:"10000",
	  },
	  {
	
		name: "sakthivel",
		id: "519982",
		email: "sakthivel@gmail.com",
		joiningDate:"11/03/2024",
		role: "Web Developer",
		salary:"10000",
	  },
	
	
	]);
  
	const addEmployee = (employee) => {
	  setEmployees([...employees, employee]);
	}; 
	return (
		<div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
			{/* BG */}
			{/* <div className='fixed inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				<div className='absolute inset-0 backdrop-blur-sm' />
			</div> */}

			<Sidebar />
			<Routes>
				<Route path='/' element={<Dashboard/>} />
				<Route path='/employee' element={<Employee/>} />
				 <Route path='/payroll' element={<Payroll />} /> 
				{/* <Route path='/payroll/Payslip' element={<Payslip/>} /> */}
				<Route path='/attendanace' element={<Attendance />} />
				<Route path='/leave' element={<Leave />} />
				<Route path='/department' element={<Department />} />
				<Route path='/calendar' element={<Calender />} />
				{/* <Route path='/payroll/EmployeeSalary' element={<EmployeeSalary />} /> */}
				<Route path='/payroll/EmployeeSalary' element={<EmployeeSalary employees={employees} />} />
                <Route path="/add-salary" element={<AddSalaryForm addEmployee={addEmployee} />} />
			</Routes>
		</div>
	);
}

export default App;