import React, { useState } from 'react';
import Slider from "react-slick";

const testimonial = [
    {
        id: '01',
        tImg: 'images/testimonial/pic-1.jpg',
        tTitle:'Outstanding web development skills and professional service.',
        Des: "Noor created an amazing website for my business. His attention to detail and ability to understand my requirements was exceptional. The website is fast, responsive, and exactly what I envisioned. Highly recommend his services!",
        Title: 'Sardar',
        Sub: "Video Editor",
    },
    {
        id: '02',
        tImg: 'images/testimonial/pic-2.jpg',
        tTitle:'Exceeded expectations with modern design and functionality.',
        Des: "Working with Noor was a fantastic experience. He delivered my project on time and the quality was beyond my expectations. The website is user-friendly, modern, and perfectly represents my brand. Great communication throughout the process!",
        Title: 'Hunain',
        Sub: "Agency Owner",
    },
    {
        id: '03',
        tImg: 'images/testimonial/pic-3.jpg',
        tTitle:'Professional developer with excellent technical expertise.',
        Des: "Noor built an incredible website for me that perfectly captures my vision. His technical skills are top-notch and he was very patient in explaining the features. The final product is clean, professional, and exactly what I needed.",
        Title: 'Noor Illahi',
        Sub: "App developer",
    },
    {
        id: '04',
        tImg: 'images/testimonial/pic-4.jpg',
        tTitle:'Reliable, skilled, and delivers high-quality results.',
        Des: "I'm extremely satisfied with the website Noor developed for me. He understood my requirements perfectly and delivered a solution that not only looks great but also performs excellently. His professionalism and expertise are commendable.",
        Title: 'Nabeel',
        Sub: "Digital Marketer",
    },
    {
        id: '05',
        tImg: 'images/testimonial/pic-5.jpg',
        tTitle:'Creative solutions and excellent customer service.',
        Des: "Noor created a beautiful and functional website for my portfolio. His creativity and technical knowledge combined perfectly to deliver something amazing. The process was smooth and he was always available for questions and revisions.",
        Title: 'Namra Amir',
        Sub: "Designer",
    }
]

const Testimonial = () => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();


    return (
        <section className="wpo-testimonial-section section-padding">
            <div className="container">
                <div className="wpo-testimonial-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="testimonial-left">
                                <div className="testimonial-left-inner">
                                    <div className="slider-for">
                                        <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} dots={false} arrows={false} fade={true}>
                                            {
                                                testimonial.map((tesmnl, tsm) => (
                                                    <div className="testimonial-img" key={tsm}>
                                                        <img src={tesmnl.tImg} alt="" />
                                                    </div>
                                                ))
                                            }
                                        </Slider>
                                    </div>
                                    <div className="side-img-1"><img src='images/testimonial/pic-1.jpg' alt="" /></div>
                                    <div className="side-img-2"><img src='images/testimonial/pic-2.jpg' alt="" /></div>
                                    <div className="side-img-3"><img src='images/testimonial/pic-3.jpg' alt="" /></div>
                                    <div className="side-img-4"><img src='images/testimonial/pic-4.jpg' alt=""  /></div>
                                    <div className="side-img-5"><img src='images/testimonial/pic-5.jpg' alt="" /></div>
                                    <div className="border-s1"></div>
                                    <div className="border-s2"></div>
                                    <div className="border-s3"></div>
                                </div>
                                <div className="shape-t">
                                    <svg width="750" height="750" viewBox="0 0 750 750" fill="none">
                                        <g filter="url(#filter0_f_39_4154)">
                                            <circle r="125" transform="matrix(-1 0 0 1 375 375)" fillOpacity="0.4" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_f_39_4154" x="0" y="0" width="750" height="750"
                                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                                    result="shape" />
                                                <feGaussianBlur stdDeviation="125"
                                                    result="effect1_foregroundBlur_39_4154" />
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="wpo-testimonial-items">
                                <div className="slider-nav">
                                    <Slider
                                        asNavFor={nav1}
                                        ref={(slider2) => setNav2(slider2)}
                                        slidesToShow={1}
                                        dots={true}
                                        swipeToSlide={true}
                                        focusOnSelect={true}
                                    >
                                        {
                                            testimonial.map((tesmnl, tsm) => (
                                                <div className="wpo-testimonial-item" key={tsm}>
                                                    <div className="wpo-testimonial-text">
                                                        <h4>{tesmnl.tTitle}</h4>
                                                        <p>{tesmnl.Des}</p>
                                                        <div className="wpo-testimonial-text-btm">
                                                            <h3>{tesmnl.Title}, <span>{tesmnl.Sub}</span></h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </Slider>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <div className="left-shape"></div> */}
            <div className="right-shape"><img src="images/testimonial/shape.png" alt="" /></div>
        </section>
    );
}

export default Testimonial;