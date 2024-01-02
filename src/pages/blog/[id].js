// pages/blog/[id].js
import React from 'react';
import {useSelector} from 'react-redux';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import Breadcrumb from "../../components/Common/Breadcrumb";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const BlogDetail = () => {
    const selectedArticle = useSelector((state) => state.blogDetails.selectedArticle);

    if (!selectedArticle) {
        return <p>Artículo no encontrado</p>;
    }

    return (
        <>
            <Header/>
            <Breadcrumb pageTitle={selectedArticle.title}/>
            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
            <section className="blog-details-area  pt-120 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">

                            <div className="kblog">
                                <div className="kblog-img">
                                    <img src='' alt=''/>
                                    <span>Diciembre 2022</span>
                                </div>
                                <div className="kblog-text kblog-text2 kblog-text22">
                                    <div className="kblog-meta pb-10">
                                        <Link href="/">
                                            <a><i><FontAwesomeIcon icon={['fas', 'user-circle']}/></i> {selectedArticle.user}
                                            </a>
                                        </Link>
                                    </div>
                                    <p className="mb-20">{selectedArticle.content}</p>
                                    <p>{selectedArticle.content}</p>
                                    <p>{selectedArticle.content} PRUEBA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default BlogDetail;
