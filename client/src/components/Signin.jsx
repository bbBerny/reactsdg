import React, {useState} from "react";
import Navbar from './Navbar';

function Signin() {
    const [userProfile, setUserProfile] = useState({
        email: "",
        password: "",
    })
    
    function submitForm(event) {
        console.log("User email: " + userProfile.email);
        console.log("Password: " + userProfile.password);
        axios.post("/Signin", { //The second paramether of the axios is the content of the form that will be unpacked on the backend
            user: userProfile.user,
            password: userProfile.password
    
        }).then((res) => { //promise method
            //console.log(res.data);
            if (res.data.statusCode === 1) {
                console.log("Youre logged In");
                props.listener();
            }
    
        }
        ).catch((err) => {
            console.log(err)
        })
    
        event.preventDefault();
    }
    return (
        <div>

            <div className="card mx-auto" style={{ maxWidth: "50%" }}>
                <div className="card-body">


                    <form onSubmit={submitForm}>
                        <h1 className="h3 mb-3 fw-normal">Please Login</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={userProfile.email}/>
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={userProfile.password}/>
                            <label for="floatingPassword">Password</label>
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

                            <form>
                                <h1 className="h3 mb-3 fw-normal" style={{ textAlign: "center" }}><b>Sign In to Continue</b></h1>

                                <div className="form-floating">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                                        fdprocessedid="tk4xqm" />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating" style={{ marginBottom: "5%" }}>
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                                        fdprocessedid="fzuem" />
                                    <label htmlFor="floatingPassword">Password</label>
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