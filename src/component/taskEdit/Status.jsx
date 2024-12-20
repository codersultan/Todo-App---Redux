import { FaCircleNotch } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";
import { IoMdCheckmarkCircle } from "react-icons/io";
import useTodoEdit from "../../hook/useTodoEdit";

const Status = (data) => {
  // console.log(data);

  return (
    <>
      <div className="status-box bg-white shadow-md inline-block absolute left-0 top-11 rounded-md z-10">
        <h4 className="still-toggle text-sm font-semibold text-black border-b py-2 px-5 pl-8">
          Status
        </h4>

        <ul className="still-toggle py-2 ">
          <li className="still-toggle flex items-center gap-3 py-0.5  px-3">
            <button className="still-toggle py-1.5 px-4  w-full text-sm text-slate-600 hover:bg-slate-100 rounded-md flex items-center gap-2">
              <FaCircleDot className="still-toggle" />
              Pending
            </button>
          </li>

          <li className="still-toggle flex items-center gap-3 py-0.5  px-3">
            <button className="still-toggle py-1.5 px-4 w-full text-sm text-slate-600 hover:bg-slate-100 rounded-md flex items-center gap-2">
              <FaCircleNotch className="still-toggle" />
              Processing
            </button>
          </li>

          <li className="still-toggle flex items-center gap-3 py-0.5  px-3">
            <button className="still-toggle py-1.5 px-4 w-full text-sm text-slate-600 hover:bg-slate-100 rounded-md flex items-center gap-2">
              <IoMdCheckmarkCircle className="still-toggle text-blue-600 text-base -ml-[2px]" />
              Completed
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Status;
