import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import ForgotPasswordForm from "../components/Profile/ForgotPassword";

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
                <ForgotPasswordForm/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Login;

