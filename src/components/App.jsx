import React, { useState } from "react";
import LoginCard from "./LoginCard";
import SignupCard from "./SignupCard";

function App() {
    const [isLogin, setIsLogin] = useState(true);
    const toggleAuthPage = () => {
        setIsLogin(!isLogin) ;
    }
    return (
        <div className="app-container">
            <h1>{isLogin? "Login" : "Sign Up"}</h1>
            {isLogin? (
                <LoginCard toggleAuthPage={toggleAuthPage}/>
            ):(
                <SignupCard toggleAuthPage={toggleAuthPage}/>
            )}
        </div>
    );
}

export default App;