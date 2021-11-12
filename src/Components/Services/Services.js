import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';
import useAuth from '../../Hooks/useAuth';

const Services = () => {

    // managing state 

    const [service, setService] = useState([])

    const { isLoading, setIsLoading} = useAuth();

    
        // fetching the data 

    useEffect(()=>{
        setIsLoading(true)
        fetch('https://apartment-fis.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setService(data)
            setIsLoading(false)
        })
    }, [])

    
    return (

            // services section 

        <div id="services" className="my-5 py-5" style={{background: '#F1F5F9', borderRadius: '100px'}}>
            <h2 className="ms-5">Check out some of our top apartments</h2>
            <p className="ms-5">View all apartments in Denver, CO or check out apartments in popular cities</p>

            
                

            {
                isLoading 
                ? 
                <div className="text-center my-5"><Spinner className="my-5 text-center" animation="border" variant="primary"/></div> 
                : 
                
                <div className=" py-5 mx-auto row row-cols-1 row-cols-md-2 justify-content-start row-cols-lg-2 row-cols-sm-1 g-4" style={{width: '90%'}}>
                
                    {
                        service?.slice(0, 6).map((simple)=>{
                            return(
                             <ServiceCard  
                             key={simple._id}
                             prop={simple}
                              >
                              </ServiceCard>
                            )
                         })
                    }
                </div>

            }
                    
            

        </div>
    );
};

export default Services;