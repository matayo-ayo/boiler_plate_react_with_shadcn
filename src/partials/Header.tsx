import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getInitialTheme,
  toggleTheme,
  getLogoByTheme,
} from "../lib/themeUtils";

const Header = () => {
  const navigate = useNavigate();
  const [topNav, setTopNav] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const handleScroll = () => setTopNav(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);

    // Apply theme on mount
    document.documentElement.classList.toggle("dark", theme === "dark");

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [theme]);

  const handleThemeToggle = () => {
    toggleTheme(theme, setTheme);
  };

  return (
    <header
      className={`z-50 fixed top-0 w-full p-4 md:p-5 transition-all ${
        topNav ? "backdrop-blur-md" : ""
      }`}
    >
      <div className="max-w-screen-xl flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center space-x-3 font-bold"
        >
          <img
            src={getLogoByTheme(theme)}
            alt="Logo"
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
          <h1 className="dark:text-yellow-400 text-lg md:text-2xl font-bold">
            KiDUKA
          </h1>
        </button>

        {/* Theme Toggle */}
        <div>
          <button
            onClick={handleThemeToggle}
            className="flex items-center justify-start bg-gray-300 dark:bg-gray-800 rounded-full w-12 h-6 md:w-16 md:h-8 relative transition-all"
          >
            <span
              className={`absolute left-1 top-1 w-4 h-4 md:w-6 md:h-6 bg-gray-900 dark:bg-gray-200 rounded-full transform transition-transform ${
                theme === "dark" ? "translate-x-6 md:translate-x-8" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
