import React, {useState} from "react";
import emailjs from 'emailjs-com'

const initialState = {
    name: '',
    email: '',
    message: '',
}

export const Formfaq = (props) => {
    const [{name, email, message}, setState] = useState(initialState)

    const handleChange = (e) => {
        const {name, value} = e.target
        setState((prevState) => ({...prevState, [name]: value}))
    }
    const clearState = () => {
        document.getElementById("contact-form").reset();
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, message)
        emailjs
            .sendForm(
                'service_seshdt8', 'template_j4lvwzd', e.target, 'user_OmQVMukt3ZYQR3UaMx9ex'
            )
            .then(
                (result) => {
                    console.log(result.text)
                    clearState()
                },
                (error) => {
                    console.log(error.text)
                }
            )
    }

    return (
        <section className="faq-form pt-110 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="faq-form-title-wrapper text-center">
                            <h3 className="faq-form-title">Alguna Duda que quieras Consultar con Nosotros</h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="contact-form">
                            <form name='sentMessage' id="contact-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-xxl-6 col-xl-6 col-md-6 mb-20">
                                        <input
                                            type='text'
                                            id='name'
                                            name='name'
                                            className='form-control'
                                            placeholder='Name'
                                            required
                                            onChange={handleChange}/>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-md-6 mb-20">
                                        <input
                                            type='email'
                                            id='email'
                                            name='email'
                                            className='form-control'
                                            placeholder='Email'
                                            required
                                            onChange={handleChange}/>
                                    </div>
                                    <div className="col-xxl-12 col-xl-12 col-md-12 mb-20">
                                                <textarea
                                                    name='message'
                                                    id='message'
                                                    className='form-control'
                                                    rows='4'
                                                    placeholder='Message'
                                                    required
                                                    onChange={handleChange}>

                                                </textarea>
                                    </div>
                                    <div className="col-xxl-12 col-xl-12 mb-20">
                                        <button type="submit" className="theme-btn border-btn">Enviar</button>
                                    </div>
                                </div>
                            </form>
                            <p className="ajax-response"></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}