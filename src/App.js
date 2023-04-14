import './App.css';
import {AuthProvider} from './AuthProvider';
import Nav from './Nav';
import React, { useState, useEffect } from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import firebase from './firebase';


function App() {
  const [user, setUser] = useState(firebase.getCurrentUser());
  const [firebaseInitialized, setFirebaseInitialized] = useState(false)

  useEffect(() => {
		firebase.isInitialized().then(val => {
			setFirebaseInitialized(val)
		})
	})

  useEffect(() => {
    const unsubscribe = firebase.onAuthStateChanged((user) => {
        console.log("onAuthStateChanged", user);
        setUser(user);
    });
    return unsubscribe;
  }, []);

  const signInUser = () => {
    firebase.signInWithGoogle().then((result) => {
        console.log("Auth succeed result", result);
    }).catch((error) => {
        console.log("Auth error result", error);
    });
  }

  const signOutUser = () => {
    console.log("signOutUser", user);
    firebase.signOut();
}

  // if(!firebaseInitialized) {
  //   // Tailwind CSS spinner
  //   return <div className="flex justify-center items-center h-screen">
  //     <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500">
      
  //     </div>
  //   </div>
  // }

  if(!user) {
    // Tailwind CSS centered message

    return <div className="flex flex-col h-screen my-auto items-center justify-center bgimg bg-cover ml-4 mr-4">
      <div className='mx-auto h-12 w-auto text-lg'>You must be signed in for using this app</div>
      <div className='pt-20'>  
        <img alt="Google" src="https://developers.google.com/identity/images/btn_google_signin_dark_normal_web.png" onClick={signInUser} style={{cursor:'pointer'}} />
      </div>
    </div>;
  }

  return (
    <div className="App">
      <div className="absolute top-0 left-0 w-screen flex flex-row ml-4 mr-4 text-center items-center justify-center">
        <div className=" pl-2 pr-2">User: {user.displayName} </div>
        <button className='underline' onClick={signOutUser}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg>
          Sign out
        </button>
      </div>
        {/* <Nav /> */}
        {/* <AuthProvider /> */}
        <div className="flex flex-col justify-center absolute top-12 bottom-0 w-screen bg-red-50 text-center items-center bg-cover">
          <div>Charger: {user.displayName}</div>
          <div>Status: BUSY</div>
        </div>
    </div>
  );
}

export default App;
