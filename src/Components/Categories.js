import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import Leftbar from './leftbar';
import Rightbar from './rightbar';
import Middle from './middle';
import { Col } from 'react-bootstrap';

// import { Switch, Route, useRouteMatch } from 'react-router-dom';

// import { useParams } from 'react-router-dom';



function Categories() {

  // const { path } = useRouteMatch();
  // console.log("path ", path);

  // const { name3 } = useParams();
  // console.log("params", name3);


  const [l2val, setL2val] = useState()

  

  // console.log("page1 ", page)

  const L2link = async (props) => {
    setL2val(props)

  }



  return (
    <>
      <Row>
        <Leftbar link1={L2link} />
        <Middle value={l2val}/>
        <Col md={3}><Rightbar /></Col>
      </Row>



      {/* <Switch>
        
        <Route exact path={`${path}/:name`} >
          <Row>
            <Leftbar link1={L2link} />
            <Middle value={l2val} />
          </Row>
        </Route>

        <Route exact path={`${path}/:name/:name2`} >
          <Row>
            <Leftbar link1={L2link} />
            <Middle value={l2val} />
          </Row>
        </Route>

        <Route path={`${path}/:name/:name2/:name3`} >
          <Row>
            <Leftbar link1={L2link} />
            <Middle value={l2val} />
          </Row>
        </Route>
      </Switch> */}

    </>
  );
}
export default Categories;