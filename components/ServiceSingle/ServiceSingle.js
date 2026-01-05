import React from 'react';
import { Dialog, DialogContent } from '@mui/material';

const ServiceSingle = ({ open, onClose, title, dImg, sImg1, sImg2 }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            className="serviceDialog"
            fullWidth={true}
            maxWidth="md"
        >
            <DialogContent>
                <div className="service-single-area">
                    <div className="service-single-wrap">
                        <div className="service-single-item">
                            <div className="service-single-main-img">
                                {dImg && <img src={dImg} alt="" />}
                            </div>
                            <div className="service-single-title">
                                <h3>{title}</h3>
                            </div>
                            <div className="service-single-img-wrap">
                                {sImg1 && <div className="row">
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="service-single-img">
                                            <img src={sImg1} alt="" />
                                        </div>
                                    </div>
                                    {sImg2 && <div className="col-md-6 col-sm-6 col-12">
                                        <div className="service-single-img">
                                            <img src={sImg2} alt="" />
                                        </div>
                                    </div>}
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ServiceSingle;