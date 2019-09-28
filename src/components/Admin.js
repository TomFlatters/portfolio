import React, { useState, useEffect } from "react";
import { auth } from '../Firebase.js'
import AdminDashboard from "./AdminDashboard.js";

function Admin(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loggedIn, toggleLoggedIn] = useState(false)

    function signIn(){
        auth.signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
    }

    useEffect(() => {
        auth.onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              toggleLoggedIn(true)
            } else {
              // No user is signed in.
              toggleLoggedIn(false)
            }
          });
    },[])

    return(
        <div>
            {!loggedIn ?
            (            
            <div class="admin-login-form">
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" name="email"/>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" name="password"/>
                <button onClick={() => signIn()}>Submit</button>
            </div>
            )
            :
            (
            <AdminDashboard/>
            )}

        </div>
    )
}

export default Admin