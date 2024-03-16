import React from 'react'
import Footer from "../components/Layout/Footer/Footer"
import Breadcrumb from '../components/Common/Breadcrumb'
import Header from "./../components/Layout/Header/Header";
import Booking from "../components/Booking/Booking";

const Reservas = () => {

    return (
        <>
            <React.Fragment>
                <Header/>
                <Breadcrumb pageTitle="Reservas"/>
                <div className="container">
                    <div>
                        <br/> <br/> <br/> <br/> <br/>
                        <h3>Selecciona los días de tu reserva</h3>
                        <p>Si los días aparecen en gris es que no están disponibles</p>
                        <p>La estancia mínima es de tres (3) días</p>
                        <Booking/>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        </>
    )
}


export default Reservas;
