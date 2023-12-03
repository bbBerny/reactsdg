import React from "react";
import Navbar from './Navbar';
import Footer from "./Footer";
import Videos from "./Videos";

function More_content(){
    return (
        <div>
            <Navbar/>
            <Videos/>
            <Footer/>
        </div>
    )
}

export default More_content;