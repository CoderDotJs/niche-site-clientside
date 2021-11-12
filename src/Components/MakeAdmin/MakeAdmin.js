import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useFirebase from '../../Firebase/useFirebase';

const MakeAdmin = () => {


    // some verriables

    const { register, handleSubmit } = useForm();

    const {user} = useFirebase();
    const [showSuccess, setShowSuccess] = useState(true)
    const [showError, setShowError] = useState(true)
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null);



    // function on onSubmit the form 

    const onSubmit = (data,e) => {
        e.preventDefault()
        console.log('data', data)
        handleAddNewReview(data)
    }

    // handle add new service 

    const handleAddNewReview = (data) =>{
        
        console.log(data)
        setSuccess(null)
        setError(null)

        fetch('https://apartment-fis.herokuapp.com/make-admin', {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(dat => {
            if (dat.acknowledged) {
                setSuccess('Admin Make Successfull')
                setError(null)
                console.log(dat)
            }
            console.log(dat)
        })
        .catch(err => {
            setError('Email Not Found')
            setSuccess(null)
        })
    }

    


    return (

            // add new service form 

        <div className="container mx-auto my-5">
           
            <div className="wrapper rounded d-flex align-items-stretch">
                
                <div className="contact-form">
                    <div className="h3">Make An Admin</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        
                        <div className="d-flex align-items-center flex-wrap justify-content-between ">
                            <div className="form-group group pt-lg-2 pt-3"> 
                            {/* <label htmlFor="email">Email</label>  */}
                            <input {...register("email")} type="email" name="email" className="form-control" required placeholder="Email" /> 
                            </div>
                            <input className="btn btn-primary" type="submit" value="Submit"/>

                        </div>

                        {
                                    error && <Alert show={showError} variant="danger">
        
        
                                    <div className="d-flex justify-content-between align-items-center">
                                    <p className='m-0'>{error.toString()}</p>
                                      <Button onClick={() => setShowError(false)} variant="outline-danger">
                                        X
                                      </Button>
                                    </div>
                                  </Alert>
                            }
                            {
                                success && <Alert show={showSuccess} variant="success">
        
        
                                <div className="d-flex justify-content-between align-items-center">
                                <p className='m-0'>{success.toString()}</p>
                                  <Button onClick={() => setShowSuccess(false)} variant="outline-success">
                                    X
                                  </Button>
                                </div>
                              </Alert>
                            }
                        
                        <div className="d-flex align-items-center flex-wrap justify-content-between ">
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;