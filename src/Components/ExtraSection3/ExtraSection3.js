import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ExtraSection3.css'

const ExtraSection3 = () => {
    return (


            // extra section 3 

        <div className="container-fluid my-5" style={{"background": "#D3FBFF"}}>


            {/* row  */}

            <Row className="container py-5 mx-auto">

                {/* col  */}

                <Col>

                {/* row  */}

                    <Row className="g-4">


                    {/* col  */}

                        <Col lg={6} md={6} sm={12}>
                        <div className="card border-0 shadow shoadow-md style__third" style={{"width": "18rem"}}>
                            <img src="https://pages.trip.com/cars/image/totrip/033d126a-d414-4842-9d10-b33bac5ef108.png" className="card-img-top" alt="..."/>
                           
                        </div>
                        </Col>


                    {/* col  */}

                        <Col lg={6} md={6} sm={12}>
                        <div className="card border-0 shadow shoadow-md style__third" style={{"width": "18rem"}}>
                            <img src="https://pages.trip.com/cars/image/totrip/01b5ac59-a201-4629-a757-d1f23406dd67.png" className="card-img-top" alt="..."/>
                            
                        </div>
                        </Col>

                        {/* col  */}

                        <Col lg={12} md={12} sm={12}>
                        <div className="card border-0 shadow shoadow-md style__third">
                            <img src="https://www.tourindiawithdriver.com/UPLOAD/SLIDESHOW/6-Private-Car-for-tours-India.jpg" alt="..."/>
                            
                        </div>
                        </Col>
                    </Row>
                </Col>


                {/* col  */}

                <Col className="d-flex justify-content-center align-items-center p-5">
                    <div>
                        <h2 className="fw-bold">Find Cars When You Travel <small className="underline-highlight highlight">EASILY</small></h2>

                        <p className="my-5">
                        When you need a Car to travel, finding the right car is only half the equation. Receiving your car at the right place can have a dramatic impact on your outcome. Learn how we rate cars performance and why travel quality matters when planning your Travel.
                        </p>

                        <Link to="/cars" style={{'fontSize': "18px", "textDecoration": "none"}}>Browse all procedure topics <i className="fas fa-arrow-right"></i></Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ExtraSection3;