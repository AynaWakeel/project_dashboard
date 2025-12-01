// import { useState } from "react"
import { FaBars, FaUser } from "react-icons/fa"
import { FaBarsStaggered } from "react-icons/fa6"
import { IoMdSettings } from "react-icons/io"
import { IoNotifications } from "react-icons/io5"

interface navbarProps {
    isSidebarOpen:boolean;
    setIsSidebarOpen:React.Dispatch<React.SetStateAction<boolean>>;
    setIsPopupOpen:React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar:React.FC<navbarProps> = ({isSidebarOpen,setIsSidebarOpen,setIsPopupOpen}) => {
    return (
        <>

            <div className="flex flex-col md:flex-row justify-between items-start gap-2 md:px-6 px-4">
                <div className="flex flex-col lg:gap-1">
                    <div className="flex justify-start items-center gap-2">
                        <h5 className="text-sm text-zinc-500 font-normal roboto">Pages / </h5>
                        <h5 className="text-sm text-zinc-800 font-normal roboto">Dashboard</h5>
                    </div>
                    <div>
                        <h2 className="text-base text-zinc-800 font-semibold roboto">Dashboard</h2>
                    </div>
                </div>

                <div className="flex justify-between items-center w-full md:w-auto md:gap-3">
                    <div>
                        <input type="text" placeholder="Type here..." className="px-3 py-2 outline-0 border border-zinc-300 rounded-md text-sm placeholder:text-zinc-600" />
                    </div>
                    <div className="flex justify-start items-center gap-2">
                        <div className='flex justify-start items-center gap-2 rounded-md text-sm roboto font-medium text-zinc-500 hover:bg-zinc-100'> <FaUser className='text-sm' />Sign In</div>

                        <div onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="xl:hidden">
                            {isSidebarOpen ?

                                <FaBarsStaggered className="text-zinc-500 text-lg" />
                                :
                                <FaBars className="text-zinc-500 text-lg" />
                            }
                        </div>

                        <IoMdSettings className="text-zinc-500 text-lg" onClick={()=>setIsPopupOpen(prev=>!prev)}/>
                        <IoNotifications className="text-zinc-500 text-lg" />

                    </div>

                </div>
            </div>

        </>
    )
}

export default Navbar