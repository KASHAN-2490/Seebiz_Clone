import React, { useState } from 'react';
import './Sidebar.css';
// import { catalogData } from './home';


import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
// import {Button} from 'react-bootstrap'

import { useSelector } from 'react-redux';






function Sidebar(props) {

    const myState = useSelector((state) => state.clickeditems.clickdata);


    // var hello = useContext(catalogData);

    const [open, setOpen] = useState([]);

    // const [style, setStyle] = useState("cont");

    var arr = []

    const handleClick = (id) => {

        // console.log(id);

        if (open.includes(id)) {
            setOpen(open.filter((ids) => ids !== id))
            console.log(open)
           } else {
            let newOpen = [...open]
            newOpen.push(id)
            console.log(newOpen)
            setOpen(newOpen)
           } 

        // switch (arr.indexOf(id)) {
        //     case 0:
        //         setOpen(!open)
        //         break;
        //     case 1:
        //         setOpen(!open)
        //         break;
        //     case 2:
        //         setOpen(!open)
        //         break;
        //     default:
        //         setOpen(open)
        // }

    }


    var x = myState;


    var listvalue = x.childNodes;


    var isListValue;
    if (listvalue) {
        isListValue = true;

    }




    return (
        <>
            {/* {isListValue ?  arr.push(listvalue._id) : null  } */}
            {
                isListValue
                    ?

                    <div className="sidebar col-sm-3">

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

                                    listvalue.map((data) => {
                                        return (

                                            <div key={data.name}>
                                                <div className="non">{arr.push(data._id)}</div>

                                                {/* <div className="contbtn"> */}
                                                <button onClick={() => handleClick(data._id)} key={data.id} variant="light" className="btn1">

                                                    {open.includes(data._id) ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}

                                                </button>

                                                <button onClick={() => props.link1(data.breadcrumb)} className="btn2">
                                                    <b>{data.name}</b>
                                                </button>

                                                {/* </div> */}

                                                <Collapse in={open.includes(data._id)} timeout="auto" unmountOnExit key={data.breadcrumb}>
                                                    
                                                {/* {open.includes(data._id) ? */}

                                                    <List disablePadding key={data.name}>
                                                        {
                                                            data.childNodes.map((data2) => {
                                                                return (

                                                                    <ListItemButton sx={{ pl: 4 }} key={data2.slug}>
                                                                        <ListItemText primary={data2.name} key={data2.id} onClick={() => props.link1(data2.breadcrumb)} />
                                                                    </ListItemButton>

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

                                }
                            </List>
                        </div>

                    </div>
                    : <div></div>
            }
        </>
    );
}

// const mapStateToProps = state => ({
//     clickdata: state.clickeditems.clickdata
// })

// const mapDispatchToProps = dispatch => ({
//     //  dataHandler:data => dispatch(clickedData(data))
// })

export default Sidebar

// connect(mapStateToProps, mapDispatchToProps)(Sidebar)