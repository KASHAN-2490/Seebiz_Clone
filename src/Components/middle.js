import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Card } from 'react-bootstrap';
import product from '../images/product.jpeg'
import './Middle.css';
import { useParams } from 'react-router-dom';
import { Col } from 'react-bootstrap';

function Middle(props) {


  const { name, name2, name3 } = useParams();
  // console.log("params", name3);

  const [count, setCount] = useState()

  const [data, setData] = useState()

  const [one, setOne] = useState()


  // const myState = useSelector((state) => state.clickeditems.clickdata);

  

  useEffect(() => {

    const firstPage = async () => {

      try {
  
        if (name2 === undefined && name3 === undefined) {
          const response2 = await fetch(`https://dev.api.seebiz.com/api/1.0/category/products/${name}?page=1&limit=20`);
  
          const datas = await response2.json();
          let y = datas.products;
  
          if (y === undefined) {
            const x = "No Product in this Category."
            setData(x)
            setOne(1)
          } else {
  
            const x = y.map((item) => {
              return (
  
                <Card style={{}} key={item.slug}>
                  <Card.Img variant="top" src={product} key={item.discription} />
                  <Card.Body key={item.type}>
                    <Card.Title key={item.type}>{item.sku}</Card.Title>
                    {/* <Card.Text>
                    {item.slug}
                    </Card.Text> */}
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
  
              );
  
            })
            setData(x)
            setOne(1)
          }
  
        } else if (name3 === undefined) {
          const response2 = await fetch(`https://dev.api.seebiz.com/api/1.0/category/products/${name}/${name2}?page=1&limit=20`);
          const datas = await response2.json();
          let y = datas.products;
  
          if (y === undefined) {
            const x = "No Product in this Category."
            setData(x)
            setOne(1)
          } else {
  
            const x = y.map((item) => {
              return (
  
                <Card style={{}} key={item.slug}>
                  <Card.Img variant="top" src={product} key={item.discription} />
                  <Card.Body key={item.type}>
                    <Card.Title key={item.type}>{item.sku}</Card.Title>
                    {/* <Card.Text>
                    {item.slug}
                    </Card.Text> */}
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
  
              );
  
            })
            setData(x)
            setOne(1)
          }
  
        } else {
  
          const response2 = await fetch(`https://dev.api.seebiz.com/api/1.0/category/products/${name}/${name2}/${name3}?page=1&limit=20`);
          const datas = await response2.json();
          let y = datas.products;
  
          if (y === undefined) {
            const x = "No Product in this Category."
            setData(x)
            setOne(1)
          } else {
  
            const x = y.map((item) => {
              return (
  
                <Card style={{}} key={item.slug}>
                  <Card.Img variant="top" src={product} key={item.discription} />
                  <Card.Body key={item.type}>
                    <Card.Title key={item.type}>{item.sku}</Card.Title>
                    {/* <Card.Text>
                    {item.slug}
                    </Card.Text> */}
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
  
              );
  
            })
            setData(x)
            setOne(1)
          }
  
        }
  
      } catch (err) {
        console.log("<h1>404, Page not found<h1>")
      }
  
    }

    firstPage();
  }, [name, name2, name3])




  // const [page, setPage] = useState()

  useEffect(() => {

    const pageCount = async () => {

      if (name2 === undefined && name3 === undefined) {
        const response = await fetch(`https://dev.api.seebiz.com/api/1.0/category/pagination/${name}`);
  
        const variable = await response.json();
  
        const page = variable.total / 20
  
        if (page <= 1) {
          setCount(1);
        } else if (page > 1 && page <= 2) {
          setCount(2);
        } else if (page > 2 && page <= 3) {
          setCount(3);
        } else if (page > 3 && page <= 4) {
          setCount(4);
        } else if (page > 4 && page <= 5) {
          setCount(5);
        } else if (page > 5 && page <= 6) {
          setCount(6);
        } else if (page > 6 && page <= 7) {
          setCount(7);
        } else if (page > 7 && page <= 8) {
          setCount(8);
        } else if (page > 8 && page <= 9) {
          setCount(9);
        } else if (page > 9 && page <= 10) {
          setCount(10);
        } else {
          setCount(20);
        }
  
      } else if ((name3 === undefined)) {
        const response = await fetch(`https://dev.api.seebiz.com/api/1.0/category/pagination/${name}/${name2}`);
  
        const variable = await response.json();
  
        const page = variable.total / 20
  
        if (page <= 1) {
          setCount(1);
        } else if (page > 1 && page <= 2) {
          setCount(2);
        } else if (page > 2 && page <= 3) {
          setCount(3);
        } else if (page > 3 && page <= 4) {
          setCount(4);
        } else if (page > 4 && page <= 5) {
          setCount(5);
        } else if (page > 5 && page <= 6) {
          setCount(6);
        } else if (page > 6 && page <= 7) {
          setCount(7);
        } else if (page > 7 && page <= 8) {
          setCount(8);
        } else if (page > 8 && page <= 9) {
          setCount(9);
        } else if (page > 9 && page <= 10) {
          setCount(10);
        } else {
          setCount(20);
        }
  
      }
      else {
        const response = await fetch(`https://dev.api.seebiz.com/api/1.0/category/pagination/${name}/${name2}/${name3}`);
  
        const variable = await response.json();
  
        const page = variable.total / 20
  
        if (page <= 1) {
          setCount(1);
        } else if (page > 1 && page <= 2) {
          setCount(2);
        } else if (page > 2 && page <= 3) {
          setCount(3);
        } else if (page > 3 && page <= 4) {
          setCount(4);
        } else if (page > 4 && page <= 5) {
          setCount(5);
        } else if (page > 5 && page <= 6) {
          setCount(6);
        } else if (page > 6 && page <= 7) {
          setCount(7);
        } else if (page > 7 && page <= 8) {
          setCount(8);
        } else if (page > 8 && page <= 9) {
          setCount(9);
        } else if (page > 9 && page <= 10) {
          setCount(10);
        } else {
          setCount(20);
        }
      }
  
    }

    pageCount();
  }, [name, name2, name3])


  const counting = async (event, page) => {

    setOne(page)


    if (name2 === undefined && name3 === undefined) {
      const response = await fetch(`https://dev.api.seebiz.com/api/1.0/category/products/${name}?page=${page}&limit=20`);

      const datas = await response.json();

      let y = datas.products;
      // console.log(y)

      if (y === undefined) {
        const x = "No Product in this Category."
        setData(x)
      } else {
        const x = y.map((item) => {
          return (

            <Card style={{}} key={item.slug}>
              <Card.Img variant="top" src={product} key={item.discription} />
              <Card.Body key={item.type}>
                <Card.Title key={item.type}>{item.sku}</Card.Title>
                {/* <Card.Text>
                {item.slug}
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>

          );

        })
        setData(x)
      }

    } else if (name3 === undefined) {

      const response = await fetch(`https://dev.api.seebiz.com/api/1.0/category/products/${name}/${name2}?page=${page}&limit=20`);

      const datas = await response.json();

      let y = datas.products;
      // console.log(y)

      if (y === undefined) {
        const x = "No Product in this Category."
        setData(x)
      } else {
        const x = y.map((item) => {
          return (

            <Card style={{}} key={item.slug}>
              <Card.Img variant="top" src={product} key={item.discription} />
              <Card.Body key={item.type}>
                <Card.Title key={item.type}>{item.sku}</Card.Title>
                {/* <Card.Text>
                {item.slug}
                </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>

          );

        })
        setData(x)
      }

    } else {

      const response = await fetch(`https://dev.api.seebiz.com/api/1.0/category/products/${name}/${name2}/${name3}?page=${page}&limit=20`);

      const datas = await response.json();

      let y = datas.products;
      // console.log(y)

      if (y === undefined) {
        const x = "No Product in this Category."
        setData(x)
      } else {
        const x = y.map((item) => {
          return (

            <Card style={{}} key={item.slug}>
              <Card.Img variant="top" src={product} key={item.discription} />
              <Card.Body key={item.type}>
                <Card.Title key={item.type}>{item.sku}</Card.Title>
                {/* <Card.Text>
              {item.slug}
              </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>

          );

        })
        setData(x)
      }

    }



  }



  return (
    <Col md={6}>
      <div className="middle">
        <div className='product'>
          {/* <p>{myState.link}</p> */}
          {/* {props.value} */}
          <div className='childproduct'>{data}</div>
        </div>
        <div className='pagination'>
          <Stack spacing={2}>
            <Pagination count={count} variant="outlined" page={Number(one)} shape="rounded" color="primary" onChange={counting} />
            {/* {one} */}
          </Stack>
        </div>
      </div>
    </Col>
  )
}

export default Middle


