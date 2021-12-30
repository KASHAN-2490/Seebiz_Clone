import React, {useState} from 'react';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Form, FormControl, NavDropdown } from 'react-bootstrap';
import { NavLink, useLocation } from "react-router-dom";
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import logo from '../logo.svg'
import Dropdownlist from './dropdownlist';
import Logout from '../Components/logout';
import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';
import socket from './io';

// import { useContext } from 'react';
// import { userContext } from '../App';

import { useSelector } from 'react-redux';




function Header() {

    const [open, setOpen] = useState(false);

    // const [clear, setClear] = useState(true);

    let [count, setCount] = useState(0);

    const [data, setData] = useState([]);


    const cookies = new Cookies();

    const history = useHistory();

    const token = cookies.get('Token');
    // console.log("token: ", token);

    // let user = window.localStorage.getItem(true);

    const myValue = useSelector((state) => state.keyValue.clickdata);
    // console.log("Login: ", myValue);
  

    let loc = useLocation();
    // console.log(loc.pathname);

    if (loc.pathname === '/signin' || loc.pathname === '/signup') {

        return (<div></div>);
    }

    const goback = () => {
        history.push('/');
    }


    function notificationsLabel(counts) {
        if (counts === 0) {
            return 'no notifications';
        }
        if (counts > 99) {
            return 'more than 99 notifications';
        }
        return `${counts} notifications`;
    }


    socket.on('message', function (datas) { 
        setData([...data, datas.msg]);
        setCount(count += datas.count);
    });

    // socket.on('message1', function(datas){
    //     console.log(datas);
    // }); 

    
    const notifManu = () => {
        setOpen(!open);
        setCount(0);
    }

    // const markRead = () => {
    //     setData([])
    // }
    
    // console.log(data) 
    
    // socket.emit('clientEvent', 'Sent an event from the client!');

    return (
        <div>
            <Navbar bg="" variant="light" fixed="top" className="navbar">

                <Navbar.Brand ><img src={logo} alt="logo" className="logo" onClick={goback} />

                    <span className="logotext">See Your Buiseness Grow</span>
                </Navbar.Brand>

                <div className="drp">
                    <Dropdownlist />
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


                {!token ?

                    <Nav className="nav mr-auto">

                        {/* <Nav.Link as={NavLink} to="/" >Home</Nav.Link> */}
                        <Nav.Link as={NavLink} to="/signin"><Button variant="success" size="md" className="btn">Sign In</Button></Nav.Link>
                        <h6>or</h6>
                        <Nav.Link as={NavLink} to="/signup"><Button variant="primary" size="md" className="btn">Become a Seller</Button></Nav.Link>

                        <div className="bar2"><i className="fas fa-bars"></i>
                            <div className="drp2">
                                <NavDropdown.Item href="#">About SeeBiz</NavDropdown.Item>
                                <NavDropdown.Item href="#">Help Center</NavDropdown.Item>
                                <NavDropdown.Item href="#">Blog</NavDropdown.Item>
                            </div>
                        </div>

                    </Nav>

                    :

                    <Nav className="nav mr-auto">
                        <div className="homeValue">
                            <Nav.Link >{myValue}</Nav.Link>
                        </div>

                        <Nav.Link as={NavLink} to="/home"><i className="fas fa-home"></i></Nav.Link>
                        {/* <Nav.Link as={NavLink} to="/home"><i className="fas fa-bell"></i></Nav.Link> */}
                        <div className='notifParent'>
                            <IconButton aria-label={notificationsLabel(count)} onClick={notifManu} className='notification'>
                                <Badge badgeContent={count} color="primary" >
                                    <NotificationsIcon className='noticon' />
                                </Badge>
                            </IconButton>
                            {open &&
                                <div className="notifmanu">
                                    <Button className='notbtn' onClick={() => setData([])}>Clear</Button>
                                
                                    {data.map((item, index)=>{
                                        return (
                                         <p key={index}>{item}</p> 
                                        )
                                    })}
                                   
                                </div>
                            }
                        </div>

                        <div className="btn">
                            <Logout />
                        </div>
                    </Nav>

                }

            </Navbar>

        </div>
    );
}


export default Header;
