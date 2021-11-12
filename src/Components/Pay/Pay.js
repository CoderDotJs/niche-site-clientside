import React from 'react';
import { useHistory } from 'react-router-dom';

const Pay = () => {
    const history = useHistory();
    return (
        <div className="bg-light py-5 d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-center fw-light">Payment Option is Coming.</h1>
            <button className="btn btn-primary" onClick={() => history.push('/my-orders')}>My Orders</button>
        </div>
    );
};

export default Pay;