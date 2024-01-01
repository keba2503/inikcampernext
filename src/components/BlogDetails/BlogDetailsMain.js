import React, {Component} from 'react';
import Head from 'next/head';
import {connect} from 'react-redux';
import store from '../../redux/store';
import ReactGA from 'react-ga';
import articleDetails from '../../sample-data/blog-posts/single-post.json';
import Breadcrumb from '../Common/Breadcrumb';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class BlogDetailsMain extends Component {

    static async getInitialProps({query}) {
        const {slug} = query;
        return {slug}
    }

    constructor(props) {
        super(props);
    }

    getDetails() {
        store.dispatch({
            type: 'NEWS_DETAILS_SUCCESS',
            newsDetails: articleDetails
        });
    }

    componentDidMount() {
        this.getDetails();
        ReactGA.initialize('UA-168056874-1', {alwaysSendToDefaultTracker: true});
        ReactGA.pageview(window.location.pathname + window.location.search);
    }


    render() {

        const {slug, newsDetails} = this.props;

        return (

            <main>
                {newsDetails && newsDetails.map((post, num) => (
                    <Head key={num}>
                        <title>{post.title}</title>
                        <meta name={post.title}/>
                        <meta name="og:title" property="og:title" content={post.title}></meta>
                        <meta name="og:description" property="og:description" content={post.text}></meta>
                        <meta name="twitter:card" content={post.title}></meta>
                        <link rel="canonical" href={'https://kimox.bdevs.net' + post.url}></link>
                        <meta property="og:image" content={post.image}/>
                    </Head>
                ))}
                {newsDetails && newsDetails.map((article, num) => (
                    <Breadcrumb key={num} pageTitle={article.title}/>
                ))}
                <section className="blog-details-area  pt-120 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                                {newsDetails && newsDetails.map((article, num) => (
                                    <div key={num}>
                                        <div className="kblog">
                                            <div className="kblog-img">
                                                <img src={article.image} alt={article.title}/>
                                                <span>Diciembre 2022</span>
                                            </div>
                                            <div className="kblog-text kblog-text2 kblog-text22">
                                                <div className="kblog-meta pb-10">
                                                    <Link href="/">
                                                        <a><i><FontAwesomeIcon icon={['fas', 'user-circle']}/></i> {article.user}
                                                        </a>
                                                    </Link>
                                                </div>
                                                <p className="mb-20">{article.text}</p>
                                                <p>{article.textTwo}</p>
                                                <p>{article.textTree}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    const {newsDetails} = state.newsDetails;
    return {newsDetails}
};

export default connect(mapStateToProps)(BlogDetailsMain);


