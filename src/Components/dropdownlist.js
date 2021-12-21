import React, { useEffect, useState } from 'react';
import './Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Dropdown, NavDropdown, Button } from 'react-bootstrap';

import { clickedData } from "../Services/Action/action";

import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";





function Dropdownlist() {


    const dispatch = useDispatch();

    const [data, setData] = useState([])



    const getDeta = async () => {
        const response = await fetch('https://dev.api.seebiz.com/api/1.0/home/fetchCategoryByName?page=menu');

        setData(await response.json());
        // console.log(data);
    }

    useEffect(() => {
        getDeta();
    }, [])


    const storeData = async (item) => {
        dispatch(clickedData(item));

    }



    return (
        <div className="main">
            <Button variant="Light" size="md" className="btn" >
                <i className="fas fa-bars bar"></i>&nbsp; Categories &nbsp;<i className="fas fa-caret-down drop"></i>
            </Button>

            <div className="mainlist">

                <div className="mainlist2">
                    {
                        data.map((item) => {
                            return (
                                // {`/categories/${item.L1}`}
                                <div key={item.L1}>
                                    <NavDropdown.Item as={NavLink} to={`/categories/${item.link}`} className="list" onClick={() => storeData(item)}>
                                        {/* <i className="fas fa-tshirt"></i>&nbsp; {item.name} */}
                                        {item.name}

                                        <div className="child" key={data.name}>
                                            {
                                                item.childNodes.map((data) => {
                                                    return (
                                                        <div className="sb1" key={data.L2}>

                                                            <b key={data.link}>{data.L2}</b>

                                                            {
                                                                data.childNodes.map((data2) => {
                                                                    return (

                                                                        <ul className="ba" key={data2.breadcrumb}>
                                                                            <li key={data2.id}>{data2.L3}</li>
                                                                        </ul>

                                                                    );
                                                                })
                                                            }

                                                        </div>

                                                    );
                                                })
                                            }

                                        </div>



                                    </NavDropdown.Item>
                                    <Dropdown.Divider className="divider" />

                                </div>

                            );
                        })
                    }

                </div>


                {/* <div className="mainlist3">
                    
                </div> */}

                <div className="child2">
                <NavLink to={`/allcategories`}>All Catagories</NavLink>
                    {/* <p></p> */}
                </div>

            </div>
        </div>
    );

}

// const mapStateToProps = state => ({
//     clickdata: state.clickeditems.clickdata.name
// })

// const mapDispatchToProps = dispatch => ({
//     dataHandler: data => dispatch(clickedData(data))
// })

export default Dropdownlist

// connect(mapStateToProps, mapDispatchToProps)(Dropdownlist)






