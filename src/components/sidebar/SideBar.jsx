import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import enotebooklogo from '../../assets/enotebooklogo.png'

function SideBar() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear('token');
        navigate('/login')
    }
    return (
        <div>
            <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r bg-gradient-to-t from-gray-500 to-[#F6E0BE] overflow-hidden text-black">

                {/* logo  */}
                <div className=" flex justify-center  ml-6 ">
                    <img className=" w-80" src={enotebooklogo} alt="img" />
                </div>

                <div className="flex flex-col justify-between  ">
                    <aside>
                        <ul className="flex flex-col  mt-15 ml-10">

                            {/* Home  */}
                            <li>
                                <NavLink
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                    to="/"
                                >
                                    <button className="flex flex-row items-center h-14 transform hover:translate-x-2 transition-transform ease-in duration-200  ">
                                        <span className="inline-flex items-center justify-center h-12 w-12 text-2xl hover:text-black ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                            </svg>

                                        </span>
                                        <span className="text-xl font-medium">Home</span>
                                    </button>
                                </NavLink>
                            </li>

                            {/* addnote */}
                            <li>
                                <NavLink
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                    to="/addnote"
                                >
                                    <button className="flex flex-row items-center h-14 transform hover:translate-x-2 transition-transform ease-in duration-200">
                                        <span className="inline-flex items-center justify-center h-12 w-12 text-2xl hover:text-black">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>

                                        </span>
                                        <span className="text-xl font-medium">Add Note</span>
                                    </button>
                                </NavLink>
                            </li>

                            {/* profile  */}
                            <li>
                                <NavLink
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                    to="/profile"
                                >
                                    <button className="flex flex-row items-center h-14 transform hover:translate-x-2 transition-transform ease-in duration-200">
                                        <span className="inline-flex items-center justify-center h-12 w-12 text-2xl hover:text-black">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </span>
                                        <span className="text-xl font-medium">Profile</span>
                                    </button>
                                </NavLink>
                            </li>

                        </ul>

                        {/* logout  */}
                        <div className="flex flex-col ml-10">
                            <button
                                onClick={logout}
                                className="flex flex-row items-center h-14 transform hover:translate-x-2 transition-transform ease-in duration-200 ">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-2xl hover:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                    </svg>
                                </span>
                                <span className="text-xl font-medium">Logout</span>
                            </button>

                        </div>
                    </aside>
                </div>
            </div>

        </div>
    )
}

export default SideBar
