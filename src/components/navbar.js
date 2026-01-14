import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(
  () => localStorage.getItem("theme") === "dark"
);

    const [menuOpen, setMenuOpen] = useState(false);

    // Update the HTML root class based on darkMode state
    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
            
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">

      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Brand Name */}
       
         <span className="font-bold text-xl text-blue-600">
          Lerato Mofokeng
        </span>

        <div className="flex gap-6 text-gray-700 dark:text-gray-200">
          <NavLink to="/" className={({isActive}) => `px-4 py-2 transition ${isActive ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-600 dark:text-gray-300 hover:text-blue-400"}`}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => `px-4 py-2 transition ${isActive ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-600 dark:text-gray-300 hover:text-blue-400"}`}>About</NavLink>
          <NavLink to="/projects" className={({isActive}) => `px-4 py-2 transition ${isActive ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-600 dark:text-gray-300 hover:text-blue-400"}`}>Projects</NavLink>
          <NavLink to="/contact" className={({isActive}) => `px-4 py-2 transition ${isActive ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-600 dark:text-gray-300 hover:text-blue-400"}`}>Contact</NavLink>
        </div>

       

        {/* Right Controls */}
        <div className="flex items-center gap-4">

            {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/*Hamburger Menu for Mobile */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>   
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700">
           <ul className="flex flex-col p-4 gap-4 text-gray-600 dark:text-gray-300 font-medium">
          <Link to="/" className="hover:text-blue-600 cursor-pointer">Home</Link>
          <Link to="/about" className="hover:text-blue-600 cursor-pointer">About</Link>
          <Link to="/projects" className="hover:text-blue-600 cursor-pointer">Projects</Link>
          <Link to="/contact" className="hover:text-blue-600 cursor-pointer">Contact</Link>
          </ul> 
        </div>
      )}
    </nav>
  );
};

export default Navbar;
