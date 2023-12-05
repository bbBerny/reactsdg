import React from "react";
import Navbar from './Navbar';
import Footer from "./Footer";
import Videos from "./Videos";
import '../More_content.css';

function More_content(){
    return (
        <div>
            <Videos/>
            <Footer/>
        </div>
    )
}

export default More_content;