const TaskName = () => {
  return (
    <>
      <div className="status-box bg-white shadow-md inline-block absolute left-0 top-11 rounded-md z-10">
        <h4 className="still-toggle text-sm font-semibold text-black border-b py-2 px-5 ">
          Task Name
        </h4>
        <form className="still-toggle p-4">
          <input
            className="still-toggle border-2 p-2 rounded-l-full"
            type="text"
            placeholder="Task Name"
            id="task"
          />
          <button
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
