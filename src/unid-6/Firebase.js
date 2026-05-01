import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAyVcidxU945Yi4XjOKnWK7QtTVy4OYR0A",
  authDomain: "projetoead-puc.firebaseapp.com",
  projectId: "projetoead-puc",
  storageBucket: "projetoead-puc.firebasestorage.app",
  messagingSenderId: "925750276164",
  appId: "1:925750276164:web:cb39123faf8996e200cc11"
};


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;