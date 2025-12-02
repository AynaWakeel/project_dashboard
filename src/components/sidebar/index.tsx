import { MdDashboard, MdOutlineTableView } from 'react-icons/md'
import logoWhite from '../../assets/images/10002.png'
import logoDark from '../../assets/images/10013.png'
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
  theme:boolean;
}

const Sidebar:React.FC<sidebarprops> = ({onClose, sidebarColorSelected , sidenavTypeSelected , theme}) => {

  return (
    <>

      <div className={`w-[275px] h-[95vh] ${theme ?  "type-nevyBlue" : `type-${sidenavTypeSelected}` } py-4 rounded-xl flex flex-col justify-between`}>
        <div className='relative px-4'>
          <div className='absolute right-0 block xl:hidden' onClick={onClose}><IoClose className='text-xl text-zinc-500' /></div>
          <div className='flex justify-center items-center gap-3 pt-3 pb-5 border-b border-zinc-500 '>
          {sidenavTypeSelected === 'dark' || theme ?
            
             <img src={logoDark} alt="logo" className='w-8' />
             :
            <img src={logoWhite} alt="logo" className='w-8' />
          
          }
            <h1 className='text-sm font-bold roboto'>Material Dashboard 2</h1>
          </div>
          <div className='max-h-[350px]  overflow-y-scroll scroll-style'>

          <div className='pt-2 flex flex-col justify-center gap-4 '>
            <ul className='flex flex-col gap-1'>
              <li className={`flex justify-start items-center gap-3 py-2.5 px-4 roboto rounded-md text-base text-white font-normal bg-${sidebarColorSelected}`}> <MdDashboard className='text-xl' />Dashboard</li>
              <li className='flex justify-start items-center gap-3 py-2.5 px-4 roboto rounded-md text-base font-light'> <MdOutlineTableView className='text-xl' />Tables</li>
              <li className='flex justify-start items-center gap-3 py-2.5 px-4 roboto rounded-md text-base font-light'> <CgNotes className='text-lg' /> Biling</li>
              <li className='flex justify-start items-center gap-3 py-2.5 px-4 roboto rounded-md text-base font-light'> <FiBox className='text-lg' />Virtual Reality</li>
              <li className='flex justify-start items-center gap-3 py-2.5 px-4 roboto rounded-md text-base font-light'> <ImRtl className='text-lg' />RTL</li>
              <li className='flex justify-start items-center gap-3 py-2.5 px-4 roboto rounded-md text-base font-light'><IoIosNotifications className='text-xl' />Notifications</li>
            </ul>
            <h5 className='text-xs font-semibold pl-5 uppercase roboto'>Account pages</h5>
            <ul className='flex flex-col gap-1'>
              <li className='flex justify-start items-center gap-3 py-3 px-4 roboto rounded-md text-base font-light hover:bg-zinc-100'> <FaUser className='text-base' />Profile</li>
              <li className='flex justify-start items-center gap-3 py-3 px-4 roboto rounded-md text-base font-light hover:bg-zinc-100'> <PiSignInBold className='text-xl' />Sign In</li>
              <li className='flex justify-start items-center gap-3 py-3 px-4 roboto rounded-md text-base font-light hover:bg-zinc-100'><LuNotepadText className='text-xl' />Sign Up</li>
            </ul>
          </div>
          </div>
        </div>

        <div className='pt-5 px-4'>
          <button className='text-center w-full py-3 px-4 roboto rounded-md text-xs text-white font-bold bg-[#E60076] uppercase'>Upgrade To Pro</button>
        </div>
      </div>


    </>
  )
}

export default Sidebar