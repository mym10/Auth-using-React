import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../components2/ThemeContext';

const About = () => {
    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);

    const onAction = () => {
        navigate("/home");
    };

    const dynamicStyles = {
        backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.61)',
        color: theme === 'dark' ? 'white' : 'black',
        boxShadow: theme === 'dark' ? '0 4px 10px rgba(0, 0, 0, 0.2)' : '0 4px 10px rgba(200, 200, 200, 0.5)',
    };

    const buttonStyles = {
        backgroundColor: theme === 'dark' ? '#333' : '#fff',
        color: theme === 'dark' ? '#fff' : '#333',
        border: theme === 'dark' ? '1px solid white' : '1px solid black',
    };

    return (
        <div className='about-page'>
            <div className='about-page-content' style={dynamicStyles}>
                <div className='about-header'>
                    <h2>About Us</h2>
                    <p style={{color: theme === 'dark' ? 'white' : 'black',}}>
                        Welcome to TakeTwo, your ultimate destination for discovering and enjoying movies! We are a passionate team of movie lovers dedicated to bringing you a seamless and personalized experience.
                    </p>
                </div>
                <div className='about-footer'>
                    <p style={{color: theme === 'dark' ? 'white' : 'black',}}> Join us in celebrating the magic of cinema—one movie at a time!</p>
                    <button
                        className='button'
                        onClick={onAction}
                        style={{ ...buttonStyles, width: '200px', marginTop: '10px' }}
                    >
                        Watch Now!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
