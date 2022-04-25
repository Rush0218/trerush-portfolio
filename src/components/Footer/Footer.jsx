import React from 'react';
import './footer.css';
//import react icons
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { FaInstagram, FaLinkedinIn, FaGithubAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>

                {/* <div className='footer-options'>
                    <article className='footer-option'>
                        <a href='https://www.linkedin.com/in/trerush/' target='_blank' ><FaLinkedinIn size={15} className='footer-icon2 f-linkedin' /></a>
                    </article>
                    <article className='footer-option'>
                        <a href='https://www.instagram.com/rush.tre/' target='_blank' ><FaInstagram size={15} className='footer-icon2 f-instagram' /></a>
                    </article>
                    <article className='footer-option'>
                        <a href='https://m.me/tre.rush.5' target='_blank' ><RiMessengerLine size={15} className='footer-icon2 f-messenger' /></a>
                    </article>
                    <article className='footer-option'>
                        <a href='https://github.com/Rush0218' target='_blank' ><FaGithubAlt size={15} className='footer-icon2 f-github' /></a>
                    </article>
                </div> */}
                <div className='footercopy'>
                    <a href='#Home' className='footer-icon'> &copy; 2022 Dev Rush</a>
                </div>


            </div>
        </footer>
    )
};

export default Footer; 