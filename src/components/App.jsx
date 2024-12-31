import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import LoginCard from "./LoginCard";
import SignupCard from "./SignupCard";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import { Link } from 'react-router-dom';
import { IoFilm } from "react-icons/io5";
import popbg from '../assets/popbg.jpg';
import NavBar from '../components2/NavBar'

const App = () => {
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
    <div className={`${location.pathname === '/' ? 'app-container-login ' : 'app-container-home'}`} style={{background: location.pathname === '/' ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${popbg})` : 'none', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {showNavbar && <NavBar />} 
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Link
                to="/"
                className="text-4xl font-bold text-white flex items-center"
                style={{ gap: '8px', marginBottom: '16px' }} 
              >
                <IoFilm size={40} style={{ color: 'white' }} />
                TAKETWO
              </Link>
              <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
              {isLogin ? (
                <LoginCard toggleAuthPage={toggleAuthPage} />
              ) : (
                <SignupCard toggleAuthPage={toggleAuthPage} />
              )}
            </>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default () => (
  <Router>
    <App />
  </Router>
);