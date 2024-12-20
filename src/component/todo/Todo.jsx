import { FaPlus, FaRegMoon, FaRegSun } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { GoTasklist } from "react-icons/go";
import Modal from "../modal/Modal";
import useToggle from "../../hook/useToggle";
import useDark from "../../hook/useDark";
import TaskTable from "./TaskTable";
import TodoAcide from "./TodoAcide";

const Todo = () => {
  //state
  const { toggle, handleToggle } = useToggle();

  const { isDark, handleDark } = useDark();

  return (
    <>
      <div className="todo-app">
        <div className="wrapper">
          <header>
            <div className="todo-header flex items-center px-5 py-1 border-b bg-gray-100">
              <div className="logo w-1/12">
                <img
                  className="w-11 h-11 rounded-full"
                  src="https://i.ibb.co.com/17vP0BG/coder-sultan.jpg"
                  alt=""
                />
              </div>
              <div className="top-nav w-11/12 px-4 flex justify-between items-center">
                <div className="nav-bar">
                  <button className="btn">
                    <FiMenu className="text-2xl -mb-1" />
                  </button>
                </div>
                <div className="toggle">
                  <button
                    onClick={handleDark}
                    className="p-2 border rounded-full"
                    style={{ backgroundColor: isDark ? "black" : "white" }}
                  >
                    {!isDark ? (
                      <FaRegSun className="text-lg text-black " />
                    ) : (
                      <FaRegMoon className="text-lg text-white " />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </header>

          <div className="todo-body flex">
            <aside>
              <TodoAcide />
            </aside>

            <section className="todo-task w-full">
              <div className="todo-banner">
                <img
                  className="w-full h-72 object-cover"
                  src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=6000"
                  alt=""
                />
              </div>

              <div className="task-body px-20">
                <div className="task-icon relative -top-10 bg-white inline-block shadow-lg rounded-md">
                  <a href="#">
                    <GoTasklist className="text-8xl text-blue-400" />
                  </a>
                </div>
                <div className="task-heading -mt-3">
                  <h2 className="text-2xl font-bold">Todo Task</h2>
                </div>
                <div className="task-items mt-5">
                  <TaskTable />
                </div>

                <div className="todo-add ">
                  <button
                    onClick={handleToggle}
                    title="Add Task"
                    className="p-3 border rounded-full text-xl bg-blue-600 hover:bg-blue-700 text-white absolute right-20 bottom-20"
                  >
                    <FaPlus />
                  </button>

                  {toggle && <Modal />}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
