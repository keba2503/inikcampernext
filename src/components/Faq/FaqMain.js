import React, {Component} from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import FaqAccordion from './FaqAccordion';
import FaqForm from './FaqFormSection';


class FaqMain extends Component {
    render() {

        return (
            <main>
                <Breadcrumb pageTitle="Preguntas Frecuentes FAQ "/>
                <FaqAccordion/>
                <FaqForm/>
            </main>
        );
    }
}

export default FaqMain;