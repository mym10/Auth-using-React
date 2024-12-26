import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginCard from "./LoginCard";
import SignupCard from "./SignupCard";
import SecretPage from "./SecretPage";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthPage = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={
              <>
                <h1>{isLogin ? "Login" : "Sign Up"}</h1>
                {isLogin ? (
                  <LoginCard toggleAuthPage={toggleAuthPage} />
                ) : (
                  <SignupCard toggleAuthPage={toggleAuthPage} />
                )}
              </>
            }
          />
          <Route path="/secret" element={<SecretPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;