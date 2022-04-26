import React, { useEffect, useState } from 'react';
import { classNames } from '../../utils/classNames';
import './scrollbtn.css';
import { BiArrowToTop } from 'react-icons/bi';

const Scrollbtn = () => {

    const [isVisible, SetIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 150) {
            SetIsVisible(true);
        } else {
            SetIsVisible(false);
        }
    };



    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => [
            window.removeEventListener('scroll', toggleVisibility)
        ]
    }, []);

    return (
        // <div className='scrollbox'>
        //     <button className='scrollbtn' onClick={() => {
        //         window.scroll({ top: 100, behavior: 'smooth' })
        //     }}> <BiArrowToTop size={25} /></button>
        // </div>

        <div className='scrollbox'>
            <button type='button' id='scrollbtn' onClick={scrollToTop} className={classNames(
                isVisible ? 'visible' : 'invisible'
            )}> <BiArrowToTop size={25} /></button>
        </div>

    )
}

export default Scrollbtn