import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged,signInWithEmailAndPassword,signOut,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn =(email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };
 
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);

    }; 

    useEffect(() =>{

       const unSubscribe = onAuthStateChanged(auth,currentUser => {

            console.log('Auth state changed',currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            
            unSubscribe();
        
        }



    },[])



    const authInfo ={
         user, 
         loading,
         createUser,
         logOut,
         signInWithGoogle,
         signIn,
        
        };




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;