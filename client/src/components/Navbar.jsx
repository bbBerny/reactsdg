import React from "react";
import LOGO from '../img/LOGO.png'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/index">
                        <img src={LOGO} className="img-fluid" alt="LOGO-CORNER" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex" id="navbarSupportedContent" style={{alignItems:"center"}}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page" style={{marginRight:"1dvw"}}>HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/map" className="nav-link active" aria-current="page" style={{marginRight:"1dvw"}}>MAP</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/more_content" className="nav-link active" aria-current="page">MORE</Link>
                        </li>
                    </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;