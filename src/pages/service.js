import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import ServiceFour from '../components/Service/ServiceSectionFour';
import ServiceThree from '../components/Service/ServiceSectionThree';
import WhyWeThree from '../components/Service/WhyWeThree';
import dynamic from 'next/dynamic';
import Breadcrumb from '../components/Common/Breadcrumb';


const BrandFour = dynamic(() => import('../components/Elements/Brand/BrandSectionFour'), {
    ssr: false
  })

class ServicePage extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <Breadcrumb pageTitle="Servicios" />

            <ServiceThree />
				{/* service-end */}
                {/* whywe-start */}
                {/* <WhyWeThree /> */}
				{/* whywe-end */}
                {/* service-start */}
				{/* <ServiceFour /> */}
				{/* service-end */}
                {/* brand-start */}
                {/* <BrandFour /> */}
				{/* brand-end */}               
            <Footer />
            </React.Fragment>
        );
    }
}


export default ServicePage;

