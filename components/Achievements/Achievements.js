import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Achievements = () => {
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

    const achievements = [
        { img: "/images/projects/medal/WhatsApp Image 2026-01-05 at 5.18.05 AM.jpeg" },
        { img: "/images/projects/medal/WhatsApp Image 2026-01-05 at 5.18.45 AM.jpeg" },
        { img: "/images/projects/medal/WhatsApp Image 2026-01-05 at 5.18.06 AM.jpeg" },
    ];

    return (
        <section className="wpo-achievements-section section-padding" id="achievements" style={{ background: '#0f0f0f' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="wpo-section-title text-center">
                            <h2 style={{ color: '#fff', fontSize: '45px', marginBottom: '40px' }}>🏆 Achievements & Awards</h2>
                        </div>
                    </div>
                </div>
                <div className="achievements-slider">
                    <Slider {...settings}>
                        {achievements.map((achievement, index) => (
                            <div key={index} className="achievement-item" onClick={() => setSelectedImg(achievement.img)}>
                                <div className="achievement-card-wrapper">
                                    <div className="achievement-card">
                                        <img 
                                            src={achievement.img} 
                                            alt={`Achievement ${index + 1}`} 
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {selectedImg && (
                <div className="achievement-modal-overlay" onClick={() => setSelectedImg(null)}>
                    <div className="achievement-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setSelectedImg(null)}>&times;</button>
                        <img src={selectedImg} alt="Achievement Big" />
                    </div>
                </div>
            )}

            <style jsx>{`
                .achievement-modal-overlay {
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
                .achievement-modal-content {
                    position: relative;
                    max-width: 90%;
                    max-height: 90vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: default;
                    animation: zoomIn 0.3s ease;
                }
                .achievement-modal-content img {
                    max-width: 100%;
                    max-height: 90vh;
                    border-radius: 12px;
                    border: 2px solid #FFD700;
                    box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
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
                    color: #FFD700;
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
                .wpo-achievements-section {
                    padding-bottom: 90px;
                }
                .achievement-item {
                    outline: none;
                    padding: 15px;
                }
                .achievement-card-wrapper {
                    background: #1a1a1a;
                    padding: 20px;
                    border-radius: 12px;
                    border: 2px solid rgba(255, 215, 0, 0.1);
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                .achievement-card {
                    height: 300px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }
                .achievement-card img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                    border-radius: 8px;
                    transition: all 0.3s ease;
                }
                .achievement-card-wrapper:hover {
                    border-color: #FFD700;
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(255, 215, 0, 0.2);
                }
                .achievement-card-wrapper:hover img {
                    transform: scale(1.05);
                }
                :global(.slick-dots li button:before) {
                    color: #fff !important;
                }
                :global(.slick-dots li.slick-active button:before) {
                    color: #FFD700 !important;
                }
                @media (max-width: 767px) {
                    .achievement-card {
                        height: 250px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Achievements;

