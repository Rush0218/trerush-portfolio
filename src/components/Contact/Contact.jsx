import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

//import react icons
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { FaInstagram, FaLinkedinIn, FaGithubAlt } from 'react-icons/fa';



const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ylmbed8', 'template_zz74bq6', form.current, '2wOTNc9wYwWuRyl6z')

        e.target.reset()
    };

    return (
        <section id='contact'>
            <h5>Let's Connect</h5>
            <h2>Contact Me</h2>

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
                <form ref={form} onSubmit={sendEmail} >
                    <input type='text' name='name' placeholder='Full Name' required />
                    <input type='email' name='email' placeholder='Email' required />
                    <textarea name='message' placeholder='Message' rows='5'></textarea>
                    <button type='submit' className='btn btn-primary submitbtn'>Submit</button>
                </form>
            </div>
        </section>
    )
};

export default Contact; 