import { useEffect, useRef, useState } from "react";

const useToggle = () => {
  const [toggle, setToggle] = useState(false);
  const toggleRef = useRef();

  // toggle feature
  const handleToggle = () => {
    setToggle(!toggle);
  };

  // Out site click close
  const handelOutsiteClose = (e) => {
    if (
      (toggleRef.current && !toggleRef.current.contains(e.target)) ||
      e.target.classList.contains("toggle-close")
    ) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handelOutsiteClose);

    return () => {
      document.removeEventListener("click", handelOutsiteClose);
    };
  }, []);

  return { toggle, setToggle, toggleRef, handleToggle };
};

export default useToggle;
