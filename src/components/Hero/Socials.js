import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';
import { RiMessengerLine } from 'react-icons/ri';

const Socials = () => {
    return (
        <div className='socials'>
            <a href='https://www.linkedin.com/in/trerush/' target='_blank'><BsLinkedin className='hero-icon linkedin' /></a>
            <a href='https://github.com/Rush0218' target='_blank'><FaGithub className='hero-icon github' /></a>
            <a href='https://www.instagram.com/rush.tre/' target='_blank' ><FaInstagram className='hero-icon instagram' /></a>
            <a href='https://m.me/tre.rush.5' target='_blank' ><RiMessengerLine className='hero-icon messenger' /></a>
        </div>
    )
};

export default Socials; 