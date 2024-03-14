import {initializeApp} from 'firebase/app'
import {
    getFirestore, collection,getDocs
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
  
  // collection ref
  const colRef = collection(db, 'Produkter')

  // get data
  getDocs(colRef)
    .then((snapshot)=> {
        let products = []
        snapshot.docs.forEach((doc) =>{
            products.push({...doc.data(),id :doc.id})
        })
        console.log(products)
    })
    .catch(err => {
        console.log(err.message)
    })

    // Sign into 
    const loginForm = document.querySelector('.authForm')

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const email = loginForm.email.value
        const password = loginForm.password.value

        signInWithEmailAndPassword(auth, email, password)
        .then(console.log("yes"), enableAdmin())
    })

    //Sign out
    const logoutButton = document.querySelector('.logout')
    logoutButton.addEventListener('click', (e) => {
        signOut(auth)
        .then(() => {
            alert("Signed out")
            disableAdmin()
        })
        .catch((err) => {
            console.log(err.message)
        })
    })

    function enableAdmin() {
        console.log("yes")
        loginForm.classList.add("hidden")
        console.log(loginForm)
    }

    function disableAdmin(){
        loginForm.classList.remove("hidden")
    }