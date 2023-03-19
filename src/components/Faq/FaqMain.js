import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import FaqAccordion from './FaqAccordion';
import FaqForm from './FaqFormSection';


class FaqMain extends Component {

    render() {

        return (
            <main>
                {/* breadcrumb-start */}
				<Breadcrumb pageTitle="Preguntas Frecuentes FAQ " />
				{/* breadcrumb-end */}

                {/* faq-start */}
                <FaqAccordion />
				{/* faq-end */}

                {/* form-start */}
                <FaqForm />
				{/* form-end */}

              
        	</main>
        );
    }
}

export default FaqMain;