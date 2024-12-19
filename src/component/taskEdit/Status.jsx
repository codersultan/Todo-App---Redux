import { FaCircleNotch } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";
import { IoMdCheckmarkCircle } from "react-icons/io";

const Status = () => {
  return (
    <>
      <div className="status-box bg-white shadow-md inline-block absolute left-0 top-11 rounded-md">
        <h4 className="text-sm font-semibold text-black border-b py-2 px-5 pl-8">
          Status
        </h4>
        <ul className="py-2">
          <li className="flex items-center gap-3 py-0.5  px-3">
            <button className="py-1.5 px-4  w-full text-sm text-slate-600 hover:bg-slate-100 rounded-md flex items-center gap-2">
              <FaCircleDot />
              Pending
            </button>
          </li>
          <li className="flex items-center gap-3 py-0.5  px-3">
            <button className="py-1.5 px-4 w-full text-sm text-slate-600 hover:bg-slate-100 rounded-md flex items-center gap-2">
              <FaCircleNotch />
              Processing
            </button>
          </li>
          <li className="flex items-center gap-3 py-0.5  px-3">
            <button className="py-1.5 px-4 w-full text-sm text-slate-600 hover:bg-slate-100 rounded-md flex items-center gap-2">
              <IoMdCheckmarkCircle className="text-blue-600 text-base -ml-[2px]" />
              Completed
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Status;
