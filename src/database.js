console.log("I am here")

import {initializeApp} from 'firebase/app' 
import {
    getFirestore, collection,getDocs,doc,setDoc,deleteDoc
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
  
  // collection ref
  const colRef = collection(db, 'Produkter')

  //Init Variables
  const dropdown = document.getElementById("collectionSelect");
  let addBtn = document.getElementById("addButton")
  let removeBtn =document.getElementById("removeButton")
  
  //dropdown.onchange = dropdownCheck

  // Event Functions 
  addBtn.addEventListener("click", addData)
  removeBtn.addEventListener("click",dropdownCheck2)

// function dropdownCheck() {
//     let selectionValue = dropdown.options[dropdown.selectedIndex].value

//     if (selectionValue === "selectCollection") {
//         alert("Please select a Collection");
//     }
//     else if (selectionValue == "constant") {
//         console.log("Constant")
//         addData("Constant Products")
//     }
//     else if (selectionValue == "variable") {
//         console.log("Variable")
//         addData("Variable Products")
//     }
// }

    function addData() {
        let selectionValue = dropdown.options[dropdown.selectedIndex].value
        let product = document.getElementById("nameInput") 
        let price = document.getElementById("priceInput")


        console.log(product.value)
        console.log(price.value);
        console.log(id.value);
    setDoc(doc(db, selectionValue, product.value), {
    name: product.value,
    price: price.value,
  });
}



function removeData(collection) {
    let product = document.getElementById("nameInput") 


    deleteDoc(doc(db, collection, product.value));
}

