import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children , ...rest}) => {

  const {user, isLoading} = useAuth();

  if(isLoading){
    return <div className="text-center my-5"><Spinner className="my-5" animation="border" variant="primary" className="text-center"/></div>
  }

  return (
      <Route
      {...rest}
      render={({ location }) => user.email ? children : <Redirect to={{
          pathname:"/login",
          state: {from: location}
      }}></Redirect>}
      >
          
      </Route>
  );
};

export default PrivateRoute;