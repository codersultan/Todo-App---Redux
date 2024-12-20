import { FaCircleDot } from "react-icons/fa6";
import Status from "../taskEdit/Status";
import TaskName from "../taskEdit/taskName";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodos } from "../../app/features/todo/todoSlice";
import Swal from "sweetalert2";
import useTodoEdit from "../../hook/useTodoEdit";
import { useState } from "react";

const TaskTable = () => {
  // Toggle Hook state
  const {
    edit: statusEdit,
    handleTodoEdit: handleTodoEditStatus,
    toggleRef: statusRef,
  } = useTodoEdit();

  const {
    edit: nameEdit,
    handleTodoEdit: handleTodoEditName,
    toggleRef: nameRef,
  } = useTodoEdit();

  // Redux todo data
  const { todos } = useSelector((state) => state.tasklist);

  // Reducer function
  const dispatch = useDispatch();

  // Todos Delete function
  const handleTodosDelete = (id) => {
    Swal.fire({
      width: 400,
      title: "Are you sure?",
      text: "You want to delete permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3b82f6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteTodos(id));
        Swal.fire({
          title: "Deleted!",
          text: "Your task has been deleted.",
          icon: "success",
        });
      }
    });
  };

  // Status based on item
  const [todoId, setTodoId] = useState(null);

  const handleTodoId = (id) => {
    setTodoId(id);
  };

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
          {todos.map((item) => {
            return (
              <tr
                key={item.id}
                className={`border-b ${
                  item.status === "Completed"
                    ? "bg-green-50 hover:bg-green-100"
                    : item.status === "Processing"
                    ? "bg-blue-50 hover:bg-blue-100"
                    : "bg-yellow-50 hover:bg-yellow-100"
                }`}
              >
                <td className="py-2 px-4 relative">
                  <ul>
                    <li className="flex items-center gap-3">
                      <button
                        onClick={() => {
                          handleTodoEditName();
                          handleTodoId(item.id);
                        }}
                        ref={nameRef}
                        className="p-1 text-slate-600 hover:bg-slate-300 rounded-md"
                      >
                        <FaCircleDot />
                      </button>
                      {item.name}
                    </li>
                  </ul>

                  {nameEdit && todoId == item.id ? (
                    <TaskName data={item} />
                  ) : null}
                </td>

                <td className="py-2 px-4">
                  {item.status === "Completed" ? (
                    <button className="px-3 py-0.5 text-sm font-medium rounded-full border border-green-400 bg-green-500 hover:bg-green-600 text-white mr-3">
                      Completed
                    </button>
                  ) : item.status === "Processing" ? (
                    <button className="px-3 py-0.5 text-sm font-medium rounded-full border border-blue-400 bg-blue-500 hover:bg-blue-600 text-white">
                      Processing
                    </button>
                  ) : (
                    <button className="px-3 py-0.5 text-sm font-medium rounded-full border border-yellow-400 bg-yellow-500 hover:bg-yellow-600 text-white mr-3">
                      Pending
                    </button>
                  )}
                </td>

                <td className="py-2 px-4 relative">
                  <button
                    onClick={() => {
                      handleTodoEditStatus();
                      handleTodoId(item.id);
                    }}
                    ref={statusRef}
                    className="p-1.5 text-lg border text-black bg-slate-200 hover:bg-slate-300 rounded-md mr-3"
                  >
                    <FaRegEdit />
                  </button>
                  {statusEdit && todoId == item.id ? (
                    <Status data={item} />
                  ) : null}

                  <button
                    onClick={() => handleTodosDelete(item.id)}
                    className="p-1.5 text-lg border text-black bg-slate-200 hover:bg-slate-300 rounded-md mr-3"
                  >
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TaskTable;
