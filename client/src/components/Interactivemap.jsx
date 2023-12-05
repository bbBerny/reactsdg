import React, { useEffect, useState } from "react";

import '../Interactivemap.css';

function Interactivemap() {

  /*
  const [flag, setFlag] = useState({
    flag: true
  })

  useEffect(() => {
    // Load the Google Maps script after the component has mounted
    const script = document.createElement("script");
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCDO1L_b8Vq-T4tDw1R5NXzS5_i4MnJic8';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.alert(5);
      // Once the script has loaded, create the Google Maps instance
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: new window.google.maps.LatLng(51.505, -0.09),
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        zoom: 11,
      });

      const waqiMapOverlay = new window.google.maps.ImageMapType({
        getTileUrl: function (coord, zoom) {
          console.log(coord.y);
          return `https://tiles.aqicn.org/tiles/usepa-aqi/${zoom}/${coord.x}/${coord.y}.png?token=9d0b1d77f7d908275085f9a57d2c59e41582a969`;
        },
        name: "Air Quality",
      });

      map.overlayMapTypes.insertAt(0, waqiMapOverlay);

    };


  },); // Empty dependency array ensures the effect runs once after the initial render*/


  return (
    <div>

      {/* 
     <div className="card">
        <h5 className="card-header text-center">
          <b>Interactive Map</b>
        </h5>
        <div className="card-body">
          <div className="container text-center">
            <div className="row row-cols-1">
              <div className="col">
                <div id="map" style={{ height: "50vh" }}></div>
              </div>
              <div className="col">
                <hr />
                <p className="card-text">
                  Heat maps are powerful tools for visualizing data. They can
                  quickly convey complex information in an easy-to-understand
                  visual format. When it comes to global data, such as
                  population distribution, weather patterns, or socioeconomic
                  indicators, a world heat map can make patterns and trends
                  readily apparent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
*/}

      <br />
    </div>
  )
}

export default Interactivemap;
