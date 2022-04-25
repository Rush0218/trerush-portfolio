import React from 'react';
import './experience.css';

import { ImHtmlFive2 } from 'react-icons/im';
import { DiCss3Full } from 'react-icons/di';
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiHandlebarsdotjs, SiTypescript } from 'react-icons/si';
import { FaBootstrap } from 'react-icons/fa';
import { GrNode, GrReactjs, GrMysql } from 'react-icons/gr';




import { BsShieldFillCheck } from 'react-icons/bs';

const Experience = () => {
    return (
        <section id='Experience'>
            <h4>Skills</h4>
            <h2>Experience</h2>

            <div className='experience-container'>
                <div className='frontend'>
                    <h4>Front-End</h4>
                    <div className='exp-content'>
                        <article className='exp-details'>
                            <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank'><ImHtmlFive2 size={30} className='exp-icon html-icon' /></a>
                            <div className='textbox'>
                                <h5>HTML</h5>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank'><DiCss3Full size={30} className='exp-icon css-icon' /></a>
                            <div className='textbox'>
                                <h5>CSS</h5>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <a href='https://www.javascript.com/' target='_blank'><SiJavascript size={30} className='exp-icon js-icon' /></a>
                            <div className='textbox'>
                                <h5>JavaScript</h5>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <a href='https://www.typescriptlang.org/' target='_blank'><SiTypescript size={30} className='exp-icon ts-icon' /></a>
                            <div className='textbox'>
                                <h5>TypeScript</h5>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <a href='https://getbootstrap.com/' target='_blank'><FaBootstrap size={30} className='exp-icon bs-icon' /></a>
                            <div className='textbox'>
                                <h5>Bootstrap</h5>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <a href='https://tailwindcss.com/' target='_blank'><SiTailwindcss size={30} className='exp-icon tw-icon' /></a>
                            <div className='textbox'>
                                <h5>Tailwind</h5>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <a href='https://reactjs.org/' target='_blank'><GrReactjs size={30} className='exp-icon react-icon' /></a>
                            <div className='textbox'>
                                <h5>React.js</h5>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className='backend'>
                    <h4>Back-End</h4>
                    <div className='exp-content'>
                        <article className='exp-details'>
                            <a href='https://nodejs.org/en/' target='_blank'><GrNode size={30} className='exp-icon node-icon' /></a>
                            <div className='textbox'>
                                <h5>Node.js</h5>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <a href='https://www.mongodb.com/' target='_blank'><SiMongodb size={30} className='exp-icon mdb-icon' /></a>
                            <div className='textbox'>
                                <h5>MongoDB</h5>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <a href='https://www.mysql.com/' target='_blank'><GrMysql size={30} className='exp-icon sql-icon' /></a>
                            <div className='textbox'>
                                <h5>MySQL</h5>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <a href='https://expressjs.com/' target='_blank'><SiExpress size={30} className='exp-icon ex-icon' /></a>
                            <div className='textbox'>
                                <h5>Express.js</h5>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <a href='https://handlebarsjs.com/' target='_blank'><SiHandlebarsdotjs size={30} className='exp-icon hb-icon' /></a>
                            <div className='textbox'>
                                <h5>Handlebars.js</h5>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Experience; 