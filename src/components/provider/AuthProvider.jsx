import React, { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContex = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const googleSsigin = ()=>{
    setLoading(true);
  return  signInWithPopup(auth,googleProvider)
  }
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}
const updateUser = (name,url)=>{
    setLoading(true)
    updateProfile(auth.currentUser, {
        displayName: name,photoURL:url
      })
}
const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
}
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (loggedUser)=>{
        console.log(loggedUser)
        setUser(loggedUser)
        setLoading(false)
    })

    return ()=> unsubscribe();
})

  const getInfo = { user, createUser, loading,loginUser,updateUser,logOut,googleSsigin   };
  return <AuthContex.Provider value={getInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
