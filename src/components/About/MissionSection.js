import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Mission extends Component {

    render() {

        return (
            <section className="mission-area pt-120 fix">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="kintro-text mr-xs-0 mr-md-0 mr-lg-0 mr-70 mb-30" data-aos="fade-left" data-aos-duration="1000">
                                <div className="section-title-wrapper mb-25">
                                    <h5 className="section-subtitle mb-20">Nuestro concepto</h5>
                                    <h2 className="section-title mb-35">De que Trata InikCamper</h2>
                                    <p>Somos una desconexión de la vida diaria para los apasionados de la libertad, planificamos las experiencias y aventuras por ti mientras te acompaña Nuestra Camper Van.</p>
                                </div>
                                <p className="mb-45">Misión:

                                    Ofrecer un servicio personalizado y de calidad de experiencias turísticas en camper van.
                                </p>
                                <p className="mb-45">Visión:
                                    Conquistar con nuestro concepto esta rama del turismo en España y Europa.
                                </p>
                                <p className="mb-45">Valores:
                                <ul className="mt-20 mb-55" id='lista'>
                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Transparecia.</li>
                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Calidad de servicio.</li>
                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Trabajo en equipo.</li>
                                    <li><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Sostenibilidad</li>
                                </ul>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="kintro-img mb-30" data-aos="fade-right" data-aos-duration="1000">
                                <img src="assets/img/about/about-img-6.jpg" className="img-fluid" alt="about-img" />
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Mission;