import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { useDarkMode } from "usehooks-ts";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    <Router>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
