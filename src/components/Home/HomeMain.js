import React, {Component} from 'react';
import Video from '../Elements/Video/VideoSection';
import About from './AboutSection';
import dynamic from 'next/dynamic';
import Map from './MapSection';
import Project from './ProjectSection';
import TeamTwo from '../About/TeamSectionTwo';
import {ServiciosComponent} from './servicios.js'

const HomeSlider = dynamic(() => import('../Elements/Slider/HomeSliderSection'), {
    ssr: false
})
const Testimonial = dynamic(() => import('../Elements/Testimonials/TestimonialsSection'), {
    ssr: false
})
const Brand = dynamic(() => import('../Elements/Brand/BrandSection'), {
    ssr: false
})

const BlogSlider = dynamic(() => import('../Elements/Slider/BlogSliderSection'), {
    ssr: false
})

class HomeMain extends Component {

    render() {

        return (
            <main>
                <HomeSlider/>
                <About/>
                <ServiciosComponent/>
                <TeamTwo/>
                <Project/>
                <Video/>
                <Map/>
            </main>
        );
    }
}

export default HomeMain;