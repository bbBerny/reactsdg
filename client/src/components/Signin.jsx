import React from "react";
import Navbar from './Navbar';


function Signin() {
    return (
        <div>

            <div class="card mx-auto" style={{ maxWidth: "50%" }}>
                <div class="card-body">


                    <form>
                        <h1 class="h3 mb-3 fw-normal">Please Login</h1>

                        <div class="form-floating">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop2" style={{ margin: "2%" }}>Sign In </button>

                        <button class="btn btn-primary w-100 py-2" type="submit">Login</button>
                    </form>

                </div>
            </div>

            <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">

                            </h1>

                        </div>
                        <div class="modal-body">

                            <form>
                                <h1 class="h3 mb-3 fw-normal" style={{ textAlign: "center;" }}><b>Sign In to Continue</b></h1>

                                <div class="form-floating">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                                        fdprocessedid="tk4xqm" />
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div class="form-floating" style={{marginBottom: "5%"}}>
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                                        fdprocessedid="fzuem" />
                                    <label for="floatingPassword">Password</label>
                                </div>

                                <button class="btn btn-primary w-100 py-2" type="submit" fdprocessedid="sio3su">Sign in</button>
                            </form>


                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Signin;