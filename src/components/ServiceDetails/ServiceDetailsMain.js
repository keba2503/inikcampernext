import React, {Component} from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import ServiceDetails from './ServiceDetails';

class ServiceDetailsMain extends Component {

    render() {

        return (
            <main>
                <Breadcrumb pageTitle="Services Details"/>
                <ServiceDetails/>
            </main>
        );
    }
}

export default ServiceDetailsMain;