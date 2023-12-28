import React, {Component} from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import {Formfaq} from './formfaq'

class ContactMain extends Component {

    render() {
        return (
            <main>
                <Breadcrumb pageTitle="Contacto"/>
                <Formfaq/>
            </main>
        );
    }
}

export default ContactMain;