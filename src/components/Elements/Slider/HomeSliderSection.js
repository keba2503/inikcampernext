import React, {Component} from 'react';
import {A11y, Autoplay, EffectFade, Navigation, Pagination, Scrollbar,} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
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
                            pagination={{clickable: true}}
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
                                                <div className="kslider z-index text-center">
                                                    <h2 className="kslider--title__two mb-35" data-animation="fadeInUp" data-delay="0.5s">EXPERIENCIAS</h2>
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
                                                <div className="kslider z-index text-center">
                                                    <h2 className="kslider--title__two mb-35" data-animation="fadeInUp" data-delay="0.5s">CONFORT</h2>
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
                                                <div className="kslider z-index text-center">
                                                    <h2 className="kslider--title__two mb-35" data-animation="fadeInUp" data-delay="0.5s">MOMENTOS</h2>
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
                                                <div className="kslider z-index text-center">
                                                    <h2 className="kslider--title__two mb-35" data-animation="fadeInUp" data-delay="0.5s">AVENTURAS</h2>
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