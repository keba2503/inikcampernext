import React from 'react';
import Footer from '../components/Layout/Footer/Footer';
import GuieMain from '../components/Faq/GuieMain';

class FaqPage extends React.Component {

    static getInitialProps({store}) {
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <GuieMain/>
            </React.Fragment>
        );
    }
}

export default FaqPage;

