import React, { Component } from 'react';
import Video from '../Elements/Video/VideoSection';
import About from './AboutSection';
import Cta from './CtaSection';
import Service from './ServiceSection';
import dynamic from 'next/dynamic';
const HomeSlider = dynamic(() => import('../Elements/Slider/HomeSliderSection'), {
    ssr: false
  })
const Testimonial = dynamic(() => import('../Elements/Testimonials/TestimonialsSection'), {
    ssr: false
  })
const Brand = dynamic(() => import('../Elements/Brand/BrandSection'), {
    ssr: false
})
import Trust from './TrustSection';

import Map from './MapSection';
import Project from './ProjectSection';
import TeamTwo from '../About/TeamSectionTwo';
import {ServiciosComponent} from './servicios.js'


const BlogSlider = dynamic(() => import('../Elements/Slider/BlogSliderSection'), {
    ssr: false
})

class HomeMain extends Component {
    

    render() {

        return (
            <main>
	            {/* slider-start */}
				<HomeSlider />
				{/* slider-end */}

                {/* service-start */}
				{/* <Service /> */}
				{/* service-end */}

                {/* cta-start */}
				{/* <Cta /><br/><br/> */}
				{/* cta-end */}

                {/* about-start */}
				<About />
				{/* about-end */}
                 {/* quality-start */}
                 <ServiciosComponent/>
               
				<TeamTwo />
				{/* quality-end

                {/* project-start */}
				<Project />
				{/* project-end */}

                {/* video-start */}
				<Video />
				{/* video-end */}

         

               

                {/* map-start */}
				<Map />
				{/* map-end */}

        	</main>
        );
    }
}

export default HomeMain;