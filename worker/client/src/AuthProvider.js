import React, { useState, useEffect, useContext, createContext } from "react";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { app, googleProvider } from "./firebase";

export const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(auth.currentUser);

    const signOutUser = () => {
        console.log("signOutUser", user);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    const signInUser = () => {
        signInWithPopup(auth, googleProvider).then((result) => {
            console.log("Auth succeed result", result);
            // // This gives you a Google Access Token. You can use it to access the Google API.
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // // The signed-in user info.
            // const user = result.user;
            // ...
        }).catch((error) => {
            console.log("Auth error result", error);
            // // Handle Errors here.
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // // The email of the user's account used.
            // const email = error.email;
            // // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // // ...
        });

    }
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            console.log("onAuthStateChanged", user);
            setUser(user);
            if(!user) {
                // auth.signInAnonymously();
                // signInUser();
            }
        });
        return unsubscribe;
    }, [auth]);
    
    if (!user) {
        return <div>
            Loading...
            <button onClick={signInUser}>Sign in</button>
        </div>;
    }
    
    return (
        // <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
        <div>
            User: { user.displayName }
            <button onClick={signInUser}>Sign in</button>
            <button onClick={signOutUser}>Sign out</button>
        </div>
    );
}
