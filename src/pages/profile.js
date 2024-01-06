import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import ProfilePage from "../components/Auth/Profile";

class Profile extends React.Component {

    static getInitialProps({store}) {
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                <ProfilePage/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Profile;

