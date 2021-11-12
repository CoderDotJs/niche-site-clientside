import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const ContactUs = () => {

    // use history 

    const history = useHistory();

    // handle submit button for contact us 

    const handleSubmit = () =>{
        alert('Your Message has been sent')
        history.push('/home')
    }
    

    return (

                    // contact us form 

        <div>
            <div className="wrapper rounded d-flex align-items-stretch">
    {/* <div className="bg-yellow">
        <div className="text-white"> <span className="far fa-envelope"></span> </div>
        <div className="pt-5 cursive"> Please describe your product idea in a nutshell </div>
        <div className="pt-sm-5 pt-5 cursive mt-sm-5"> We need your email to reach you back </div>
    </div> */}
    <div className="contact-form">
        <div className="h3">Contact Us</div>
        <form>
            <div className="form-group pt-3"> <label htmlFor="message">Message</label> <textarea name="message" className="form-control" required></textarea> </div>
            <div className="d-flex align-items-center flex-wrap justify-content-between pt-4">
                <div className="form-group pt-lg-2 pt-3"> <label htmlFor="name">Your Name</label> <input type="text" name="name" className="form-control" required /> </div>
                <div className="form-group pt-lg-2 pt-3"> <label htmlFor="name">Your Email</label> <input type="email" name="email" className="form-control" required/> </div>
            </div>
            <div className="d-flex align-items-center flex-wrap justify-content-between pt-lg-5 mt-lg-4 mt-5">
                <Link to="/home" className="btn btn-default"> Cancel </Link>
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" onClick={handleSubmit}> Submit </button>
            </div>
        </form>
    </div>
</div> 
<div className="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="myModalLabel">Thank You <span className="fas fa-heart"></span> </h5> <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="ps-2">Thank You for sharing your views with us. We will get back to you as soon as possible.</div>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default ContactUs;