import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTheme, setThemeGlobal } from "../../Variables/Variables";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">(getTheme());

  useEffect(() => {
    const handler = (e: Event) => {
      const newTheme = (e as CustomEvent).detail as "light" | "dark";
      setTheme(newTheme);
    };
    window.addEventListener("themeChange", handler);
    return () => window.removeEventListener("themeChange", handler);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setThemeGlobal(newTheme); // updates global and triggers event
  };
  

  return (
      <header className="bg-white dark:bg-black flex justify-center items-center sticky top-0 z-50 py-3">
        <div className="w-full flex items-center justify-between">
          <div className="font-Poppins font-bold text-3xl dark:text-white">
            <span className="text-[#135B9E] dark:text-[#92B8D6]">J</span>
            <span>Nantes</span>
          </div>

          <nav>
            <ul className="flex gap-6 md:gap-9 font-Poppins dark:text-white text-base xl:text-xl">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
              <li><Link to="/contacts">CONTACT</Link></li>
              <li><Link to="/projects">PROJECTS</Link></li>
            </ul>
          </nav>

          {/* Toggle Button */}
          <button
            id="switchKnob"
            type="button"
            onClick={toggleTheme}
            className={`rounded-full flex items-center px-1 cursor-pointer transition-all focus:outline-none  dark:focus:ring-gray-500 ${
              theme === "light" ? "bg-[#1459CC]" : "bg-gray-700"
            } w-20 h-11 `}
          >
            <div
              className={` p-1 bg-white rounded-full transition-transform ${
                theme === "light" ? "translate-x-0" : "translate-x-9 md:translate-x-9"
              } w-9 h-9`}
            >
              <img
                src={theme === "light" ? "/images/sun.png" : "/images/moon.png"}
                alt="theme icon"
              />
            </div>
          </button>
        </div>
    </header>
  );
}
