import { FaCircleDot } from "react-icons/fa6";
import useToggle from "../../hook/useToggle";
import Status from "../taskEdit/Status";
import TaskName from "../taskEdit/taskName";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadAllTodos } from "../../app/features/todo/todoSlice";

const TaskTable = () => {
  const {
    toggle: isEdit,
    hangleToggle: handleEdit,
    toggleRef: editRef,
  } = useToggle();
  const {
    toggle: isStatus,
    hangleToggle: handleStatus,
    toggleRef: statusRef,
  } = useToggle();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllTodos());
  }, [dispatch]);

  return (
    <>
      <table className="table-fixed w-full text-left border bg-gray-100">
        <thead>
          <tr className="border-y">
            <th className="py-2 px-4 w-full">Name</th>
            <th className="py-2 px-4 w-3/12">Status</th>
            <th className="py-2 px-4 w-2/12">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 relative">
              <ul>
                <li className="flex items-center gap-3">
                  <button
                    onClick={handleStatus}
                    ref={statusRef}
                    className="p-1 text-slate-600 hover:bg-slate-300 rounded-md"
                  >
                    <FaCircleDot />
                  </button>
                  MERN Stack
                </li>
              </ul>

              {isStatus && <TaskName />}
            </td>

            <td className="py-2 px-4">
              <button className="px-3 py-0.5 text-sm font-medium rounded-full border border-yellow-400 bg-yellow-500 hover:bg-yellow-600 text-white mr-3">
                Panding
              </button>
              <button className="px-3 py-0.5 text-sm font-medium rounded-full border border-blue-400 bg-blue-500 hover:bg-blue-600 text-white">
                Completed
              </button>
            </td>

            <td className="py-2 px-4 relative">
              <button
                onClick={handleEdit}
                ref={editRef}
                className="p-1.5 text-lg border text-black bg-slate-200 hover:bg-slate-300 rounded-md mr-3"
              >
                <FaRegEdit />
              </button>

              {isEdit && <Status />}

              <button className="p-1.5 text-lg border text-black bg-slate-200 hover:bg-slate-300 rounded-md mr-3">
                <FaRegTrashAlt />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TaskTable;
