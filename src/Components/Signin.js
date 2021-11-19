import React from 'react';
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import logo from '../logo.svg';

import { useHistory } from "react-router-dom";

const initialstate = { email: "", password: "", mailerr: "", passerr: "" }

const initialval = {success: "", errormsg: ""};


function Signin() {


  const [state, setState] = useState(initialstate)

  const [message, setMessage] = useState(initialval)

  const emailHandler = (e) => {
    var emails = e.target.value;
    setState(prevState => ({
      ...prevState,
      email: emails
    }));

    const regemail = new RegExp('^[a-z0-9_.]{3,10}@[a-z]{5}.com$');

    if (emails === "") {
      setState(prevState => ({
        ...prevState,
        mailerr: "Email is required"
      }));

    } else if (regemail.test(emails)) {
      setState(prevState => ({
        ...prevState,
        mailerr: ""
      }));

    } else {
      setState(prevState => ({
        ...prevState,
        mailerr: 'Please enter a valid email address.'
      }));
    }
  }

  const regpassword = new RegExp('[a-zA-Z0-9_.]{1,10}');

  const passwordHandler = (e) => {
    var passwords = e.target.value;
    setState(prevState => ({
      ...prevState,
      password: passwords
    }));

    if (passwords === "") {
      setState(prevState => ({
        ...prevState,
        passerr: "Password is required"
      }));

    } else if (regpassword.test(passwords)) {
      setState(prevState => ({
        ...prevState,
        passerr: ""
      }));
    }

  }

  const history = useHistory();

  const goback = () => {
    history.push('/');
  }

  const Register = () => {
    history.push('/signup');
  }


  const formSubmit = async (e) => {

    e.preventDefault();


    // if (state.email === "") {
    //   setState(prevState => ({
    //     ...prevState,
    //     mailerr: "Email is required"
    //   }));
    // }

    // if (state.password === "") {
    //   setState(prevState => ({
    //     ...prevState,
    //     passerr: "Password is required"
    //   }));
    // }

    // if (state.mailerr === "" && state.passerr === "") {

    const { email, password } = state

    let info = {
      email: email,
      password: password,
    }

    try {
      const res = await fetch("http://localhost:7000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(info)
      })
      const data = await res.json();

      if (data.emailmsg) {
        setState(prevState => ({
          ...prevState,
          mailerr: data.emailmsg
        }));

      } else if (data.passmsg) {
        setState(prevState => ({
          ...prevState,
          passerr: data.passmsg
        }));
        
      } else if (data.msg) {
        setMessage(prevState => ({
          ...prevState,
          success: data.msg
        }));
        setState(initialstate);
        document.getElementById("forms").reset();
        setTimeout(function () { setMessage(initialval) }, 3000);
        
      } else if (data.errmsg) {
        setMessage(prevState => ({
          ...prevState,
          errormsg: data.errmsg
        }));;
        setTimeout(function () { setMessage(initialval) }, 2000);
      }
      

    } catch (err) {
      console.log(err);
    }

    // }

  }

  return (
    <div className="container1 mt-5 ">
      {/* offset-sm-3"  to center the form */}

      <div className="formheading"><img src={logo} alt="logo" className="logo" onClick={goback} />
        <h6>Sign in to your SeeBiz account</h6>
      </div>

      <div className="btndiv">
        <Button variant="danger" className="sbtn"><i className="fab fa-google"></i></Button>
        <Button variant="primary" className="sbtn"><i className="fab fa-facebook-f"></i></Button>
        <Button variant="info" className="sbtn"><i className="fab fa-linkedin-in"></i></Button>

        <p><b>Sign in with your social media account</b></p>
      </div>

      <div className="ortext offset-sm-4">
        <span className="spans"><p>or</p></span>
      </div>

      <div className="formParent offset-sm-4">
        <Form className="form1" id="forms" onSubmit={formSubmit} method="POST">

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address <span className="star">*</span></Form.Label>
            <Form.Control type="email" value={state.email} placeholder="Enter email" onChange={emailHandler} className="input" />
            <span className="text-danger font-weight-bold">{state.mailerr}</span>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password <span className="star">*</span></Form.Label>
            <Form.Control type="password" value={state.password} placeholder="Enter Password" onChange={passwordHandler} />
            <span className="text-danger font-weight-bold">{state.passerr}</span>
          </Form.Group>

          <div className="checkb">
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <span className="offset-sm-5 forgot">Forgot Password?</span>
          </div>

          <div className="subbtn">
            <Button variant="secondary" onClick={goback}>Cancel</Button>
            <span className="offset-sm-1"></span>
            <Button type="submit" variant="success">Submit</Button>
          </div>

          <div className="message">
            <span className="text-success font-weight-bold">{message.success}</span>
            <span className="text-danger font-weight-bold">{message.errormsg}</span>
            <div className="ortext2"></div>
          </div>

          <p className="para" onClick={Register}>Register</p>

        </Form>

      </div>

    </div>
  )
}


export default Signin;






