import React from 'react';
import {useRouter} from 'next/router';
import dynamic from 'next/dynamic';
import Breadcrumb from '../Common/Breadcrumb';
import Mission from './MissionSection';
import en from ".//locale/en";
import es from ".//locale/es";
import de from ".//locale/de";

const BrandThree = dynamic(() => import('../Elements/Brand/BrandSectionThree'), {
    ssr: false
})
const Testimonial = dynamic(() => import('../Elements/Testimonials/TestimonialsSection'), {
    ssr: false
})

const AboutMain = () => {
    const router = useRouter();
    const {locale} = router;
    const languages = {
        en: en,
        es: es,
        de: de,
    };

    const t = languages[locale] || en;

    return (
        <main>
            <Breadcrumb pageTitle={t.whoWeAre}/>
            <Mission/>
        </main>
    );
}

export default AboutMain;