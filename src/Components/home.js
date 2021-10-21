import React, { useState } from 'react';
import './Home.css'
import Sidebar from './sidebar';
import Sidebar2 from './sidebar2';
import Middle from './middle';
import Navebar from './navbar';



// export const catalogData = React.createContext();


function Home() {


  // let [dta,setdta] = useState()

  const [l2val, setL2val] = useState()




  // const hello2 = (value) => {
  //      catalog = value;
  //      console.log(catalog);
  // }
  // console.log(hello2);

  // function hello(item) {


  // }

  // console.log(L1);
  const L2link = (props) => {
    setL2val(props)
  }



  return (
    // <catalogData.Provider value={L2link}>
    <div className="home row-sm-12" >
      <div>
        <Navebar />
        {/* navdata = {hello2} */}
      </div>
      <div>
        <Sidebar link1={L2link} />
      </div>

      <div>
        <Sidebar2 />
      </div>

      <div>
        <Middle value={l2val} />
      </div>
    </div>
    // </catalogData.Provider>
  );
}
export default Home;