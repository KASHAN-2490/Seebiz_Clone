import React, { useState } from 'react';
import './Leftbar.css';
// import { catalogData } from './home';
import { Col } from 'react-bootstrap';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
// import {Button} from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';





function Leftbar(props) {
  
    const myState = useSelector((state) => state.categoryitems.clickdata);

    

    const [open, setOpen] = useState([]);

    // const [style, setStyle] = useState("cont");

    var arr = []

    const handleClick = (id, slug) => {

        // setSlugg(slug);

        if (open.includes(id)) {
            setOpen(open.filter((ids) => ids !== id))
        } else {
            let newOpen = [...open]
            newOpen.push(id)
            // console.log(newOpen)
            setOpen(newOpen)
        }
    }


    var x = myState;
    

    var listvalue = x.childNodes;

    // console.log("name", x.slug);

    var isListValue;
    if (listvalue) {
        isListValue = true;

    }


    return (

        <Col md={3}>
            <div className="sidebar">
                {/* {isListValue ?  arr.push(listvalue._id) : null  } */}

                <div className="top">
                    <div className="topicon">
                        <i className="fas fa-warehouse"></i>
                    </div>

                    <div className="toptext">
                        <h6>All Catagories</h6>
                        <p>In {myState.name}</p>
                    </div>
                </div>

                <div>
                    <List
                        sx={{
                            width: '100%', bgcolor: 'background.paper', height: "1000px", overflow: 'auto',
                            maxHeight: 1000, '& button': { paddingTop: 2 },
                        }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"  >
                        {
                            isListValue
                                ?

                                listvalue.map((data) => {
                                    return (

                                        <div key={data.name}>
                                            <div className="non">{arr.push(data._id)}</div>

                                            {/* <div className="contbtn"> */}
                                            <button onClick={() => handleClick(data._id, data.slug)} key={data.id} variant="light" className="btn1">

                                                {open.includes(data._id, data.slug) ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}

                                            </button>

                                            <button onClick={() => props.link1(data.link)} className="btn2">
                                                <ListItemText as={NavLink} to={`/categories/${myState.link}/${data.slug}`} className="navlink">{data.name}</ListItemText>
                                            </button>

                                            {/* </div> */}

                                            <Collapse in={open.includes(data._id)} timeout="auto" unmountOnExit key={data.breadcrumb}>

                                                {/* {open.includes(data._id) ? */}

                                                <List disablePadding key={data.name}>
                                                    {
                                                        data.childNodes.map((data2) => {
                                                            return (

                                                                <ListItemButton sx={{ pl: 4 }} key={data2.slug}>
                                                                    <i className="fas fa-circle crl"></i>
                                                                    <ListItemText as={NavLink} to={`/categories/${data2.link}`} primary={data2.name} key={data2.id} onClick={() => props.link1(data2.link)} className="navlink"/>
                                                                </ListItemButton>
                                                                     // ${myState.link}/${slugg}/${data2.slug}
                                                            );
                                                        })
                                                    }
                                                </List>

                                                {/* : null
                                                } */}

                                            </Collapse>


                                        </div>
                                    );
                                })
                                : <div></div>
                        }

                    </List>
                </div>

            </div>
        </Col>

    );
}

// const mapStateToProps = state => ({
//     clickdata: state.clickeditems.clickdata
// })

// const mapDispatchToProps = dispatch => ({
//     //  dataHandler:data => dispatch(clickedData(data))
// })

export default Leftbar

// connect(mapStateToProps, mapDispatchToProps)(Sidebar)