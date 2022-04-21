import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';

const Socials = () => {
    return (
        <div className='socials'>
            <a href='https://www.linkedin.com/in/trerush/' target='_blank'><BsLinkedin /></a>
            <a href='https://github.com/Rush0218' target='_blank'><FaGithub /></a>
            <a href='https://dribbble.com' target='_blank'><FiDribbble /></a>
        </div>
    )
};

export default Socials; 