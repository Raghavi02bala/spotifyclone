import React from 'react';
import './Login.css';
import { accessUrl } from './spotify';

function Login() {
    return (
        <div className="login">
            <img 
            src="https://radio.wosu.org/sites/wosu2/files/201509/spotify-logo-horizontal-black.jpg"/>
            <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    );
}

export default Login;