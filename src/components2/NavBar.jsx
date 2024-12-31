import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { IoSearch, IoFilm, IoSunny, IoMoon} from "react-icons/io5";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    const body = document.body;

    if (isDarkTheme) {
      body.classList.add("dark-theme");
      body.classList.remove("light-theme");
    } else {
      body.classList.add("light-theme");
      body.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);
  return (
    <nav className={`bg-gray-800 text-white navbar ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold flex items-center title" style={{ gap: '8px' }}>
            <IoFilm size={30} className='icon'/>
              TAKETWO
            </Link>
          </div>
          <div className="hidden md:flex flex-grow justify-center items-center space-x-2">
          <IoSearch />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="bg-gray-700 text-white rounded-md py-2 px-4 w-1/2 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div className="hidden md:flex space-x-4">
          <div className="theme-toggle" onClick={toggleTheme} style={{ cursor: 'pointer' }}>
              {isDarkTheme ? <IoSunny size={24}  /> : <IoMoon size={24}  />}
          </div>
            <Link
              to="/home"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
