import {useEffect, useState} from "react";
import {Servicios} from "./QualitySection";
import JsonData from '../../sample-data/data.json';
import {useRouter} from "next/router";

export function ServiciosComponent() {
    const [landingPageData, setLandingPageData] = useState({});
    const router = useRouter();
    const [path, setPath] = useState("");
    const {locale} = router;

    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    return (
        <div>

            <Servicios data={locale === 'en' ? landingPageData.Services_EN : landingPageData.Services}/>

        </div>
    );
}
