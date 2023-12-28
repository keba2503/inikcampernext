import React, {Component} from 'react';
import ProjectTab from '../Elements/Tab/ProjectTab';
import Trust from '../Home/TrustSection';
import Introduction from './IntroductionSection';
import ServiceTwo from './ServiceSectionTwo';
import WhyWe from './WhyWeSection';
import dynamic from 'next/dynamic';
import Fact from './FactSection';
import Benefits from './BenefitsSection';
import BlogTwo from './BlogSectionTwo';
import CtaTwo from './CtaTwoSection';

const HomeTwoSlider = dynamic(() => import('../Elements/Slider/HomeTwoSlider'), {
    ssr: false
})
const BrandTwo = dynamic(() => import('../Elements/Brand/BrandSectionTwo'), {
    ssr: false
})
const Team = dynamic(() => import('./TeamSection'), {
    ssr: false
})

class HomeTwoMain extends Component {

    render() {

        return (
            <main>
                <HomeTwoSlider/>
                <BrandTwo/>
                <Introduction/>
                <ServiceTwo/>
                <Trust/>
                <Team/>
                <WhyWe/>
                <ProjectTab/>
                <Fact/>
                <Benefits/>
                <BlogTwo/>
                <CtaTwo/>
            </main>
        );
    }
}

export default HomeTwoMain;