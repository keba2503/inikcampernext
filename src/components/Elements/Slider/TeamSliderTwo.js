import React, { Component } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'
import Link from 'next/link';

class TeamSliderTwo extends Component {
    render() {

        return (
            <div className="team-active swiper-container">
                <div className="swiper-wrapper">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplaydisableoninteraction={"false"}
                        loop={true}
                        breakpoints={{
                            480: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 4,
                            }
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: true
                        }}
                    >
                        <SwiperSlide>
                            <div className="kteam swiper-slide mb-30">
                                <div className="kteam-img">
                                    <img src="assets/img/team/team-img-2.jpg" className="img-fluid" alt="team-img" />

                                </div>
                                <div className="kteam-text text-center">
                                    <h4 className="kteam-title">Isabel Soler</h4>
                                    <span className="uppercase">Co-funder Administracion</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="kteam swiper-slide mb-30">
                                <div className="kteam-img">
                                    <img src="assets/img/team/team-img-4.jpg" className="img-fluid" alt="team-img" />

                                </div>
                                <div className="kteam-text text-center">
                                    <h4 className="kteam-title">Nauzet Soler</h4>
                                    <span className="uppercase">-</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="kteam swiper-slide mb-30">
                                <div className="kteam-img">
                                    <img src="assets/img/team/team-img-3.jpg" className="img-fluid" alt="team-img" />

                                </div>
                                <div className="kteam-text text-center">
                                    <h4 className="kteam-title">Iria Soler</h4>
                                    <span className="uppercase">-</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="kteam swiper-slide mb-30">
                                <div className="kteam-img">
                                    <img src="assets/img/team/team-img-1.jpg" className="img-fluid" alt="team-img" />
                                </div>
                                <div className="kteam-text text-center">
                                    <h4 className="kteam-title">Karen Borrero</h4>
                                    <span className="uppercase">Co-Funder Informática</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        );
    }
}

export default TeamSliderTwo;