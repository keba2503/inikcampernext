import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import FaqForm from './FaqFormSection';
import Guie from './Guie'


class GuieMain extends Component {

    render() {

        return (
            <main>
                {/* breadcrumb-start */}
				<Breadcrumb pageTitle="Guía de usuario" />
				{/* breadcrumb-end */}

                {/* faq-start */}
                <Guie />
				{/* faq-end */}

                {/* form-start */}
                <FaqForm />
				{/* form-end */}

              
        	</main>
        );
    }
}

export default GuieMain;