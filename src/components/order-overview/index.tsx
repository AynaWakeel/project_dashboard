import { FaArrowUp } from "react-icons/fa";

interface OrderCardsProps {
    theme: boolean;
}

const OrderCard: React.FC<OrderCardsProps> = ({ theme }) => {
    return (
        <>
            <div className={`w-full xl:w-[30vw] flex flex-col justify-start items-start gap-6 px-5 py-6 rounded-lg ${theme ? "type-nevyBlue" : "type-white"}`}>
                <div className="flex flex-col justify-start items-start pb-4">
                    <h2 className="text-lg roboto font-bold">Orders overview</h2>
                    <div className="flex justify-start items-center gap-1 pt-1">
                        <FaArrowUp className="text-base text-green-700"/>
                        <h6 className="text-sm roboto text-green-700">24%</h6>
                        <h5 className="text-sm roboto ">this month</h5>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OrderCard