import { useState } from "react";

const useDark = () => {
  //state
  const [isDark, setIsDark] = useState(false);

  // Dark mode toggle
  const handleDark = () => {
    setIsDark(!isDark);
  };

  return { isDark, handleDark };
};

export default useDark;
