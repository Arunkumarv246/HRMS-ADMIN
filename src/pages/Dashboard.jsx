import { BarChart2, ShoppingBag, Users, FileCheck } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import EmployeeTable from "../components/EmployeeList/EmployeeTable";



const Dashboard = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title ='Dashboard' />
     
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total Employees' icon={Users} value='18' color='#6366F1' />
					<StatCard name='Attendance Report' icon={FileCheck} value='98%' color='#8B5CF6' />
					<StatCard name='Leaves Today' icon={ShoppingBag} value='2' color='#EC4899' />
					<StatCard name='Department' icon={BarChart2} value='3' color='#10B981' />
				</motion.div>
        <EmployeeTable />
        </main>
    </div> 
    
  )
}

export default Dashboard
