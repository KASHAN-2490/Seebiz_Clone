import React from 'react';
import './Sidebar.css';
import { Image } from 'react-bootstrap';
import img from '../images/fedex-ad.jfif'
import img2 from '../images/ims-ad.jfif'
import { Divider } from '@mui/material';
import List from '@mui/material/List';




function Sidebar2() {
    return (

        <div className="sidebar2 col-sm-3">
            <div>
                <Image src={img} fluid className="image" />
                <Image src={img2} fluid className="image" />
            </div>

            <div className="logodiv">
                <span className="span">
                    <i className="linklogo fas fa-link"></i>
                </span>

                <h6><b>Related Links</b></h6>
            </div>

            <Divider />
    

            <List
                sx={{
                    width: '100%', bgcolor: 'background.paper', height: "auto", overflow: 'auto',
                    maxHeight: 600, paddingTop: 1,
                }}
                component="nav"
                aria-labelledby="nested-list-subheader" >

                {/* <div>  */}

                    <ul className="listing">
                        <span><i className="fas fa-angle-double-right"></i></span>
                        <li>The Advantages of Domestic Sourcing and International Supply Chains</li>
                    </ul>

                    <ul className="listing">
                        <span><i className="fas fa-angle-double-right"></i></span>
                        <li>Wholesale Business and the U.S. Wholesale Economy</li>
                    </ul>

                    <ul className="listing">
                        <span><i className="fas fa-angle-double-right"></i></span>
                        <li>SeeBiz Companies: North Star Printing</li>
                    </ul>

                    <ul className="listing">
                        <span><i className="fas fa-angle-double-right"></i></span>
                        <li>SeeBiz Companies: Ace Sewing Machine Company</li>
                    </ul>

                    <ul className="listing">
                        <span><i className="fas fa-angle-double-right"></i></span>
                        <li>SeeBiz Companies: Ace Handbags</li>
                    </ul>

                    <ul className="listing">
                        <span><i className="fas fa-angle-double-right"></i></span>
                        <li>SeeBiz Companies: Islands Fabrics</li>
                    </ul>

                    <ul className="listing">
                        <span><i className="fas fa-angle-double-right"></i></span>
                        <li>SeeBiz Companies: K&S Wholesale</li>
                    </ul>

                    <ul className="listing">
                        <span><i className="fas fa-angle-double-right"></i></span>
                        <li>SeeBiz Companies: Perfumes Los Angeles</li>
                    </ul>

                    <ul className="listing">
                        <span><i className="fas fa-angle-double-right"></i></span>
                        <li>SeeBiz Companies: Islands Fabrics</li>
                    </ul>

                    <ul className="listing">
                        <span><i className="fas fa-angle-double-right"></i></span>
                        <li>SeeBiz Companies: K&S Wholesale</li>
                    </ul>

                    <ul className="listing">
                        <span><i className="fas fa-angle-double-right"></i></span>
                        <li>SeeBiz Companies: Perfumes Los Angeles</li>
                    </ul>

                    <ul className="listing">
                        <span><i className="fas fa-angle-double-right"></i></span>
                        <li>SeeBiz Companies: K&S Wholesale</li>
                    </ul>

                    <ul className="listing">
                        <span><i className="fas fa-angle-double-right"></i></span>
                        <li>SeeBiz Companies: Perfumes Los Angeles</li>
                    </ul>

                {/* </div> */}
            </List>

        </div>
    )
}

export default Sidebar2;