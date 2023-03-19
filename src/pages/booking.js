import Headerbooking from '../components/Layout/Header/Headerbooking'
import React from 'react'
import Footer from '../components/Layout/Footer/Footer'
import Breadcrumb from '../components/Common/Breadcrumb'
import PricingMain from "../components/Pricing/PricingMain";
import PricingSection from "../components/Pricing/PricingSection";

const Booking = () => {

    return (
        <>
            <React.Fragment>
                <Headerbooking/>
                <Breadcrumb pageTitle="Mis Reservas"/>

                <div className="container">
                    <h2 className="section-title mb-35"></h2>
                </div>
                <div className="container">
                    <div
                        className="kintro-text mr-xs-0 mr-md-0 mr-lg-0 mr-70 mb-30"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >

                            <PricingMain/>


                    </div>


                    <br></br>
                    <br></br>


                </div>

                <div className="container">
                    <br></br>
                    <br></br>
                    <br></br>


                </div>
                <Footer/>
            </React.Fragment>
        </>
    )
}


export default Booking;
