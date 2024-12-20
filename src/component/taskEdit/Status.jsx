import { FaCircleNotch } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { IoCheckmarkDone } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { todoStatusEdit } from "../../app/features/todo/todoSlice";

const Status = (item) => {
  // Reducer function
  const dispatch = useDispatch();

  const hangleStatusEdit = (data) => {
    dispatch(todoStatusEdit(data));
  };

  return (
    <>
      <div className="status-box bg-white shadow-md inline-block absolute left-0 top-11 rounded-md z-10">
        <h4 className="still-toggle text-sm font-semibold text-black border-b py-2 px-5 pl-8">
          Status
        </h4>

        <ul className="still-toggle py-2 ">
          <li className="still-toggle flex items-center gap-3 py-0.5  px-3">
            <button
              onClick={() =>
                hangleStatusEdit({ id: item.data.id, status: "Pending" })
              }
              className="still-toggle py-1.5 px-4  w-full text-sm text-slate-600 hover:bg-slate-100 rounded-md flex items-center gap-2"
            >
              <FaCircleDot className="still-toggle" />
              Pending
              {item.data.status == "Pending" && (
                <IoCheckmarkDone className="text-lg text-blue-600" />
              )}
            </button>
          </li>

          <li className="still-toggle flex items-center gap-3 py-0.5  px-3">
            <button
              onClick={() =>
                hangleStatusEdit({ id: item.data.id, status: "Processing" })
              }
              className="still-toggle py-1.5 px-4 w-full text-sm text-slate-600 hover:bg-slate-100 rounded-md flex items-center gap-2"
            >
              <FaCircleNotch className="still-toggle" />
              Processing
              {item.data.status == "Processing" && (
                <IoCheckmarkDone className="text-lg text-blue-600" />
              )}
            </button>
          </li>

          <li className="still-toggle flex items-center gap-3 py-0.5  px-3">
            <button
              onClick={() =>
                hangleStatusEdit({ id: item.data.id, status: "Completed" })
              }
              className="still-toggle py-1.5 px-4 w-full text-sm text-slate-600 hover:bg-slate-100 rounded-md flex items-center gap-2"
            >
              <IoMdCheckmarkCircle className="still-toggle text-blue-600 text-base -ml-[2px]" />
              Completed
              {item.data.status == "Completed" && (
                <IoCheckmarkDone className="text-lg text-blue-600" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Status;
