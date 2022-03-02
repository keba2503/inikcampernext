import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import Footer from '../components/Layouts/Footer';
// import { getJobsData } from '../lib/apisheet';


//Conexion a googleSheets, lectura de hoja de calculo transformada a props
export async function getServerSideProps() {
//     let JobsErpData;
//     try {
//         JobsErpData = await getJobsData();
//     } catch (e) {
//         return {
//             notFound: true,
//         };
//     }
//     if (!JobsErpData) {
//         return {
//             notFound: true,
//         };
//     }
//     return {
//         props: { JobsErpData },
//     };
 }

export default function Furgos() {


    //Ejecuta busqueda segun nombre
    // function searchingTerm(term) {
    //     return function (x) {
    //         return x.Nombre.includes(term) || !term
    //     }
    // }

    // //Lista de jobs mostrados, .
    // const Jobs = JobsErpData
    // const [data, setData] = useState([]);
    // const [term, setTerm] = useState('');

    // //cambio de estado general de lista de jobs
    // useEffect(function () {
    //     setData(Jobs)
    // }, [Jobs])

    return (
        <>
            </>
    );
}