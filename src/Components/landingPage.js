import React from 'react';
import './Landingpage.css';
import { Carousel, Button } from 'react-bootstrap';

import img1 from '../images/banner1.png'
import img2 from '../images/banner2.png'
import img3 from '../images/banner3.png'


// import { useContext } from 'react';
// import { userContext } from '../App';

function Landingpage() {

  // const { key } = useContext(userContext)

  //   console.log("landingpage "+key);


  return (
    <div className="landing">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="parent">
              <h2>OXFORD FABRIC LAPTOP BACKPACK</h2>
              <p>AUGUR 15.6”Classic Laptop Backpack Oxford Fabric Travel Rucksack for Men Women (Grey)</p>
              <h2>$3.75</h2>
              <Button variant="outline-dark">More Products</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="parent">
              <h2>WOMEN'S SUN HAT</h2>
              <p>Enchanting Flamingos print on Fedora - A perfect summer <br />
               wear Fitted Closure - Made in China</p>
              <h2>$3.75</h2>
              <Button variant="outline-dark">More Products</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="parent">
              <h2>HOUSEHOLD SUPPLIES</h2>
              <p> A huge variety of home supplies from all the renowned brands <br />
               are available at the best wholesale prices! </p>
              <Button variant="outline-dark">More Products</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Landingpage;