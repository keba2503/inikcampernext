import React, {Component, useState} from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import FaqAccordion from './FaqAccordion';
import FaqForm from './FaqFormSection';
import {useRouter} from "next/router";
import en from "./locale/en";
import es from "./locale/es";
import de from "./locale/de";


const FaqMain = () => {
        const router = useRouter();
        const [path, setPath] = useState('');
        const {locale} = router;
        const languages = {
                en: en,
                es: es,
                de: de,
        };

        return (
            <main>
                <Breadcrumb pageTitle="Preguntas Frecuentes FAQ "/>
                <FaqAccordion/>
                <FaqForm/>
            </main>
        );
}

export default FaqMain;