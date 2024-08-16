import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/common/Sidebar";
import Dashboard from "./pages/Dashboard";
import Employee from "./pages/Employee";
 import Payroll from "./pages/Payroll";
import Attendance from "./pages/Attendance";
import Leave from "./pages/Leave";
import Department from "./pages/Department";
import Calender from "./pages/Calender";
import Payslip from "./pages/Payslip";

function App() {
	return (
		<div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
			{/* BG */}
			<div className='fixed inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				<div className='absolute inset-0 backdrop-blur-sm' />
			</div>

			<Sidebar />
			<Routes>
				<Route path='/' element={<Dashboard/>} />
				<Route path='/employee' element={<Employee/>} />
				 <Route path='/payroll' element={<Payroll />} /> 
				<Route path='/payroll/Payslip' element={<Payslip/>} />
				<Route path='/attendanace' element={<Attendance />} />
				<Route path='/leave' element={<Leave />} />
				<Route path='/department' element={<Department />} />
				<Route path='/calendar' element={<Calender />} />
			</Routes>
		</div>
	);
}

export default App;