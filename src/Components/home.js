import React from 'react';
import Rightbar from './rightbar';
import HomeLeftbar from './homeLeftbar';
import "./Home.css";
import { Button, Col, Row } from 'react-bootstrap';
import socket from './io';

import { useSelector } from 'react-redux';

function Home() {

    const myValue = useSelector((state) => state.keyValue.clickdata);

    // const [user, setUser] = useState([]);



    //   useEffect(() => {
    //     socket.on('users', function (data) {
    //         const name = data.find((item) =>
    //         item.username !== myValue
    //         )
    //         setUser(name)
    //     })
    //   }, [])




    const pushBtn = (myValue) => {

        socket.emit('clientEvent', {
            sendername: myValue,
            usermsg: `${myValue} like your post!`
        });


    }

    return (
        <>

            <Row>
                <Col md={3}>
                    <HomeLeftbar />
                </Col>
                <Col md={6}>

                    <div className="notificationbtn">
                        <Button variant="primary" size="md" onClick={() => pushBtn(myValue)}>Send Notification</Button>
                    </div>

                    {/* {
                        user.map((item, index)=>{
                            return(
                                <div key={index}>{item.username}</div>
                            )
                        })
                    } */}
                </Col>
                <Col md={3}>
                    <Rightbar />
                </Col>
            </Row>

        </>
    );
}
export default Home;