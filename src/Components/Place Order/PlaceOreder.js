import React, { useEffect,  useState } from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch, useHistory
} from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import './PlaceOrder.css';
import Pay from '../Pay/Pay';
import {Button} from 'react-bootstrap';

const PlaceOreder = () => {

  
    const {service_name} = useParams();
    const history = useHistory();
    const [service, setService] = useState({})
    const {error, setError, user, status} = useAuth();
    const { register, handleSubmit } = useForm();
    let { path, url } = useRouteMatch();
    let {_id, apartment_name, memeber, type, rating, total_beds, total_bath, apartment_size, img, price, desc} = service;
    if(rating === null || rating === undefined){
      rating = 0;
    }

    
    console.log(path, url)

    // get the data by service name 

    useEffect(()=>{
        fetch(`https://apartment-fis.herokuapp.com/services/place-order/${service_name}`)
        .then(res => res.json())
        .then(data => {
          setService(data)
        })
    },[service_name]);

        // on submit function to place order on submit the order 

        const onSubmit = (data, e) => {
            e.preventDefault();
            service.email = data.email;
            service.status = status;
            service._id = Number(service._id + 1);
            service.address = data.address;
            service.region = data.region;
            service.city = data.city;
            
            console.log('clicked', 'data', service)

            fetch('https://apartment-fis.herokuapp.com/place-order',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(service)    
            })
            .then(res=>{
                if(!res.ok){
                    setError(res.statusText)
                }
                else{
                    res.json()
                    history.push('/pay')
                }
            }).then(data=>{
              console.log(data)
            }).catch((e)=>{
              setError(e.message)
              alert(error)
            })
        };

    return (
        <div className="container mx-auto my-5">
            <h1 className="text-center my-5">Place Order</h1>
            
              {/* short desc for the service / pacage to buy  */}


            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 h-100">
                      <div key={service?._id}>

                        <div className="d-flex justify-content-start align-items-center">
                        <span className="text-primary px-3 badge rounded-pill" style={{backgroundColor: '#DBEAFE', fontSize: '12px', fontWeight: '100'}}>
                          <i class="fas fa-share-alt"></i> {memeber} Network
                        </span>
                        <span className="text-warning px-3 ms-3 badge rounded-pill" style={{backgroundColor: '#FEF9C3', fontSize: '12px', fontWeight: '100' }}>
                        <i class="fas fa-users"></i> {type} Family
                        </span>
                        </div>

                        <h2 className="my-3">{apartment_name}</h2>
                        
                        <div class="card-text text-muted my-2" style={{fontSize: '14px'}}>
                        <span><i className="fas fa-bed"></i> {total_beds} Beds</span>
                        <span><i className="fas fa-bath ms-3"></i> {total_bath} Baths</span>
                        <span><i className="fas fa-expand-arrows-alt ms-3"></i> {apartment_size} Sq. Fit</span>
                        </div>

                        <div className="cards-footer w-100 d-flex justify-content-between align-items-center">
                        <span><i style={{color: '#EF4444'}} class="fas fa-star"></i> {rating}</span>
                        <Button style={{color: 'rgb(20,184,166)', backgroundColor: 'transparent', borderColor: 'rgb(20,184,166)', fontWeight: '500', letterSpacing: '0.5px', padding: '6px 19px'}}>${price}</Button>
                        </div>


                        <img src={img} alt="" className="img-fluid w-75 d-block mx-auto my-3" style={{maxHeight: '250px', maxWidth: '250px'}}/>
                          <hr />
                        <p>{desc}</p>
                      </div>
                </div>


                  {/* place order form  */}

                <div className="col-lg-6 col-md-6 col-sm-12 h-100 d-flex justify-content-center align-items-center">
                    <form 
                    onSubmit={handleSubmit(onSubmit)}
                    >
                    <section className="order-form my-4 mx-4">
                        <div className="container pt-4">

                          <div className="row">
                            <div className="col-12">
                              <h3>Fill the form below</h3>
                              <span>with some explanation below</span>
                              <hr className="mt-1"/>
                            </div>
                            <div className="col-12">

                              <div className="row mx-4">
                                <div className="col-12 mb-2">
                                  <label className="order-form-label">Name</label>
                                </div>
                                <div className="col-12 col-sm-6">
                                  <input className="order-form-input" {...register("name", { required: true })} placeholder="Your Name" value={user.displayName}/>
                                </div>
                                <div className="col-12 col-sm-6 mt-2 mt-sm-0">
                                  <input className="order-form-input" {...register("email", { required: true })} placeholder="Email" value={user.email}/>
                                </div>
                              </div>

                              <div className="row mt-3 mx-4">
                                <div className="col-12">
                                  <label className="order-form-label">Address</label>
                                </div>
                                <div className="col-12">
                                  <input className="order-form-input" {...register("address", { required: true })} placeholder="Street Address"/>
                                </div>
                                <div className="col-12 col-sm-6 mt-2 pr-sm-2">
                                  <input className="order-form-input" {...register("city", { required: true })} placeholder="City"/>
                                </div>
                                <div className="col-12 col-sm-6 mt-2 pl-sm-0">
                                  <input className="order-form-input" {...register("region", { required: true })} placeholder="Region"/>
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-12">
                                  <input type="submit" value="Pay Now" className="btn btn-dark d-block mx-auto btn-submit"/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default PlaceOreder;