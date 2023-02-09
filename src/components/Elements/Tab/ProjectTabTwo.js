import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';

const Tabs = dynamic(import('react-tabs').then(mod => mod.Tabs), {ssr: false}) // disable ssr
import {Tab, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Link from 'next/link';

export default () => (
    <section className="project-2 pt-115 pb-90">
        <Tabs>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">

                        <div className="aportfolio-menu aportfolio-menu2 text-center mb-50">

                        </div>
                    </div>
                </div>
                <TabPanel>
                    <div className="row aportfolio-active">

                        <div className="col-lg-4 col-md-6">
                            <div className="kproject kproject-2 mb-30">
                                <img src="assets/img/project/project-img-1.jpg" className="img-fluid" alt="project_img"/>
                                <div className="kproject-text kproject-text-2">
                                    <div className="kproject-text-content">
                                        <span></span>
                                        <h5 className="kproject-text-title"><Link href="/gallery"><a>Detalle</a></Link>
                                        </h5>
                                    </div>
                                    <div className="kproject-text-icon">
                                        <Link href="/gallery"><a><i><FontAwesomeIcon
                                            icon={['fas', 'long-arrow-alt-right']}/></i></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="kproject kproject-2 mb-30">
                                <img src="assets/img/project/project-img-2.jpg" className="img-fluid" alt="project_img"/>
                                <div className="kproject-text kproject-text-2">
                                    <div className="kproject-text-content">
                                        <span></span>
                                        <h5 className="kproject-text-title"><Link href="/gallery"><a>Detalle</a></Link>
                                        </h5>
                                    </div>
                                    <div className="kproject-text-icon">
                                        <Link href="/gallery"><a><i><FontAwesomeIcon
                                            icon={['fas', 'long-arrow-alt-right']}/></i></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="kproject kproject-2 mb-30">
                                <img src="assets/img/project/project-img-3.jpg" className="img-fluid" alt="project_img"/>
                                <div className="kproject-text kproject-text-2">
                                    <div className="kproject-text-content">
                                        <span></span>
                                        <h5 className="kproject-text-title"><Link href="/gallery"><a>Detalle</a></Link>
                                        </h5>
                                    </div>
                                    <div className="kproject-text-icon">
                                        <Link href="/gallery"><a><i><FontAwesomeIcon
                                            icon={['fas', 'long-arrow-alt-right']}/></i></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="kproject kproject-2 mb-30">
                                <img src="assets/img/project/project-img-4.jpg" className="img-fluid" alt="project_img"/>
                                <div className="kproject-text kproject-text-2">
                                    <div className="kproject-text-content">
                                        <span></span>
                                        <h5 className="kproject-text-title"><Link href="/gallery"><a>Detalle</a></Link>
                                        </h5>
                                    </div>
                                    <div className="kproject-text-icon">
                                        <Link href="/gallery"><a><i><FontAwesomeIcon
                                            icon={['fas', 'long-arrow-alt-right']}/></i></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </TabPanel>


            </div>
        </Tabs>
    </section>
);