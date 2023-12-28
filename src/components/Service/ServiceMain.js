import React, {Component} from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import Quality from '../Home/QualitySection';
import ServiceThree from './ServiceSectionThree';
import dynamic from 'next/dynamic';

const BrandFour = dynamic(() => import('../Elements/Brand/BrandSectionFour'), {
    ssr: false
})

class ServiceMain extends Component {

    render() {

        return (
            <main>
                <Breadcrumb pageTitle="Servicios"/>
                <ServiceThree/>
                <BrandFour/>
                <Quality/>
            </main>
        );
    }
}

export default ServiceMain;