import React from 'react';
import { Container, } from 'react-bootstrap';
import firstImg from './src/one.png';
import secondImg from './src/two.png';
import thirdImg from './src/three.png';
import fourthImg from './src/four.png';
import './ExtraSection1.css'

const ExtraSection1 = () => {
    return (

                // extra section 
            <Container fluid className="extra-section-1 mx-auto text-center py-5">
                <h5>How many bedrooms are you looking for?</h5>
                
            <div className="row row-cols-1 row-cols-md-4 container mx-auto pt-5 g-4" >
                <div className="col-lg-3 col-md-6 col-sm-12" >
                    <div class="card h-100  pt-4 pb-3">
                        <img src={firstImg} style={{maxWidth: '60px', display: 'block', margin: '0 auto', maxHeight: '100px'}} class="card-img-top" alt="..."/>
                        <div class="" style={{margin: '0'}}>
                          <h4 class="card-text mt-3">Studio</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 " >
                    <div class="card h-100  pt-4 pb-3"  >
                        <img src={secondImg} class="card-img-top" style={{maxWidth: '60px', display: 'block', margin: '0 auto', maxHeight: '100px'}} alt="..."/>
                        <div class="" style={{margin: '0'}}>
                          <h4 class="card-text mt-3">1 Bedroom</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3  col-md-6 col-sm-12 ">
                    <div class="card h-100  pt-4 pb-3"  >
                        <img src={thirdImg} style={{maxWidth: '60px', display: 'block', margin: '0 auto', maxHeight: '100px'}} class="card-img-top" alt="..."/>
                        <div class="" style={{margin: '0'}}>
                          <h4 class="card-text mt-3">2 Bedroom</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12" >
                    <div class="card h-100 pt-4 pb-3"  >
                        <img src={fourthImg} class="card-img-top" style={{maxWidth: '60px', display: 'block', margin: '0 auto', maxHeight: '100px'}} alt="..."/>
                        <div class="" style={{margin: '0'}}>
                          <h4 class="card-text mt-3">3+ Bedroom</h4>
                        </div>
                    </div>
                </div>
            </div>
            </Container>
    );
};

export default ExtraSection1;