import  React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase-config'
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signOut
  } from 'firebase/auth'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const signUp = (email, pwd) => {
      const body =
      {
        "pseudo": "pseudo",
        "password": pwd,
        "email": email,
      };
      fetch("http://localhost:8000/users/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
      .then(createUserWithEmailAndPassword(auth, email, pwd));
    };

    const login = (email, pwd) => {
      const body =
      {
        "email": email,
      };
      fetch("http://localhost:8000/users/get", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
      .then(SignInWithEmailAndPassword(auth, email, pwd));
    }

    const logout = () => signOut(auth);

    const resetPassword = (email) => sendPasswordResetEmail(auth, email);

    useEffect(() => {

      const unsubscribe = onAuthStateChanged(auth , (user) => {
        setCurrentUser(user);
        setLoading(false)
      })

      return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signUp,
        logout,
        resetPassword
    }

  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}