import {Button} from 'react-bootstrap';
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceCard.css'


const ServiceCard = (props) => {

    

        // get the data using props 

    let {_id, apartment_name, memeber, type, rating, total_beds, total_bath, apartment_size, img, price, desc} = props.prop;

    if(rating === null || rating === undefined){
        rating = 0;
    }
    
    const history = useHistory();

    const handleCardClick = useCallback(() => {
      const to = `/services/place-order/${_id}`;
      history.push(to);
    }, [_id, history]);

    return (

            // service data show with card 


            <div onClick={handleCardClick} style={{cursor: 'pointer'}} className="col-lg-6 col-md-12 col-sm-12 service-card">
              <div class="card h-100 mb-3 g-0 border-0" style={{borderRadius: '20px', height: '250px'}}>
              <div class="row h-100 g-0" style={{height: '250px'}}>
                <div class="col-md-5 " style={{borderRadius: '20px'}}>
                  <img src={img} class="img-fluid h-100" alt="..." style={{borderRadius: '20px', padding: '10px', height: '250px'}}/>
                </div>
                <div class="col-md-7 h-100" style={{height: '250px'}}>
                  <div class="card-body d-flex flex-column justify-content-evenly align-items-start" style={{height: '250px'}}>

                    {/* pill badge  */}

                    <div className="d-flex justify-content-start align-items-center">
                      <span className="text-primary px-3 badge rounded-pill" style={{backgroundColor: '#DBEAFE', fontSize: '12px', fontWeight: '100'}}>
                        <i class="fas fa-share-alt"></i> {memeber} Network
                      </span>
                      <span className="text-warning px-3 ms-3 badge rounded-pill" style={{backgroundColor: '#FEF9C3', fontSize: '12px', fontWeight: '100' }}>
                      <i class="fas fa-users"></i> {type} Family
                      </span>
                    </div>

                    {/* service name  */}

                    <h5 class="card-title">{apartment_name}</h5>
                    <div class="card-text text-muted" style={{fontSize: '14px'}}>
                      <span><i className="fas fa-bed"></i> {total_beds} Beds</span>
                      <span><i className="fas fa-bath ms-3"></i> {total_bath} Baths</span>
                      <span><i className="fas fa-expand-arrows-alt ms-3"></i> {apartment_size} Sq. Fit</span>
                    </div>
                    <div className="cards-footer w-100 d-flex justify-content-between align-items-center">
                        <span><i style={{color: '#EF4444'}} class="fas fa-star"></i> {rating}</span>
                      <Button style={{color: 'rgb(20,184,166)', backgroundColor: 'transparent', borderColor: 'rgb(20,184,166)', fontWeight: '500', letterSpacing: '0.5px', padding: '6px 19px'}}>${price}</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            
    );
};

export default ServiceCard;