import React, { useRef, useState } from 'react';
import useInput from './useInput';
import emailjs from '@emailjs/browser';
import './contact.css';

//import react icons
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { FaInstagram, FaLinkedinIn, FaGithubAlt } from 'react-icons/fa';

import { AwesomeButton } from 'react-awesome-button';
// import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss'
import "react-awesome-button/dist/themes/theme-rickiest.css";



const Contact = () => {

    const form = useRef();
    const email = useInput('');
    const name = useInput('');

    const [btnEffect, setBtnEffect] = useState(false);

    const btnSettings = {
        type: 'primary',
        size: 'medium',
        ripple: true,
        disabled: btnEffect
    }



    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ylmbed8', 'template_zz74bq6', form.current, '2wOTNc9wYwWuRyl6z')

        e.target.reset()
    };

    return (
        <section id='Contact'>
            <h2>Let's Connect</h2>


            <div className='container contact-container'>
                <div className='contact-options'>
                    <article className='contact-option'>
                        <a href='https://www.linkedin.com/in/trerush/' target='_blank' ><FaLinkedinIn size={30} className='contact-icon linkedin' /></a>
                    </article>
                    <article className='contact-option'>
                        <a href='https://www.instagram.com/rush.tre/' target='_blank' ><FaInstagram size={30} className='contact-icon instagram' /></a>
                    </article>
                    <article className='contact-option'>
                        <a href='https://m.me/tre.rush.5' target='_blank' ><RiMessengerLine size={30} className='contact-icon messenger' /></a>
                    </article>
                    <article className='contact-option'>
                        <a href='https://github.com/Rush0218' target='_blank' ><FaGithubAlt size={30} className='contact-icon github' /></a>
                    </article>
                </div>
                <div className='form-box'>
                    <form ref={form} onSubmit={sendEmail}  >
                        <input placeholder='Full Name' type='text' name='name' required />
                        <input placeholder='Email' type='email' name='email' required />
                        <textarea name='message' placeholder='Message' rows='6'></textarea>
                        <AwesomeButton {...btnSettings}>Submit</AwesomeButton>
                    </form>
                </div>

            </div>
        </section>
    )
};

export default Contact; 