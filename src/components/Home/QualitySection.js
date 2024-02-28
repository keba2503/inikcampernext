import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useRouter} from "next/router";
import en from "../Layout/locale/en";
import es from "../Layout/locale/es";
import de from "../Layout/locale/de";


export const Servicios = (props) => {
    const router = useRouter()
    const [path, setPath] = useState("")
    const { locale } = router;
    const languages = {
        en: en,
        es: es,
        de: de,
    };

    const t = languages[locale] || en;


    return (
        <div id='services' className='text-center'>
            <div className='container'>
                <div className='section-title'>
                    <h2>{t.services}</h2><br/>

                </div>
                <div className='row'>
                    {props.data
                        ? props.data.map((d, i) => (
                            <div key={`${d.name}-${i}`} className='col-md-4'>
                                {' '}
                                <i className={d.icon}><FontAwesomeIcon icon={d.icon}/></i>
                                <div className='service-desc'>
                                    <h3>{d.name}</h3>
                                    <p>{d.text}</p>
                                </div>
                            </div>
                        ))
                        : 'loading'}
                </div>
            </div>
        </div>
    )
}
