import React, {useEffect} from 'react';

const Booking = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://login.smoobu.com/js/Settings/BookingToolIframe.js';
        script.async = true;
        script.onload = () => {
            window.BookingToolIframe.initialize({
                "url": "https://login.smoobu.com/es/booking-tool/iframe/765914",
                "baseUrl": "https://login.smoobu.com",
                "target": "#apartmentIframeAll"
            });
        };
        document.getElementById('apartmentIframeAll').appendChild(script);

        return () => {
            // Cleanup if necessary
            document.getElementById('apartmentIframeAll').removeChild(script);
        };
    }, []);

    return (
        <React.Fragment>


            <div id="apartmentIframeAll"></div>

        </React.Fragment>
    );
};

export default Booking;
