import React, {Component} from 'react';
import dynamic from 'next/dynamic';
import Breadcrumb from '../Common/Breadcrumb';
import Mission from './MissionSection';

const BrandThree = dynamic(() => import('../Elements/Brand/BrandSectionThree'), {
    ssr: false
})
const Testimonial = dynamic(() => import('../Elements/Testimonials/TestimonialsSection'), {
    ssr: false
})

class AboutMain extends Component {

    render() {

        return (
            <main>
                <Breadcrumb pageTitle="Quienes Somos"/>
                <Mission/>
            </main>
        );
    }
}

export default AboutMain;