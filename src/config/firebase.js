import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateCurrentUser} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA0WcAAJaHFnRbL95TrfZbRjTxDueJlp3g",
    authDomain: "easycal-8268e.firebaseapp.com",
    projectId: "easycal-8268e",
    storageBucket: "easycal-8268e.appspot.com",
    messagingSenderId: "1004750081914",
    appId: "1:1004750081914:web:86087fa9701d2c206a10c3",
    measurementId: "G-VQEWQQWV0L"
  };

const app = initializeApp(firebaseConfig);
getAnalytics(app);
const auth = getAuth(app);

export const signUp = async (name,email,password) => {
    await createUserWithEmailAndPassword(auth,email,password);
    console.log(name);
    // await updateCurrentUser(auth,name);   
}

export const signIn = async (email,password) => {
  console.log(email);
  console.log(password);
  await signInWithEmailAndPassword(auth,email,password);
}
