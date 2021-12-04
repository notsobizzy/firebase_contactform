// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDwQ4FRpbccTE6AJqRcU5LG5N3QVusxyxE",
  authDomain: "cloudswap-form-866c8.firebaseapp.com",
  databaseURL: "https://test-form-d3492.firebaseio.com",
  projectId: "cloudswap-form-866c8",
  storageBucket: ""cloudswap-form-866c8.appspot.com",
  messagingSenderId: "742881945100",
  appId: "1:742881945100:web:45a9ba0e95ad30a8cf7029"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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
