import React, { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";
import { Button } from "react-bootstrap";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <Button variant={darkMode ? "light" : "dark"} onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "☀️" : "🌙"}
    </Button>
  );
};

export default DarkModeToggle;
