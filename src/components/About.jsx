import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    const onAction = () => {
        navigate("/home");
    }
    return (
        <div className='about-page'>
            <div className='about-page-content'>
                <div className='about-header'>
                    <h2>About Us</h2>
                    <p>Welcome to TakeTwo, your ultimate destination for discovering and enjoying movies! We are a passionate team of movie lovers dedicated to bringing you a seamless and personalized experience.</p>
                </div>
                <div className='about-footer'>
                    <p>Join us in celebrating the magic of cinema—one movie at a time!</p>
                    <button className='button' onClick={onAction} style={{width: '200px', marginTop: '10px', border: '1px, solid, white'}}>Watch Now!</button>
                </div>
            </div>
        </div>
    );
};

export default About;
