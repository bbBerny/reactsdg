import React from "react";
import UN from '../img/UN.png'
import AirpulltionMapSecondCard from '../img/AirpulltionMap-secondCard.jpg'
import ClimateChange from '../img/ClimateChange(FourthSlide).jpg'

function Accordion() {
    return (
        <div>
            <div id="accordionFlushExample" className="accordion accordion-flush">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <b className="accordio-title"> What does SDG means?</b>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <div className="card mb-3" style={{ maxWidth: '90%' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={UN} className="rounded-start" style={{ maxWidth: '100%', padding: '5%' }} alt="UN" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <p className="card-text">The Sustainable Development Goals (SDGs) are 17 interconnected objectives established by the United Nations in 2015. They cover a wide range of issues from poverty to climate action, with specific targets mostly to be achieved by 2030. The SDGs emphasize the interconnected environmental, social, and economic aspects of sustainable development. However, there are cross-cutting issues, synergies, and trade-offs between the different goals. The progress is monitored by the UN High-Level Political Forum on Sustainable Development.</p>
                                            <a href="https://en.wikipedia.org/wiki/Sustainable_Development_Goals" className="btn btn-primary"
                                                target="_blank" rel="noreferrer">Source</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <b className="accordio-title">Our purpose</b>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <div className="card mb-3" style={{ maxWidth: '90%' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={AirpulltionMapSecondCard} className="rounded-start" style={{ maxWidth: '100%', padding: '1%' }} alt="UN" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <p className="card-text">
                                                Our website serves as a real-time global contamination map, vividly illustrating the pressing environmental issues our planet faces. It aims to raise public awareness about the severity of pollution and its impacts. By providing this visual evidence of environmental damage, we hope to inspire individuals to take action and contribute to the preservation of our world. Our ultimate goal is to foster a more sustainable future for all.
                                            </p>
                                            <a href="https://waqi.info/#/c/45.361/-72.494/3z" className="btn btn-primary" target="_blank" rel="noreferrer">Live Air Pollution
                                                Map</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <b className="accordio-title">So... What can I do?</b>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <div className="card mb-3" style={{ maxWidth: '90%' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={ClimateChange} className="rounded-start" style={{ maxWidth: '100%' }} alt="UN" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <p className="card-text">Climate change is a long-term alteration in global weather patterns, largely driven by human activities such as burning fossil fuels and deforestation. These activities release greenhouse gases that trap the sun’s heat, leading to a rise in global temperatures. This brief explanation underscores the urgent need for action. We invite you to join the global effort to mitigate climate change. Every small step counts towards a sustainable future for our planet.</p>
                                            <a href="https://www.un.org/en/actnow/ten-actions" className="btn btn-primary" target="_blank" rel="noreferrer">First step to make a change</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Accordion;