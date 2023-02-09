import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import Map from '../Home/MapSection';
import CtaTwo from '../HomeTwo/CtaTwoSection';
import Contact from './ContactSection';
import {Formfaq} from '../Contact/formfaq'



class ContactMain extends Component {

    render() {

        return (
            <main>
                {/* breadcrumb-start */}
				<Breadcrumb pageTitle="Contacto" />
				{/* breadcrumb-end */}

                {/* contact-start */}
                <Formfaq />
				{/* contact-end */}

                {/* cta-start */}
               
        	</main>
        );
    }
}

export default ContactMain;