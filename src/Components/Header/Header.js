import React from 'react';
import { Container, Nav, Navbar, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';
import logo from './logo.png'

const Header = () => {

    // using stat 

  const {user, logOut, admin} = useAuth();


  

  console.log(admin.isAdmin)

  const style = {
    "color": '#000',
    "fontWeight": 'bold',
    "cursor": 'pointer'
  }

    return (

        // navbar section 

            <Navbar style={{backgroundColor: '#EFF4F5'}} expand="lg" sticky="top" className="shadow-lg">
  <Container>
    <Navbar.Brand as={NavLink} to="/" className="logo">
        <img src={logo} alt="" className="img-responsive" width="auto" height="auto"/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="m-auto my-2 my-lg-0"
        style={{ "maxHeight": '100px' }}
        navbarScroll
      >

        {/* navlink section  */}

        <Nav.Link as={NavLink} activeStyle={style} to="/home">Home</Nav.Link>
        <Nav.Link as={NavLink} activeStyle={style} to="/apartments">Explore Apartments</Nav.Link>
        <Nav.Link as={NavLink} activeStyle={style} to="/about-us">About Us</Nav.Link>
        <Nav.Link as={NavLink} activeStyle={style} to="/contact-us">Contact Us</Nav.Link>
      </Nav>

          {/* dynamic login and logout button show  */}

        {
          user?.email 
          ? 
          <Dropdown style={{"outline": "none"}} className="me-5">
            <Dropdown.Toggle variant="none" id="dropdown-basic" className="outline-none">
              
              <i class="fas fa-columns"> </i> Dashboard
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>{user.photoURL ? <img src={user?.photoURL} alt="" className="img-fluid rounded-circle me-2" style={{"width": "35px"}}/> : <i class="fas fa-user-circle"></i> } {user?.displayName}</Dropdown.Item>
              {
                !admin.isAdmin === (true || null || undefined) && <>
                <Dropdown.Item as={NavLink} to="/my-orders">My Orders</Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/pay">Pay</Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/dashboard/add-review">Review</Dropdown.Item>
              </>
              }
              
              {
                admin.isAdmin === true
                && 
                <> 
                <Dropdown.Item as={NavLink} to="/manage-orders">Manage All Orders</Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/dashboard/add-appartment">Add An Apartment</Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/dashboard/make-admin">Make An Admin</Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/dashboard/manage-apartments">Manage Apartments</Dropdown.Item>
                </>
              }
              <Dropdown.Item as={Button} onClick={logOut}>Log Out</Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>
           :
           <Nav.Link as={NavLink} to="/login" activeStyle={style} className="me-2 ">
            <span><i className="fas fa-sign-in-alt"></i> <span className="btn__login">Log In / Sign Up</span></span>
        </Nav.Link>
        }
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;