import { useState } from "react";

const useInput = (data) => {
  // state
  const [input, setInput] = useState(data);

  // Input change
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return { input, setInput, handleInputChange };
};

export default useInput;
