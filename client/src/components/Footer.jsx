import React from "react";

function Footer() {
    return (
        <div>
            <footer className="py-3 footer">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="/public/html/index.html" className="nav-link px-2 text-body-secondary">Home</a></li>
                    <li className="nav-item"><a href="/public/html/map.html" className="nav-link px-2 text-body-secondary">Map</a></li>
                    <li className="nav-item"><a href="/public/html/more_content.html" className="nav-link px-2 text-body-secondary">See more</a></li>
                </ul>
                <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
            </footer>

        </div>
    )
}

export default Footer;