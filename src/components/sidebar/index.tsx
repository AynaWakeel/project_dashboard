import { MdDashboard, MdOutlineTableView } from 'react-icons/md'
import logo from '../../assets/images/10002.png'
import { CgNotes } from 'react-icons/cg'
import { FiBox } from 'react-icons/fi'
import { ImRtl } from 'react-icons/im'
import { IoIosNotifications } from 'react-icons/io'
import { FaUser } from 'react-icons/fa'
import { PiSignInBold } from 'react-icons/pi'
import { LuNotepadText } from 'react-icons/lu'
import { IoClose } from 'react-icons/io5'

interface sidebarprops {
  onClose?:()=>void;
  sidebarColorSelected:string;
  sidenavTypeSelected:string;
}

const Sidebar:React.FC<sidebarprops> = ({onClose, sidebarColorSelected , sidenavTypeSelected}) => {

  return (
    <>

      <div className={`w-[275px] h-[95vh] type-${sidenavTypeSelected} p-4 rounded-xl shadow-md shadow-zinc-400 flex flex-col justify-between`}>
        <div className='relative'>
          <div className='absolute right-0 block xl:hidden' onClick={onClose}><IoClose className='text-xl text-zinc-500' /></div>
          <div className='flex justify-center items-center gap-3 py-3'>
            <img src={logo} alt="logo" className='w-8' />
            <h1 className='text-sm text-zinc-800 font-bold roboto'>Material Dashboard 2</h1>
          </div>
          <div className='max-h-[350px] overflow-y-scroll'>

          <div className='pt-6 flex flex-col justify-center gap-4 '>
            <ul className='flex flex-col gap-1'>
              <li className={`flex justify-start items-center gap-3 py-2.5 px-4 roboto rounded-md text-base text-white font-normal bg-${sidebarColorSelected}`}> <MdDashboard className='text-xl' />Dashboard</li>
              <li className='flex justify-start items-center gap-3 py-2.5 px-4 roboto rounded-md text-base font-light text-zinc-950 hover:bg-zinc-100'> <MdOutlineTableView className='text-xl' />Tables</li>
              <li className='flex justify-start items-center gap-3 py-2.5 px-4 roboto rounded-md text-base font-light text-zinc-950 hover:bg-zinc-100'> <CgNotes className='text-lg' /> Biling</li>
              <li className='flex justify-start items-center gap-3 py-2.5 px-4 roboto rounded-md text-base font-light text-zinc-950 hover:bg-zinc-100'> <FiBox className='text-lg' />Virtual Reality</li>
              <li className='flex justify-start items-center gap-3 py-2.5 px-4 roboto rounded-md text-base font-light text-zinc-950 hover:bg-zinc-100'> <ImRtl className='text-lg' />RTL</li>
              <li className='flex justify-start items-center gap-3 py-2.5 px-4 roboto rounded-md text-base font-light text-zinc-950 hover:bg-zinc-100'><IoIosNotifications className='text-xl' />Notifications</li>
            </ul>
            <h5 className='text-xs text-zinc-600 font-semibold pl-5 uppercase roboto'>Account pages</h5>
            <ul className='flex flex-col gap-1'>
              <li className='flex justify-start items-center gap-3 py-3 px-4 roboto rounded-md text-base font-light text-zinc-950 hover:bg-zinc-100'> <FaUser className='text-base' />Profile</li>
              <li className='flex justify-start items-center gap-3 py-3 px-4 roboto rounded-md text-base font-light text-zinc-950 hover:bg-zinc-100'> <PiSignInBold className='text-xl' />Sign In</li>
              <li className='flex justify-start items-center gap-3 py-3 px-4 roboto rounded-md text-base font-light text-zinc-950 hover:bg-zinc-100'><LuNotepadText className='text-xl' />Sign Up</li>
            </ul>
          </div>
          </div>
        </div>

        <div className='pt-5'>
          <button className='text-center w-full py-3 px-4 roboto rounded-md text-xs text-white font-bold bg-[#E60076] uppercase'>Upgrade To Pro</button>
        </div>
      </div>


    </>
  )
}

export default Sidebar