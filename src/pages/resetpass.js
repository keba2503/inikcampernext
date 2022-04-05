import React, { useEffect, useState } from "react";
import Link from "next/link";
import { sendPasswordResetEmail } from "firebase/auth";
import * as firebases from "firebase/auth";
import Header from "../components/Layout/Header/Header";
import Footer from '../components/Layout/Footer/Footer';



function Reset() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState('')


    const register = e => {
        e.preventDefault()
        {
            sendPasswordResetEmail(firebases.getAuth(), email)
                .then(() => {
                    window.alert('Se ha enviado correo de restablecimiento de contraseña.');                                                 
                })
                .catch(err => setError(err.message))
        }
        setEmail('')
    }


    return (
        <React.Fragment>
            <Header />
            <div className='container'>
                <div className='login'>
                    <div class="login-page">
                        <div class="form-login">
                            <div className="faq-form-title-wrapper text-center">
                                <h5 className="faq-form-title">Restablecer</h5>
                            </div>

                            <form onSubmit={register} name='registration_form'>
                                <input
                                    type="email"
                                    className="reset__textBox"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="E-mail Address"

                                />
                                <button type='submit'>
                                    Restablecer contraseña
                                </button>
                                <div className='parr-login'>
                                    <p> ¿No tienes cuenta?</p>
                                    <Link href="/register">Registrar</Link>
                                </div>
                                {error && <div className='auth__error'>{error}</div>}

                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </React.Fragment>

    );
}
export default Reset;