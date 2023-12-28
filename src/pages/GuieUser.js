import React from 'react';
import Header from '../components/Layout/Header/Header';
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
                <Header/>
                <GuieMain/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default FaqPage;

