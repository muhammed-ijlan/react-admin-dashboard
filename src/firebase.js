import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCyT8Uf2a1S4GGTMnh0lxP0Unw3j0-ahPU",
  authDomain: "netflix-2023.firebaseapp.com",
  projectId: "netflix-2023",
  storageBucket: "netflix-2023.appspot.com",
  messagingSenderId: "659206043400",
  appId: "1:659206043400:web:4c0ec771388fcade329ebd"
};

firebase.initializeApp(firebaseConfig)
const storage = firebase.storage();

export default storage;