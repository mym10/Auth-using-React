import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cred from "../cred.json";

function LoginCard({toggleAuthPage}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username === cred.username && password === cred.password) {
            toast.success("Successful login");
            setTimeout(() => navigate("/home"), 500);
        }else {
            toast.error("Login failed");
        }
    }

    return (
        <div>
            
            <div className="card">
                <div className="form">
                    <p>Do not have an account? <span className="toggle-link" onClick={toggleAuthPage}>Sign Up here.</span></p>
                    <input type="text" placeholder="Username" className="input" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <input type="password" placeholder="Password" className="input" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <a href="#" className="link">Forgot Password?</a>
                    <button className="button" onClick={handleSubmit}>LOGIN</button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
}

export default LoginCard;