import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
    apiKey: "AIzaSyCJVCF5q4jLNqvoKoK8mvMBFi7YcZ4qRsA",
    authDomain: "inikcamper-97d56.firebaseapp.com",
    databaseURL: "https://inikcamper-97d56-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "inikcamper-97d56",
    storageBucket: "inikcamper-97d56.appspot.com",
    messagingSenderId: "265455023952",
    appId: "1:265455023952:web:1c39e26b99dd98e2fc5e55",
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
    clientEmail: 'firebase-adminsdk-mjl9v@inikcamper-97d56.iam.gserviceaccount.com',
};


    // databaseURL: 'https://my-example-app.firebaseio.com',


// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;