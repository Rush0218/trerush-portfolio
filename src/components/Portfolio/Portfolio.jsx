

import React from 'react';
import './portfolio.css';
//import images 
import img1 from '../../assets/sky-img.jpg';
import img2 from '../../assets/spottr-img.jpg';
import img3 from '../../assets/music-dive-img.jpg';
import img4 from '../../assets/run-buddy-img.jpg';
import img5 from '../../assets/Discourse.jpg';
import img6 from '../../assets/express-notes-img.jpg';
import img7 from '../../assets/shopping.jpg'


const Portfolio = () => {
    return (
        <section id='Portfolio'>
            <h5>Recent Work</h5>
            <h2>Portfolio</h2>
            <div className='portfolio-container'>
                <div className='portfolio-card'>
                    <div className='portfolio-content'>
                        <h3 className='card-title'>Music Dive</h3>
                        <p className='card-body'>Music application.</p>
                        <a className='portfolio-button' href='https://github.com/Rush0218/project-1' target='_blank'>Learn More</a>
                    </div>
                </div>
                <div className='portfolio-card2'>
                    <div className='portfolio-content'>
                        <h3 className='card-title'>Spottr</h3>
                        <p className='card-body'>Exercise application.</p>
                        <a className='portfolio-button' href='https://github.com/Rush0218/spottr' target='_blank'>Learn More</a>
                    </div>
                </div>
                <div className='portfolio-card3'>
                    <div className='portfolio-content'>
                        <h3 className='card-title'>FiveFires</h3>
                        <p className='card-body'>E-Commerce application.</p>
                        <a className='portfolio-button' href='https://github.com/AshtonBrugh/project-three' target='_blank'>Learn More</a>
                    </div>
                </div>
                <div className='portfolio-card4'>
                    <div className='portfolio-content'>
                        <h3 className='card-title'>Discourse</h3>
                        <p className='card-body'>Social media application.</p>
                        <a className='portfolio-button' href='https://github.com/Rush0218/discourse' target='_blank'>Learn More</a>
                    </div>
                </div>
                <div className='portfolio-card5'>
                    <div className='portfolio-content'>
                        <h3 className='card-title'>Sky</h3>
                        <p className='card-body'>Weather application.</p>
                        <a className='portfolio-button' href='https://github.com/Rush0218/sky' target='_blank'>Learn More</a>
                    </div>
                </div>
                <div className='portfolio-card6'>
                    <div className='portfolio-content'>
                        <h3 className='card-title'>Pizza Hunt</h3>
                        <p className='card-body'>Food application.</p>
                        <a className='portfolio-button' href='https://github.com/Rush0218/pizza-hunt' target='_blank'>Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Portfolio;