import React, {Component} from 'react';
import Carousel from "react-elastic-carousel";

class ServiceThree extends Component {

    render() {
        const breakPoints = [
            {width: 500, itemsToShow: 1},
            {width: 768, itemsToShow: 2},
            {width: 1200, itemsToShow: 3},
            {width: 1500, itemsToShow: 4},
        ]

        return (
            <div>
                <br/><br/><br/>
                <Carousel breakPoints={breakPoints} className='fondo'>

                    <div className="">
                        <div className="kservice-2 mb-30 wow fadeInUp" data-wow-duration=".3s">
                            <br/>
                            <div className="col-12 text-center align-self-center py-5">
                                <input className="pricing" type="checkbox" id="pricing" name="pricing"/>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front">
                                            <div className="pricing-wrap">
                                                <p className="mb-4"></p>
                                                <br/> <br/> <br/>
                                                <h4 className="mb-5">Camper Vans</h4>
                                                <p className="mb-1"><i className="uil uil-location-pin-alt size-22"></i>
                                                </p>
                                                <a href="https://www.yescapa.es/campers/57378/" target="_blank"
                                                   className="link">Disponibilidad</a>
                                                <div className="img-wrap img-2">
                                                    <img src="https://assets.codepen.io/1462889/grass.png"/>
                                                </div>
                                                <div className="img-wrap img-1">
                                                    <img src="https://i.ibb.co/bWpJ6bJ/camper.png"/>
                                                </div>
                                                <div className="img-wrap img-3">
                                                    <img src=""/>
                                                </div>
                                                <div className="img-wrap img-6">
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
                            <br/>
                            <div className="col-12 text-center align-self-center py-5">
                                <div className="section text-center py-5 py-md-0">
                                    <input className="pricing" type="checkbox" id="pricing" name="pricing"/>
                                    <div className="card-3d-wrap mx-auto">
                                        <div className="card-3d-wrapper">
                                            <div className="card-front">
                                                <div className="pricing-wrap">
                                                    <p className="mb-4"></p>
                                                    <br/>
                                                    <br/>
                                                    <h4 className="mb-5">Bicicletas + <br/> Camper</h4>
                                                    <p className="mb-1"><i
                                                        className="uil uil-location-pin-alt size-22"></i></p>
                                                    <a href="/service" className="link">Disponibilidad</a>
                                                    <div className="img-wrap img-2">
                                                        <img src="https://assets.codepen.io/1462889/grass.png"/>
                                                    </div>
                                                    <div className="img-wrap img-1">
                                                        <img src="https://i.ibb.co/L1Y97B3/bicycle.png"/>
                                                    </div>
                                                    <div className="img-wrap img-3">

                                                    </div>
                                                    <div className="img-wrap img-6">
                                                        <img src="https://i.ibb.co/bWpJ6bJ/camper.png"/>
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
                            <br/>
                            <div className="col-12 text-center align-self-center py-5">
                                <div className="section text-center py-5 py-md-0">
                                    <input className="pricing" type="checkbox" id="pricing" name="pricing"/>
                                    <div className="card-3d-wrap mx-auto">
                                        <div className="card-3d-wrapper">
                                            <div className="card-front">
                                                <div className="pricing-wrap">
                                                    <p className="mb-4"></p>
                                                    <br/>
                                                    <br/>
                                                    <h4 className="mb-5">Kayaks + <br/> Camper</h4>
                                                    <p className="mb-1"><i
                                                        className="uil uil-location-pin-alt size-22"></i></p>
                                                    <a href="/service" className="link">Disponibilidad</a>
                                                    <div className="img-wrap img-2">
                                                        <img src="https://assets.codepen.io/1462889/sea.png"/>
                                                    </div>
                                                    <div className="img-wrap img-1">
                                                        <img src="https://assets.codepen.io/1462889/kayak.png"/>
                                                    </div>
                                                    <div className="img-wrap img-3">
                                                        <img src="https://assets.codepen.io/1462889/water.png"/>
                                                    </div>
                                                    <div className="img-wrap img-6">
                                                        <img src="https://i.ibb.co/bWpJ6bJ/camper.png"/>
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
                            <br/>
                            <div className="col-12 text-center align-self-center py-5">
                                <div className="section text-center py-5 py-md-0">
                                    <input className="pricing" type="checkbox" id="pricing" name="pricing"/>
                                    <div className="card-3d-wrap mx-auto">
                                        <div className="card-3d-wrapper">
                                            <div className="card-front">
                                                <div className="pricing-wrap">
                                                    <p className="mb-4"></p>
                                                    <br/><br/>
                                                    <h4 className="mb-5">Paddle Surf + Camper</h4>

                                                    <p className="mb-1"><i
                                                        className="uil uil-location-pin-alt size-22"></i></p>
                                                    <a href="/service" className="link">Disponibilidad</a>
                                                    <div className="img-wrap img-2">
                                                        <img src="https://assets.codepen.io/1462889/sea.png"/>
                                                    </div>
                                                    <div className="img-wrap img-1">
                                                        <img src="https://i.ibb.co/zxPFhZk/paddle.png"/>
                                                    </div>
                                                    <div className="img-wrap img-3">
                                                        <img src="https://assets.codepen.io/1462889/water.png"/>
                                                    </div>
                                                    <div className="img-wrap img-6">
                                                        <img src="https://i.ibb.co/bWpJ6bJ/camper.png"/>
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
                            <br/>
                            <div className="col-12 text-center align-self-center py-5">
                                <div className="section text-center py-5 py-md-0">
                                    <input className="pricing" type="checkbox" id="pricing" name="pricing"/>
                                    <div className="card-3d-wrap mx-auto">
                                        <div className="card-3d-wrapper">
                                            <div className="card-front">
                                                <div className="pricing-wrap">
                                                    <p className="mb-4"></p>
                                                    <br/>
                                                    <br/>

                                                    <h4 className="mb-5">Picnics + <br/> Camper</h4>
                                                    <p className="mb-1"><i
                                                        className="uil uil-location-pin-alt size-22"></i></p>
                                                    <a href="/service" className="link">Disponibilidad</a>
                                                    <div className="img-wrap img-2">
                                                        <img src="https://assets.codepen.io/1462889/grass.png"/>
                                                    </div>
                                                    <div className="img-wrap img-1">
                                                        <img src="https://i.ibb.co/yPtt5zT/picnic.png"/>
                                                    </div>
                                                    <div className="img-wrap img-3">

                                                    </div>
                                                    <div className="img-wrap img-6">
                                                        <img src="https://i.ibb.co/bWpJ6bJ/camper.png"/>
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
                            <br/>
                            <div className="col-12 text-center align-self-center py-5">
                                <div className="section text-center py-5 py-md-0">
                                    <input className="pricing" type="checkbox" id="pricing" name="pricing"/>
                                    <div className="card-3d-wrap mx-auto">
                                        <div className="card-3d-wrapper">
                                            <div className="card-front">
                                                <div className="pricing-wrap">
                                                    <p className="mb-4"></p>
                                                    <br/> <br/>
                                                    <h4 className="mb-5">Snorkeling + <br/> Camper</h4>
                                                    <p className="mb-1"><i
                                                        className="uil uil-location-pin-alt size-22"></i></p>
                                                    <a href="/service" className="link">Disponibilidad</a>
                                                    <div className="img-wrap img-2">
                                                        <img src="https://assets.codepen.io/1462889/sea.png"/>
                                                    </div>
                                                    <div className="img-wrap img-1">
                                                        <img src="https://i.ibb.co/Jp6ysqy/snorkel.png"/>
                                                    </div>
                                                    <div className="img-wrap img-3">
                                                        <img src="https://assets.codepen.io/1462889/water.png"/>
                                                    </div>
                                                    <div className="img-wrap img-6">
                                                        <img src="https://i.ibb.co/bWpJ6bJ/camper.png"/>
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