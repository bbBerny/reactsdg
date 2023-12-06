import React, { useState } from "react";
import axios from 'axios';
import Mapaimagen from "./Mapaimagen";
import { useHistory } from 'react-router-dom';


function Signin() {
    const history = useHistory();


    const [signUpForm, setSignUpForm] = useState({
        email: "",
        password: "",
    });

    const [logInForm, setLogInForm] = useState({
        email: "",
        password: "",
    });


    function submitForm(event) {
        console.log("User email: " + logInForm.email);
        console.log("Password: " + logInForm.password);
        axios.post("/Map", {
            logInForm: {
                email: logInForm.email,
                password: logInForm.password,
            }
        }).then((res) => {
            if (res.status === 201) {
                console.log("User created successfully");
                props.listener();
            } else if (res.status === 409) {
                console.log("Username or email already registered.");
                // Handle conflict (username or email already exists)
            } else if (res.status === 200) {
                console.log("Autenticado en el FRONTEND");
                history.push('/InteractiveMap');

            }
        }).catch((err) => {
            console.log(err);
        });

        event.preventDefault();
    }


  




    return (
        <div>

            <div className="card mx-auto" style={{ maxWidth: "50%" }}>
                <div className="card-body">


                    <form onSubmit={submitForm}>
                        <h1 className="h3 mb-3 fw-normal">Please Login</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput1" placeholder="name@example.com" value={logInForm.email} onChange={(e) => setLogInForm({ ...logInForm, email: e.target.value })} />
                            <label htmlFor="floatingInput1">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword1" placeholder="Password" value={logInForm.password} onChange={(e) => setLogInForm({ ...logInForm, password: e.target.value })} />
                            <label htmlFor="floatingPassword1">Password</label>
                        </div>

                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop2" style={{ margin: "2%" }}>Sign In </button>

                        <button className="btn btn-primary w-100 py-2" type="submit">Login</button>
                    </form>

                </div>
            </div>

            <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">

                            </h1>

                        </div>
                        <div className="modal-body">

                            <form onSubmit={submitForm}>
                                <h1 className="h3 mb-3 fw-normal" style={{ textAlign: "center" }}><b>Sign In to Continue</b></h1>

                                <div className="form-floating">
                                    <input type="email" className="form-control" id="floatingInput2" placeholder="name@example.com"
                                        fdprocessedid="tk4xqm" value={signUpForm.email} onChange={(e) => setSignUpForm({ ...signUpForm, email: e.target.value })} />
                                    <label htmlFor="floatingInput2">Email address</label>
                                </div>
                                <div className="form-floating" style={{ marginBottom: "5%" }}>
                                    <input type="password" className="form-control" id="floatingPassword2" placeholder="Password"
                                        fdprocessedid="fzuem" value={signUpForm.password} onChange={(e) => setSignUpForm({ ...signUpForm, password: e.target.value })} />
                                    <label htmlFor="floatingPassword2">Password</label>
                                </div>

                                <button className="btn btn-primary w-100 py-2" type="submit" fdprocessedid="sio3su">Sign in</button>
                            </form>


                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Signin;