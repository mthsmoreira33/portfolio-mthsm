import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { useDarkMode } from "usehooks-ts";
import { useEffect } from "react";

function App() {
  const { isDarkMode, toggle } = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggle} />
      <Home isDarkMode={isDarkMode} />
    </>
  );
}

export default App;
