import { useEffect, useRef, useState } from "react";

const useTodoEdit = () => {
  const [edit, setEdit] = useState(false);
  const toggleRef = useRef();

  // toggle feature
  const handleTodoEdit = () => {
    setEdit(!edit);
  };

  // Out site click close
  const handleOutsideClose = (e) => {
    if (
      toggleRef.current &&
      !toggleRef.current.contains(e.target) &&
      !e.target.classList.contains("still-toggle")
    ) {
      setEdit(false); // Close the dropdown
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClose);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClose);
    };
  }, []);

  return { edit, setEdit, handleTodoEdit, toggleRef };
};

export default useTodoEdit;
