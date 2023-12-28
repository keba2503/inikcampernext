import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import Pricing from '../components/Pricing/PricingSection';

export default function Furgos() {

    return (
        <React.Fragment>
            <Header/>
            <Breadcrumb pageTitle="Nuestras Camper"/>
            <Pricing/>
            <Footer/>
        </React.Fragment>
    );
}