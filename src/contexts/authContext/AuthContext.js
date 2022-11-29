import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../../src/firebase/firebase.config';



const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

export const userContext = createContext()
const AuthContext = ({children}) => {
    // const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
        setLoading(true)
      }
      const loginUser = (email , password)=>{
       return signInWithEmailAndPassword(auth, email, password)
       setLoading(true)
      }
       // sing in with google 
const singUpWithGoogleAuth = ()=>{
	return signInWithPopup(auth, googleProvider)
}
useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, currentUser => {
        // setUser(currentUser);
        setLoading(false)
    })

    return () => {
        unsubscribe();
    }
},[]);

    const user = {
        loginUser,
        createUser,
        singUpWithGoogleAuth
    }
    return (
        <userContext.Provider value={user}>
            {children}
            
        </userContext.Provider>
    );
};

export default AuthContext;