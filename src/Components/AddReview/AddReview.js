import React, { useEffect, useState } from 'react';

const AddReview = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://apartment-fis.herokuapp.com/get-reivew')
        .then(res=> res.json())
        .then(data => setReviews(data))
    })

    return (
        <div className="py-5 my-5 review" style={{background: '#F7F7F7'}}>
            <h1 className="text-center">Review Section</h1>
            <p className="text-center">Thousands of customers happiness</p>


            <div class="container mt-5 mb-3">
                <div class="row g-3">
                    {
                        reviews.map(review => {
                            return (
                                <div class="col-md-6 col-lg-4" key={review._id}>
                        <div class="card p-3 mb-2">
                            <div class="d-flex justify-content-between">
                                <div class="d-flex flex-row align-items-center justify-content-center">
                                    <div class="icon"> <img src={review.photoURL} alt="" width='50px' height='50px' style={{borderRadius: '50%'}} /> </div>
                                    <div class="ms-2 c-details">
                                        <h6 class="mb-0">{review.displayName}</h6> <span className="text-muted" style={{fontSize: '12px'}}>
                                            Customer
                                        </span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center align-items-center"><span class="badge rounded-pill bg-success">Design</span> </div>
                            </div>
                            <div class="mt-5 d-flex align-items-start flex-column justify-content-center">
                                <span><i style={{color: '#EF4444'}} class="fas fa-star"></i> {review.rating}</span>
                                <q class="heading fw-semibold fst-italic">{review.quote}</q>
                                
                            </div>
                        </div>
                        </div>
                            )
                        })
                        
                    }
                </div>
            </div>

        </div>
    );
};

export default AddReview;