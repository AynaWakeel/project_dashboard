import { IoMdHeart } from "react-icons/io"

const Footer = () => {
  return (
    <>

    <div className="px-2 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex justify-start items-center gap-1">
            <p className="text-sm roboto font-normal text-zinc-400">© 2025, made with</p>
            <IoMdHeart className="text-lg text-zinc-500"/>
            <p className="text-sm roboto font-normal text-zinc-400">by <span className="font-semibold text-zinc-600">Creative Tim</span> for a better web.</p>
        </div>
        <div>
            <ul className="flex items-center gap-10 text-sm roboto font-normal text-zinc-400">
                <li>Creative Tim</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>License</li>
            </ul>
        </div>

    </div>
    
    </>
  )
}

export default Footer