import { createContext, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Editor from "./components/Common/editor/Editor";
import Home from "./components/home/Home";
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (theme) => {
    console.log(theme);
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
          <Navbar toggleTheme={toggleTheme} />
          <Home></Home>
          <div></div>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
