import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import google from './google.png';


const Login = () => {

    // get the fuctions form the hooks 

    const { googleSignIn, setIsLoading, getEmail, getPassowrd, signInWithEmail, saveUser} = useAuth();
    const [success, setSuccess] = useState(null);
    const [showSuccess, setShowSuccess] = useState(true);
    const [showError, setShowError] = useState(true);
    const [error, setError] = useState(null);

    // using locatin history hoooks 

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
    
        // function for handle the sign in 

    const handleSignIn = (e) =>{
        setIsLoading(true)
        e.preventDefault()
        signInWithEmail()
        .then((res)=>{
            setShowSuccess(true)
            setShowError(false)
            setError('')
            setSuccess('Logged In Successful');
            console.log(res)
        })
        .then(result =>{
            history.push(redirect_uri)
        }).catch((err)=>{
            setError(err.message)
            setShowError(true)
            setShowSuccess(false)
        }).finally(()=>{
            setIsLoading(false)
        })
    }

    // function for handgle the google sign in 

    const handleGoogleSignIn = () =>{
        setIsLoading(true)
        googleSignIn()
        .then((res)=>{
            setShowSuccess(true)
            setShowError(false)
            setError('')
            setSuccess('Logged In Successful');
            saveUser(res.user)
        })
        .then(result =>{
            history.push(redirect_uri)
        }).catch((err)=>{
            setError(err.message)
            setShowError(true)
            setShowSuccess(false)
        }).finally(()=>{
            setIsLoading(false)
        })
    }

    

    return (

            // log in form 

        <div className="container-fluid h-100 my-5">
            <div className="" style={{"marginTop" : "0px"}}>
                <div className="rounded d-flex justify-content-center">
                    <div className="col-md-4 col-sm-12 shadow-lg p-5 bg-light">
                        <div className="text-center">
                            <h3 className="text-primary">Log In</h3>
                        </div>
                        <form>
                            <div className="py-4">
                                <div className="input-group mb-3 xs-12">
                                    <span className="input-group-text bg-primary">
                                    <i className="fas fa-user-plus" style={{"color": "white", "width": "16px"}}></i>
                                    </span>
                                    <input onKeyUp={getEmail} type="text" className="form-control" placeholder="Email" />
                                </div>
                                <div className="input-group mb-3 xs-12">
                                    <span className="input-group-text bg-primary">
                                    <i className="fas fa-key" style={{"color": "white"}}></i>
                                    </span>
                                    <input onKeyUp={getPassowrd} type="password" className="form-control" placeholder="Password" />
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
                                <button onClick={handleSignIn} className="btn btn-primary text-center mt-2" type="submit">
                                    Login
                                </button>
                                {/* <br />
                                <p className="text-center">Or</p>
                                <br />

                                <Button variant="white" size="lg" className="border border-1 text-black d-block mx-auto" onClick={handleGoogleSignIn}>
                                    
                                    <img src={google} alt="" width="30px" style={{"margin": "0 5px"}}/>  Log In With Google
                                </Button> */}

                                <p className="text-center mt-5">Don't have an account? 
                                    <Link to="/signup" style={{"textDecoration": "none"}}> Sign Up</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;