import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import img from './hero.png'

const Banner = () => {
    return (

            // banner section  

        <div id="banner">
            <img src={img} alt="" width='100%' height='600px' className='banner_img'/>
            <div className="col-md-7 col-lg-5 col-sm-10 banner_text">
                    <h1>Find Your Best <br />
                        Smart Apartment
                    </h1>
            </div>
        </div>
    );
};

export default Banner;