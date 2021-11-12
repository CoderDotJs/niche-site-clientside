import React, { useEffect, useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';


const UpdateStatus = () => {
    
    const { id } = useParams();
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const [updatedOrders, setUpdatedOrders] = useState({});
    const [success, setSuccess] = useState('');
    const [show, setShow] = useState(true);
    const [error, setError] = useState('');


    console.log(updatedOrders)

    const onSubmit = (data) => {
        
        console.log(updatedOrders.status)
        console.log(data.status)
        updatedOrders.status = data.status;
        console.log(updatedOrders)
        setSuccess('')
        setError('')
        setShow(true)


        fetch(`https://apartment-fis.herokuapp.com/update-status/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedOrders)
        }).then(res =>{
            res.json()
        }).then(data => {
            alert('Update Successful')
            setSuccess('Update Successful');
            history.push('/manage-orders')
        }).catch(err => {
            alert(err.message)
            setError('Update Failed');
            setShow(false);
            setSuccess('');
        })
        

        // console.log(updatedOrders, data)
    };


    const url = `https://apartment-fis.herokuapp.com/orders/${id}`;

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setUpdatedOrders(data))
    }, [])


    return (
        <div className="my-5">
            <h1 className="text-center services__heading">Update Status of <span className="underline-highlight ">{updatedOrders?.apartment_name}</span></h1>
        
            <div className="container">
                    {
                        success && <Alert show={show} variant="success">
        
        
                        <div className="d-flex justify-content-between align-items-center">
                        <p className='m-0'>{success}</p>
                          <Button onClick={() => setShow(false)} variant="outline-success">
                            X
                          </Button>
                        </div>
                      </Alert>
                    }
                    {
                        error && <Alert show={show} variant="danger">
        
        
                        <div className="d-flex justify-content-between align-items-center">
                        <p className='m-0'>{error}</p>
                          <Button onClick={() => setShow(false)} variant="outline-danger">
                            X
                          </Button>
                        </div>
                      </Alert>
                    }
                </div>
            
            <div className=" py-5 mx-auto row row-cols-1 row-cols-md-2 justify-content-start row-cols-lg-2 row-cols-sm-1 g-4" style={{width: '90%'}}>
                                

                                <div style={{cursor: ''}} className="col-lg-6 col-md-12 col-sm-12 service-card">
                    <div class="card h-100 mb-3 g-0 border-0" style={{borderRadius: '20px', height: '250px'}}>
                    <div class="row h-100 g-0" style={{height: '250px'}}>
                      <div class="col-md-5 position-relative" style={{borderRadius: '20px'}}>
                        {
                           updatedOrders?.status === 'Pending' && <span class="badge rounded-pill bg-danger position-absolute px-3 py-2" style={{top: "20px", left: '20px', fontSize: '16px'}}>{updatedOrders?.status}</span>
                        }
                        {
                            updatedOrders?.status === 'Reviewing' && <span class="badge rounded-pill bg-warning position-absolute px-3 py-2" style={{top: "20px", left: '20px', fontSize: '16px'}}>{updatedOrders?.status}</span>
                        }
                        {
                            updatedOrders?.status === 'Shipped' && <span class="badge rounded-pill bg-success position-absolute px-3 py-2" style={{top: "20px", left: '20px', fontSize: '16px'}}>{updatedOrders?.status}</span>
                        }
                        <img src={updatedOrders?.img} class="img-fluid h-100" alt="..." style={{borderRadius: '20px', padding: '10px', height: '250px'}}/>
                      </div>
                      <div class="col-md-7 h-100" style={{height: '250px'}}>
                        <div class="card-body d-flex flex-column justify-content-evenly align-items-start" style={{height: '250px'}}>

                          {/* pill badge  */}

                          <div className="d-flex justify-content-start align-items-center">
                            <span className="text-primary px-3 badge rounded-pill" style={{backgroundColor: '#DBEAFE', fontSize: '12px', fontWeight: '100'}}>
                              <i class="fas fa-share-alt"></i> {updatedOrders?.memeber} Network
                            </span>
                            <span className="text-warning px-3 ms-3 badge rounded-pill" style={{backgroundColor: '#FEF9C3', fontSize: '12px', fontWeight: '100' }}>
                            <i class="fas fa-users"></i> {updatedOrders?.type} Family
                            </span>
                          </div>

                    {/* service name  */}

                            <h5 class="card-title">{updatedOrders?.apartment_name}</h5>
                            <h6>Email: {updatedOrders?.email}</h6>
                            <div class="card-text text-muted" style={{fontSize: '14px'}}>
                              <span><i className="fas fa-bed"></i> {updatedOrders?.total_beds} Beds</span>
                              <span><i className="fas fa-bath ms-3"></i> {updatedOrders?.total_bath} Baths</span>
                              <span><i className="fas fa-expand-arrows-alt ms-3"></i> {updatedOrders.apartment_size} Sq. Fit</span>
                            </div>
                            <div className="cards-footer w-100 d-flex justify-content-between align-items-center">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                        <span className="fw-bold">Mark Order As:</span> <select {...register("status")}>
                                            <option value="Pending" defaultValue>Pending</option>
                                            <option value="Reviewing">Reviewing</option>
                                            <option value="Shipped">Shipped</option>
                                        </select><br /><br />
                                        <input type="submit" value="Update" className="btn btn-secondary"/>
                                    </form>
                            </div>
                            
                  </div>
                </div>
              </div>
            </div>
            </div>

                         

                        



                                    
                </div>
            </div>
    );
};

export default UpdateStatus;