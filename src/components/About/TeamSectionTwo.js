import React, {useState} from 'react';
import dynamic from 'next/dynamic';
import {useRouter} from "next/router";
import en from './/locale/en';
import es from './/locale/es';
import de from './/locale/de';

const TeamSliderTwo = dynamic(() => import('../Elements/Slider/TeamSliderTwo'), {
    ssr: false
})

const TeamTwo = () => {
    const router = useRouter()
    const [path, setPath] = useState("")
    const {locale} = router;
    const languages = {
        en: en,
        es: es,
        de: de,
    };

    const t = languages[locale] || en;

    return (
        <section className="team-area pt-115 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title-wrapper text-center mb-50">
                            <h5 className="section-subtitle mb-20">{t.sectionSubtitle}</h5>
                            <h2 className="section-title mb-35">{t.sectionTitle}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="team-active2 swiper-container">
                    <TeamSliderTwo/>
                </div>
            </div>
        </section>
    );
}

export default TeamTwo;