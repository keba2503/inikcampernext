import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import LoginForm from "../components/Profile/Login";
import RegisterForm from "../components/Profile/Register";

class Register extends React.Component {

    static getInitialProps({store}) {
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                <RegisterForm/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Register;

