import React from 'react';

import Rightbar from './rightbar';
import HomeLeftbar from './homeLeftbar';
import "./Home.css";




function Home() {



    return (
        <>

            <div className="home row-sm-12">
                <div>
                    <HomeLeftbar />
                </div>
                <div>
                    <Rightbar />
                </div>

            </div>

        </>
    );
}
export default Home;