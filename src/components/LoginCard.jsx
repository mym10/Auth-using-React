import React from "react";

function LoginCard({toggleAuthPage}) {
    return (
        <div className="card">
            <div className="form">
                <p>Do not have an account? <span className="toggle-link" onClick={toggleAuthPage}>Sign Up here.</span></p>
                <input type="text" placeholder="Username" className="input"/>
                <input type="password" placeholder="Password" className="input"/>
                <a href="#" className="link">Forgot Password?</a>
                <button className="button">LOGIN</button>
            </div>
        </div>
    );
}

export default LoginCard;