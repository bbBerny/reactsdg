import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Signin from "./Signin"

import Interactivemap from "./Interactivemap";

function Map() {
    return (
        <div>
            <Signin/>
            <Interactivemap/>
            <Footer/>
        </div>
    )
}

export default Map;