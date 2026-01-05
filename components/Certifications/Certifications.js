import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Certifications = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '20px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const certs = [
        // { img: "/images/images/img20251116_09101415.jpg" },
        { img: "/images/images/img20251121_18172847.jpg" },
        { img: "/images/images/img20251121_18175239.jpg" },
        { img: "/images/images/WhatsApp Image 2025-12-29 at 4.06.10 PM (1).jpeg" },
        { img: "/images/images/WhatsApp Image 2025-12-29 at 4.06.10 PM.jpeg" },
        { img: "/images/images/WhatsApp Image 2025-12-29 at 4.06.11 PM.jpeg" },
        { img: "/images/images/WhatsApp Image 2025-12-29 at 4.03.43 PM.jpeg" },
        { img: "/images/images/WhatsApp Image 2025-12-29 at 4.03.44 PM.jpeg" },
    ];

    return (
        <section className="wpo-certifications-section section-padding" id="certifications" style={{ background: '#191919' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="wpo-section-title text-center">
                            <h2 style={{ color: '#fff', fontSize: '45px', marginBottom: '40px' }}>Certifications </h2>
                        </div>
                    </div>
                </div>
                <div className="certs-slider">
                    <Slider {...settings}>
                        {certs.map((cert, index) => (
                            <div key={index} className="cert-item" onClick={() => setSelectedImg(cert.img)}>
                                <div className="cert-card-wrapper">
                                    <div className="cert-card">
                                        <img 
                                            src={cert.img} 
                                            alt={`Certification ${index + 1}`} 
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {selectedImg && (
                <div className="cert-modal-overlay" onClick={() => setSelectedImg(null)}>
                    <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setSelectedImg(null)}>&times;</button>
                        <img src={selectedImg} alt="Certification Big" />
                    </div>
                </div>
            )}

            <style jsx>{`
                .cert-modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    backdrop-filter: blur(8px);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 9999;
                    cursor: pointer;
                    animation: fadeIn 0.3s ease;
                }
                .cert-modal-content {
                    position: relative;
                    max-width: 90%;
                    max-height: 90vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: default;
                    animation: zoomIn 0.3s ease;
                }
                .cert-modal-content img {
                    max-width: 100%;
                    max-height: 90vh;
                    border-radius: 12px;
                    border: 2px solid #0A84FF;
                    box-shadow: 0 0 30px rgba(10, 132, 255, 0.3);
                }
                .close-btn {
                    position: absolute;
                    top: -40px;
                    right: -40px;
                    background: none;
                    border: none;
                    color: #fff;
                    font-size: 40px;
                    cursor: pointer;
                    transition: color 0.3s ease;
                }
                .close-btn:hover {
                    color: #0A84FF;
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes zoomIn {
                    from { transform: scale(0.8); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                @media (max-width: 767px) {
                    .close-btn {
                        top: -50px;
                        right: 0;
                    }
                }
                .wpo-certifications-section {
                    padding-bottom: 90px;
                }
                .cert-item {
                    outline: none;
                    padding: 15px;
                }
                .cert-card-wrapper {
                    background: #222121;
                    padding: 20px;
                    border-radius: 12px;
                    border: 2px solid rgba(10, 132, 255, 0.1);
                    transition: all 0.3s ease;
                }
                .cert-card {
                    height: 250px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }
                .cert-card img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                    border-radius: 4px;
                    transition: all 0.3s ease;
                }
                .cert-card-wrapper:hover {
                    border-color: #0A84FF;
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(10, 132, 255, 0.2);
                }
                .cert-card-wrapper:hover img {
                    transform: scale(1.05);
                }
                :global(.slick-dots li button:before) {
                    color: #fff !important;
                }
                :global(.slick-dots li.slick-active button:before) {
                    color: #0A84FF !important;
                }
                @media (max-width: 767px) {
                    .cert-card {
                        height: 200px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Certifications;

