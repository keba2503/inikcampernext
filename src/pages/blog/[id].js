import React from 'react';
import {useDispatch} from 'react-redux';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import Breadcrumb from "../../components/Common/Breadcrumb";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const BlogDetail = ({selectedArticle}) => {
    const dispatch = useDispatch();

    if (!selectedArticle) {
        return (
            <>
                <Header/>
                <div>Loading...</div>
                <Footer/>
            </>
        );
    }

    return (
        <>
            <Header/>
            <Breadcrumb pageTitle={selectedArticle.title}/>
            <section className="blog-details-area  pt-120 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                            <div className="kblog">
                                <div className="kblog-img">
                                    <img src='' alt=''/>
                                </div>
                                <div className="kblog-text kblog-text2 kblog-text22">
                                    <div className="kblog-meta pb-10">
                                        <p>
                                            <i><FontAwesomeIcon icon={['fas', 'user-circle']}/></i>
                                            {' '}
                                            {selectedArticle.user}
                                        </p>
                                    </div>
                                    <p className="mb-20">{selectedArticle.text}</p>
                                    <p className="mb-20">{selectedArticle.text}</p>
                                    <p className="mb-20">{selectedArticle.text}</p>
                                    <p className="mb-20">{selectedArticle.text}</p>
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

export async function getServerSideProps({ params }) {
    const { id } = params;

    try {
        const response = await fetch(`http://localhost:3000/api/blog/${id}`);
        const selectedArticle = await response.json();

        if (!response.ok) {
            throw new Error('Failed to fetch article details');
        }

        return {
            props: {
                selectedArticle,
            },
        };
    } catch (error) {
        console.error('Error fetching article details:', error);

        return {
            props: {
                selectedArticle: null,
                error: 'Failed to fetch article details',
            },
        };
    }
}

export default BlogDetail;
