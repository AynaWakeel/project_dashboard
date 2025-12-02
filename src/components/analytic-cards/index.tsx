import { FaUser } from "react-icons/fa";
import { GiSofa } from "react-icons/gi";

interface AnalyticProps {
  theme:boolean;
}

const Analyticscards:React.FC<AnalyticProps> = ({theme}) => {
  return (
    <>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-start items-center gap-6 p-2">

      <div className={`relative rounded-lg  ${theme ? "type-nevyBlue" : "type-white" }`}>
        <div className="absolute left-4 -top-3 w-16 h-15 type-nevyBlue rounded-xl flex justify-center items-center "><GiSofa className="text-2xl text-zinc-100"  /></div>
        <div className="flex flex-col justify-end items-end py-4 px-4">
          <h5 className="text-sm roboto pb-1">Today's Money</h5>
          <h2 className="text-2xl roboto font-bold">$53k</h2>
        </div>
        <div className="flex justify-start items-center gap-2 border-t-2 border-zinc-500 pt-6 pb-4 px-4">
          <h6 className="text-sm roboto text-green-700">+55%</h6>
          <h5 className="text-sm roboto ">than lask week</h5>
        </div>
      </div>

       <div className={`relative rounded-lg  ${theme ? "type-nevyBlue" : "type-white" }`}>
        <div className="absolute left-4 -top-3 w-16 h-15 bg-[#E60076] rounded-xl flex justify-center items-center"><FaUser className="text-xl text-white"  /></div>
        <div className="flex flex-col justify-end items-end py-4 px-4">
          <h5 className="text-sm roboto pb-1">Today's Users</h5>
          <h2 className="text-2xl roboto font-bold">2,300</h2>
        </div>
        <div className="flex justify-start items-center gap-2 border-t-2 border-zinc-500 pt-6 pb-4 px-4">
          <h6 className="text-sm roboto text-green-700">+3%</h6>
          <h5 className="text-sm roboto ">than lask week</h5>
        </div>
      </div>

       <div className={`relative rounded-lg  ${theme ? "type-nevyBlue" : "type-white" }`}>
        <div className="absolute left-4 -top-3 w-16 h-15 bg-[#53AC57] rounded-xl flex justify-center items-center"><FaUser className="text-xl text-white"  /></div>
        <div className="flex flex-col justify-end items-end py-4 px-4">
          <h5 className="text-sm roboto pb-1">New Clients</h5>
          <h2 className="text-2xl roboto font-bold">3,462</h2>
        </div>
        <div className="flex justify-start items-center gap-2 border-t-2 border-zinc-500 pt-6 pb-4 px-4">
          <h6 className="text-sm roboto text-green-700">-2%</h6>
          <h5 className="text-sm roboto ">than lask week</h5>
        </div>
      </div>

       <div className={`relative rounded-lg  ${theme ? "type-nevyBlue" : "type-white" }`}>
        <div className="absolute left-4 -top-3 w-16 h-15 bg-[#328BEC] rounded-xl flex justify-center items-center"><GiSofa className="text-2xl text-white"  /></div>
        <div className="flex flex-col justify-end items-end py-4 px-4">
          <h5 className="text-sm roboto pb-1">Sales</h5>
          <h2 className="text-2xl roboto font-bold">$103,430</h2>
        </div>
        <div className="flex justify-start items-center gap-2 border-t-2 border-zinc-500 pt-6 pb-4 px-4">
          <h6 className="text-sm roboto text-green-700">+5%</h6>
          <h5 className="text-sm roboto ">than lask week</h5>
        </div>
      </div>

    </div>
    
    </>
  )
}

export default Analyticscards