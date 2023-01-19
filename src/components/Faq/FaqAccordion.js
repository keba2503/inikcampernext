import React, { Component } from 'react';

class FaqAccordion extends Component {

    render() {

        return (
        <section className="faq-area pt-120 pb-100 bg-grey fix">
            <div className="container z-index">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="faq-wrapper">
                        <h2>Sobre la Reserva</h2>
                            <div className="choose-right" data-aos="fade-left" data-aos-duration="1000">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            ¿Para qué sirve la fianza de 500€?                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>La CamperVan dispone de un seguro a todo riesgo con franquicia de 500 euros; por tanto si ocurriera algún desperfecto en la autocaravana, exterior o interior, por valor inferior a este importe, será a cargo del cliente, salvo que el culpable sea un tercero. En este caso la cobertura es completa, presentando el parte de accidentes correctamente cumplimentada..</p>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            ¿Puedo salir de Gran Canaria con la CamperVan?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>Si puede viajar a cualquier isla del archipiélago canario sin problemas, sin embargo para salir de Canarias necesita una autorización especial de Inikcamper.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            ¿Puede conducir otra persona aunque no figure en el contrato?                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>Sí, siempre que cumpla con los requisitos mínimos del seguro: tener 23 años cumplidos y una antigüedad de 2 años como mínimo en el carnét de conducir. La persona que figura en el contrato debe viajar en el vehículo aunque no conduzca.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            ¿Entregan limpia la autocaravana, lista para usar? ¿y cómo hay que devolverla?                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>Las autocaravanas se entregan completamente limpias e higienizadas con los depósitos de residuales completamente vacíos y limpios. A su regreso deben volver en el mismo estado en que se le entregó. Si prefiere o si le resulta más cómodo para la vuelta, también puede contratar el servicio de limpieza por un importe de 60€ y el de vaciado y limpieza de depósitos por 30€. Se tendrá que contratar antes de entregarles la autocaravana y quedar recogido en las claúsulas del contrato.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                Different Ways To Design Digital Product?
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>Front-end and design are remarkably complex these days. That’s why we invite kind, smart folks from the community to run online workshops for all of us to learn together. And we have new ones.</p>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-wrapper-2">
                        <h2>Sobre la CamperVan</h2>
                            <div className="choose-right" data-aos="fade-left" data-aos-duration="1000">
                                <div className="accordion" id="accordionExample2">
                                    {/* <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSix">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                                As designers, we are often burdened by the responsibility?
                                            </button>
                                        </h2>
                                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample2">
                                            <div className="accordion-body">
                                                <p>There are many variations of passages of available but the majority have suffered alteration in that some form by injected randomised words which don’t look even as slightly believable.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSeven">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                How To Organize Product-Related Assets?
                                            </button>
                                        </h2>
                                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample2">
                                            <div className="accordion-body">
                                                <p>Web fonts are often terrible for web performance and none of the font loading strategies are particularly effective to address that. Upcoming font options may finally deliver on the promise.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingEight">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                Choosing A New Serverless Database Technology?
                                            </button>
                                        </h2>
                                        <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample2">
                                            <div className="accordion-body">
                                                <p>Front-end and design are remarkably complex these days. That’s why we invite kind, smart folks from the community to run online workshops for all of us to learn together. And we have new ones.</p>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingNine">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                                Proximamente
                                            </button>
                                        </h2>
                                        <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample2">
                                            <div className="accordion-body">
                                                <p>Proximamente</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTen">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                                Improving Your Team’s Communication?
                                            </button>
                                        </h2>
                                        <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample2">
                                            <div className="accordion-body">
                                                <p>Front-end and design are remarkably complex these days. That’s why we invite kind, smart folks from the community to run online workshops for all of us to learn together. And we have new ones.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingEleven">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                                How To Make More Money Selling Shopify?
                                            </button>
                                        </h2>
                                        <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample2">
                                            <div className="accordion-body">
                                                <p>Front-end and design are remarkably complex these days. That’s why we invite kind, smart folks from the community to run online workshops for all of us to learn together. And we have new ones.</p>
                                            </div>
                                        </div>
                                    </div> */}
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

export default FaqAccordion;