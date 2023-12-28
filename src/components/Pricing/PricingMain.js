import React, {Component} from 'react';
import CtaTwo from '../HomeTwo/CtaTwoSection';
import Pricing from './PricingSection';

class PricingMain extends Component {

    render() {

        return (
            <main>
                <Pricing/>
                <CtaTwo/>
            </main>
        );
    }
}

export default PricingMain;