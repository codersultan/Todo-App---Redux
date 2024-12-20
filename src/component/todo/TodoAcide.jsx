import { LiaProjectDiagramSolid } from "react-icons/lia";
import { GrTemplate } from "react-icons/gr";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiBook, FiHelpCircle } from "react-icons/fi";
import { IoSearch, IoSettingsOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { GoHome, GoTasklist } from "react-icons/go";
import TodoNav from "./todoNav";

const TodoAcide = () => {
  //todo menu items
  const settingItems = [
    {
      link: "setting",
      label: "Setting",
      icon: <IoSettingsOutline className="text-xl" />,
    },
    {
      link: "template",
      label: "Template",
      icon: <GrTemplate className="text-xl" />,
    },
    {
      link: "trash",
      label: "Trash",
      icon: <FaRegTrashCan className="text-xl" />,
    },
    {
      link: "projects",
      label: "Help",
      icon: <FiHelpCircle className="text-xl" />,
    },
  ];

  const generalItems = [
    {
      link: "#search",
      label: "Search",
      icon: <IoSearch className="text-xl" />,
    },
    {
      link: "#dashboard",
      label: "Dashboard",
      icon: <LuLayoutDashboard className="text-xl" />,
    },
    { link: "#home", label: "Home", icon: <GoHome className="text-xl" /> },
  ];

  const privetItems = [
    {
      link: "tasks",
      label: "Todo Task",
      icon: <GoTasklist className="text-xl" />,
    },
    {
      link: "readint-list",
      label: "Reading List",
      icon: <FiBook className="text-xl" />,
    },
    {
      link: "projects",
      label: "Projects",
      icon: <LiaProjectDiagramSolid className="text-xl" />,
    },
  ];

  return (
    <>
      <div className="todo-aside w-72 h-screen bg-gray-100/50 border-r">
        <div className="todo-menu h-full py-5 px-3 flex flex-col justify-between">
          <div className="top-nav">
            <div className="general-nav">
              <TodoNav title="General" menuItems={generalItems} />
            </div>

            <div className="task-nav mt-6">
              <TodoNav title="Privet" menuItems={privetItems} />
            </div>
          </div>

          <div className="setting-nav">
            <TodoNav title="" menuItems={settingItems} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoAcide;
