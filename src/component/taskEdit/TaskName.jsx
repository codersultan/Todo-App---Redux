import { useDispatch } from "react-redux";
import useInput from "../../hook/useInput";
import { todoNameEdit } from "../../app/features/todo/todoSlice";
import useTodoEdit from "../../hook/useTodoEdit";

const TaskName = (item) => {
  // input hooks
  const { input, setInput, handleInputChange } = useInput({
    name: item.data.name,
  });
  const { edit, setEdit } = useTodoEdit();

  const dispatch = useDispatch();

  const handleNameEdit = (e, data) => {
    e.preventDefault();

    dispatch(todoNameEdit(data));

    setInput({ name: "" });
    setEdit(false);
  };

  console.log(edit);

  return (
    <>
      <div className="status-box bg-white shadow-md inline-block absolute left-0 top-11 rounded-md z-10">
        <h4 className="still-toggle text-sm font-semibold text-black border-b py-2 px-5 ">
          Task Name
        </h4>
        <form
          onSubmit={(e) =>
            handleNameEdit(e, { id: item.data.id, name: input.name })
          }
          className="still-toggle p-4"
        >
          <input
            onChange={handleInputChange}
            className="still-toggle border-2 p-2 rounded-l-full"
            type="text"
            name="name"
            value={input.name}
            placeholder="Task Name"
            id="task"
          />
          <button
            type="submit"
            className="still-toggle p-2 border-2 border-blue-500 rounded-r-full bg-blue-500 hover:bg-blue-600 text-white
              cursor-pointer"
          >
            Add Task
          </button>
        </form>
      </div>
    </>
  );
};

export default TaskName;
