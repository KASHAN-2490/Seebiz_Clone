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


