import React, { useState } from 'react';
import logo from '../../assets/filledtrlogo.png';
import './nav.css';
import { classNames } from '../../utils/classNames';

// import icons from react icons
import { BiHomeAlt } from 'react-icons/bi';
import { BiUser } from 'react-icons/bi';
import { IoIosGitNetwork } from 'react-icons/io';
import { FaRegFolderOpen } from 'react-icons/fa';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { IoIosMenu, IoMdClose } from 'react-icons/io';


const Nav = (props) => {

    const [visibility, setVisibility] = useState(false);


    const {
        setContactSelected,
        setHeaderSelected,
        setAboutSelected,
        setPortfolioSelected,
        setExperienceSelected
    } = props;

    const sections = [
        { name: 'Home', img: <BiHomeAlt /> },
        { name: 'About', img: <BiUser /> },
        { name: 'Experience', img: <FaRegFolderOpen /> },
        { name: 'Portfolio', img: <IoIosGitNetwork /> },
        { name: 'Contact', img: <BiMessageSquareDetail /> }
    ]

    const [currentSection, setCurrentSection] = useState(sections[0]);

    const sectionSelected = (name) => {
        if (name === 'Home') {
            setHeaderSelected(true)
            setAboutSelected(false)
            setExperienceSelected(false)
            setPortfolioSelected(false)
            setContactSelected(false)
        }
        else if (name === 'About') {
            setHeaderSelected(false)
            setAboutSelected(true)
            setExperienceSelected(false)
            setPortfolioSelected(false)
            setContactSelected(false)
        }
        else if (name === 'Experience') {
            setHeaderSelected(false)
            setAboutSelected(false)
            setExperienceSelected(true)
            setPortfolioSelected(false)
            setContactSelected(false)
        } else if (name === 'Portfolio') {
            setHeaderSelected(false)
            setAboutSelected(false)
            setExperienceSelected(false)
            setPortfolioSelected(true)
            setContactSelected(false)
        } else if (name === 'Contact') {
            setHeaderSelected(false)
            setAboutSelected(false)
            setExperienceSelected(false)
            setPortfolioSelected(false)
            setContactSelected(true)
        }
    }

    return (
        <nav className='navbar'>
            <div className='navlogo'>
                {/* <img src={logo}></img> */}
                <a href='#Home' onClick={() => { sectionSelected('Home') }}>.tr</a>
            </div>
            <div className='menubtndiv'>
                <button type='button' id='menubtn' onClick={() => setVisibility(!visibility)} >{visibility ? (<IoIosMenu size={25} />) : (<IoMdClose size={25} />)}</button>
            </div>

            <div id='navitems' className={classNames(
                !visibility ? 'drop' : 'close'
            )}>
                {sections.map((section) => (
                    <a id='nava' key={section.name} href={`#${section.name}`} onClick={() => {
                        sectionSelected(section.name)
                        setCurrentSection(section)
                        window.scroll(0, 0)
                        setVisibility(!visibility)
                    }} className={currentSection.name === section.name ? 'active' : ''}>
                        {section.name}
                    </a>
                ))}
            </div>

        </nav>
    )
};

export default Nav;
