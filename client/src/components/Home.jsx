import React from "react";
import Accordion from "./Accordion";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Home() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <Accordion />
            <Footer />
        </div>
    )
}

export default Home;