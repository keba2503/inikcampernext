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
                {/* breadcrumb-start */}
                <Breadcrumb pageTitle="Quienes Somos"/>
                {/* breadcrumb-end */}

                {/* mission-start */}
                <Mission/>
                {/* mission-end */}

                {/* testimonial-start */}
                <div className='mt--30'>
                    {/* <Testimonial /> */}
                </div>
                {/* testimonial-end */}

                {/* fact-start */}
                {/* <FactTwo /> */}
                {/* fact-end */}

                {/* why-we-start */}
                {/* <WhyWeTwo /> */}
                {/* why-we-end */}

                {/* team-start */}
                {/* <TeamTwo /> */}
                {/* team-end */}

                {/* brand-start */}
                {/* <BrandThree /> */}
                {/* brand-end */}
                <br/><br/><br/>

            </main>
        );
    }
}

export default AboutMain;