import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import EditableAvatar from '../components2/AvatarModal';

//icons
import { IoArrowBack } from "react-icons/io5";
import { MdOutlineDevices, MdCottage, MdCoPresent } from "react-icons/md";
import { CheckCircle } from '@mui/icons-material';


const UserProfile = ({ theme, currentTheme }) => {
    const [selectedPlan, setSelectedPlan] = useState('free');
    const navigate = useNavigate();

    const handlePlanChange = (event) => {
        setSelectedPlan(event.target.value);
    };

    const handleLogout = () => {
        localStorage.removeItem('favourites');
        localStorage.removeItem('compares');
        localStorage.removeItem('avatarProps');
        navigate('/');
    };

  return (
    <div className='profile-page'>
        <div className='left-pane'>
            <div className='avatar'>
                <EditableAvatar width={200} height={200}/>
                <Link to="/home" className="text-xl flex items-center title home" style={{ gap: '10px', color: currentTheme.color }}>
                <IoArrowBack size={'25px'} className='icon'/>
                    Back to Home</Link>
            </div>
            <div className='under-avatar'>
                <Link to="#" className="text-xl flex items-center title" style={{ gap: '10px', color: currentTheme.color }}>
                <MdCottage size={'25px'} className='icon'/>
                Overview</Link>
                <Link to="#" className="text-xl flex items-center title" style={{ gap: '10px', color: currentTheme.color }}>
                <MdOutlineDevices size={'25px'} className='icon'/>
                Devices</Link>
                <Link to="#" className="text-xl flex items-center title" style={{ gap: '10px', color: currentTheme.color }}>
                <MdCoPresent size={'25px'} className='icon'/>
                Profiles</Link>
            </div> 
            <button className="login-button" onClick={handleLogout}>
                Logout
            </button>
        </div>
        <div className='right-pane'>
            <div className='user-details'>
                <h2>User Details</h2>
                <TextField
                    id="standard-read-only-input"
                    label="Username"
                    defaultValue="User1" //username
                    variant="standard"
                    slotProps={{
                        input: {
                        readOnly: true,
                        },
                    }}
                    sx={{
                        input: { color: theme === 'light' ? 'black' : 'white' },
                        '& .MuiInputLabel-root': { color: theme === 'light' ? 'black' : 'white' },
                        '& .MuiInput-underline:before': { borderBottomColor: theme === 'light' ? 'black' : 'white' },
                        '& .MuiInput-underline:hover': { borderBottomColor: theme === 'light' ? 'black' : 'white' },
                        '& .MuiInput-underline:after': { borderBottomColor: theme === 'light' ? 'black' : 'white' },
                    }}
                    />
                    <TextField
                    id="standard-read-only-input"
                    label="Email-id"
                    defaultValue="user1010@gmail.com" //email
                    variant="standard"
                    slotProps={{
                        input: {
                        readOnly: true,
                        },
                    }}
                    sx={{
                        input: { color: theme === 'light' ? 'black' : 'white' },
                        '& .MuiInputLabel-root': { color: theme === 'light' ? 'black' : 'white' },
                        '& .MuiInput-underline:before': { borderBottomColor: theme === 'light' ? 'black' : 'white' },
                        '& .MuiInput-underline:hover': { borderBottomColor: theme === 'light' ? 'black' : 'white' },
                        '& .MuiInput-underline:after': { borderBottomColor: theme === 'light' ? 'black' : 'white' },
                    }}
                />
            </div>
            <div className='plan-and-others'>
                <div className='plan'>
                    <h2>Plan</h2>
                    <div className="plan-container">
                        {['free', 'premium', 'premium+'].map(plan => (
                            <div
                                key={plan}
                                className={`plan-box ${selectedPlan === plan ? 'selected' : ''}`}
                                onClick={() => handlePlanChange(plan)}
                            >
                                <h3>{plan.charAt(0).toUpperCase() + plan.slice(1)}</h3>
                                <p>{plan === 'free' ? '₹0/month' : plan === 'premium' ? '₹149/month' : '₹199/month'}</p>
                                <ul>
                                    <li>{plan === 'free' ? 'Basic features' : plan === 'premium' ? 'All features, no ads' : 'Premium features, exclusive content'}</li>
                                </ul>
                                {selectedPlan === 'free' && plan === 'free' && (
                                    <CheckCircle className="check-icon" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default UserProfile;
  
  