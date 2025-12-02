import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5"
import { RiFacebookBoxFill } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";
import Switch from "react-switch";

interface settingProps {
  isPopupOpen: boolean;
  onClosePopup: () => void;
  setSidebarColorSelected: (color: string) => void;
  sidenavTypeSelected:string;
  setSidenavTypeSelected:(type:string)=>void;
  theme:boolean;
  handleTheme:()=>void;
}

const SettingPopup: React.FC<settingProps> = ({ isPopupOpen, onClosePopup, setSidebarColorSelected,sidenavTypeSelected, setSidenavTypeSelected, theme, handleTheme }) => {

  const [checked, setChecked] = useState<boolean>(false);
  const handleChange = () => {
    setChecked(p => !p);
  };

  const sidebarColors = [
    "pink",
    "zinc",
    "blue",
    "green",
    "yellow",
    "red"
  ]

  const sidenavTypes = [
    "dark",
    "transparent",
    "white"
  ]

  return (
    <>

      {isPopupOpen &&

        <div className={`h-full w-[360px] p-8 ${theme ? "theme-dark" : "theme-light"}`}>
          <div className="flex justify-between items-center border-change pb-6">
            <div>
              <h1 className='text-xl font-bold roboto'>Material UI Configurator</h1>
              <h3 className='text-base font-light roboto'>See our dashboard options.</h3>
            </div>
            <div onClick={onClosePopup}><IoClose className='text-xl text-zinc-500' /></div>
          </div>

          <div className="py-4">
            <h5 className='text-base font-bold roboto'>Sidebar Colors</h5>
            <div className="flex justify-start items-center gap-2 py-2">

              {sidebarColors.map((clr) => (
                <div className={`w-6 h-6 bg-${clr} rounded-full border border-zinc-100`} onClick={() => setSidebarColorSelected(clr)}></div>
              ))}

            </div>
          </div>

          <div>
            <h5 className='text-base font-bold roboto'>Sidenav Types</h5>
            <h3 className='text-sm font-light roboto py-1'>Choose between 2 different sidenav types.</h3>
            <div className="flex justify-start items-center gap-2 py-2">

              {sidenavTypes.map((typ) => (
                <button key={typ} className={`text-center w-full py-3 px-4 roboto rounded-md text-xs font-bold uppercase  ${sidenavTypeSelected === typ ? " active-btn-type" : " btn-type"} `} onClick={()=>setSidenavTypeSelected(typ)}>{typ}</button>
              ))}

            </div>
          </div>

          <div className="py-6 flex justify-between items-center border-change">
            <h5 className='text-base font-bold roboto'>Navbar Fixed</h5>

             <Switch
              checked={checked}
              onChange={handleChange}
              onColor="#383939"
              onHandleColor="#edf3ff"
              handleDiameter={18}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 6px rgba(0, 0, 0, 0.2)"
              height={18}
              width={40}
              className="react-switch"
              id="material-switch"
            />
          </div>

          <div className="py-6 flex justify-between items-center border-change">
            <h5 className='text-base font-bold roboto'>Light / Dark</h5>

            <Switch
              checked={theme}
              onChange={handleTheme}
              onColor="#383939"
              onHandleColor="#edf3ff"
              handleDiameter={18}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 6px rgba(0, 0, 0, 0.2)"
              height={18}
              width={40}
              className="react-switch"
              id="material-switch"
            />
          </div>
        
          <div className="pt-6 pb-2">
            <button className='text-center w-full py-3 px-4 roboto rounded-md text-xs font-bold uppercase border border-zinc-600'>View Documentation</button>
          </div>


          <div className=" px-5 flex flex-col justify-center items-center">

            <div className="flex justify-center items-center gap-2 border border-zinc-200 bg-zinc-100 w-26 rounded-md my-2 py-1">
              <div className="flex justify-center items-center gap-1 ">
                <FaRegStar className="text-sm text-zinc-800" />
                <h4 className='text-sm text-zinc-800 font-normal roboto'>star</h4>
              </div>
              <div>
                <h4 className='text-xs text-zinc-800 font-normal roboto'>11,271</h4>
              </div>
            </div>

            <h5 className='text-base font-bold roboto'>Thank you for sharing!</h5>
            <div className="flex justify-between items-center gap-4 pt-3">
              <button className='flex justify-center items-center gap-1 text-center w-full px-5 py-2.5 roboto rounded-md text-xs bg-[#344767] font-bold text-white uppercase'> <TiSocialTwitter className="text-xl " /> Tweet</button>
              <button className='flex justify-center items-center gap-1 text-center w-full px-5 py-2.5 roboto rounded-md text-xs bg-[#344767] font-bold text-white uppercase'><RiFacebookBoxFill className="text-xl " /> SHARE</button>
            </div>
          </div>
        </div>

      }

    </>
  )
}

export default SettingPopup