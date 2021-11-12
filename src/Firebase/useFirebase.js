import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut,updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "./firebase.initialization";

firebaseInitialization();

const useFirebase = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [admin, setAdmin] = useState([]);
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [status, setStatus] = useState("Pending")
    const [success, setSuccess] = useState(null);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')


    //getting the email from input

    const getEmail = (e) =>{
        setEmail(e.target.value)
    }

    //getting the name form input 

    const getName = (e) =>{
        setName(e.target.value)
        
    }

    //getting the password from input

    const getPassowrd = (e) =>{
        setPassword(e.target.value)
        if(password >= 6){
            setError("Password Can not be less then 6 caracters")
        }
        else{
            setError('')
        }
    }
   
    const handleStatusChange = (e) =>{
        console.log(e.target.value)
    }

    //google sign in witn popup

    const googleSignIn = () =>{
        return signInWithPopup(auth, provider)
    }

    //useing useEffect for on auth state change 

    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if(user !== null){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
    }, []);

    //user effect for get the 

    useEffect(()=>{
        fetch(`https://apartment-fis.herokuapp.com/db-user?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            setAdmin(data)
        })
    }, [user.email])


    //save user to the db

    const saveUser = (data) =>{
        const user = {}
        user.displayName = data.displayName || name;
        user.email = data.email;
        user.photoURL = data.photoURL || null;
        user.isAdmin = false;
    
        console.log(JSON.stringify(user))

        fetch('https://apartment-fis.herokuapp.com/add-to-db',{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    //log out function for sign in

    const logOut = () =>{
        signOut(auth)
        .then(() =>{
            setUser({});
        })
        .catch((err)=>{
            alert(err)
        })
    };

    //sign up with input form

    const signUpWithEmail = (e) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //sign in with input form 

    const signInWithEmail = (e) =>{
        
        return signInWithEmailAndPassword(auth, email, password)
    }

  return {
        googleSignIn,
        error, 
        setError,
        signInWithEmail,
        signUpWithEmail,
        name,
        getEmail,
        email, 
        getName,
        password,
        getPassowrd, 
        auth, 
        saveUser,
        user, 
        logOut,
        isLoading,
        setIsLoading,
        updateProfile, 
        status, 
        admin,
        setStatus, 
        success,
        setSuccess,
        handleStatusChange
    }
}


export default useFirebase;