import React from 'react';
import { GoogleOutlined } from '@ant-design/icons';
import "firebase/app";

import {auth} from "../firebase";
import firebase from 'firebase/app';

function login(props) {
    return (
        <div id="login-page">
            <div id="login-card">
                <h3>Hello! This is Firebase-Chat-App</h3>
                <div 
                    className="login-button google"
                    onClick={ () => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()) }
                >
                    <GoogleOutlined></GoogleOutlined> Sign With Google
                </div>
            </div>
        </div>
    );
}

export default login;