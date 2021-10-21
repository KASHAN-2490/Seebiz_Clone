import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Fab} from "@mui/material"
import './Footer.css'
import logo from '../logo.svg'

const FooterPage = () => {
    return (
        <MDBFooter color="blue" className="footer font-small pt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="3">
                        <div className="footlogo">
                            <div className="log">
                                <img src={logo} alt="logo" className="logo" />
                                <span className="logotext">See Your Buiseness Grow</span>
                            </div>

                            <p>
                                SeeBiz is an online sales portal and networking platform that allows manufacturers, distributors,
                                wholesalers and retailers to exchange goods and connect with each other at one place.
                            </p>
                            <p>
                                By providing a social platform where businesses can conveniently connect with their desired businesses,
                                SeeBiz puts an end to the hassle that comes with traditional ways of doing wholesale business
                            </p>
                        </div>
                    </MDBCol>

                    <MDBCol md="3">
                        <h5 className="title1">Resources</h5>
                        <br />
                        <div>

                            <ul className="list1">
                                <span><i className="fas fa-angle-double-right"></i></span>
                                <li>SeeBiz Blog</li>
                            </ul>

                            <ul className="list1">
                                <span><i className="fas fa-angle-double-right"></i></span>
                                <li>SeeBiz Companies: North Star Printing</li>
                            </ul>

                            <ul className="list1">
                                <span><i className="fas fa-angle-double-right"></i></span>
                                <li>SeeBiz Companies: Iseland Fabrics</li>
                            </ul>

                            <ul className="list1">
                                <span><i className="fas fa-angle-double-right"></i></span>
                                <li>ASD Market Week 2019</li>
                            </ul>

                            <ul className="list1">
                                <span><i className="fas fa-angle-double-right"></i></span>
                                <li>The Benefits of Purchase Order</li>
                            </ul>

                            <ul className="list1">
                                <span><i className="fas fa-angle-double-right"></i></span>
                                <li>Terms And Conditions</li>
                            </ul>

                            <ul className="list1">
                                <span><i className="fas fa-angle-double-right"></i></span>
                                <li>Privacy Policy</li>
                            </ul>

                        </div>
                    </MDBCol>

                    <MDBCol md="3">
                        <h5 className="title1">Tutorials</h5>
                        <br />
                        <div>

                            <ul className="list1">
                                <span><i className="fas fa-angle-double-right"></i></span>
                                <li>How to create account?</li>
                            </ul>

                            <ul className="list1">
                                <span><i className="fas fa-angle-double-right"></i></span>
                                <li>How to add a vendor as contact?</li>
                            </ul>

                            <ul className="list1">
                                <span><i className="fas fa-angle-double-right"></i></span>
                                <li>How to create and organize contact groups?</li>
                            </ul>

                            <ul className="list1">
                                <span><i className="fas fa-angle-double-right"></i></span>
                                <li>How to Manage Your Products?</li>
                            </ul>

                            <ul className="list1">
                                <span><i className="fas fa-angle-double-right"></i></span>
                                <li>How to Share Content on Newsfeed?</li>
                            </ul>

                        </div>
                    </MDBCol>

                    <MDBCol md="3">
                        <h5 className="title1">Contact us</h5>
                        <br />
                        <ul className="list2">
                            <li><i className="fas fa-home mr-3 "></i>&nbsp; SeeBiz, Inc.
                                Los Angeles, CA 90007 United states</li>
                            <li><i className="fas fa-envelope mr-3 "></i>&nbsp; info@example.com</li>
                            <li><i className="fas fa-phone mr-3 "></i>&nbsp; + 01 234 567 88</li>
                        </ul>
                        <div className="icon">
                            <Fab size="small" color="" aria-label="edit">
                            <i className="fab fa-facebook-f"></i>
                            </Fab>
                            &nbsp;&nbsp;&nbsp;
                            <Fab size="small" color="" aria-label="edit">
                            <i className="fab fa-twitter"></i>
                            </Fab>
                            &nbsp;&nbsp;&nbsp;
                            <Fab size="small" color="" aria-label="edit">
                            <i className="fab fa-youtube"></i>
                            </Fab>
                            &nbsp;&nbsp;&nbsp;
                            <Fab size="small" color="" aria-label="edit">
                            <i className="fab fa-instagram"></i>
                            </Fab>
                        </div>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.seebiz.com"> Seebiz Inc</a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;