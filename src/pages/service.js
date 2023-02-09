import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import ServiceThree from '../components/Service/ServiceSectionThree';
import dynamic from 'next/dynamic';
import Breadcrumb from '../components/Common/Breadcrumb';
import {Formfaq} from '../components/Contact/formfaq'


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
                <Breadcrumb pageTitle="Servicios"/>
                <ServiceThree/>
                <Formfaq/>
                <Footer/>
            </React.Fragment>
        );
    }
}


export default ServicePage;

