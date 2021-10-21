import React from 'react';
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../logo.svg';




function SignupForm() {

    const History = useHistory();

    const [state, setState] = useState({
        name: "",
        username: "",
        radio: "",
        email: "",
        password: "",
        degree: "",
        skills: []

    })

    const nameHandler = (e) => {
        const names = e.target.value;
        setState(prevState => ({
            ...prevState,
            name: names
        }));
    }

    const usernameHandler = (e) => {
        const unames = e.target.value;
        setState(prevState => ({
            ...prevState,
            username: unames
        }));
    }

    const radioHandler = (e) => {
        const radioval = e.target.value;
        setState(prevState => ({
            ...prevState,
            radio: radioval
        }));
    }

    const emailHandler = (e) => {
        const emails = e.target.value;
        setState(prevState => ({
            ...prevState,
            email: emails
        }));
    }

    const passwordHandler = (e) => {
        const passwords = e.target.value;
        setState(prevState => ({
            ...prevState,
            password: passwords
        }));
    }

    const degreeHandler = (e) => {
        const degrees = e.target.value;
        setState(prevState => ({
            ...prevState,
            degree: degrees
        }));
    }


    const skillsHandler = () => {
        const skillVal = [];

        const jsValue = document.getElementById("Check1");
        const cssValue = document.getElementById("Check2");
        const htmlValue = document.getElementById("Check3");

        if (jsValue.checked === true) {
            skillVal.push(jsValue.value);
        }

        if (cssValue.checked === true) {
            skillVal.push(cssValue.value);
        }

        if (htmlValue.checked === true) {
            skillVal.push(htmlValue.value);
        }

        setState(prevState => ({
            ...prevState,
            skills: skillVal
        }));
    }


    const history = useHistory();

    const goback = () => {
        history.push('/');
    }

    const signin = () => {
        history.push('/signin');
    }


    const formSubmit = (e) => {
        e.preventDefault();

        // input fields Validation

        const regname = new RegExp('^[A-Za-z ]{3,20}$');
        const regusername = new RegExp('^([a-z]){1,1}([a-z0-9_]){4,10}$');
        const regemail = new RegExp('^[a-z0-9_.]{4,10}@[a-z]{5}.com$');
        const regpassword = new RegExp('^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*()_.]{8,20}$');

        if (regname.test(state.name)) {
            console.log(state.name)
            console.log("name is valid");

        } else {
            document.getElementById("nameerr").innerHTML = "Name length must be between 3 or 20 words and only Alphabets.";
        }

        if (regusername.test(state.username)) {
            console.log(state.username)
            console.log("user name is valid");

        } else {
            document.getElementById("usererr1").innerHTML = "Username length must be between 3 or 20 words <br />";
            document.getElementById("usererr2").innerHTML = "Start with Alphabets <br />";
            document.getElementById("usererr3").innerHTML = "Contains a Number and Underscore";
        }

        if (regemail.test(state.email)) {
            console.log(state.email);
            console.log("email is valid");
        } else {
            document.getElementById("email").innerHTML = "Please provide correct email with .com at the end";
        }


        if (regpassword.test(state.password)) {
            console.log(state.password);
            console.log("password is valid");
        } else {
            document.getElementById("password1").innerHTML = "Password length must be between 8 or 20 words <br />";
            document.getElementById("password2").innerHTML = "Contains a number and combine uppercase and lowercase letters <br />";
            document.getElementById("password3").innerHTML = "Contains a special character";
        }

        // radio button validation

        if (state.radio !== "") {
            console.log(state.radio);
        } else {
            document.getElementById("radioerr").innerHTML = "Please select Gender field";
        }

        // check box validation

        if (state.skills.length !== 0) {
            console.log(state.skills)
        } else {
            document.getElementById("skillserr").innerHTML = "Please select Skills field <br />";
        }

        // select box validation  

        if (state.degree !== "") {
            console.log(state.degree);
        } else {
            document.getElementById("degreerr").innerHTML = "Please select Degree field <br />";
        }

        // Save data in Local Storage

        if (state.name !== "" && state.username !== "" && state.email !== "" && state.password !== ""
            && state.radio !== "" && state.degree !== "" && state.skills.length !== 0) {

            localStorage.setItem(state.email, JSON.stringify(state));
            document.getElementById("forms").reset();

            alert("Form is Submited Now Log in");

            History.push('/signin');
        }

        console.log(state);
    }

    return (
        <div className="container1 mt-5">

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
                <Form className="form" id="forms" action="#" onSubmit={formSubmit}>

                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label><b>Full Name</b></Form.Label>
                        <Form.Control type="text" value={state.name} placeholder="Enter Name" onChange={nameHandler} required />
                        <span id="nameerr" className="text-danger font-weight-bold"></span>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label><b>User Name</b></Form.Label>
                        <Form.Control type="text" value={state.username} placeholder="Enter User Name" onChange={usernameHandler} required />
                        <span id="usererr1" className="text-danger font-weight-bold"></span>
                        <span id="usererr2" className="text-danger font-weight-bold"></span>
                        <span id="usererr3" className="text-danger font-weight-bold"></span>
                    </Form.Group>

                    <Form.Label><b>Gender :</b></Form.Label>
                    <br />
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3" value={state.radio} onChange={radioHandler} >
                            <Form.Check
                                inline
                                label="Male"
                                name="group1"
                                value="Male"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                inline
                                label="Female"
                                name="group1"
                                value="Female"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            <span id="radioerr" className="text-danger font-weight-bold"></span>
                        </div>

                    ))}


                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label><b>Email address</b></Form.Label>
                        <Form.Control type="email" value={state.email} placeholder="Enter email" onChange={emailHandler} required />
                        <span id="email" className="text-danger font-weight-bold"></span>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label><b>Password</b></Form.Label>
                        <Form.Control type="password" value={state.password} placeholder="Enter Password" onChange={passwordHandler} required />
                        <span id="password1" className="text-danger font-weight-bold"></span>
                        <span id="password2" className="text-danger font-weight-bold"></span>
                        <span id="password3" className="text-danger font-weight-bold"></span>
                    </Form.Group>

                    <label>
                        <b>Pick your Degree tittle:</b>
                        <select className="form-select" value={state.degree} onChange={degreeHandler}>
                            <option value="Degree">Degree</option>
                            <option value="Bachelor">Bachelor</option>
                            <option value="Inter">Inter</option>
                            <option value="Matric">Matric</option>
                        </select>
                    </label>
                    <span id="degreerr" className="text-danger font-weight-bold"></span>

                    <br /><br />

                    <Form.Label><b>Skills</b></Form.Label>
                    {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3" value={state.skills} onChange={skillsHandler}>
                            <Form.Check
                                inline
                                label="Js"
                                name="group2"
                                value="Js"
                                type={type}
                                id="Check1"
                            />
                            <Form.Check
                                inline
                                label="Css"
                                name="group2"
                                value="Css"
                                type={type}
                                id="Check2"
                            />
                            <Form.Check
                                inline
                                label="Html"
                                name="group2"
                                value="Html"
                                type={type}
                                id="Check3"
                            />
                            <span id="skillserr" className="text-danger font-weight-bold"></span>
                        </div>
                    ))}

                    <div className="Subbtn">
                        <Button variant="secondary" onClick={goback}>Cancel</Button>
                        <span className="offset-sm-1"></span>
                        <Button type="submit" variant="success">Submit</Button>
                    </div>

                    <div className="ortext2"></div>

                    <p className="para" onClick={signin}>Sign In</p>

                    {/* <link to ="index.html" style="margin-left: 20px;">Back to Home</a> */}


                </Form>  </div>

            {/* <div className="otherpart" >
                <br />
                <h1>Interprise <br /> Productivity,<br /> Redefined</h1>

                <p><b>This form has the default HTML form behavior of browsing to a new page when the user submits the form.
                    If you want this behavior in React, it just works. But in most cases,
                    it’s convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form.
                    The standard way to achieve this is with a technique called “controlled components”.</b></p>

                <p>We can combine the two by making the React state be the “single source of truth”.
                    Then the React component that renders a form also controls what happens in that form on subsequent user input.
                </p>

                <br />
            </div> */}

        </div>
    )
}


export default SignupForm;



                       //        Class Component




// class SignupForm extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             name: "",
//             username: "",
//             radio: "",
//             email: "",
//             password: "",
//             degree: "",
//             skills: []
//         }
//     }

//     nameHandler = (e) => {
//         const names = e.target.value;
//         this.setState({ name: names })
//     }

//     usernameHandler = (e) => {
//         const unames = e.target.value;
//         this.setState({ username: unames })
//     }

//     radioHandler = (e) => {
//         const radioval = e.target.value;
//         this.setState({ radio: radioval })
//     }

//     emailHandler = (e) => {
//         const emails = e.target.value;
//         this.setState({ email: emails })
//     }

//     passwordHandler = (e) => {
//         const passwords = e.target.value;
//         this.setState({ password: passwords })
//     }

//     degreeHandler = (e) => {
//         const degrees = e.target.value;
//         this.setState({ degree: degrees });
//     }

//     skillsHandler = (e) => {
//         const skill = e.target.value;
//         this.setState({ skills: skill });
//     }

//     formSubmit = () => {

//         // input fields Validation

//         const regname = new RegExp('^[A-Za-z ]{3,20}$');
//         const regusername = new RegExp('^([a-z]){1,1}([a-z0-9_]){4,10}$');
//         const regemail = new RegExp('^[a-z0-9_.]{5,10}@[a-z]{5}.com$');
//         const regpassword = new RegExp('^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*()_.]{8,20}$');

//         if (regname.test(this.state.name)) {
//             console.log(this.state.name)
//             console.log("name is valid");

//         } else {
//             document.getElementById("nameerr").innerHTML = "Name length must be between 3 or 20 words and only Alphabets.";
//         }

//         if (regusername.test(this.state.username)) {
//             console.log(this.state.username)
//             console.log("user name is valid");

//         } else {
//             document.getElementById("usererr1").innerHTML = "Username length must be between 3 or 20 words <br />";
//             document.getElementById("usererr2").innerHTML = "Start with Alphabets <br />";
//             document.getElementById("usererr3").innerHTML = "Contains a Number and Underscore";
//         }

//         if (regemail.test(this.state.email)) {
//             console.log(this.state.email);
//             console.log("email is valid");
//         } else {
//             document.getElementById("email").innerHTML = "Please provide correct email with .com at the end";
//         }


//         if (regpassword.test(this.state.password)) {
//             console.log(this.state.password);
//             console.log("password is valid");
//         } else {
//             document.getElementById("password1").innerHTML = "Password length must be between 8 or 20 words <br />";
//             document.getElementById("password2").innerHTML = "Contains a number and combine uppercase and lowercase letters <br />";
//             document.getElementById("password3").innerHTML = "Contains a special character";
//         }

//         // radio button validation

//         if (this.state.radio !== "") {
//             console.log(this.state.radio);
//         } else {
//             document.getElementById("radioerr").innerHTML = "Please select Gender field";
//         }

//         // check box validation

//         if (this.state.skills.length !== 0) {
//             console.log(this.state.skills)
//         } else {
//             document.getElementById("skillserr").innerHTML = "Please select Skills field <br />";
//         }

//         // select box validation  

//         if (this.state.degree !== "") {
//             console.log(this.state.degree);
//         } else {
//             document.getElementById("degreerr").innerHTML = "Please select Degree field <br />";
//         }

//         // Save data in Local Storage

//         if (this.state.name !== "" && this.state.username !== "" && this.state.email !== "" && this.state.password !== ""
//             && this.state.radio !== "" && this.state.degree !== "" && this.state.skills.length !== 0) {

//             localStorage.setItem(this.state.email, JSON.stringify(this.state));
//             document.getElementById("forms").reset();
//         }

//         console.log(this.state);
//     }

//     render() {

//         return (
//             <div className="App">
//                 <h1 className="text">Sign Up</h1>
//                 <br />
//                 <Form className="form" id="forms" action="#" onSubmit={this.formSubmit}>

//                     <Form.Group className="mb-3" controlId="name">
//                         <Form.Label>Full Name</Form.Label>
//                         <Form.Control type="text" value={this.state.name} placeholder="Enter Name" onChange={this.nameHandler} required/>
//                         <span id="nameerr" className="text-danger font-weight-bold"></span>
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="username">
//                         <Form.Label>User Name</Form.Label>
//                         <Form.Control type="text" value={this.state.username} placeholder="Enter User Name" onChange={this.usernameHandler} required/>
//                         <span id="usererr1" className="text-danger font-weight-bold"></span>
//                         <span id="usererr2" className="text-danger font-weight-bold"></span>
//                         <span id="usererr3" className="text-danger font-weight-bold"></span>
//                     </Form.Group>

//                     <Form.Label>Gender :</Form.Label>
//                     <br />
//                     {['radio'].map((type) => (
//                         <div key={`inline-${type}`} className="mb-3" value={this.state.radio} onChange={this.radioHandler} >
//                             <Form.Check
//                                 inline
//                                 label="Male"
//                                 name="group1"
//                                 value="Male"
//                                 type={type}
//                                 id={`inline-${type}-1`}
//                             />
//                             <Form.Check
//                                 inline
//                                 label="Female"
//                                 name="group1"
//                                 value="Female"
//                                 type={type}
//                                 id={`inline-${type}-2`}
//                             />
//                             <span id="radioerr" className="text-danger font-weight-bold"></span>
//                         </div>

//                     ))}


//                     <Form.Group className="mb-3" controlId="formGroupEmail">
//                         <Form.Label>Email address</Form.Label>
//                         <Form.Control type="email" value={this.state.email} placeholder="Enter email" onChange={this.emailHandler} required/>
//                         <span id="email" className="text-danger font-weight-bold"></span>
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="formGroupPassword">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control type="password" value={this.state.password} placeholder="Enter Password" onChange={this.passwordHandler} required/>
//                         <span id="password1" className="text-danger font-weight-bold"></span>
//                         <span id="password2" className="text-danger font-weight-bold"></span>
//                         <span id="password3" className="text-danger font-weight-bold"></span>
//                     </Form.Group>

//                     <label>
//                         Pick your Degree tittle:
//                         <select className="form-select" value={this.state.degree} onChange={this.degreeHandler}>
//                             <option value="Degree">Degree</option>
//                             <option value="Bachelor">Bachelor</option>
//                             <option value="Inter">Inter</option>
//                             <option value="Matric">Matric</option>
//                         </select>
//                     </label>
//                     <span id="degreerr" className="text-danger font-weight-bold"></span>

//                     <br /><br />

//                     <Form.Label>Skills</Form.Label>
//                     {['checkbox'].map((type) => (
//                         <div key={`inline-${type}`} className="mb-3" value={this.state.skills} onChange={this.skillsHandler}>
//                             <Form.Check
//                                 inline
//                                 label="Js"
//                                 name="group2"
//                                 value="Js"
//                                 type={type}
//                                 id="Check1"
//                             />
//                             <Form.Check
//                                 inline
//                                 label="Css"
//                                 name="group2"
//                                 value="Css"
//                                 type={type}
//                                 id="Check2"
//                             />
//                             <Form.Check
//                                 inline
//                                 label="Html"
//                                 name="group2"
//                                 value="Html"
//                                 type={type}
//                                 id="Check3"
//                             />
//                             <span id="skillserr" className="text-danger font-weight-bold"></span>
//                         </div>
//                     ))}

//                     <Button type="submit" variant="primary">Submit</Button>

//                     {/* <link to ="index.html" style="margin-left: 20px;">Back to Home</a> */}


//                 </Form>

//             </div>
//         );

//     }

// }
