import useToggle from "../../hook/useToggle";
import { IoCloseOutline } from "react-icons/io5";

const Modal = () => {
  const { toggle, hangleToggle, toggleRef } = useToggle();

  // Form Submit
  const hangleTaskSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="modal toggle-close absolute left-0 top-0 w-full h-full bg-black/60 flex justify-center items-center">
        <div
          className="modal-wrapper w-3/12 bg-white p-6 rounded-md relative"
          ref={toggleRef}
        >
          <h2 className="text-xl font-bold">Add Task Item</h2>

          <button className="toggle-close p-2 border-gray-100 rounded-full text-lg bg-gray-100 hover:bg-gray-200 text-black absolute right-5 top-5">
            <IoCloseOutline className="toggle-close" />
          </button>
          <div className="moda-form mt-5">
            <form className="flex flex-col gap-3" onSubmit={hangleTaskSubmit}>
              <label
                className="text-xs mt-2 font-semibold text-slate-500"
                for="task"
              >
                Task Name
              </label>
              <input
                className="border-2 p-2"
                type="text"
                placeholder="Task Name"
                id="task"
              />
              <label
                className="text-xs mt-2 font-semibold text-slate-500"
                for="status"
              >
                Status
              </label>
              <select className="border-2 p-2" name="" id="status">
                <option value="pending">Pending</option>
                <option value="pending">Processing</option>
                <option value="pending">completed</option>
              </select>

              <button
                className="p-2 bg-blue-500 hover:bg-blue-600 text-white
              cursor-pointer"
              >
                Add Task
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
