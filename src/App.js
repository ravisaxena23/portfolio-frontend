import { createContext, useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import "./_app.scss";
import Home from "./components/home/Home";
import AboutMe from "./components/aboutMe/AboutMe";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState();

  const toggleTheme = (theme) => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(()=> {
    if(localStorage.getItem("theme") !== theme && theme && localStorage.key("theme")){
      localStorage.setItem("theme",theme)
    }
  },[theme,setTheme])

  useEffect(()=> {
    if(localStorage.getItem("theme")){
      setTheme(localStorage.getItem("theme"))
    } else {
      setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    }
  },[])

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme}>
          <Navbar toggleTheme={toggleTheme} />
          <Home></Home>
          <AboutMe></AboutMe>
          <Experience></Experience>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
