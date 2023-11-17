import React, { useState, useEffect } from "react";
import { API } from "./api-service";
import { useCookies } from 'react-cookie';

function Auth() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isLoginView, setIsLoginView] = useState(true);

    const [token, setToken] = useCookies(['mr-token'])

    useEffect(() => {
        console.log(token);
        if (token['mr-token']) window.location.href = '/';
    }, [token]);

    const loginClicked = () => {
        API.loginUser({ username, password })
            .then(resp => setToken('mr-token', resp.token))
            .catch(error => console.log(error))
    };

    return (
        <div>
            {isLoginView ? <h1>Please Login</h1> : <h1>Please Sign Up</h1>}
            <h1>Login</h1>
            <label htmlFor="username">Username</label><br />
            <input type="text" id="username" name="username" placeholder="username" value={username} onChange={evt => setUsername(evt.target.value)} />
            <br />

            <label htmlFor="password">Password</label><br />
            <input type="password" id="password" name="password" placeholder="password" value={password} onChange={evt => setPassword(evt.target.value)} />
            <br />

            <button onClick={loginClicked}>Login</button>

            <p>You don't have an account? Register here!</p>


        </div>
    );
}

export default Auth;