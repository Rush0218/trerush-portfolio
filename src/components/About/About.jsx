import React, { useState, useEffect } from 'react';
import './about.css';
// import Img from '../../assets/DSC07374.jpg';
import Img from '../../assets/F-shoot.jpg';
import { classNames } from '../../utils/classNames';

// import icons 
import { MdWorkOutline } from 'react-icons/md';
import { BsClipboardData } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';


const About = () => {


    const [isAboutVisible, SetAboutVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 200) {
            SetAboutVisible(true);
        } else {
            SetAboutVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => [
            window.removeEventListener('scroll', toggleVisibility)
        ]
    }, []);


    return (
        <section id='About'>

            <div className='about-container'>
                <div className={classNames(isAboutVisible ? 'about-img-appear about-img-box' : 'about-img-disappear about-img-box')}>
                    <img className='about-img' src={Img} alt='about me image' />
                </div>
                <div className={classNames(isAboutVisible ? 'about-content-appear about-content' : 'about-content-disappear about-content')}>
                    <div>
                        <h1>About</h1>
                        <p>
                            Entry-level Fullstack Developer with a background in commercial facility management. Proficient in HTML, CSS, JavaScript and React.js.
                            Dedicated to learning additional technologies and coding languages. Interested in mobile-ready design and responsive single-page applications.
                        </p>
                    </div>
                    <div className='about-cards'>
                        <article className='about-card'>

                            <MdWorkOutline className='about-icon' />
                            <h5>Experience</h5>
                            <small>1+ Years</small>
                        </article>
                        <article className='about-card'>

                            <BsClipboardData className='about-icon' />
                            <h5>Projects</h5>
                            <small>20+ Completed</small>
                        </article>
                        <article className='about-card'>

                            <FiUsers className='about-icon' />
                            <h5>Clients</h5>
                            <small>2 Clients</small>
                        </article>
                    </div>

                </div>
            </div>
        </section>
    )
};

export default About;

// const About = () => {
//     return (
//         <section id='About'>
//             <h5>Get To Know</h5>
//             <h2>About Me</h2>

//             <div className='about-container'>
//                 <div className='about-me'>
//                     <div className='about-img'>
//                         <img src={Img} alt='about me image' />
//                     </div>
//                 </div>
//                 <div className='about-content'>
//                     <div className='about-cards'>
//                         <article className='about-card'>
//                             <img src={vector1} className='vectorimg'></img>
//                             <h5>Experience</h5>
//                             <small>1+ Years</small>
//                         </article>
//                         <article className='about-card'>
//                             <img src={vector3} className='vectorimg'></img>
//                             <h5>Projects</h5>
//                             <small>20+ Completed</small>
//                         </article>
//                         <article className='about-card'>
//                             <img src={vector2} className='vectorimg'></img>
//                             <h5>Clients</h5>
//                             <small>2 Clients</small>
//                         </article>
//                     </div>
//                     <p>
//                         Entry-level Fullstack Developer with a background in commercial facility management. Proficient in HTML, CSS, JavaScript and React.js.
//                         Dedicated to learning additional technologies and coding languages. Interested in mobile-ready design and responsive single-page applications.
//                     </p>
//                 </div>
//             </div>
//         </section>
//     )
// };

// export default About;