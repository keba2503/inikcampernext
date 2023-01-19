import React, { Component } from 'react';
import Link from 'next/link';

class Cta extends Component {

    render() {

        return (
            <section className="cta-area mt--60 z-index" data-aos="fade-up">
                <div className="container">
                    <div className="cta-bg bg-theme">
                        <div className="cta-number">
                            <div className="cta-number-icon mr-30">
                                <img src="assets/img/icon/cta-icon.png" className="img-fluid" alt="cta-icon"/>
                            </div>
                            <div className="cta-number-text fix">
                                <span className="uppercase">Si quieres planificar tus experiencias</span>
                                <h3><a href="tell:6668880000">00000000</a></h3>
                            </div>
                        </div>
                        <div className="cta-description">
                            <p>Contacta con Nosotros.</p>
                        </div>
                        <div className="cta-btn text-lg-end text-start">
                            <Link href="/service"><a className="theme-btn black-btn">Descubre mas</a></Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Cta;