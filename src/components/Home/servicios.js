import {useEffect, useState} from "react";
import {Servicios} from "./QualitySection";
import JsonData from '../../sample-data/data.json'

export function ServiciosComponent() {

    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    return (
        <div>
            <Servicios data={landingPageData.Services}/>
        </div>
    );
}
