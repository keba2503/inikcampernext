import React, { Component } from 'react';

class Map extends Component {

    render() {

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
                    <h2 className="section-title mb-35">Mapa Recomendado - Gran Canaria</h2>
                </div>
                <iframe src="https://www.google.com/maps/d/embed?mid=1CCn7O6uUoBbWwVTTF5EJW7-MZxV49po&hl=es&ehbc=2E312F" loading="lazy"></iframe>
            </div>
        );
    }
}

export default Map;



