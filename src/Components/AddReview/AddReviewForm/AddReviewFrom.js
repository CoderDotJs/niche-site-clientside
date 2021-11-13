import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import useFirebase from '../../../Firebase/useFirebase';

const AddReviewFrom = () => {


    // some verriables

    const { register, handleSubmit } = useForm();

    const {user} = useFirebase();
    const history = useHistory()



    // function on onSubmit the form 

    const onSubmit = (data,e) => {
        e.preventDefault()
        data["photoURL"] = 'https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png';
        console.log('data', data, )
        handleAddNewReview(data)
    }

    // handle add new service 

    const handleAddNewReview = (data) =>{
        
        console.log(data)

        fetch('https://apartment-fis.herokuapp.com/add-review', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(dat => {
            if (dat.acknowledged) {
                alert('Successfully Added The Review')
                history.push('/home')
                console.log(dat)
            }
            console.log(dat)
        })
    }

    


    return (

            // add new service form 

        <div className="container mx-auto my-5">
           
            <div className="wrapper rounded d-flex align-items-stretch">
                
                <div className="contact-form">
                    <div className="h3">Add New Apartment Listing</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        
                        <div className="d-flex align-items-center flex-wrap justify-content-between pt-4">
                            <div className="form-group group pt-lg-2 pt-3"> 
                            <label htmlFor="displayName">Your Name</label> 
                            <input {...register("displayName")} type="text" name="displayName" className="form-control" required /> 
                            </div>
                            
                            
                            <div className="form-group group pt-lg-2 pt-3"> 
                            <label htmlFor="rating">Review Points(out of 5)</label> <input {...register("rating")} type="number" min="1" max="5"  name="rating" className="form-control" required /> 
                            </div>
                        </div>
                        
                        <div className="form-group pt-3"> <label htmlFor="quote">Your Text / Quote</label> <textarea name="quote"  {...register("quote")}  className="form-control" required ></textarea> </div>
                        <div className="d-flex align-items-center flex-wrap justify-content-between pt-lg-5 mt-lg-4 mt-5">
                            <div className="btn btn-default"> Cancel </div>
                            <input className="btn btn-primary" type="submit"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReviewFrom;