import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignupCard({toggleAuthPage}) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pwdStrength, setPwdStrength] = useState("");

    const navigate = useNavigate();

    const [cred, setCred] = useState(() => {
        const savedCred = localStorage.getItem("cred");
        return savedCred ? JSON.parse(savedCred) : {
                  username: "admin",
                  password: "password123",
                  users: [],
                };
    });

    useEffect(() => {
        localStorage.setItem("cred", JSON.stringify(cred));
    }, [cred]);

    //string password regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    //check password strength
    const checkPwdStrength = (password) => {
        if (passwordRegex.test(password)) {
            setPwdStrength("Strong");
        } else if (password.length >= 8) {
            setPwdStrength("Weak - Use uppercase, lowercase, number, and special character");
        } else {
            setPwdStrength("Too short");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //checking password strength
        if (pwdStrength !== "Strong") {
            toast.warn("Please set a strong password!");
            return;
        }

        //check if the username already exists
        const existingUser = cred.users.find((user) => user.username === username);
        if (existingUser) {
            toast.warn("Username already exists!");
            return;
        }
        //add new user credentials
        const newUser = { username, email, password };
        setCred((prevState) => ({
            ...prevState,
            users: [...prevState.users, newUser], //append new user to users list
        }));
        toast.success("Account created!");
        setTimeout(() => navigate("/home"), 1000);  
    };
    
    return (
        <div className="card">
            <div className="form">
                <p>Already have an account? <span className="toggle-link" onClick={toggleAuthPage}>Login here.</span></p>
                <input type="text" placeholder="Username" className="input" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="text" placeholder="Email id" className="input" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" placeholder="Password" className="input" value={password} onChange={(e) => {setPassword(e.target.value); checkPwdStrength(e.target.value)}}/>
                <p className={`password-strength ${pwdStrength.toLowerCase()}`}>
                    {pwdStrength && `Password Strength: ${pwdStrength}`}
                </p>
                <button className="button" onClick={handleSubmit}>SUBMIT</button>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default SignupCard;