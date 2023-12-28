import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import dynamic from 'next/dynamic';
import Breadcrumb from '../components/Common/Breadcrumb';
import TeamTwo from '../components/About/TeamSectionTwo';
import WhyWeTwo from '../components/About/WhyWeSectionTwo';

const BrandFour = dynamic(() => import('../components/Elements/Brand/BrandSectionFour'), {
    ssr: false
})

class ServicePage extends React.Component {

    static getInitialProps({store}) {
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                <Breadcrumb pageTitle="Nuestro equipo"/>
                <WhyWeTwo/>
                <TeamTwo/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default ServicePage;