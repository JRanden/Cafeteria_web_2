import {initializeApp} from 'firebase/app' // uriktig adress
import {
    getFirestore, collection,getDocs
}from 'firebase/firestore' //uriktig
import{ 
    getAuth,
    signOut,
    signInWithEmailAndPassword
}from 'firebase/auth' // fikses
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
    const displayWrapper = document.getElementById("displayWrapper")
    const loginWrapper = document.querySelector(".loginWrapper")

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const email = loginForm.email.value
        const password = loginForm.password.value

        signInWithEmailAndPassword(auth, email, password)
        .then((cred)=> {
            console.log("user logged in", cred.user), enableAdmin();
        })
        .catch((err) => {
            console.log(err.message)
        })
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
        // console.log("yes")
        loginWrapper.classList.add("hidden")
        displayWrapper.classList.remove("hidden")
        console.log(loginForm)
    }

    function disableAdmin(){
        loginWrapper.classList.remove("hidden")
        displayWrapper.classList.add("hidden")
    }



console.log("test")