import React, {Component} from 'react';
import Carousel from 'react-elastic-carousel';

class ServiceThree extends Component {
    render() {
        const services = [
            {
                title: 'Camper Vans',
                images: [
                    'https://i.ibb.co/bWpJ6bJ/camper.png',
                ],
                link: 'https://www.airbnb.es/rooms/1065005349819753921?source_impression_id=p3_1707250202_UM5cOnOnB5HLJumo',
            },
            {
                title: 'Bicicletas + Camper',
                images: [
                    'https://i.ibb.co/L1Y97B3/bicycle.png',
                ],
                link: '/service',
            },
            {
                title: 'Kayaks + Camper',
                images: [
                    'https://assets.codepen.io/1462889/kayak.png',
                ],
                link: '/service',
            },
            {
                title: 'Paddle Surf + Camper',
                images: [
                    'https://i.ibb.co/zxPFhZk/paddle.png',
                ],
                link: '/service',
            },
            {
                title: 'Picnics + Camper',
                images: [
                    'https://i.ibb.co/yPtt5zT/picnic.png',
                ],
                link: '/service',
            },
            {
                title: 'Snorkeling + Camper',
                images: [
                    'https://i.ibb.co/Jp6ysqy/snorkel.png',
                ],
                link: '/service',
            },
        ];

        const breakPoints = [
            {width: 500, itemsToShow: 1},
            {width: 768, itemsToShow: 2},
            {width: 1200, itemsToShow: 3},
            {width: 1500, itemsToShow: 4},
        ];

        return (
            <div>
                <br/><br/><br/>
                <Carousel breakPoints={breakPoints} className='fondo'>
                    {services.map((service, index) => (
                        <div key={index} className=''>
                            <div className='kservice-2 mb-30 wow fadeInUp' data-wow-duration={`${index * 0.3}s`}>
                                <div className='col-12 text-center align-self-center py-5'>
                                    <div className='card-3d-wrap mx-auto'>
                                        <div className='card-3d-wrapper'>
                                            <div className='card-front'>
                                                {service.images.map((image, i) => (
                                                    <div key={i} className={`img-wrap img-${i + 1}`}>
                                                        <img src={image} alt={`Service ${index + 1} Image ${i + 1}`}/>
                                                    </div>
                                                ))}
                                                <div className='pricing-wrap'>
                                                    <p className='mb-4'></p>
                                                    <h4 className='mb-5'>{service.title}</h4>
                                                    <p className='mb-1'>
                                                        <i className='uil uil-location-pin-alt size-22'></i>
                                                    </p>
                                                    <a href={service.link} target='_blank' className='theme-btn border-btn'>
                                                        Disponibilidad
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        );
    }
}

export default ServiceThree;
