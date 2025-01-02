import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LoginCard from "./LoginSignupCard";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import { Link } from 'react-router-dom';
import { IoFilm } from "react-icons/io5";
import popbg from '../assets/popbg.jpg';
import popbgFlipped from '../assets/popbgFlipped.jpg'
import NavBar from '../components2/NavBar';
import ThemeProvider from '../components2/ThemeContext';
import SearchResults from "./searchResults";

const App = () => {
  //login/signup
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthPage = () => {
    setIsLogin(!isLogin);
  };

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsLogin(false); 
    } else {
      setIsLogin(true); 
    }
  }, [location.pathname]); 

  const showNavbar = location.pathname !== '/'; 

  return (
    <ThemeProvider>
      <div key={isLogin ? 'login' : 'signup'} 
      className={`${location.pathname === '/' ? 'app-container-login' : 'app-container-home'}`}
      style={{ background: location.pathname === '/'  ? isLogin
            ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${popbg})`
            : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${popbgFlipped})`
          : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        {showNavbar && <NavBar />} 
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Link to="/" className="text-5xl font-bold text-white flex items-center" style={{ gap: '10px', position: 'absolute', top: '7rem', left: '50%', transform: 'translateX(-50%)' }}>
                  <IoFilm size={50} style={{ color: 'white' }} />
                  TAKE-TWO
                </Link>
                <LoginCard isLogin={isLogin} toggleAuthPage={toggleAuthPage} />
              </>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default () => (
  <Router>
    <App />
  </Router>
);