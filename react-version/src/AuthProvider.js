import React, { useState, useEffect } from "react";
// import { getAuth, signInWithPopup, signOut } from "firebase/auth";
// import { app, googleProvider } from "./firebase";
import firebase from "./firebase";

export const AuthProvider = ({ children }) => {
    // const auth = getAuth(app);
    const [user, setUser] = useState(firebase.getCurrentUser());

    const signOutUser = () => {
        console.log("signOutUser", user);
        firebase.signOut();
    }

    const signInUser = () => {
        firebase.signInWithGoogle().then((result) => {
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
        const unsubscribe = firebase.onAuthStateChanged((user) => {
            console.log("onAuthStateChanged", user);
            setUser(user);
        });
        return unsubscribe;
    }, []);
    
    if (!user) {
        return <div>
            You must be signed in for using this app
            <br/>
            <img alt="Google" src="https://developers.google.com/identity/images/btn_google_signin_dark_normal_web.png" onClick={signInUser} style={{cursor:'pointer'}} />
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
