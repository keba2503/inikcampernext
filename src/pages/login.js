import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import React, { useEffect, useState } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase/compat/app';
import * as firebases from "firebase/auth";
import "firebase/auth";
import { AuthAction, withAuthUser } from 'next-firebase-auth';

const firebaseAuthConfig = {
    signInFlow: 'popup',
    // Auth providers
    // https://github.com/firebase/firebaseui-web#configure-oauth-providers
    signInOptions: [
        {
            provider:  firebases.EmailAuthProvider.PROVIDER_ID,              
                    requireDisplayName: false,
        },
        {
            provider:  firebases.GoogleAuthProvider.PROVIDER_ID,              
                    requireDisplayName: false,
        },
        // {
        //     provider:  firebases.FacebookAuthProvider.PROVIDER_ID,              
        //             requireDisplayName: false,
        // },
    ],
    signInSuccessUrl: '/',
    credentialHelper: 'none',
    callbacks: {
        // https://github.com/firebase/firebaseui-web#signinsuccesswithauthresultauthresult-redirecturl
        signInSuccessWithAuthResult: () =>
            // Don't automatically redirect. We handle redirects using
            // `next-firebase-auth`.
            false,
    },
}

function Auth() {

    const [renderAuth, setRenderAuth] = useState(false)
    useEffect(() => {

        setRenderAuth(true)

    }, [])

    return (
        <>

            <React.Fragment>
                <Header />
                <div className='container'>

                    <div className='login'>
                        {renderAuth ? (
                            <StyledFirebaseAuth
                                uiConfig={firebaseAuthConfig}
                                firebaseAuth={firebases.getAuth()}
                            />
                        ) : null}
                        
                    </div>

                </div>
                <Footer />
            </React.Fragment>
        </>
    );

}

export default withAuthUser({
    whenAuthed: AuthAction.REDIRECT_TO_APP,

})(Auth)