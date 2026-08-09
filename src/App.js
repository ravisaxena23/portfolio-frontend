import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./_app.scss";
import { PortfolioProvider } from "./context/PortfolioContext";
import usePointerAura from "./hooks/usePointerAura";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Impact from "./components/impact/Impact";
import AboutMe from "./components/aboutMe/AboutMe";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Stack from "./components/stack/Stack";
import AskRavi from "./components/askRavi/AskRavi";
import Awards from "./components/awards/Awards";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export const ThemeContext = createContext(null);

export function useTheme() {
  return useContext(ThemeContext);
}

function getInitialTheme() {
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
  } catch (_) {
    /* ignore */
  }
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light";
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  usePointerAura(true);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch (_) {
      /* ignore */
    }
  }, [theme]);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={value}>
        <PortfolioProvider>
          <div className="App" id={theme} data-theme={theme}>
            <div className="pointer-field" aria-hidden="true" />
            <Navbar />
            <main>
              <Home />
              <Impact />
              <AboutMe />
              <Experience />
              <Skills />
              <Stack />
              <AskRavi />
              <Awards />
              <Contact />
            </main>
            <Footer />
          </div>
        </PortfolioProvider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
