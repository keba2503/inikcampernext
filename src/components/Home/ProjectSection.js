import React, {useState} from 'react';
import dynamic from 'next/dynamic';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useRouter} from "next/router";

const ProjectSlider = dynamic(() => import('../Elements/Slider/ProjectSliderSection'), {
    ssr: false
})

const Project = () => {
    const router = useRouter()
    const [path, setPath] = useState("")
    const {locale} = router;

    return (
        <section className="project-area bg-grey pt-115 pb-400 fix">
            <div className="common-shape-wrapper wow slideInRight animated" data-wow-delay="0ms"
                 data-wow-duration="1500ms">
                <div className="common-shape-inner"></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="section-title-wrapper mb-45">
                            {locale === 'en' ? (
                                <a href="/gallery">
                                    <h2 className="section-subtitle mb-20">Our Gallery - Memories that Endure</h2>
                                </a>
                            ) : locale === 'es' ? (
                                <a href="/gallery">
                                    <h2 className="section-subtitle mb-20">Nuestra Galería - Recuerdos que perduran</h2>
                                </a>
                            ) : (
                                <a href="/gallery">
                                    <h2 className="section-subtitle mb-20">Unsere Galerie - Erinnerungen, die anhalten</h2>
                                </a>
                            )}

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="lol text-md-end">
                            <div className="project-button-prev slide-prev">
                                <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-left']}/></i>
                            </div>
                            <div className="project-button-next slide-next">
                                <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']}/></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProjectSlider/>
        </section>
    );
}

export default Project;