// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_5cFm7MxBKmnmJ9QcuIQWFAW2gz0yEb0",
  authDomain: "coursesjs-80d1f.firebaseapp.com",
  projectId: "coursesjs-80d1f",
  storageBucket: "coursesjs-80d1f.appspot.com",
  messagingSenderId: "994116214623",
  appId: "1:994116214623:web:ed6b421a0ae1e5fbba20ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Sign in the user with email and password
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User successfully signed in
      const user = userCredential.user;
      alert("Connexion réussie");
      window.location.href = "acceuil.html"; // Redirect to a different page
    })
    .catch((error) => {
      // Handle errors here
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Erreur : ${errorMessage}`);
    });
});
