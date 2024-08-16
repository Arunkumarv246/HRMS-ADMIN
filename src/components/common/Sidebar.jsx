import { LayoutDashboard, ClipboardCheck, Menu, CalendarDays, CircleUser, NotebookPen , Layers, WalletCards,CircleChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
	{
		name: "Dashboard",
		icon: LayoutDashboard,
		color: "#6366f1",
		href: "/",
	},
	{   name: "Employee", 
		icon: CircleUser, 
		color: "#3498db", 
		href: "/employee" },
	{ 
		name: "Payroll", 
		submenu:true,
		submenuItems:[
			{ item:"payslip",
			   href: "Payroll/payslip"
			},
		],
		icon: WalletCards, 
		color: "#a569bd", 
		href: "/payroll" 

	},
	{ 
		name: "Attendanace", 
		icon: ClipboardCheck, 
		color: "35bc89", 
		href: "/attendanace" },
	{ 
		name: "Leave", 
		icon: NotebookPen , 
		color: "fa6d57 ", 
		href: "/leave" },
	{ 
		name: "Department", 
		icon: Layers, 
		color: "#3B82F6", 
		href: "/department" 
	},
	{ 
		name: "Calender", 
		icon: CalendarDays, 
		color: "#6EE7B7", 
		href: "/calendar" 
	},
];

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const [SubmenuOpen, setSubmenuOpen] = useState(false);

	return (
		<motion.div
			className={`relative z-10 transition-all duration-150 ease-linear flex-shrink-0 
				${
				 isSidebarOpen ? "w-84" : "w-20"
			}`
		}
			 animate={{ width: isSidebarOpen ? 256 : 80 }}
		>
			<div className='h-full bg-white bg-opacity-0 backdrop-blur-md p-4 flex flex-col border-r border-gray-700'>
				<motion.button
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.9 }}
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					className='p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit'
				>
					<Menu size={24} />
				</motion.button>

				<nav className='mt-8 flex-grow'>
					{SIDEBAR_ITEMS.map((item) => (
						<Link key={item.href} to={item.href}>
							<motion.div className='flex items-center p-4 text-lg font-serif rounded-lg hover:bg-gray-700 transition-colors mb-2'>
								<item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
								<AnimatePresence>
									{isSidebarOpen && (
										<motion.span
											className='ml-4 whitespace-nowrap'
											initial={{ opacity: 0, width: 0 }}
											animate={{ opacity: 1, width: "auto" }}
											exit={{ opacity: 0, width: 0 }}
											transition={{ duration: 0.2, delay: 0.3 }}
										>
											<div className="relative">
											
											{item.submenu && (
												<CircleChevronDown className={`absolute left-32  ${SubmenuOpen && "rotate-180"}`} onClick={()=>
													setSubmenuOpen(!SubmenuOpen)}
												/>
											 )}
												
											</div> 
                                            <motion.div

											initial={{ opacity: 0, y: 80 }}
					                        animate={{ opacity: 1, y: 0 }}
					                        transition={{ duration: 1 }}
                                            >
											 <motion.div
					                           whileHover={{ x: 23, scale: 1 }}
											   animate={{ x: 0, scale: 1 }}
											   transition={{ duration: 0.3 }}

				                            > 
											{item.name}
											</motion.div>
											 </motion.div>  
										</motion.span>
									
									)}
								</AnimatePresence>
							</motion.div>
												{item.submenu && SubmenuOpen && isSidebarOpen &&(
													
													<ul>
														
													{item.submenuItems.map((submenuItem,index)=>(
													    <Link key={index} to={submenuItem.href}>
														<li key={index} className="text-white text-lg font-serif cursor-pointer p-3 px-16 hover:bg-slate-600 rounded-md">
														
															{submenuItem.item}
													
														</li>
														 </Link>
													))}
													
													</ul>
												
												) }
									</Link>
					))}
				</nav>
			</div>
		</motion.div>
	);
};
export default Sidebar;