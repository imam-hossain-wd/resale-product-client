import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../../src/firebase/firebase.config';



const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

export const userContext = createContext()
const AuthContext = ({children}) => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const createUser = (email, password) =>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
      const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

      const loginUser = (email , password)=>{
        setIsLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
      }

      const logOut = ()=>{
        setIsLoading(true)
        return signOut(auth)
    }
       // sing in with google 
const singUpWithGoogleAuth = ()=>{
	return signInWithPopup(auth, googleProvider)
}

useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        setIsLoading(false)
    })

    return () => {
        unsubscribe();
    }
},[]);



    const userInfo = {
        loginUser,
        createUser,
        updateUserProfile,
        singUpWithGoogleAuth,
        logOut,
        user,
        isLoading
        
    }
    return (
        <userContext.Provider value={userInfo}>
            {children}
            
        </userContext.Provider>
    );
};

export default AuthContext;