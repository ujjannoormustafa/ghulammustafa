import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import Services from '../../api/service'

const ServiceSection = (props) => {
    return (
        <div className={`wpo-service-area section-padding ${props.sClass}`} id='service'>
            <div className="container">
                <SectionTitle Title={'My Services'} />
                <div className="wpo-service-wrap">
                    <div className="row">
                        {Services.map((service, srv) => (
                            <div className="col-lg-3 col-md-6 col-12" key={srv}>
                                <div className="wpo-service-item" style={{ backgroundColor: "#191919", boxShadow: "none", marginBottom: "30px", padding: "0px" }}>
                                    <div className="service-img-wrap" style={{ width: '100%', height: '200px', overflow: 'hidden', borderRadius: '12px 12px 0 0' }}>
                                        <img 
                                            src={service.sImg} 
                                            alt={service.sTitle}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.5s ease'
                                            }}
                                        />
                                    </div>
                                    <div style={{ padding: '30px 20px' }}>
                                        <h2 style={{ fontSize: '22px', marginBottom: '15px' }}>{service.sTitle}</h2>
                                        <p style={{ color: "white", fontSize: '15px', lineHeight: '1.6' }}>{service.description}</p>
                                        <div className="slide-btn" style={{ marginTop: '20px' }}>
                                            <a href="mailto:ghmustafasoomro828@gmail.com" className="theme-btn">Hire Me</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
                .wpo-service-item {
                    text-align: center;
                    border-radius: 12px;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    transition: all 0.3s ease;
                }
                .wpo-service-item:hover {
                    transform: translateY(-10px);
                    border-color: #0A84FF;
                    box-shadow: 0 10px 30px rgba(10, 132, 255, 0.1) !important;
                }
                .wpo-service-item h2 {
                    color: #fff;
                    font-weight: 600;
                }
            `}</style>
        </div>
    );
}

export default ServiceSection;