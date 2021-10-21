import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Form, FormControl, NavDropdown } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import logo from '../logo.svg'
import Dropdownlist from './dropdownlist';




function Navebar() {

    // const hello = (value) => {
    //     const x = value;
    //     console.log(x);
    //     props.navdata(x)
    // }
    
    return (
        <div>
            <Navbar bg="" variant="light" fixed="top" className="navbar">

                <Navbar.Brand ><img src={logo} alt="logo" className="logo" />
                    <span className="logotext">See Your Buiseness Grow</span>
                </Navbar.Brand>

                <div className="drp">
                    <Dropdownlist />       {/* drpdata={hello} */}
                </div>

                &nbsp;&nbsp;

                <Form className="search d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search Product Name Buiseness Name etc."
                        className="mr-6 srch"
                        aria-label="Search"
                    />
                    
                </Form>

                <Nav className="nav mr-auto">

                    {/* <Nav.Link as={NavLink} to="/" >Home</Nav.Link> */}
                    <Nav.Link as={NavLink} to="/signin"><Button variant="success" size="md" className="btn">Sign In</Button></Nav.Link>
                    <h6>or</h6>
                    <Nav.Link as={NavLink} to="/signup"><Button variant="primary" size="md" className="btn">Become a Seller</Button></Nav.Link>

                    <div className="bar2"><i className="fas fa-bars"></i>
                        <div className="drp2">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </div>
                    </div>
                    {/* {user === null && <Nav.Link as={NavLink} to="/" >Home</Nav.Link>}
                        {user !== null && <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>}
                        {user === null && <Nav.Link as={NavLink} to="/signin">Log In</Nav.Link>}
                        {user === null && <Nav.Link as={NavLink} to="/signup">Register</Nav.Link>}
                        {user !== null && <Nav.Link as={NavLink} to="/signout">Signout</Nav.Link>} */}
                </Nav>

            </Navbar>

        </div>
    );
}


export default Navebar;
