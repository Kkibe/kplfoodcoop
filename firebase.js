// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile} from "firebase/auth";
import { useState } from "react";
import { getFirestore, collection, doc, getDoc, addDoc } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBQrZHsjg7EfD-6pVmRWmj6wvwluim4T2Q",

  authDomain: "valley-dishes.firebaseapp.com",

  projectId: "valley-dishes",

  storageBucket: "valley-dishes.appspot.com",

  messagingSenderId: "894065312920",

  appId: "1:894065312920:web:febbae192c603cbc48fced",

  measurementId: "G-QM7HDTFCZK"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const auth = getAuth(app);

export const signUp = (email, password) => {
    let user;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        user = userCredential.user;
        alert(user.email)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
    });
    return user;
}

export const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        alert(user.email);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });
}


export const useAuth = () => {
    const [user, setUser] = useState('');
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          setUser(user);
        } else {
          return;
        }
      });
    return user;
}

export const logOut = () => {
    signOut(auth).then(() => {
        alert("user logged out")
      }).catch((error) => {
        console.log(error)
      });
}

export const updateUser = (name) => {
  const auth = getAuth();
  updateProfile(auth.currentUser, {
    displayName: name , //photoURL: "https://example.com/jane-q-user/profile.jpg"
  }).then(() => {
    alert('alert profile updated')
  }).catch((error) => {
    alert(error.message);
  });
}


const db = getFirestore(app);

export const addCourse = async() => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

/*
export const getCourses = () => {
  const docRef = doc(db, "", "");
  //const docSnapshot = await getDoc(docRef);
}*/