import React, { useState } from 'react';
import CustomCard from '../components2/CustomCard';
import CustomModal from '../components2/CustomModal';
import { BsTwitter, BsFacebook, BsInstagram, BsGoogle } from "react-icons/bs";
import NewsletterModal from '../components2/NewsletterModal';

const Contact = () => {
    const [activeModal, setActiveModal] = useState(null);
    const handleModalToggle = (modalName) => {
        setActiveModal(activeModal === modalName ? null : modalName);
    };

    return (
        <div className='contact-page'>
            <div className='contact-page-content'>
                <h1 style={{paddingBottom: '5px', marginBottom: '30px'}}>Contact Us</h1>
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
                    <BsTwitter size={30}/>
                    <BsFacebook size={30}/>
                    <BsInstagram size={30}/>
                    <BsGoogle size={30}/>
                </div>
            </div>
            <p className='subscribe' onClick={() => handleModalToggle('NewsletterModal')}>Subscribe to our newsletter!</p>
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