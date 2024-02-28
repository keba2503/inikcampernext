import React from 'react';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useRouter} from "next/router";
import en from ".//locale/en";
import es from ".//locale/es";
import de from ".//locale/de";

const About = () => {
    const router = useRouter()
    const {locale} = router;
    const languages = {
        en: en,
        es: es,
        de: de,
    };

    const t = languages[locale] || en;

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
                                <h1 className="section-title mb-35">{t.aboutUs}<br/> InikCamper</h1>
                                <p>{t.ourValues}.</p>
                            </div>
                            <div className="row">

                            </div>
                            <ul className="mt-20 mb-55">
                                <li><i><FontAwesomeIcon icon={['fas', 'check']}/></i> {t.disconnection}
                                </li>
                                <li><i><FontAwesomeIcon icon={['fas', 'check']}/></i> {t.planning}
                                </li>
                                <li><i><FontAwesomeIcon icon={['fas', 'check']}/></i> {t.camperVan}
                                </li>
                                <li><i><FontAwesomeIcon icon={['fas', 'check']}/></i> {t.personalizedService}
                                </li>
                                <li><i><FontAwesomeIcon icon={['fas', 'check']}/></i> {t.guideVacations}
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

export default About;