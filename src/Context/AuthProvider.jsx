
import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();

    const createUserWithEmailAndPasswordfunc = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithEmailAndPasswordfunc = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithPopupfunc =()=>{
        return signInWithPopup(auth,provider)
    }

    const signOutfunc=()=>{
        return signOut(auth)
    }

    const sendPasswordResetEmailfunc =(email)=>{
        return sendPasswordResetEmail(auth,email)
    }

    const authInfo = {
        user,
        setUser,
        createUserWithEmailAndPasswordfunc,
        signInWithEmailAndPasswordfunc,
        signInWithPopupfunc,
        signOutfunc,
        sendPasswordResetEmailfunc
    }

   useEffect(()=>{
     const unsubscribe =  onAuthStateChanged(auth,(currUser)=>{
        // console.log(user);
        setUser(currUser)
    });
    return ()=>{
        unsubscribe();
    }
   }, []);


    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;