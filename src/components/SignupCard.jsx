import React from "react";

function SignupCard({toggleAuthPage}) {
    return (
        <div className="card">
            <div className="form">
                <p>Already have an account? <span className="toggle-link" onClick={toggleAuthPage}>Login here.</span></p>
                <input type="text" placeholder="Username" className="input"/>
                <input type="text" placeholder="Email id" className="input"/>
                <input type="text" placeholder="Password" className="input"/>
                <button className="button">SUBMIT</button>
            </div>
        </div>
    );
}

export default SignupCard;