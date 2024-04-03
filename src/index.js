import {initializeApp} from 'firebase/app'
import {
    getFirestore, collection,
}from 'firebase/firestore'
import{ 
    getAuth,
    signOut,
    signInWithEmailAndPassword
}from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyA7hanPcjfkEjcCkAv7DQt1Fis5yinXK4o",
    authDomain: "kaentis.firebaseapp.com",
    projectId: "kaentis",
    storageBucket: "kaentis.appspot.com",
    messagingSenderId: "361944361291",
    appId: "1:361944361291:web:bdfb9047deb5fd80c920ce"
  };

  // init firebase app
  initializeApp(firebaseConfig)

  // init services
  const db = getFirestore()
  const auth = getAuth()
  
    // Sign into 
    const loginButton = document.querySelector('.login')
    const loginForm = document.querySelector('.authForm')

    loginForm.addEventListener('submit', (e) => {
        // e.preventDefault()

        const email = loginForm.email.value
        const password = loginForm.password.value

        signInWithEmailAndPassword(auth, email, password)
        .then(console.log("Valid"), enableAdmin())
    })




    //Sign out
    const logoutButton = document.querySelector('.logout')
        logoutButton.addEventListener('click',disableAdmin() )
    


    function enableAdmin() {
        window.location.href = "adminPage.html";
    }

    function disableAdmin(){
        window.location.href ="index.html"
    }