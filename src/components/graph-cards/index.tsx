import { FiClock } from "react-icons/fi";

interface GraphCardsProps {
    theme: boolean;
}

const GraphCards: React.FC<GraphCardsProps> = ({ theme }) => {
    return (
        <>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-center gap-6 px-2 py-8">

                <div className={` flex flex-col  gap-2 rounded-lg  ${theme ? "type-nevyBlue" : "type-white"}`}>
                    <div className="relative h-46">
                        <div className="absolute left-5 -top-4 w-85 h-52 bg-[#E60076] rounded-xl flex justify-center items-center "></div>
                    </div>
                    <div className="p-4">
                        <div className="flex flex-col justify-start items-start pb-4">
                            <h2 className="text-lg roboto font-bold">Website Views</h2>
                            <h5 className="text-sm roboto pb-1">Last Campaign Performance</h5>
                        </div>
                        <div className="flex justify-start items-center gap-1 border-t-2 border-zinc-500 pt-4 ">
                            <FiClock className="text-sm text-zinc-400" />
                            <h5 className="text-sm roboto ">campaign sent 2 days ago</h5>
                        </div>
                    </div>
                </div>

                 <div className={` flex flex-col  gap-2 rounded-lg  ${theme ? "type-nevyBlue" : "type-white"}`}>
                    <div className="relative h-46">
                        <div className="absolute left-5 -top-4 w-85 h-52 bg-[#53AC57] rounded-xl flex justify-center items-center "></div>
                    </div>
                    <div className="p-4">
                        <div className="flex flex-col justify-start items-start pb-4">
                            <h2 className="text-lg roboto font-bold">Daily Sales</h2>
                            <h5 className="text-sm roboto pb-1">(+15%) increase in today sales.</h5>
                        </div>
                        <div className="flex justify-start items-center gap-1 border-t-2 border-zinc-500 pt-4 ">
                            <FiClock className="text-sm text-zinc-400" />
                            <h5 className="text-sm roboto ">updated 4 min ago</h5>
                        </div>
                    </div>
                </div>

                 <div className={` flex flex-col  gap-2 rounded-lg  ${theme ? "type-nevyBlue" : "type-white"}`}>
                    <div className="relative h-46">
                        <div className="absolute left-5 -top-4 w-85 h-52 bg-[#328BEC] rounded-xl flex justify-center items-center "></div>
                    </div>
                    <div className="p-4">
                        <div className="flex flex-col justify-start items-start pb-4">
                            <h2 className="text-lg roboto font-bold">Completed Tasks</h2>
                            <h5 className="text-sm roboto pb-1">Last Campaign Performance</h5>
                        </div>
                        <div className="flex justify-start items-center gap-1 border-t-2 border-zinc-500 pt-4 ">
                            <FiClock className="text-sm text-zinc-400" />
                            <h5 className="text-sm roboto ">just updated</h5>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default GraphCards