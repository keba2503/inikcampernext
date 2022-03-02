import React, { Component } from 'react';

class Map extends Component {

    render() {

        return (
            <div className="map-area">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d451096.172848157!2d-15.876626938461643!3d27.95750204504599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc40855504bf07c1%3A0x2ec916c8a5acdb16!2sGran%20Canaria!5e0!3m2!1ses!2ses!4v1645983307136!5m2!1ses!2ses" loading="lazy"></iframe>
            </div>
        );
    }
}

export default Map;



