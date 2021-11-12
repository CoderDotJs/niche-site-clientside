import React from 'react';
import {  Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const {_id, img, service_name, price,  subtitle} = props.prop;
    
    return (
        <Container>
            
                {/* service / package card section  */}

                <div 
            style={{"textDecoration": "none"}}  
            className="text-left col d-flex flex-column justify-content-between align-items-start py-5"
            >
            <div className="service__icon_container">
                <img src={img} alt="" className="img-fluid service__img"/>
            </div>
            <h4 className="my-3">{service_name}</h4>
            <p>{subtitle}</p>
            <h3><b>${price}</b></h3>
            <Button as={Link} 
            variant="primary" 
            style={{"padding": "5px 15px", "background": "rgb(2, 2, 193)", "color": "white", "textDecoration": "none"}} 
            to={`/services/place-order/${_id}`}
            >
                Book Now <i className="fas fa-plane-departure mx-1"></i>
            </Button>
            </div>
        </Container>
    );
};

export default Card;