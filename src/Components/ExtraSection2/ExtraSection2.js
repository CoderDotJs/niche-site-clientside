import React from 'react';
import './ExtraSection.css'
import tik from './tik.png'


const ExtraSection2 = () => {
    return (


            // extra section 2 

        <div className="extra-section-2 py-5">
            <h3 className="text-center">Our rental concierge does the heavy lifting</h3>

            <div className="row row-cols-1 row-cols-md-4 container mx-auto pt-5 g-5 container mx-auto">
                <div className="col-lg-4 col-md-6 col-sm-12" >
                    <div class="card h-100  pt-4 pb-3 border-0">
                        <img src={tik} style={{maxWidth: '60px', maxHeight: '100px'}} class="card-img-top" alt="..."/>
                        <div class="" style={{margin: '0'}}>
                          <h5 class="card-text mt-3">Getting to know you
</h5>
                          <p className="text-muted">
                          You’ll answer a few simple questions so we understand what you are really looking for in your next home
                          </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12" >
                    <div class="card h-100  pt-4 pb-3 border-0">
                        <img src={tik} style={{maxWidth: '60px', maxHeight: '100px'}} class="card-img-top" alt="..."/>
                        <div class="" style={{margin: '0'}}>
                          <h5 class="card-text mt-3">Curating top matches
</h5>
                          <p className="text-muted">When you add an apartment to your Short List, the savings concierge compares them and recommends the best property for you.
                          </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12" >
                    <div class="card h-100  pt-4 pb-3 border-0">
                        <img src={tik} style={{maxWidth: '60px', maxHeight: '100px'}} class="card-img-top" alt="..."/>
                        <div class="" style={{margin: '0'}}>
                          <h5 class="card-text mt-3">Guiding you to savings</h5>
                          <p className="text-muted">Tallying up the value of promotional offers can be confusing. That’s why we show transparent pricing for any apartment with an offered concession.
                          </p>
                        </div>
                    </div>
                </div>
            
            </div>
            
        </div>
    );
};

export default ExtraSection2;