import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Interactivemap from "./Interactivemap";

function Map() {
    return (
        <div>
            <Modal/>
            <Interactivemap/>
            <Footer/>
        </div>
    )
}

export default Map;