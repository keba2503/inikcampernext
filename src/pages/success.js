import React from 'react';
import Footer from "../components/Layout/Footer/Footer";
import Breadcrumb from '../components/Common/Breadcrumb';
import Header from "./../components/Layout/Header/Header";
import Booking from "../components/Booking/Booking";

const Success = () => {
    return (
        <>
            <Header/>
            <Breadcrumb pageTitle="Reservas"/>
            <div className="container">
                <div style={{textAlign: 'center', marginTop: '50px', marginBottom: '50px'}}>
                    <h3>Su reserva se ha realizado con éxito</h3>
                    <h3>Nos comunicaremos con usted lo mas pronto posible</h3>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Success;
