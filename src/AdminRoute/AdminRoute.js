import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';

const AdminRoute = ({ children , ...rest}) => {

  const {user, isLoading, admin} = useAuth();
  const {isAdmin} = admin;

  if(isLoading){
    return <div className="text-center my-5"><Spinner className="my-5" animation="border" variant="primary" className="text-center"/></div>
  }

  return (
      <Route
      {...rest}
      render={({ location }) => user.email && isAdmin === true ? children : <Redirect to={{
          pathname:"/home",
          state: {from: location}
      }}></Redirect>}
      >
          
      </Route>
  );
};

export default AdminRoute;