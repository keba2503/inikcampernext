import React, {useState} from 'react';
import {useRouter} from "next/router";
import en from ".//locale/en";
import es from ".//locale/es";
import de from ".//locale/de";

const FaqAccordion = () => {
    const router = useRouter();
    const [path, setPath] = useState('');
    const {locale} = router;
    const languages = {
        en: en,
        es: es,
        de: de,
    };

    const t = languages[locale] || en;
    return (
        <section className="faq-area pt-120 pb-100 bg-grey fix">
            <div className="container z-index">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="faq-wrapper">
                            <h2>{t.reservationSectionTitle}</h2>
                            <div className="choose-right" data-aos="fade-left" data-aos-duration="1000">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                    aria-expanded="true" aria-controls="collapseOne">
                                                {t.depositPurposeQuestion}
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show"
                                             aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>{t.depositPurposeAnswer}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                    aria-expanded="false" aria-controls="collapseTwo">
                                                {t.travelOutsideGranCanariaQuestion}
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse"
                                             aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>{t.travelOutsideGranCanariaAnswer}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                    aria-expanded="false" aria-controls="collapseThree">
                                                {t.driveByAnotherPersonQuestion}                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse"
                                             aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>{t.driveByAnotherPersonAnswer}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                    aria-expanded="false" aria-controls="collapseFour">
                                                {t.returningCleanQuestion}
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse"
                                             aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>{t.returningCleanAnswer}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-wrapper-2">
                            <h2>{t.camperVanSectionTitle}</h2>
                            <div className="choose-right" data-aos="fade-left" data-aos-duration="1000">
                                <div className="accordion" id="accordionExample2">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingNine">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseNine"
                                                    aria-expanded="false" aria-controls="collapseNine">
                                                {t.comingSoonQuestion}
                                            </button>
                                        </h2>
                                        <div id="collapseNine" className="accordion-collapse collapse"
                                             aria-labelledby="headingNine" data-bs-parent="#accordionExample2">
                                            <div className="accordion-body">
                                                <p>{t.comingSoonAnswer}</p>
                                            </div>
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

export default FaqAccordion;
