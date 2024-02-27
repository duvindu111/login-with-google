import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyD_NW0CrkjGGcQ2eGvyCLyedL3EFk72Ogs",
    authDomain: "authentication-duvindu111.firebaseapp.com",
    projectId: "authentication-duvindu111",
    storageBucket: "authentication-duvindu111.appspot.com",
    messagingSenderId: "761686514224",
    appId: "1:761686514224:web:bc3116caa4a9d0a5aeabf5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById('btnLogin');
googleLogin.addEventListener('click', function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)

            console.log(user);
            window.location.href= ""
        }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
});