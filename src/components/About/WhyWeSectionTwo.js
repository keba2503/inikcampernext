import React, {Component} from 'react';

class WhyWeTwo extends Component {
    render() {

        return (
            <section className="why-we bg-grey pt-125 pb-75 position-relative fix">
                <div className="common-shape-wrapper wow slideInLeft animated" data-wow-delay="0ms"
                     data-wow-duration="1500ms">
                    <div className="common-shape-inner"></div>
                </div>
                <div className="container z-index">
                    <div className="row justify-content-between">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="choose-left mb-40 mr-xs-0 mr-md-0 mr-lg-0 mr-90" data-aos="fade-up-right"
                                 data-aos-duration="1000">
                                <div className="section-title-wrapper">
                                    <h5 className="section-subtitle mb-20">Una Familia</h5>
                                    <h2 className="section-title mb-35"></h2>
                                </div>
                                <p>Nosotros somos unos apasionados de la libertad, de hacer planes de vivencias, de
                                    disfrutar la vida con lo que te da, sin muchos complementos, y de poder trasmitir
                                    eso a nuestro entorno por el medio que conocemos, que tenemos experiencia y que
                                    además disfrutamos la “Van Life”..
                                </p>
                                <p>Somos una familia aventurera y emprendedora. Nuestras iniciales conforman unidas el
                                    nombre de nuestro estupendo equipo " INIK ". Las encargadas de las responsabilidades
                                    somos las adultas y los encargados de disfrutar al maximo son los pequeños.</p>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="choose-left mb-40 mr-xs-0 mr-md-0 mr-lg-0 mr-90" data-aos="fade-up-right"
                                 data-aos-duration="1000">
                                <div className="section-title-wrapper">
                                    <h5 className="section-subtitle mb-20">¿Por que viajar con Nosotros?</h5>
                                    <h2 className="section-title mb-35"></h2>
                                </div>
                                <img src="assets/img/about/about-img-77.jpeg" className="img-fluid" alt="about-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhyWeTwo;