// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
// import { CgWebsite, } from 'react-icons/cg';
// import { FaGithubAlt } from 'react-icons/fa';

// // imported images
// import discourse from '../../assets/Discourse.jpg';
// import musicDive from '../../assets/music-dive-img.jpg';
// import sky from '../../assets/sky-img.jpg';
// import fiveFires from '../../assets/shopping.jpg';
// import spottr from '../../assets/spottr-img.jpg';

// import './portfolio.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const images = [
//     {
//         title: 'Discourse',
//         img: discourse,
//         github: 'https://github.com/Rush0218/discourse',
//         app: 'https://discourse-rush.herokuapp.com'
//     },
//     {
//         title: 'Music Dive',
//         img: musicDive,
//         github: 'https://github.com/Rush0218/project-1',
//         app: 'https://rush0218.github.io/project-1/'
//     },
//     {
//         title: 'Five Fires',
//         img: fiveFires,
//         github: 'https://github.com/AshtonBrugh/project-three',
//         app: 'https://immense-fortress-45339.herokuapp.com/'
//     },
//     {
//         title: 'Sky',
//         img: sky,
//         github: 'https://github.com/Rush0218/sky',
//         app: 'https://rush0218.github.io/sky/'
//     },
//     {
//         title: 'Spottr',
//         img: spottr,
//         github: 'https://github.com/Rush0218/spottr',
//         app: 'https://spottr-projecttwo.herokuapp.com/'
//     }
// ];

// const Portfolio = () => {

//     const NextArrow = ({ onClick }) => {
//         return (
//             <div className='arrow next' onClick={onClick}>
//                 <BsArrowRight size={18} />
//             </div>
//         )
//     }

//     const PrevArrow = ({ onClick }) => {
//         return (
//             <div className='arrow prev' onClick={onClick}>
//                 <BsArrowLeft size={18} />
//             </div>
//         )
//     }

//     const [imageIndex, setImageIndex] = useState(0);

//     const settings = {
//         dots: true,
//         infinite: true,
//         lazyLoad: true,
//         speed: 550,
//         slidesToShow: 1,
//         centerMode: true,
//         centerPadding: 0,
//         nextArrow: <NextArrow />,
//         prevArrow: <PrevArrow />,
//         beforeChange: (current, next) => setImageIndex(next)
//     }

//     return (
//         <section id='Portfolio'>
//             <h5>Recent Work</h5>
//             <h2>Portfolio</h2>
//             <div className='slider'>
//                 <Slider {...settings}>
//                     {images.map(({ img, github, app, title }, index) => (
//                         <div className={index === imageIndex ? "slide activeSlide" : "slide"}>
//                             <div>
//                                 <h3>{title}</h3>
//                             </div>
//                             <div>
//                                 <img className='carousel-img' src={img} alt={img}></img>
//                             </div>
//                             <div className='slide-btn'>
//                                 <a href={index === imageIndex ? github : ''} target='_blank' className='ga-icon' ><FaGithubAlt className='g-icon' size={18} /></a>
//                                 <a href={index === imageIndex ? app : ''} target='blank' className='ga-icon'><CgWebsite className='a-icon' size={18} /></a>
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//             {/* <div className='portfolio-btn'>
//                 <div className='github-app'>
//                     <a className='ga-icon' ><FaGithubAlt className='g-icon' size={25} /></a>
//                     <a className='ga-icon'><CgWebsite className='a-icon' size={25} /></a>
//                 </div>
//             </div> */}
//         </section>
//     )
// }

// export default Portfolio



















































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
                        <a className='portfolio-button' href='https://github.com/Rush0218/sky' target='_blank'>Learn More</a>
                    </div>
                </div>
                {/* <article className='portfolio-item num1'>
                    <div className='portfolio-img'>
                        <img src={img3} alt='' />
                    </div>
                    <h3>Music Dive</h3>
                    <div className='portfolio-btn'>
                        <a href='https://github.com/Rush0218/project-1' className='btn' target='_blank'>Github</a>
                        <a href='https://rush0218.github.io/project-1/' className='btn btn-primary' target='_blank'>Application</a>
                    </div>
                </article> */}
                {/* <article className='portfolio-item'>
                    <div className='portfolio-img'>
                        <img src={img2} alt='' />
                    </div>
                    <h3>Spottr</h3>
                    <div className='portfolio-btn'>
                        <a href='https://github.com/Rush0218/spottr' className='btn' target='_blank'>Github</a>
                        <a href='https://spottr-projecttwo.herokuapp.com/' className='btn btn-primary' target='_blank'>Application</a>
                    </div>
                </article> */}
                {/* <article className='portfolio-item'>
                    <div className='portfolio-img'>
                        <img src={img7} alt='' />
                    </div>
                    <h3>FiveFires</h3>
                    <div className='portfolio-bt4'>
                        <a href='https://github.com/AshtonBrugh/project-three' className='btn' target='_blank'>Github</a>
                        <a href='https://immense-fortress-45339.herokuapp.com/' className='btn btn-primary' target='_blank'>Application</a>
                    </div>
                </article> */}

                {/* <article className='portfolio-item'>
                    <div className='portfolio-img'>
                        <img src={img4} alt='' />
                    </div>
                    <h3>Run Buddy</h3>
                    <div className='portfolio-btn'>
                        <a href='https://github.com/Rush0218/run-buddy' className='btn' target='_blank'>Github</a>
                        <a href='https://rush0218.github.io/run-buddy/' className='btn btn-primary' target='_blank'>Application</a>
                    </div>
                </article> */}
                {/* <article className='portfolio-item'>
                    <div className='portfolio-img'>
                        <img src={img5} alt='' />
                    </div>
                    <h3>Discourse</h3>
                    <div className='portfolio-btn'>
                        <a href='https://github.com/Rush0218/discourse' className='btn' target='_blank'>Github</a>
                        <a href='https://discourse-rush.herokuapp.com' className='btn btn-primary' target='_blank'>Application</a>
                    </div>
                </article> */}
                {/* <article className='portfolio-item'>
                    <div className='portfolio-img'>
                        <img src={img1} alt='' />
                    </div>
                    <h3>Sky</h3>
                    <div className='portfolio-btn'>
                        <a href='https://github.com/Rush0218/sky' className='btn' target='_blank'>Github</a>
                        <a href='https://rush0218.github.io/sky/' className='btn btn-primary' target='_blank'>Application</a>
                    </div>
                </article> */}
            </div>
        </section>
    )
};

export default Portfolio;