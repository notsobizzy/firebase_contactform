// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyB4Wi3kuCX7OUWwXGqzQK9h-b5VvMFXxig",
   authDomain: "form-5b99b.firebaseapp.com",
   databaseURL: "https://form-5b99b-default-rtdb.firebaseio.com",
   projectId: "form-5b99b",
   storageBucket: "form-5b99b.appspot.com",
   messagingSenderId: "514006742799",
   appId: "1:514006742799:web:998596c210fd00c6ceb07a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}
