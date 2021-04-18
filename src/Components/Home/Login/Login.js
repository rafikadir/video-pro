import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Navmenu from '../../Shared/Nav/Navmenu';
import firebase from "firebase/app";
import { useContext } from 'react';
import { userContext } from '../../../App';
import firebaseConfig from "./firebaseConfig";
import "firebase/auth";
import './Login.css';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [user, setUser] = useState({
        email: ''
    });

    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    //Google Log in
    const provider = new firebase.auth.GoogleAuthProvider();
    const googleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then (res=>{
            // const usermail = res.user.email;
            // setUser(usermail);
            // setLoggedInUser(res.user);
            const {displayName,email,photoURL} = res.user;
            const userInfo = {username: displayName, email:email, photoURL: photoURL};
            setLoggedInUser(userInfo);
            history.replace(from);
            console.log(userInfo);
        })
        .catch(error =>{
            alert(error.message,"TRY AGAIN!");
        })
    }

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    return (
        <div>
            <Navmenu></Navmenu>
            <h1 className="text-center google-heading">Log In with Google</h1>
            <div className="googleLogIn text-center">
                <ul>
                    <li>
                        <Button onClick={googleSignIn} className="socialBtn">
                            Continue with Google
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Login;