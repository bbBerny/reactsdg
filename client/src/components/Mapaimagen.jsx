import React, { useState } from "react";
import axios from 'axios';
import imageMap from "../img/AirpulltionMap-secondCard.jpg"


function Mapaimagen() {


    return (
        <div >


            <div className="card" style={{width: "90%", alignItems: "center"}}>
                <div className="card-body">
                    <h2 className="card-title" style={{textAlign: "center"}}><b>Interactive Map</b></h2>
                    <img src={imageMap} classNameName="rounded-start" style={{ maxWidth: '100%', padding: '5%' }} alt="UN" />

                </div>
            </div>

        </div>
    )
}

export default Mapaimagen;