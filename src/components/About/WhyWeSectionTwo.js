import React, {Component} from 'react';
import {useRouter} from "next/router";
import en from "./locale/en";
import es from "./locale/es";
import de from "./locale/de";

const WhyWeTwo = () => {
    const router = useRouter();
    const {locale} = router;
    const languages = {
        en: en,
        es: es,
        de: de,
    };

    const t = languages[locale] || en;

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
                                    <h5 className="section-subtitle mb-20">{t.familySubtitle}</h5>
                                    <h2 className="section-title mb-35"></h2>
                                </div>
                                <p>{t.familyDescription}
                                </p>
                                <p>{t.familyAdventure}</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="choose-left mb-40 mr-xs-0 mr-md-0 mr-lg-0 mr-90" data-aos="fade-up-right"
                                 data-aos-duration="1000">
                                <div className="section-title-wrapper">
                                    <h5 className="section-subtitle mb-20">{t.whyTravelWithUsSubtitle}</h5>
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

export default WhyWeTwo;