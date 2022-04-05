import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import React, { useState } from 'react'
import "firebase/auth";
import { AuthAction, withAuthUser } from 'next-firebase-auth';
import { signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import * as firebases from "firebase/auth";
import Link from 'next/link';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
// import firebase from 'firebase/compat/app';
// import * as firebases from "firebase/auth";


// const firebaseAuthConfig = {
//     signInFlow: 'popup',
//     // Auth providers
//     // https://github.com/firebase/firebaseui-web#configure-oauth-providers
//     signInOptions: [
//         {
//             provider: firebases.EmailAuthProvider.PROVIDER_ID,
//             requireDisplayName: false,
//         },
//         {
//             provider: firebases.GoogleAuthProvider.PROVIDER_ID,
//             requireDisplayName: false,
//         },
//         // {
//         //     provider:  firebases.FacebookAuthProvider.PROVIDER_ID,              
//         //             requireDisplayName: false,
//         // },
//     ],
//     signInSuccessUrl: '/',
//     credentialHelper: 'none',
//     callbacks: {
//         // https://github.com/firebase/firebaseui-web#signinsuccesswithauthresultauthresult-redirecturl
//         signInSuccessWithAuthResult: () =>
//             // Don't automatically redirect. We handle redirects using
//             // `next-firebase-auth`.
//             false,
//     },
// }



function Auth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    const login = e => {
        e.preventDefault()
        signInWithEmailAndPassword(firebases.getAuth(), email, password)
            .then(() => {
                if (!auth.currentUser.emailVerified) {
                    sendEmailVerification(firebases.getAuth().currentUser)
                        .then(() => {
                            setTimeActive(true)
                            navigate('/verify-email')
                        })
                        .catch(err => alert(err.message))
                } else {
                    navigate('/')
                }
            })
            .catch(err => setError(err.message))
    }

    return (
        <React.Fragment>
            <Header />


            <div className='container'>
                <div className='login'>
                    <div class="login-page">
                        <div class="form-login">
                            <div className="faq-form-title-wrapper text-center">
                                <h5 className="faq-form-title">Iniciar Sesión</h5>
                            </div>
                            <form onSubmit={login} name='login_form'>
                         
                                <input
                                    type='email'
                                    value={email}
                                    required
                                    placeholder="Enter your email"
                                    onChange={e => setEmail(e.target.value)} />
                                <input
                                    type='password'
                                    value={password}
                                    required
                                    placeholder='Enter your password'
                                    onChange={e => setPassword(e.target.value)} />

                                <button type='submit'>Login</button>

                                {error && <div className='auth__error'>{error}</div>}
                            </form>
                            <div className='parr-login'>
                                <p>
                                    ¿No Tienes cuenta? -- <Link href='/register'>Registrar</Link>
                                </p>
                                
                            </div>
                            <Link href='/resetpass'>¿Olvidaste tu contraseña?</Link>


                        </div>
                    </div>
                </div>
            </div>



            <Footer />
        </React.Fragment>
    )

}

export default withAuthUser({
    whenAuthed: AuthAction.REDIRECT_TO_APP,
    whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
    whenUnauthedAfterInit: AuthAction.RENDER,

})(Auth)