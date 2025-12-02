import { MdDone } from "react-icons/md";

interface ProjectTableProps {
    theme: boolean;
}

const ProjectTable:React.FC<ProjectTableProps> = ({theme}) => {
    return (
        <>

            <div className={`w-full xl:w-[62vw] flex flex-col justify-start items-start gap-6 px-5 py-6 rounded-lg ${theme ? "type-nevyBlue" : "type-white"}`}>
                <div className="flex flex-col justify-start items-start pb-4">
                    <h2 className="text-lg roboto font-bold">Orders overview</h2>
                    <div className="flex justify-start items-center gap-1 pt-1">
                        <MdDone className="text-base text-blue-700" />
                        <h6 className="text-sm roboto font-bold text-zinc-500">30 done</h6>
                        <h5 className="text-sm roboto ">this month</h5>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProjectTable