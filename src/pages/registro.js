import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';


export default function Register() {

    return (
        <>

            <React.Fragment>
                <Header />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className='container' id='login'>
                    <div className="blog-comment-form">
                        <div className="comment-title2">
                            <h3 className="comment-box-title">Registrar</h3>
                        </div>

                        <form action="mail.php" id="contact-form" method="POST">
                            <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 mb-20">
                                    <input name="name" type="text" placeholder="Your name" />
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 mb-20">
                                    <input name="" type="text" placeholder="Your last name" />
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 mb-20">
                                    <input name="email" type="text" placeholder="Your Email" />
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 mb-20">
                                    <input name="password" type="password" placeholder="Your Password" />
                                </div>
                                <div className="col-xxl-6 col-xl-18 mb-20">
                                    <button type="submit" className="theme-btn border-btn">registrar</button>
                                </div>
                            </div>
                        </form>

                        <p className="ajax-response"></p>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Footer />
            </React.Fragment>
        </>
    );

}