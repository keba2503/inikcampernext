import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import LoginForm from "../components/Profile/Login";

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
                <LoginForm/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Login;

