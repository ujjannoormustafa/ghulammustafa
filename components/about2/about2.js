// import React, { useState, useEffect, useRef } from 'react'

// const About2 = (props) => {
//     const [isVisible, setIsVisible] = useState(false);
//     const [counts, setCounts] = useState({
//         react: 0,
//         next: 0,
//         node: 0,
//         express: 0,
//         sql: 0,
//         mongo: 0
//     });
    
//     const sectionRef = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver((entries) => {
//             if (entries[0].isIntersecting && !isVisible) {
//                 setIsVisible(true);
//                 startCounting();
//             }
//         }, { threshold: 0.1 });

//         if (sectionRef.current) {
//             observer.observe(sectionRef.current);
//         }

//         return () => {
//             if (sectionRef.current) {
//                 observer.unobserve(sectionRef.current);
//             }
//         };
//     }, [isVisible]);

//     const startCounting = () => {
//         const duration = 2000; // 2 seconds
//         const steps = 50;
//         const interval = duration / steps;

//         const targetValues = {
//             react: 95,
//             next: 90,
//             node: 85,
//             express: 88,
//             sql: 82,
//             mongo: 78
//         };

//         let step = 0;

//         const timer = setInterval(() => {
//             step++;
//             setCounts(prevCounts => ({
//                 react: Math.min(Math.round((step / steps) * targetValues.react), targetValues.react),
//                 next: Math.min(Math.round((step / steps) * targetValues.next), targetValues.next),
//                 node: Math.min(Math.round((step / steps) * targetValues.node), targetValues.node),
//                 express: Math.min(Math.round((step / steps) * targetValues.express), targetValues.express),
//                 sql: Math.min(Math.round((step / steps) * targetValues.sql), targetValues.sql),
//                 mongo: Math.min(Math.round((step / steps) * targetValues.mongo), targetValues.mongo)
//             }));

//             if (step >= steps) {
//                 clearInterval(timer);
//             }
//         }, interval);
//     };

//     const rotationStyle = {
//         animation: 'spin 20s linear infinite',
//         transition: 'transform 3s ease-in-out',
//     };


//     return (
//         <div className={`wpo-about-area-s2 section-padding ${props.aClass}`} id='about'>
//             <div className="container">
//                 <div className="row align-items-center">
//                     <div className="col-lg-5 col-md-12 col-sm-12">
//                         <div className="wpo-about-img">
//                             <img src={props.about} alt="" />
//                             <div className="icon-1 animate-spin floating-item"><img src="images/icon/nextjs-fill-svgrepo-com.svg"  alt="" /></div>
//                             {/* <div className="icon-2 floating-item"><img src="images/icon/react-svgrepo-com.svg" alt=""  style={rotationStyle} /></div> */}
//                             <div className="icon-3 floating-item"><img src="images/icon/nodejs-1-logo-svgrepo-com.svg" alt="" /></div>
//                             {/* <div className="project floating-item">
//                                 <div className="icon">
//                                     <i className="fi flaticon-verified "></i>
//                                 </div>
//                                 <div className="p-text">
//                                     <h3><span data-count="50">50</span>+</h3>
//                                     <p>Completed Projects</p>
//                                 </div>
//                             </div> */}
//                         </div>
//                     </div>
//                     <div className="col-lg-6 offset-lg-1 col-md-12 col-sm-12">
//                         <div className="wpo-about-content">
//                             <div className="wpo-about-title">
//                                 <h2>My Expertise</h2>
//                                 <p>As a passionate Fullstack Developer, I specialize in creating seamless, responsive web applications with modern technologies. I bridge the gap between frontend aesthetics and backend functionality to deliver comprehensive solutions that exceed client expectations.</p>
//                             </div>
//                              <div className="wpo-about-funfact" ref={sectionRef}>
//                                 <div className="grid">
//                                     <div className="grid-inner">
//                                         <h3><span>{counts.react}</span>%</h3>
//                                         <p>ReactJS</p>
//                                     </div>
//                                 </div>
//                                 <div className="grid">
//                                     <div className="grid-inner">
//                                         <h3><span>{counts.next}</span>%</h3>
//                                         <p>NextJS</p>
//                                     </div>
//                                 </div>
//                                 <div className="grid">
//                                     <div className="grid-inner">
//                                         <h3><span>{counts.node}</span>%</h3>
//                                         <p>Nodejs</p>
//                                     </div>
//                                 </div>
//                                 <div className="grid">
//                                     <div className="grid-inner">
//                                         <h3><span>{counts.express}</span>%</h3>
//                                         <p>Express js</p>
//                                     </div>
//                                 </div>
//                                 <div className="grid">
//                                     <div className="grid-inner">
//                                         <h3><span>{counts.sql}</span>%</h3>
//                                         <p>SQL</p>
//                                     </div>
//                                 </div>
//                                 <div className="grid">
//                                     <div className="grid-inner">
//                                         <h3><span>{counts.mongo}</span>%</h3>
//                                         <p>MongoDB</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* <div className="ab-shape">
//                 <svg width="995" height="1495" viewBox="0 0 995 1495" fill="none">
//                     <g opacity="0.3" filter="url(#filter0_f_39_4267)">
//                         <circle cx="247.5" cy="747.5" r="247.5" fill="#0A84FF" />
//                     </g>
//                     <defs>
//                         <filter id="filter0_f_39_4267" x="-500" y="0" width="1495" height="1495"
//                             filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
//                             <feFlood floodOpacity="0" result="BackgroundImageFix" />
//                             <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
//                             <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4267" />
//                         </filter>
//                     </defs>
//                 </svg>
//             </div> */}
//             {/* <div className="ab-shape-s2">
//                 <svg width="1252" height="1901" viewBox="0 0 1252 1901" fill="none">
//                     <g opacity="0.15" filter="url(#filter0_f_39_4265)">
//                         <circle cx="950" cy="950.004" r="450" />
//                     </g>
//                     <defs>
//                         <filter id="filter0_f_39_4265" x="-0.00012207" y="0.00402832" width="1900" height="1900"
//                             filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
//                             <feFlood floodOpacity="0" result="BackgroundImageFix" />
//                             <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
//                             <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4265" />
//                         </filter>
//                     </defs>
//                 </svg>
//             </div> */}
//             <div className="line-shape-1">
//                 <img src="images/about/shape1.png" alt="" />
//             </div>
//             <div className="line-shape-2">
//                 <img src="images/about/shape1.png" alt="" />
//             </div>
//         </div>
//     )
// }

// export default About2;


import React from 'react'

const About2 = (props) => {
    const rotationStyle = {
        animation: 'spin 20s linear infinite',
        transition: 'transform 3s ease-in-out',
    };

    // Static skill values (no animation)
    const skills = {
        ml: 98,
        deepLearning: 90,
        embedded: 95,
        dataAnalysis: 92
    };

    return (
        <>
            <style jsx>{`
                .skills-progress-section {
                    margin-top: 35px;
                }

                .skill-item {
                    margin-bottom: 30px;
                }

                .skill-info {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 10px;
                }

                .ts-progress-title {
                    font-size: 17px;
                    font-weight: 600;
                    color: #fff;
                    margin: 0;
                    letter-spacing: 0.5px;
                }

                .ts-progress-value {
                    font-size: 14px;
                    font-weight: 700;
                    color: #0A84FF;
                    background: rgba(10, 132, 255, 0.1);
                    padding: 3px 12px;
                    border-radius: 6px;
                    border: 1px solid rgba(10, 132, 255, 0.3);
                }

                .progress {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                    height: 7px;
                    overflow: visible;
                    position: relative;
                    width: 100%;
                    margin: 0;
                }

                .progress-bar {
                    height: 100%;
                    background: linear-gradient(90deg, #0A84FF 0%, #59C378 100%);
                    border-radius: 10px;
                    position: relative;
                    box-shadow: 0 0 15px rgba(10, 132, 255, 0.2);
                    transition: width 2s ease-in-out;
                }

                .progress-bar::after {
                    content: '';
                    position: absolute;
                    right: -6px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 14px;
                    height: 14px;
                    background: #fff;
                    border: 3px solid #0A84FF;
                    border-radius: 50%;
                    box-shadow: 0 0 10px rgba(10, 132, 255, 0.6);
                    z-index: 2;
                }

                @media (max-width: 767px) {
                    .ts-progress-title {
                        font-size: 15px;
                    }
                    .skill-item {
                        margin-bottom: 25px;
                    }
                }
            `}</style>
        <div className={`wpo-about-area-s2 section-padding ${props.aClass}`} id='about'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <div className="wpo-about-img">
                            <img src={"images/aboutM.jpg"}  style={{borderRadius: '10px'}} alt="" />
                            {/* <div className="icon-1 animate-spin floating-item">
                                <img src="images/icon/nextjs-fill-svgrepo-com.svg" alt="" />
                            </div> */}
                            {/* <div className="icon-2 floating-item">
                                <img src="images/icon/react-svgrepo-com.svg" alt="" style={rotationStyle} />
                            </div> */}
                            {/* <div className="icon-3 floating-item">
                                <img src="images/icon/nodejs-1-logo-svgrepo-com.svg" alt="" />
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 col-md-12 col-sm-12">
                        <div className="wpo-about-content">
                            <div className="wpo-about-title">
                                <h2>About Me</h2>
                                <p>
                                I'm Ghulam Mustafa a Robotics & Artificial Intelligence undergraduate, currently studying at BBSUTSD, Pakistan. I am actively working on Machine Learning, Deep Learning, and Embedded Systems projects. My current focus is building real-world AI, IoT, and intelligent automation solutions. I aim to grow as an AI and robotics engineer through research, innovation, and hands-on work.
                                </p>
                            </div>

                            <div className="skills-progress-section">
                                <div className="skill-item">
                                    <div className="skill-info">
                                        <h5 className="ts-progress-title">Machine Learning</h5>
                                        <span className="ts-progress-value">98%</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="98" aria-valuemin="0"
                                            aria-valuemax="100" style={{width: '98%'}}></div>
                                    </div>
                                </div>
                                
                                <div className="skill-item">
                                    <div className="skill-info">
                                        <h5 className="ts-progress-title">Deep Learning & Computer Vision</h5>
                                        <span className="ts-progress-value">90%</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0"
                                            aria-valuemax="100" style={{width: '90%'}}></div>
                                    </div>
                                </div>
                                
                                <div className="skill-item">
                                    <div className="skill-info">
                                        <h5 className="ts-progress-title">Embedded Systems & IoT</h5>
                                        <span className="ts-progress-value">95%</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0"
                                            aria-valuemax="100" style={{width: '95%'}}></div>
                                    </div>
                                </div>

                                <div className="skill-item">
                                    <div className="skill-info">
                                        <h5 className="ts-progress-title">Robot Operating System</h5>
                                        <span className="ts-progress-value">82%</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="92" aria-valuemin="0"
                                            aria-valuemax="100" style={{width: '92%'}}></div>
                                    </div>
                                </div>
                                
                                <div className="skill-item">
                                    <div className="skill-info">
                                        <h5 className="ts-progress-title">Data Analysis & Visualization</h5>
                                        <span className="ts-progress-value">92%</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="92" aria-valuemin="0"
                                            aria-valuemax="100" style={{width: '92%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="line-shape-1">
                <img src="images/about/shape1.png" alt="" />
            </div>
            <div className="line-shape-2">
                <img src="images/about/shape1.png" alt="" />
            </div>
        </div>
        </>
    )
}

export default About2;
