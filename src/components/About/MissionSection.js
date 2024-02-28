import React from 'react';
import {useRouter} from 'next/router';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import en from ".//locale/en";
import es from ".//locale/es";
import de from ".//locale/de";

const Mission = () => {
    const router = useRouter();
    const {locale} = router;
    const languages = {
        en: en,
        es: es,
        de: de,
    };

    const t = languages[locale] || en;

    {
        return (
            <section className="mission-area pt-120 fix">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="kintro-text mr-xs-0 mr-md-0 mr-lg-0 mr-70 mb-30" data-aos="fade-left"
                                 data-aos-duration="1000">
                                <div className="section-title-wrapper mb-25">
                                    <h5 className="section-subtitle mb-20">{t.missionConcept}</h5>
                                    <h2 className="section-title mb-35">{t.aboutInikCamper}</h2>
                                    <p>{t.disconnectDescription}</p>
                                </div>
                                <p className="mb-45">{t.missionStatement} {t.missionDescription}
                                </p>
                                <p className="mb-45">{t.visionStatement} {t.visionDescription}
                                </p>
                                <p className="mb-45">{t.valuesStatement}
                                    <ul className="mt-20 mb-55" id='lista'>
                                        <li><i><FontAwesomeIcon icon={['fas', 'check']}/></i> {t.transparency}</li>
                                        <li><i><FontAwesomeIcon icon={['fas', 'check']}/></i> {t.serviceQuality}</li>
                                        <li><i><FontAwesomeIcon icon={['fas', 'check']}/></i> {t.teamwork}</li>
                                        <li><i><FontAwesomeIcon icon={['fas', 'check']}/></i> {t.sustainability}</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="kintro-img mb-30" data-aos="fade-right" data-aos-duration="1000">
                                <img src="assets/img/about/about-img-6.jpg" className="img-fluid" alt="about-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Mission;