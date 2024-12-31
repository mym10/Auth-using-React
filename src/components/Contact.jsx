import React, { useState, useContext } from 'react';
import CustomCard from '../components2/CustomCard';
import CustomModal from '../components2/CustomModal';
import { BsTwitter, BsFacebook, BsInstagram, BsGoogle } from "react-icons/bs";
import NewsletterModal from '../components2/NewsletterModal';
import { ThemeContext } from '../components2/ThemeContext';

const Contact = () => {
    const [activeModal, setActiveModal] = useState(null);
    const handleModalToggle = (modalName) => {
        setActiveModal(activeModal === modalName ? null : modalName);
    };

    const { theme } = useContext(ThemeContext); 

    return (
        <div className='contact-page'  style={{color: theme === 'light' ? '#000' : '#fff'}}>
            <div className='contact-page-content' style={{
                    backgroundColor: theme === 'light' ? 'rgba(255, 255, 255, 0.61)' : 'rgba(0, 0, 0, 0.5)',
                    color: theme === 'light' ? '#000' : '#fff',
                }}>
                <h1 style={{paddingBottom: '5px', marginBottom: '30px', color: theme === 'light' ? '#000' : '#fff'}}>Contact Us</h1>
                <CustomCard
                    title="Get in touch"
                    description=""
                    actionText="Send"
                    onAction={() => handleModalToggle('CustomModal')}
                />
                {activeModal === 'CustomModal' && (
                    <CustomModal
                        open={true}
                        onClose={() => handleModalToggle('CustomModal')}
                        title="Thanks for talking to us!"
                    >
                        <p>You'll receive a reply soon.</p>
                    </CustomModal>
                )}
                <div className='contact-icons'>
                    <BsTwitter size={30} style={{ color: theme === 'light' ? 'black' : '#fff' }}/>
                    <BsFacebook size={30} style={{ color: theme === 'light' ? 'black' : '#fff' }} />
                    <BsInstagram size={30} style={{ color: theme === 'light' ? 'black' : '#fff' }}/>
                    <BsGoogle size={30} style={{ color: theme === 'light' ? 'black' : '#fff' }}/>
                </div>
            </div>
            <p className='subscribe' onClick={() => handleModalToggle('NewsletterModal')} style={{
                    backgroundColor: theme === 'light' ? 'rgba(255, 255, 255, 0.29)' : 'rgba(1, 1, 3, 0.8)',
                    color: theme === 'light' ? '#000' : '#fff',
                }}>Subscribe to our newsletter!</p>
            {activeModal === 'NewsletterModal' && (
                <NewsletterModal
                open = {true}
                onClose={() => handleModalToggle('NewsletterModal')}
                ></NewsletterModal>
            )}
        </div>
    );
};

export default Contact;