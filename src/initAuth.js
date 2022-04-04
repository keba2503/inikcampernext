import { init } from 'next-firebase-auth'



const initAuth = () => {
    init({
        
        authPageURL: '/login',
        appPageURL: '/booking',
        loginAPIEndpoint: '/api/login', // required
        logoutAPIEndpoint: '/api/logout', // required
        onLoginRequestError: (err) => {
            console.error(err)
        },
        onLogoutRequestError: (err) => {
            console.error(err)
        },
        // firebaseAuthEmulatorHost: 'localhost:3000',
        firebaseAdminInitConfig: {
            credential: {
                projectId: 'inikcamper-97d56',
                clientEmail: 'firebase-adminsdk-mjl9v@inikcamper-97d56.iam.gserviceaccount.com',
                // The private key must not be accessible on the client side.
                privateKey: process.env.FIREBASE_PRIVATE_KEY,
            },
            // databaseURL: 'https://my-example-app.firebaseio.com',
        },
        // Use application default credentials (takes precedence over fireaseAdminInitConfig if set)
        // useFirebaseAdminDefaultCredential: true,
        firebaseClientInitConfig: {
            apiKey: "AIzaSyCJVCF5q4jLNqvoKoK8mvMBFi7YcZ4qRsA",
            authDomain: "inikcamper-97d56.firebaseapp.com",
            // databaseURL: 'https://my-example-app.firebaseio.com',
            projectId: "inikcamper-97d56",
        },
        cookies: {
            name: 'inikcamper-app', // required
            // Keys are required unless you set `signed` to `false`.
            // The keys cannot be accessible on the client side.
            keys: [
                process.env.COOKIE_SECRET_CURRENT,
                process.env.COOKIE_SECRET_PREVIOUS,
            ],
            httpOnly: true,
            maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
            overwrite: true,
            path: '/',
            sameSite: 'strict',
            secure: true, // set this to false in local (non-HTTPS) development
            signed: true,
        },
        onVerifyTokenError: (err) => {
            console.error(err)
        },
        onTokenRefreshError: (err) => {
            console.error(err)
        },
    })
    
    

}

export default initAuth