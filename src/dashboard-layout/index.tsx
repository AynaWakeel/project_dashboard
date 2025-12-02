
import { useState } from "react"
import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"
import { IoMdSettings } from "react-icons/io"
import SettingPopup from "../components/setting-popup"
import Analyticscards from "../components/analytic-cards"
import GraphCards from "../components/graph-cards"
import ProjectTable from "../components/project-table"
import OrderCard from "../components/order-overview"
import Footer from "../components/footer"

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)

    const [sidebarColorSelected, setSidebarColorSelected] = useState<string>("blue")
    const [sidenavTypeSelected, setSidenavTypeSelected] = useState<string>("white")

    const [theme, setTheme] = useState<boolean>(false);
    const handleTheme = () => {
        setTheme(p => !p);
    };


    return (
        <>

            <div className={`h-screen overflow-hidden w-full ${theme ? "background-nevyBlue" : "background-light"} flex justify-between items-start gap-2 p-2`}>
                <div className="hidden xl:block p-2">
                    <Sidebar
                        sidebarColorSelected={sidebarColorSelected}
                        sidenavTypeSelected={sidenavTypeSelected}
                         theme={theme}
                    />
                </div>

                {isSidebarOpen &&
                    <div className="fixed left-4 top-4 xl:hidden">
                        <Sidebar
                            sidebarColorSelected={sidebarColorSelected}
                            onClose={() => setIsSidebarOpen(false)}
                            sidenavTypeSelected={sidenavTypeSelected}
                            theme={theme}
                        />
                    </div>
                }
                <div className="h-screen overflow-y-scroll scroll-style w-full xl:w-[82%] p-2">
                    <Navbar
                        isSidebarOpen={isSidebarOpen}
                        setIsSidebarOpen={setIsSidebarOpen}
                        setIsPopupOpen={setIsPopupOpen}
                        theme={theme}
                    />

                    <div>
                        <Analyticscards
                        theme={theme}
                        />

                        <GraphCards 
                        theme={theme}
                        />

                        <div className="flex flex-col xl:flex-row justify-start items-center gap-6 px-2 pb-6">
                            <ProjectTable 
                            theme={theme}
                            />

                            <OrderCard 
                            theme={theme}
                            />
                        </div>

                        <Footer/>
                    </div>

                    <div className="fixed right-5 bottom-5 z-10">
                        <div className="w-14 h-14 bg-white rounded-full flex justify-center items-center"
                            onClick={() => setIsPopupOpen(!isPopupOpen)}>
                            <IoMdSettings className="text-zinc-700 text-2xl" />
                        </div>
                    </div>

                    <div className="fixed right-0 top-0 z-30 h-screen">
                        <SettingPopup
                            isPopupOpen={isPopupOpen}
                            onClosePopup={() => setIsPopupOpen(false)}
                            setSidebarColorSelected={setSidebarColorSelected}
                            sidenavTypeSelected={sidenavTypeSelected}
                            setSidenavTypeSelected={setSidenavTypeSelected}
                            theme={theme}
                            handleTheme={handleTheme}
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default DashboardLayout