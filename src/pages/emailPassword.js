import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import EmailPassword from "../components/Profile/EmailPassword";

class Login extends React.Component {

    static getInitialProps({store}) {
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                <EmailPassword/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Login;

