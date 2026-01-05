import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link} from 'react-scroll'

const settings = {
    dots: false,
    arrows: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    fade: true
};

const Hero2 = () => {
    const roles = ["Robotics & AI", "Machine Learning", "IoT & Embedded"];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];

        const handleTyping = () => {
            if (!isDeleting) {
                // Typing forward
                if (displayText.length < currentRole.length) {
                    setDisplayText(currentRole.substring(0, displayText.length + 1));
                    setTypingSpeed(150);
                } else {
                    // Pause before deleting
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                // Deleting backward
                if (displayText.length > 0) {
                    setDisplayText(currentRole.substring(0, displayText.length - 1));
                    setTypingSpeed(100);
                } else {
                    // Move to next role
                    setIsDeleting(false);
                    setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentRoleIndex, typingSpeed, roles]);

    return (
        <section className="wpo-hero-slider hero-style-2">
            <div className="hero-container">
                <div className="hero-wrapper">
                    {/* <Slider {...settings}> */}
                        <div className="hero-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'images/updatedbg.png'})` }}>
                                <div className="container">
                                    <div className="slide-content">
                                        <div data-swiper-parallax="300" className="slide-title">
                                            <h2 className="flex">
                                               
                                                I'm Mustafa</h2>
                                        </div>
                                        <div data-swiper-parallax="300" className="slide-sub-title">
                                            <h5 className="typewriter-container">
                                                <span className="typewriter-text">{displayText}</span>
                                                <span className="cursor">|</span>
                                            </h5>
                                        </div>
                                        <div data-swiper-parallax="400" className="slide-text">
                                            <p>I work across Machine Learning, Deep Learning, and Embedded Systems to build intelligent, real-world solutions, My skills include data analysis, computer vision, & IoT-based automation systems.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="slide-btn"><Link className="theme-btn" to="contact" spy={true} smooth={true} duration={500}>Hire Me</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="hero-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'images/slider/slide-2.jpg'})` }}>
                                <div className="container">
                                    <div className="slide-content">
                                        <div data-swiper-parallax="300" className="slide-title">
                                            <h2><span>Hello,</span>
                                                I am Ronald.</h2>
                                        </div>
                                        <div data-swiper-parallax="300" className="slide-sub-title">
                                            <h5>UI/UX Designer</h5>
                                        </div>
                                        <div data-swiper-parallax="400" className="slide-text">
                                            <p>Must explain to how all this mistaken idea denouncing pleasure pain
                                                the system and expound the actua.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="slide-btn"><Link className="theme-btn" to="contact" spy={true} smooth={true} duration={500}>Hire Me</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    {/* </Slider> */}
                </div>
            </div>

            <style jsx>{`
                .typewriter-container {
                    display: inline-flex;
                    align-items: center;
                    min-height: 40px;
                }
                
                .typewriter-text {
                    color: #59C378;
                    font-weight: 600;
                }
                
                .cursor {
                    display: inline-block;
                    margin-left: 3px;
                    animation: blink 0.7s infinite;
                    color: #59C378;
                    font-weight: 300;
                }
                
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>
        </section>
    )
}

export default Hero2;