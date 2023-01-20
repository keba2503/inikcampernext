import React, {Component} from 'react';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class About extends Component {

    render() {

        return (
            <section className="about-area pt-120 pb-70 fix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="kabout-img mb-50 mr-70" data-aos="zoom-out-up" data-swiper-autoplay="10000">
                                <img src="assets/img/about/about-img-1.jpg" className="img-fluid z-index"
                                     alt="about-img"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="kabout mb-50" data-aos="zoom-out-down" data-swiper-autoplay="10000">
                                <div className="section-title-wrapper mb-45">
                                    <h5 className="section-subtitle mb-20"></h5>
                                    <h2 className="section-title mb-35">Quienes Somos <br/></h2>
                                    <p>Somos Aventura, Momentos, Experiencias y Recuerdos.</p>
                                </div>
                                <div className="row">

                                </div>
                                <ul className="mt-20 mb-55">
                                    <li><i><FontAwesomeIcon icon={['fas', 'check']}/></i> Somos una desconexión de la
                                        vida diaria para los apasionados de la libertad.
                                    </li>
                                    <li><i><FontAwesomeIcon icon={['fas', 'check']}/></i> Planificamos las experiencias
                                        y aventuras por y para ti.
                                    </li>
                                    <li><i><FontAwesomeIcon icon={['fas', 'check']}/></i> Te acompañara nuestra Camper
                                        Van.
                                    </li>
                                    <li><i><FontAwesomeIcon icon={['fas', 'check']}/></i> Te Ofrecemos un servicio
                                        personalizado y de calidad.
                                    </li>
                                    <li><i><FontAwesomeIcon icon={['fas', 'check']}/></i> Te guiamos en tús vacaciones
                                        para que no tengas preocupaciones.
                                    </li>
                                </ul>
                                <div className="kabout-btn">
                                    <Link href="/service"><a className="theme-btn border-btn">Más información</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;