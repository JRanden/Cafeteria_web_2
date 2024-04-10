import {initializeApp} from 'firebase/app' 
import {
    getFirestore, collection,getDocs,doc,setDoc,deleteDoc,query, where
}from 'firebase/firestore' 

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
  

// Write out all Data Menu
const colRefConst = collection(db, 'Constant Products')
const colRefVar = collection(db, 'Variable Products')
const displayConst = document.getElementById("constProductsDisplay")
const displayVar = document.getElementById("varProductsDisplay")
getDocs(colRefConst)
.then((snapshot)=> {
    let products = []
    snapshot.docs.forEach((doc) =>{
        products.push({...doc.data(),id :doc.id})
    })
    console.log(products)
    let count = 1;
    for (let i = 0; i < products.length; i++ ) {
        let inputDiv = document.createElement("div")
        inputDiv.classList.add("productDisplayConst")

        inputDiv.innerHTML = `<h2>${products[i].name} <br> Price: ${products[i].price} Kr <h2>`
        displayConst.appendChild(inputDiv)

    }
    
})
.catch(err => {
    console.log(err.message)
})

getDocs(colRefVar)
.then((snapshot)=> {
    let products = []
    snapshot.docs.forEach((doc) =>{
        products.push({...doc.data(),id :doc.id})
    })
    console.log(products)
    let count = 1;
    for (let i = 0; i < products.length; i++ ) {
        let inputDiv = document.createElement("div")
        inputDiv.classList.add("productDisplayVar")

        inputDiv.innerHTML = `<h2>${products[i].name} <br> Price: ${products[i].price} Kr <h2>`
        displayVar.appendChild(inputDiv)

    }
    
})
.catch(err => {
    console.log(err.message)
})
