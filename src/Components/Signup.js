import React from 'react';
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../logo.svg';


const initialstate = {
    username: "",
    email: "",
    password: "",
    checkbox: false,
    usererr: "",
    passerr: "",
    mailerr: "",
    checkerr: ""
}

const initialval = "";

function SignupForm() {




    const [state, setState] = useState(initialstate)

    const [success, setSuccess] = useState(initialval)

    const usernameHandler = (e) => {
        const unames = e.target.value;
        setState(prevState => ({
            ...prevState,
            username: unames
        }));

        const regusername = new RegExp('^([a-z]){1,1}([a-z0-9_]){4,10}$');

        if (unames === "") {
            setState(prevState => ({
                ...prevState,
                usererr: "User Name is required"
            }));

        } else if (unames.trim().length > 10) {
            setState(prevState => ({
                ...prevState,
                usererr: "needs to be at least ten characters"
            }));

        } else if (regusername.test(unames)) {
            setState(prevState => ({
                ...prevState,
                usererr: ""
            }));

        } else {
            setState(prevState => ({
                ...prevState,
                usererr: 'Only ( _ ) special character and small alphabets and numaric values are allowed.'
            }));
        }

    }


    const emailHandler = (e) => {
        const emails = e.target.value;
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

    const passwordHandler = (e) => {
        const passwords = e.target.value;
        setState(prevState => ({
            ...prevState,
            password: passwords
        }));

        const regpassword = new RegExp('^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*()_.]{8,20}$');

        if (passwords === "") {
            setState(prevState => ({
                ...prevState,
                passerr: "Password is required"
            }));

        } else if (passwords.trim().length < 8 || passwords.trim().length > 20) {
            setState(prevState => ({
                ...prevState,
                passerr: "Password length must be between 8 or 20 words"
            }));

        } else if (regpassword.test(passwords)) {
            setState(prevState => ({
                ...prevState,
                passerr: ""
            }));

        } else {
            setState(prevState => ({
                ...prevState,
                passerr: "Contains a number, a special character and combine uppercase and lowercase letters."
            }));
        }
    }

    const checkHandler = () => {
        // const checkval = e.target.value;
        setState(prevState => ({
            ...prevState,
            checkbox: !state.checkbox
        }));

        if (state.checkbox === false) {
            setState(prevState => ({
                ...prevState,
                checkerr: " "
            }));
        } else {
            setState(prevState => ({
                ...prevState,
                checkerr: "Please accept Terms & condtions."
            }));
        }
    }


    const history = useHistory();

    const goback = () => {
        history.push('/');
    }

    const signin = () => {
        history.push('/signin');
    }

    //      Form Submission

    const formSubmit = async (e) => {
        e.preventDefault();

        if (state.checkbox === false) {
            setState(prevState => ({
                ...prevState,
                checkerr: "Please accept Terms & condtions."
            }));
        }

        if (state.username === "") {
            setState(prevState => ({
                ...prevState,
                usererr: "User Name is required"
            }));
        }

        if (state.email === "") {
            setState(prevState => ({
                ...prevState,
                mailerr: "Email is required"
            }));
        }

        if (state.password === "") {
            setState(prevState => ({
                ...prevState,
                passerr: "Password is required"
            }));

        }


        if (state.usererr === "" && state.passerr === "" && state.mailerr === "" && state.checkerr === " ") {

            const { username, email, password, checkbox } = state

            let info = {
                username: username,
                email: email,
                password: password,
                checkbox: checkbox
            }

            try {
                const res = await fetch("http://localhost:7000/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(info)
                })
                const data = await res.json();

                if (data.usermsg) {
                    setState(prevState => ({
                        ...prevState,
                        usererr: data.usermsg
                    }));
                } else if (data.emailmsg) {
                    setState(prevState => ({
                        ...prevState,
                        mailerr: data.emailmsg
                    }));
                } else if (data.key === true) {
                    setSuccess(data.msg);

                    document.getElementById("forms").reset();
                    setState(initialstate);
                    // alert(data.msg);
                    //     history.push('/signin');
                    setTimeout(function () { setSuccess(initialval) }, 3000);
                }


            } catch (err) {
                console.log(err);
            }


        }

    }

    return (
        <div className="container1 mt-5">

            <div className="formheading"><img src={logo} alt="logo" className="logo" onClick={goback} />
                <h6>Register with SeeBiz</h6>
            </div>

            <div className="btndiv">
                <Button variant="danger" className="sbtn"><i className="fab fa-google"></i></Button>
                <Button variant="primary" className="sbtn"><i className="fab fa-facebook-f"></i></Button>
                <Button variant="info" className="sbtn"><i className="fab fa-linkedin-in"></i></Button>

                <p><b>Sign up with your social media account</b></p>
            </div>

            <div className="ortext offset-sm-4">
                <span className="spans"><p>or</p></span>
            </div>

            <div className="formParent offset-sm-4">
                <Form className="form" id="forms" onSubmit={formSubmit} method="POST">

                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>User Name <span className="star">*</span></Form.Label>
                        <Form.Control type="text" value={state.username} onChange={usernameHandler} />
                        <span className="text-danger font-weight-bold">{state.usererr}</span>
                        {/* <span id="usererr" className="text-danger font-weight-bold"></span> */}
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address <span className="star">*</span></Form.Label>
                        <Form.Control type="email" value={state.email} onChange={emailHandler} />
                        <span className="text-danger font-weight-bold">{state.mailerr}</span>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password <span className="star">*</span></Form.Label>
                        <Form.Control type="password" value={state.password} onChange={passwordHandler} />
                        <span className="text-danger font-weight-bold">{state.passerr}</span>
                    </Form.Group>


                    <Form.Group className="checkbox" controlId="formBasicCheckbox" value={state.checkbox} onClick={checkHandler}>
                        <Form.Check type="checkbox" label="I agree to the Terms of Use and Privacy Policy" />
                        <span className="text-danger font-weight-bold">{state.checkerr}</span>
                    </Form.Group>

                    <div className="subbtn">
                        <Button variant="secondary" onClick={goback}>Cancel</Button>
                        <span className="offset-sm-1"></span>
                        <Button type="submit" variant="success">Submit</Button>
                    </div>

                    <div className="message">
                        <span className="text-success font-weight-bold">{success}</span>
                        <div className="ortext2"></div>
                    </div>
                    <p className="para" onClick={signin}>Sign In</p>


                </Form>
            </div>

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
