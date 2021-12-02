import React, { useState } from 'react';

import Leftbar from './leftbar';
import Rightbar from './rightbar';
import Middle from './middle';
// import Header from './header';

// import { useContext } from 'react';
// import { userContext } from '../App';


// import { useParams } from "react-router-dom";



// export const catalogData = React.createContext();


function Categories() {


  // const {key} = useContext(userContext);
  // console.log("Categories "+key);

  // const name = useParams();
  // console.log(name);
  

  const [l2val, setL2val] = useState()


  const L2link = (props) => {
    setL2val(props)
  }



  return (
    // <catalogData.Provider value={L2link}>
    <div className="row-sm-12" >
      {/* <div>
      <Header />
      </div> */}
     
      <div>
        <Leftbar link1={L2link} />
      </div>

      <div>
        <Rightbar />
      </div>

      <div>
        <Middle value={l2val} />
      </div>
    </div>
    // </catalogData.Provider>
  );
}
export default Categories;