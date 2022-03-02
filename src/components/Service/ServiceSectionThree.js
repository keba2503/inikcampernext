import React, { Component } from 'react';
import Carousel from "react-elastic-carousel";


class ServiceThree extends Component {

    render() {
        const breakPoints = [
            { width: 500, itemsToShow: 1 },
            { width: 768, itemsToShow: 2 },
            { width: 1200, itemsToShow: 3 },
            { width: 1500, itemsToShow: 4 },
        ]

        return (
            <div>
            <br/><br/><br/>
                <Carousel breakPoints={breakPoints} className='fondo'>
             
                    <div className="">
                        <div className="kservice-2 mb-30 wow fadeInUp" data-wow-duration=".3s">
                        <br/>
                            <div class="col-12 text-center align-self-center py-5">
                                <input class="pricing" type="checkbox" id="pricing" name="pricing" />
                                <div class="card-3d-wrap mx-auto">
                                    <div class="card-3d-wrapper">
                                        <div class="card-front">
                                            <div class="pricing-wrap">
                                                <p class="mb-4"></p>
                                                <br />   <br />   <br />
                                                <h4 class="mb-5">Camper Vans</h4>
                                                <p class="mb-1"><i class="uil uil-location-pin-alt size-22"></i></p>
                                                <a href="/camperlist" class="link">Disponibilidad</a>
                                                <div class="img-wrap img-2">
                                                    <img src="https://assets.codepen.io/1462889/grass.png" />
                                                </div>
                                                <div class="img-wrap img-1">
                                                    <img src="https://i.ibb.co/bWpJ6bJ/camper.png" />
                                                </div>
                                                <div class="img-wrap img-3">
                                                    <img src="" />
                                                </div>
                                                <div class="img-wrap img-6">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="">
                        <div className="kservice-2 mb-30 wow fadeInUp" data-wow-duration=".6s">
                        <br/> <div class="col-12 text-center align-self-center py-5">
                                <div class="section text-center py-5 py-md-0">
                                    <input class="pricing" type="checkbox" id="pricing" name="pricing" />
                                    <div class="card-3d-wrap mx-auto">
                                        <div class="card-3d-wrapper">
                                            <div class="card-front">
                                                <div class="pricing-wrap">
                                                    <p class="mb-4"></p>
                                                    <br />
                                                    <br />
                                                    <h4 class="mb-5">Bicicletas + <br/> Camper</h4>
                                                    <p class="mb-1"><i class="uil uil-location-pin-alt size-22"></i></p>
                                                    <a href="#0" class="link">Disponibilidad</a>
                                                    <div class="img-wrap img-2">
                                                        <img src="https://assets.codepen.io/1462889/grass.png" />
                                                    </div>
                                                    <div class="img-wrap img-1">
                                                        <img src="https://i.ibb.co/L1Y97B3/bicycle.png" />
                                                    </div>
                                                    <div class="img-wrap img-3">

                                                    </div>
                                                    <div class="img-wrap img-6">
                                                    <img src="https://i.ibb.co/bWpJ6bJ/camper.png" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="">
                        <div className="kservice-2 mb-30 wow fadeInUp" data-wow-duration=".9s">
                        <br/> <div class="col-12 text-center align-self-center py-5">
                                <div class="section text-center py-5 py-md-0">
                                    <input class="pricing" type="checkbox" id="pricing" name="pricing" />
                                    <div class="card-3d-wrap mx-auto">
                                        <div class="card-3d-wrapper">
                                            <div class="card-front">
                                                <div class="pricing-wrap">
                                                    <p class="mb-4"></p>
                                                    <br />
                                                    <br />
                                                    <h4 class="mb-5">Kayaks + <br/> Camper</h4>
                                                    <p class="mb-1"><i class="uil uil-location-pin-alt size-22"></i></p>
                                                    <a href="#0" class="link">Disponibilidad</a>
                                                    <div class="img-wrap img-2">
                                                        <img src="https://assets.codepen.io/1462889/sea.png" />
                                                    </div>
                                                    <div class="img-wrap img-1">
                                                        <img src="https://assets.codepen.io/1462889/kayak.png" />
                                                    </div>
                                                    <div class="img-wrap img-3">
                                                        <img src="https://assets.codepen.io/1462889/water.png" />
                                                    </div>
                                                    <div class="img-wrap img-6">
                                                    <img src="https://i.ibb.co/bWpJ6bJ/camper.png" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="kservice-2 mb-30 wow fadeInUp" data-wow-duration="1s">
                        <br/> <div class="col-12 text-center align-self-center py-5">
                                <div class="section text-center py-5 py-md-0">
                                    <input class="pricing" type="checkbox" id="pricing" name="pricing" />
                                    <div class="card-3d-wrap mx-auto">
                                        <div class="card-3d-wrapper">
                                            <div class="card-front">
                                                <div class="pricing-wrap">
                                                    <p class="mb-4"></p>
                                                    <br /><br/>
                                                    <h4 class="mb-5">Paddle Surf + Camper</h4>
                                                    
                                                    <p class="mb-1"><i class="uil uil-location-pin-alt size-22"></i></p>
                                                    <a href="#0" class="link">Disponibilidad</a>
                                                    <div class="img-wrap img-2">
                                                        <img src="https://assets.codepen.io/1462889/sea.png" />
                                                    </div>
                                                    <div class="img-wrap img-1">
                                                        <img src="https://i.ibb.co/zxPFhZk/paddle.png" />
                                                    </div>
                                                    <div class="img-wrap img-3">
                                                        <img src="https://assets.codepen.io/1462889/water.png" />
                                                    </div>
                                                    <div class="img-wrap img-6">
                                                    <img src="https://i.ibb.co/bWpJ6bJ/camper.png" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="">
                        <div className="kservice-2 mb-30 wow fadeInUp" data-wow-duration="1s">
                        <br/> <div class="col-12 text-center align-self-center py-5">
                                <div class="section text-center py-5 py-md-0">
                                    <input class="pricing" type="checkbox" id="pricing" name="pricing" />
                                    <div class="card-3d-wrap mx-auto">
                                        <div class="card-3d-wrapper">
                                            <div class="card-front">
                                                <div class="pricing-wrap">
                                                    <p class="mb-4"></p>
                                                    <br />
                                                    <br/>
                                                    
                                                    <h4 class="mb-5">Picnics + <br/> Camper</h4>
                                                    <p class="mb-1"><i class="uil uil-location-pin-alt size-22"></i></p>
                                                    <a href="#0" class="link">Disponibilidad</a>
                                                    <div class="img-wrap img-2">
                                                        <img src="https://assets.codepen.io/1462889/grass.png" />
                                                    </div>
                                                    <div class="img-wrap img-1">
                                                        <img src="https://i.ibb.co/yPtt5zT/picnic.png" />
                                                    </div>
                                                    <div class="img-wrap img-3">

                                                    </div>
                                                    <div class="img-wrap img-6">
                                                    <img src="https://i.ibb.co/bWpJ6bJ/camper.png" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="">
                        <div className="kservice-2 mb-30 wow fadeInUp" data-wow-duration="1s">
                        <br/>    <div class="col-12 text-center align-self-center py-5">
                                <div class="section text-center py-5 py-md-0">
                                    <input class="pricing" type="checkbox" id="pricing" name="pricing" />
                                    <div class="card-3d-wrap mx-auto">
                                        <div class="card-3d-wrapper">
                                            <div class="card-front">
                                                <div class="pricing-wrap">
                                                    <p class="mb-4"></p>
                                                    <br />    <br />   
                                                    <h4 class="mb-5">Snorkeling + <br/> Camper</h4>
                                                    <p class="mb-1"><i class="uil uil-location-pin-alt size-22"></i></p>
                                                    <a href="#0" class="link">Disponibilidad</a>
                                                    <div class="img-wrap img-2">
                                                        <img src="https://assets.codepen.io/1462889/sea.png" />
                                                    </div>
                                                    <div class="img-wrap img-1">
                                                        <img src="https://i.ibb.co/Jp6ysqy/snorkel.png" />
                                                    </div>
                                                    <div class="img-wrap img-3">
                                                        <img src="https://assets.codepen.io/1462889/water.png" />
                                                    </div>
                                                    <div class="img-wrap img-6">
                                                    <img src="https://i.ibb.co/bWpJ6bJ/camper.png" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default ServiceThree;