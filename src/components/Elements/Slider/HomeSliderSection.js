import React, { Component } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

class HomeSlider extends Component {

    render() {

        return (
            <section className="slider-area fix position-relative">
                <div className="slider-active swiper-container">
                    <div className="swiper-wrapper">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
                            effect="fade"
                            spaceBetween={30}
                            slidesPerView={1}
                            autoplaydisableoninteraction={"false"}
                            loop={true}
                            breakpoints={{
                                768: {
                                    slidesPerView: 1
                                },
                                1200: {
                                    slidesPerView: 1,
                                }
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: true
                            }}
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide>
                                <div className="single-slider slider-height swiper-slide" data-swiper-autoplay="10000">
                                    <div className="slide-bg"
                                         style={{backgroundImage: `url(${'assets/img/slider/inikcamper_bailico.webp'})`}}>
                                        <img src="assets/img/slider/inikcamper_bailico.webp" alt="Furgoneta Inikcamper en Bailico" style={{display: 'none'}}/>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="kslider z-index">
                                                    <h5 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.3s">
                                                        En tus vacaciones sin preocupaciones tendras: <br/> KAYAK, SURF, CICLISMO, TOURS Y MÁS...
                                                    </h5>
                                                    <h2 className="kslider--title mb-40" data-animation="fadeInUp" data-delay="0.5s">Experiencias <br/>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single-slider slider-height swiper-slide" data-swiper-autoplay="10000">
                                    <div className="slide-bg" style={{backgroundImage: `url(${'assets/img/slider/inikcamper_salon.webp'})`}}>
                                        <img src="assets/img/slider/inikcamper_salon.webp" alt="Salón de furgonetea de InikCamper" style={{display: 'none'}}/>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="kslider z-index">
                                                    <h5 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.3s">
                                                        En tus vacaciones sin preocupaciones tendras: <br/> ESPACIO Y COMODIDAD
                                                    </h5>
                                                    <h2 className="kslider--title mb-40" data-animation="fadeInUp" data-delay="0.5s">Confort <br/>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slider slider-height swiper-slide" data-swiper-autoplay="10000">
                                    <div className="slide-bg" style={{backgroundImage: `url(${'assets/img/slider/inikcamper_cocina.webp'})`}}>
                                        <img src="assets/img/slider/inikcamper_cocina.webp" alt="Cocina de furgoneta de InikCamper" style={{display: 'none'}}/>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="kslider z-index">
                                                    <h5 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.3s">En tus vacaciones sin preocupaciones tendras: <br/> PLANIFICADO POR NOSOTROS PARA TI <br/>
                                                    </h5>
                                                    <h2 className="kslider--title mb-40" data-animation="fadeInUp" data-delay="0.5s">Momentos <br/>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slider slider-height swiper-slide" data-swiper-autoplay="10000">
                                    <div className="slide-bg" style={{backgroundImage: `url(${'assets/img/slider/inikcamper_playa_vargas.webp'})`}}>
                                        <img src="assets/img/slider/inikcamper_playa_vargas.webp" alt="Playa Vargas con nuestra furgonerta Inikcamper" style={{display: 'none'}}/>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="kslider z-index">
                                                    <h5 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.3s">En tus vacaciones sin preocupaciones tendras: <br/>PARA TUS OCASIONES ESPECIALES
                                                    </h5>
                                                    <h2 className="kslider--title mb-40" data-animation="fadeInUp" data-delay="0.5s">Picnics <br/>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="slider-paginations slide-dots"></div>
                </div>
            </section>
        );
    }
}

export default HomeSlider;