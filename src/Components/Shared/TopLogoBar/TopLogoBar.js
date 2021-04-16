import React from 'react';
import logo from '../../../images/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './TopLogoBar.css'
import { faClock, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const TopLogoBar = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 site-logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="col-md-8 second-part">
                        <div className="row">
                            <div className="col-5">
                                <div className="top-logo">
                                    <div className="icon-box">
                                        <FontAwesomeIcon className="icon" icon={faClock} />
                                    </div>
                                    <div className="logo-intro">
                                        <h6>OPENING HOURS</h6>
                                        <small>MON-FRI: 9AM - 8PM </small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="top-logo">
                                    <div className="icon-box">
                                        <FontAwesomeIcon className="icon" icon={faPhone} />
                                    </div>
                                    <div className="logo-intro">
                                        <h6>CALL US</h6>
                                        <small>+(10) 123 456 7966</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="top-logo">
                                    <div className="icon-box">
                                        <FontAwesomeIcon className="icon" icon={faEnvelope} />
                                    </div>
                                    <div className="logo-intro">
                                        <h6>MAIL US</h6>
                                        <small>admin@homefix.com</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopLogoBar;