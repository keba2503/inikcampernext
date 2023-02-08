import React, { Component } from 'react';

class Map extends Component {

    render() {

        return (
            <div className="map-area">
                <iframe src="https://www.google.com/maps/d/embed?mid=1CCn7O6uUoBbWwVTTF5EJW7-MZxV49po&hl=es&ehbc=2E312F"  loading="lazy"></iframe>
            </div>
        );
    }
}

export default Map;



