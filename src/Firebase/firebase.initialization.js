import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseInitialization = () =>{
    // firebase Initialization
    return initializeApp(firebaseConfig);
}


export default firebaseInitialization;