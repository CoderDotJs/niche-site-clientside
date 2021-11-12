import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import './AddService.css'

const AddService = () => {


    // some verriables

    const { register, handleSubmit } = useForm();

    const [service, setService] = useState({})
    const [count, setCount] = useState([])

    const history = useHistory()


    // function on onSubmit the form 

    const onSubmit = data => {
        console.log('data', data)
        setService(data)
        console.log('service', service)
        handleAddNewServices(data)
    }

    // handle add new service 

    const handleAddNewServices = (data) =>{
        
        data.rating = null;

        fetch('https://apartment-fis.herokuapp.com/add-new-services', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(dat => {
            if (dat.acknowledged) {
                alert('Successfully added the service')
                history.push('/home')
                console.log(dat)
            }
            console.log(dat)
        })
    }

    // use effect for get the data 

    useEffect(()=>{
        fetch('https://apartment-fis.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setCount(data))
    }, [])

    console.log(count.length)
    


    return (

            // add new service form 

        <div className="container mx-auto my-5">
           
            <div className="wrapper rounded d-flex align-items-stretch">
                
                <div className="contact-form">
                    <div className="h3">Add New Apartment Listing</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        
                        <div className="d-flex align-items-center flex-wrap justify-content-between pt-4">
                            <div className="form-group group pt-lg-2 pt-3"> 
                            <label htmlFor="apartment_name">Apartment Name</label> 
                            <input {...register("apartment_name")} type="text" name="apartment_name" className="form-control" required /> 
                            </div>
                            
                            <div className="form-group group pt-lg-2 pt-3"> 
                            <label htmlFor="member">Total Member</label> <input {...register("member")} type="number" min={1} name="member" className="form-control" required /> 
                            </div>


                            <div className="form-group group pt-lg-2 pt-3"> 
                            <label htmlFor="type">Type(Like Family, Bechelor, Shared)</label> 
                            <input {...register("type")} type="text" name="type" className="form-control" required /> 
                            </div>


                            <div className="form-group group pt-lg-2 pt-3"> 
                            <label htmlFor="total_beds">Total Beds</label> 
                            <input {...register("total_beds")} type="number" name="total_beds" className="form-control" min={1} required /> 
                            </div>
                        </div>
                        <div className="d-flex align-items-center flex-wrap justify-content-between pt-4">

                            <div className="form-group group pt-lg-2 pt-3">
                            <label htmlFor="total_bath">Total Bath</label> 
                            <input {...register("total_bath")} type="number" name="total_bath" className="form-control" min={1} required /> 
                            </div>


                            <div className="form-group group pt-lg-2 pt-3"> 
                            <label htmlFor="apartment_size">Apartment Size</label> 
                            <input {...register("apartment_size")} type="number" name="apartment_size" min={200} className="form-control" required /> 
                            </div>

                            <div className="form-group group pt-lg-2 pt-3"> 
                            <label htmlFor="img">Image Link:</label> 
                            <input  {...register("img")} type="url" name="img" className="form-control" required /> 
                            </div>


                            <div className="form-group group pt-lg-2 pt-3"> 
                            <label htmlFor="price">Price</label> 
                            <input {...register("price")} type="number" min={1} name="price" className="form-control" required /> 
                            </div>
                        </div>
                        
                        <div className="form-group pt-3"> <label htmlFor="desc">Description</label> <textarea name="desc"  {...register("desc")}  className="form-control" required ></textarea> </div>
                        
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

export default AddService;