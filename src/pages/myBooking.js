import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import ProfileBookingPage from "../components/Profile/Booking";
import MyBooking from "../components/Profile/MyBooking";

class BookingDetail extends React.Component {

    static getInitialProps({store}) {
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                <MyBooking/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default BookingDetail;

