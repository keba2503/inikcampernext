import React, {Component, useState} from 'react';
import {useRouter} from "next/router";

const Map = () => {
    const router = useRouter()
    const [path, setPath] = useState("")
    const {locale} = router;

        return (
            <div className="map-area">
                <div className="section-title-wrapper mb-45 text-center">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    {locale === 'en' ? (
                        <h2 className="section-title mb-35">Recommended Map" - Gran Canaria</h2>
                    ) : (
                        <h2 className="section-title mb-35">Mapa Recomendado - Gran Canaria</h2>
                    )}


                </div>
                <iframe src="https://www.google.com/maps/d/embed?mid=1CCn7O6uUoBbWwVTTF5EJW7-MZxV49po&hl=es&ehbc=2E312F" loading="lazy"></iframe>
            </div>
        );
}

export default Map;



