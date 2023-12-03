import React from "react";
import FirstSlideCarousel from '../img/FirstSlideCarousel.svg';
import SecondSlideCarousel from '../img/SecondSlideCarousel.svg';
import ThirdSlideCarousel from '../img/ThirdSlideCarousel.svg';

function Carousel() {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={FirstSlideCarousel} className="d-block w-100" alt="FirstSlide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5><b>Real-Time Climate Change</b></h5>
                            <p>
                                "We are all connected, and we all have a role to play in making the world a better place."</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={SecondSlideCarousel} className="d-block w-100" alt="SecondSlide" />
                        <div className="carousel-caption d-none d-md-block" id="SecondSlideText">
                            <h5><b>Climate Action</b></h5>
                            <p>First generation to feel the impact of climate change, but last generation that can do something about it.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={ThirdSlideCarousel} className="d-block w-100" alt="ThirdSlide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5><b>There Is No Planet B</b></h5>
                            <p>Climate change is not just about the environment. It is also about social justice and economic equity.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel;