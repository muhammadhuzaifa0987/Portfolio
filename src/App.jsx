import { useState, useEffect } from "react";
import HomeHero from "./Component/HomeHero";
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="space-y-20 pt-16">
        <HomeHero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;

