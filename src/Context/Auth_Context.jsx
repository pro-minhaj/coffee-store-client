import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase_Config';

export const userContext = createContext(null);

const auth = getAuth(app);

const Auth_Context = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create New Account
    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Log In 
    const logIn = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password);
    }

    // Log out
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const disConnect = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
        });
        return () => disConnect();
    }, [])

    const authInfo = {
        createAccount,
        logIn,
        logOut,
        user,
        loading
    }
    return (
        <userContext.Provider value={authInfo}> 
            {children}
        </userContext.Provider>
    );
};

export default Auth_Context;