import {initializeApp} from 'firebase/app'
import {
    getFirestore, collection,getDocs,doc,setDoc,deleteDoc,getDoc,updateDoc,
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
         e.preventDefault()

        const email = loginForm.email.value
        const password = loginForm.password.value

        signInWithEmailAndPassword(auth, email, password)
        .then(enableAdmin)
    })



    const dispayWrapper = document.getElementById("displayWrapper")
    const loginWrapper = document.querySelector(".loginWrapper")


         let logoutButton = document.querySelector(".logoutBtn")
        logoutButton.addEventListener('click',disableAdmin)
    


    //Sign out


    function enableAdmin() {
        console.log(loginWrapper)
        loginWrapper.classList.add("hidden")
        dispayWrapper.classList.remove("hidden")    
        logoutButton.classList.remove("hidden")

    }

    function disableAdmin(){
        console.log("Log out")
        loginWrapper.classList.remove("hidden")
        displayWrapper.classList.add("hidden")

        
    }

    //Database

      //Init Variables
  const dropdown = document.getElementById("collectionSelect");
  let addBtn = document.getElementById("addButton")
  let removeBtn =document.getElementById("removeButton")
  let selectBtn = document.getElementById("selectButton")
  let updateBtn = document.getElementById("updateButton")

  // Event Functions 

    addBtn.addEventListener("click", addData)
    selectBtn.addEventListener("click",selectData)
    updateBtn.addEventListener("click",updateData)
    removeBtn.addEventListener("click",removeData)
  

    function addData() {
        console.log("function running")
        let selectionValue = dropdown.options[dropdown.selectedIndex].value
        let product = document.getElementById("nameInput") 
        let price = document.getElementById("priceInput")


        console.log(product.value)
        console.log(price.value);

    setDoc(doc(db, selectionValue, product.value), {
    name: product.value,
    price: price.value,
  });
}


function removeData() {
    let selectionValue = dropdown.options[dropdown.selectedIndex].value
    console.log(selectionValue)
    let product = document.getElementById("nameInput") 


    deleteDoc(doc(db,selectionValue, product.value));
}

function selectData() {
    let selectionValue = dropdown.options[dropdown.selectedIndex].value 
    let search = document.getElementById("nameInput") 
    
    const docRef = doc(db, selectionValue, search.value);
    getDoc(docRef).then(docSnap =>{
    if (docSnap.exists()) {
        let priceDisplay = document.getElementById("priceInput")
  console.log("Document data:", docSnap.data());
        priceDisplay.value = docSnap.data().price
    } else {
  console.log("No such document!");
    }
})
};

function updateData() {
    let selectionValue = dropdown.options[dropdown.selectedIndex].value 
    let search = document.getElementById("nameInput") 
    let priceDisplay = document.getElementById("priceInput")

    const dbref = doc(db,selectionValue,search.value) 

    updateDoc(dbref, {
        price: priceDisplay.value
    })
};   
