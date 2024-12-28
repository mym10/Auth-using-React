import React, { useState } from 'react';
import CustomCard from '../components2/CustomCard';
import CustomModal from '../components2/CustomModal';
import { BsTwitter, BsFacebook, BsInstagram, BsGoogle } from "react-icons/bs";

const Contact = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleModalToggle = () => setModalOpen(!modalOpen);

    return (
        <div className='contact-page'>
            <div className='contact-page-content'>
                <h1 style={{paddingBottom: '5px', marginBottom: '30px'}}>Contact Us</h1>
                <CustomCard
                    title="Get in touch"
                    description=""
                    actionText="Send"
                    onAction={handleModalToggle}
                />
                <CustomModal
                    open={modalOpen}
                    onClose={handleModalToggle}
                    title="Thanks for talking to us!"
                >
                    <p>You'll receive a reply soon.</p>
                </CustomModal>
                <div className='contact-icons'>
                    <BsTwitter size={30}/>
                    <BsFacebook size={30}/>
                    <BsInstagram size={30}/>
                    <BsGoogle size={30}/>
                </div>
            </div>
        </div>
    );
};

export default Contact;