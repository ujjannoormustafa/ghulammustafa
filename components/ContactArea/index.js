import React from 'react'
import ContactForm from '../ContactFrom/ContactForm'
import SectionTitle from '../SectionTitle/SectionTitle';


const ContactArea = (props) => {
    return (
        <section className={`wpo-contact-area section-padding ${props.contactclass}`} id="contact">
            <div className="wpo-wpo-contact-form-map">
                <div className="container-fluid" style={{padding: '0 50px'}}>
                    <div className="row">
                        <SectionTitle Title={"Let's Talk"} />
                    </div>
                    <div className="" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '25px', width: '100%', flexWrap: 'no-wrap'}}>
                        <div className="info-item" style={{flex: '1 1 300px', maxWidth: '400px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px'}}>
                            <div className="info-wrap" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                                <div className="info-icon" style={{margin: '0 0 15px 0'}}>
                                    <i className="fi flaticon-location"></i>
                                </div>
                                <div className="info-text">
                                    <span>Office Address</span>
                                    <h2 style={{marginTop: '10px'}}>Karachi, Pakistan</h2>
                                </div>
                            </div>
                        </div>
                        <div className="info-item" style={{flex: '1 1 300px', maxWidth: '400px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px'}}>
                            <div className="info-wrap" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                                <div className="info-icon" style={{margin: '0 0 15px 0'}}>
                                    <i className="fi flaticon-mail"></i>
                                </div>
                                <div className="info-text">
                                    <span>Official Mail</span>
                                    <h2 style={{wordBreak: 'break-all', fontSize: '1.2rem', marginTop: '10px'}}>ghmustafasoomro828@gmail.com</h2>
                                </div>
                            </div>
                        </div>
                        <div className="info-item" style={{flex: '1 1 300px', maxWidth: '400px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px'}}>
                            <div className="info-wrap" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                                <div className="info-icon" style={{margin: '0 0 15px 0'}}>
                                    <i className="fi flaticon-phone-call"></i>
                                </div>
                                <div className="info-text">
                                    <span>Official Phone</span>
                                    <h2 style={{marginTop: '10px'}}>+92 306 3684828</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-wk">
                <svg width="1500" height="1500" viewBox="0 0 1500 1500" fill="none">
                    <g opacity="0.45" filter="url(#filter0_f_39_4214)">
                        <circle cx="750" cy="750" r="200" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4214" x="0" y="0" width="1500" height="1500"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="275" result="effect1_foregroundBlur_39_4212" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </section>
    )
}

export default ContactArea;