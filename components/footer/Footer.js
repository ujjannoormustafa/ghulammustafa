import React from 'react'
import { Link} from 'react-scroll'
import CtaSection from '../ctaSection/ctaSection'


const SubmitHandler = (e) => {
    e.preventDefault()
}

const Footer = (props) => {
    return (
        <footer className="wpo-site-footer">
            {/* <CtaSection/> */}
            <div className="upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title ">
                                    <Link className="site-logo" to="/">
                                    <img src="images/signature.png" width={200}   alt="Ghulam Mustafa" />
                                    
                                    </Link>
                                </div>
                                <p>Passionate about creating seamless user experiences and robust backend solutions. Transforming ideas into functional and elegant web applications.</p>
                                <div className="social-icons">
                                    <ul>
                                        <li><a href="https://github.com/Ghulammustafa806" target="_blank" rel="noopener noreferrer"><i className="ti-github"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/noormustafadev007/" target="_blank" rel="noopener noreferrer"><i className="ti-linkedin"></i></a></li>
                                        <li><a href="https://wa.me/923063684828" target="_blank" rel="noopener noreferrer"><i className="ti-whatsapp"></i></a></li>
                                        <li><a href="mailto:ghmustafasoomro828@gmail.com"><i className="ti-email"></i></a></li>
                                        {/* add kaggle icon */}
                                        <li><a href="https://www.kaggle.com/arslans111" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-kaggle bold"></i>K</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Navigation</h3>
                                </div>
                                <ul>
                                    <li><Link to="about" spy={true} smooth={true}  duration={500}>About us</Link></li>
                                    <li><a href="mailto:ghmustafasoomro828@gmail.com">Contact us</a></li>
                                    <li><Link to="portfolio" spy={true} smooth={true}  duration={500}>Projects</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="widget link-widget service-link-widget">
                                <div className="widget-title">
                                    <h3>All Services</h3>
                                </div>
                                <ul>
                                    <li><Link to="service" spy={true} smooth={true}  duration={500}>AI & ML Solutions</Link></li>
                                    <li><Link to="service" spy={true} smooth={true}  duration={500}>Computer Vision Systems</Link></li>
                                    <li><Link to="service" spy={true} smooth={true}  duration={500}>Robotics & Automation</Link></li>
                                    <li><Link to="service" spy={true} smooth={true}  duration={500}>IoT Smart Systems</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shadow-shape">
                    <svg width="1319" height="1567" viewBox="0 0 1319 1567" fill="none">
                        <g filter="url(#filter0_f_39_3833)">
                            <circle cx="803" cy="803" r="303" fill="#59C378" fillOpacity="0.5" />
                        </g>
                        <defs>
                            <filter id="filter0_f_39_3833" x="0" y="0" width="1606" height="1606"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_3832" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className="lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="separator"></div>
                        <p className="copyright">Copyright &copy; 2025 Ghulam Mustafa Made with ❤️</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;