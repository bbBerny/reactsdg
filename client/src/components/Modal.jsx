import React from "react";


function Modal() {
    return (
        <div>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">

                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                style="display: none;"></button>
                        </div>
                        <div className="modal-body">

                            <form>
                                <h1 className="h3 mb-3 fw-normal" style="text-align: center;"><b>Login to see the Map</b></h1>

                                <div className="form-floating">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                                        fdprocessedid="tk4xqm">
                                        <label for="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                                        fdprocessedid="fzuem">
                                        <label for="floatingPassword">Password</label>
                                </div>

                                <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop2" style="margin: 2%;">Sign In </button>

                                <button className="btn btn-primary w-100 py-2" type="submit" fdprocessedid="sio3su">Login</button>
                            </form>


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style="display: none;">Close</button>
                            <button type="button" className="btn btn-primary" style="display: none;">Understood</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">

                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                style="display: none;"></button>
                        </div>
                        <div className="modal-body">

                            <form>
                                <h1 className="h3 mb-3 fw-normal" style="text-align: center;"><b>Sign In to Continue</b></h1>

                                <div className="form-floating">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                                        fdprocessedid="tk4xqm">
                                        <label for="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                                        fdprocessedid="fzuem">
                                        <label for="floatingPassword">Password</label>
                                </div>

                                <button className="btn btn-primary w-100 py-2" type="submit" fdprocessedid="sio3su">Sign in</button>
                            </form>


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style="display: none;">Close</button>
                            <button type="button" className="btn btn-primary" style="display: none;">Understood</button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Modal;