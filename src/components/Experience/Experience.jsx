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
        <section id='experience'>
            <h5>Skills</h5>
            <h2>My Experience</h2>

            <div className='experience-container'>
                <div className='frontend'>
                    <h3>Front-end</h3>
                    <div className='exp-content'>
                        <article className='exp-details'>
                            <ImHtmlFive2 size={30} className='exp-icon html-icon' />
                            <div className='textbox'>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <DiCss3Full size={30} className='exp-icon css-icon' />
                            <div className='textbox'>
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <SiJavascript size={30} className='exp-icon js-icon' />
                            <div className='textbox'>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <SiTypescript size={30} className='exp-icon ts-icon' />
                            <div className='textbox'>
                                <h4>TypeScript</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <FaBootstrap size={30} className='exp-icon bs-icon' />
                            <div className='textbox'>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <SiTailwindcss size={30} className='exp-icon tw-icon' />
                            <div className='textbox'>
                                <h4>Tailwind</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <GrReactjs size={30} className='exp-icon react-icon' />
                            <div className='textbox'>
                                <h4>React.js</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className='backend'>
                    <h3>Back-end</h3>
                    <div className='exp-content'>
                        <article className='exp-details'>
                            <GrNode size={30} className='exp-icon node-icon' />
                            <div className='textbox'>
                                <h4>Node.js</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <SiMongodb size={30} className='exp-icon mdb-icon' />
                            <div className='textbox'>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <GrMysql size={30} className='exp-icon sql-icon' />
                            <div className='textbox'>
                                <h4>MySQL</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <SiExpress size={30} className='exp-icon ex-icon' />
                            <div className='textbox'>
                                <h4>Express.js</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='exp-details'>
                            <SiHandlebarsdotjs size={30} className='exp-icon hb-icon' />
                            <div className='textbox'>
                                <h4>Handlebars.js</h4>
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