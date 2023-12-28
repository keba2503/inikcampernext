import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import HomeMain from '../components/Home/HomeMain';
import Script from 'next/script'

class Index extends React.Component {

    static getInitialProps({store}) {
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Script type="text/javascript" src='https://embed.tawk.to/61fb0b1b9bd1f31184daaa3c/1fqua6ov3'/>
                <Header/>
                <HomeMain/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Index;

