import React from 'react';
import './Preloader.css';

const Preloader = () => {
    return (
        <div className="preloader">
            <div className="preloader-row">
                <div className="preloader-item"></div>
                <div className="preloader-item"></div>
            </div>
        </div>
    );
};

export default Preloader;