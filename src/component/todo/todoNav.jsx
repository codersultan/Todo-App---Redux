const TodoNav = ({ title, menuItems = [] }) => {
  return (
    <>
      <div className="mt-3">
        <h3 className="uppercase text-xs font-semibold text-slate-500 pl-2">
          {title && title}
        </h3>
        <div className="task-menu mt-3">
          <nav>
            <ul>
              {menuItems.map((item, index) => (
                <li key={index} className="mt-1">
                  <a
                    href={item.link}
                    className="flex items-center gap-4 capitalize text-sm font-semibold rounded-md text-[#5b5a5c] p-2 hover:bg-[#f1f1f1] hover:text-black"
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default TodoNav;
