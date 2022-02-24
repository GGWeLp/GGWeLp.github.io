import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyC8h9pW0BeDv8gfCxCx7tE0PaN3zHwtFF4", // Add API Key
  databaseURL:"https://datafile-7d868-default-rtdb.firebaseio.com/" // Add databaseURL
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

// export const userName = prompt("What's your name?");
// export const userName = "Test";
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
