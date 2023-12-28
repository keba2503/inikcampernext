import React, {Component} from 'react';
import Link from 'next/link';

class Pricing extends Component {

    render() {

        return (
            <section className="pricing-area pt-120 pb-90 fix">
                <div className="container">
                    <nav className="text-center wow fadeInUp mb-40" data-wow-delay=".4s">
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                             aria-labelledby="nav-home-tab">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-wrapper text-center mb-30">
                                        <div className="pricing-icon mb-25">
                                            <span><img src="https://i.ibb.co/wQYtjHx/furgo.png"/></span>
                                        </div>
                                        <div className="pricing-price mb-25">

                                            <Link href="/"><a className="theme-btn">Detalle</a></Link>
                                        </div>
                                        <div className="pricing-list-bg" id='divimgfurgos'>

                                            <img src="https://i.ibb.co/8jZP0rM/frugos.jpg" className='imgfurgo'/>
                                            <div className="pricing-btn">
                                                <Link href="/"><a className="theme-btn">Disponibilidad</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Pricing;