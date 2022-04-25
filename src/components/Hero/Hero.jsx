import React from 'react';
import Me from '../../assets/me(four).png'
import Resume from '../../assets/My-resume-2022.pdf';
import Socials from './Socials';
import myPic from '../../assets/Me(circle2).png'
import Nav from '../Nav/Nav';
import './hero.css';

const Header = () => {



    return (
        <header>
            <div className='header-container'>
                <div className='hero'>
                    <div className='hero-title'>
                        <p className=''>Hello, I'm</p>
                        <h1>Tre' Rush.</h1>
                        <h2 className='work-title'>Full Stack Developer</h2>

                    </div>
                    <div className='hero-socials'>
                        <Socials />
                    </div>
                </div>
                <div className='heropic-box'>
                    <img className='hero-pic' src={myPic}></img>
                </div>
            </div>
        </header>
    )
};

export default Header; 