import React from 'react';
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import logo from '../logo.svg';

import { useHistory } from "react-router-dom";







function Signin() {


  const [state, setState] = useState({ email: "", password: "" })

  const emailHandler = (e) => {
    var emails = e.target.value;
    setState(prevState => ({
      ...prevState,
      email: emails
    }));
  }


  const passwordHandler = (e) => {
    var passwords = e.target.value;
    setState(prevState => ({
      ...prevState,
      password: passwords
    }));
  }

  const history = useHistory();

  const goback = () => {
    history.push('/');
  }

  const Register = () => {
    history.push('/signup');
  }


  const formSubmit = (e) => {

    e.preventDefault();
    // console.log(state.email);
    // console.log(state.password)

    const regemail = new RegExp('^[a-z0-9_.]{4,10}@[a-z]{5}.com$');

    if (regemail.test(state.email)) {
      console.log(state.email);
      console.log("email is valid");
    } else {
      document.getElementById("email").innerHTML = "Please provide correct email with .com at the end";
    }

    if (state.email !== "" && state.password !== "") {

      var users = localStorage.getItem(state.email);
      var user = JSON.parse(users);
      if (user) {
        if (user.password === state.password) {

          // window.sessionStorage.setItem(true, JSON.stringify(user));
          alert("user id valid")


        } else {
          alert("Password is incorrect");
        }

      } else {
        alert("no user found");
      }
    }


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

      <div className="formParent offset-sm-3">
        <Form action="#" className="form1" id="forms" onSubmit={formSubmit}>

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={state.email} placeholder="Enter email" onChange={emailHandler} className="input" required />
            <span id="email" className="text-danger font-weight-bold"></span>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={state.password} placeholder="Enter Password" onChange={passwordHandler} required />
            <span id="password1" className="text-danger font-weight-bold"></span>
            <span id="password2" className="text-danger font-weight-bold"></span>
            <span id="password3" className="text-danger font-weight-bold"></span>
          </Form.Group>

          <div className="checkb">
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <span className="offset-sm-5">Forgot Password?</span>
          </div>

          <div className="Subbtn">
            <Button variant="secondary" onClick={goback}>Cancel</Button>
            <span className="offset-sm-1"></span>
            <Button type="submit" variant="success">Submit</Button>
          </div>

          <div className="ortext2"></div>

          <p className="para" onClick={Register}>Register</p>

        </Form>

        {/* <div className="otherpart" >
        <br /> 
        <h1>Interprise <br /> Productivity,<br /> Redefined</h1>

        <p>We can combine the two by making the React state be the “single source of truth”.
          Then the React component that renders a form also controls what happens in that form on subsequent user input.
          An input form element whose value is controlled by React in this way is called a “controlled component”.</p>

        <br />
      </div> */}

      </div>

    </div>
  )
}


export default Signin;







                            //        Class Component



// class Signin extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       email: "",
//       password: ""

//     }
//   }

//   emailHandler = (e) => {
//     const emails = e.target.value;
//     this.setState({ email: emails })
//   }

//   passwordHandler = (e) => {
//     const passwords = e.target.value;
//     this.setState({ password: passwords })
//   }

//   formSubmit = () => {

//     const regemail = new RegExp('^[a-z0-9_.]{5,10}@[a-z]{5}.com$');

//     if (regemail.test(this.state.email)) {
//       console.log(this.state.email);
//       console.log("email is valid");
//     } else {
//       document.getElementById("email").innerHTML = "Please provide correct email with .com at the end";
//     }

//     if (this.state.email !== "" && this.state.password !== "") {

//       var users = localStorage.getItem(this.state.email);
//       var user = JSON.parse(users);
//       if (user) {
//         if (user.password === this.state.password) {
//           document.getElementById("forms").reset();
//           // dispatch({type:"USER", payload:true})
//           alert("User is Valid");


//         } else {
//           alert("Password is incorrect");
//         }

//       } else {
//         alert("no user found");
//       }
//     }

//   }


//   render() {

//     return (
//       <div className="App">
//         <h1>Sign</h1>
//         <Form action="#" className="form" id="forms" onSubmit={this.formSubmit}>

//           <Form.Group className="mb-3" controlId="formGroupEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" value={this.state.email} placeholder="Enter email" onChange={this.emailHandler} required/>
//             <span id="email" className="text-danger font-weight-bold"></span>
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formGroupPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" value={this.state.password} placeholder="Enter Password" onChange={this.passwordHandler} required/>
//             <span id="password1" className="text-danger font-weight-bold"></span>
//             <span id="password2" className="text-danger font-weight-bold"></span>
//             <span id="password3" className="text-danger font-weight-bold"></span>
//           </Form.Group>

//           <Button type="submit" variant="primary">Submit</Button>

//         </Form>
//       </div>
//     );

//   }

// }