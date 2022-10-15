import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Form } from 'react-bootstrap';


export default function ContactSection() {



    const handleSubmit = (e) => {
        e.preventDefault();

const formData = {
    name: e.target.name.value,
    comment: e.target.comment.value
}

        const res =  axios.post('/api/products', {
            name: e.target.name.value,
            comment: e.target.comment.value
        })
        console.log({formData})
    }


    return (

        <section className="contact-area pt-120 pb-80 fix">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-5 col-xl-6 col-lg-6">
                        <div className="section-title-wrapper mb-15">
                            <h5 className="section-subtitle mb-20">contact with us</h5>
                            <h2 className="section-title">Prueba
                            </h2>
                        </div>

                    </div>
               
                    <div className="col-xxl-7 col-xl-6 col-lg-6">
                        <div className="contact-form">
                            <form action="input" id="contact-form" method="POST" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="name" type="text" placeholder="Your Name" />
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="comment" type="text" placeholder="comment" />
                                    </div>

                                    <div className="col-xxl-12 col-xl-12 mb-20">
                                        <button type="submit" className="theme-btn border-btn">Send a message</button>
                                    </div>
                                </div>
                            </form>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );

}


