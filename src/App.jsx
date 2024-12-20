import { useDispatch } from "react-redux";
import "./App.css";
import Todo from "./component/todo/Todo";
import { useEffect } from "react";
import { loadAllTodos } from "./app/features/todo/todoSlice";

function App() {
  // Load Data
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllTodos());
  }, [dispatch]);

  return (
    <>
      <Todo />
    </>
  );
}

export default App;
