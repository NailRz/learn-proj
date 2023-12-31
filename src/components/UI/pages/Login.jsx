import React, { useContext, useState } from 'react';
import MyButton from '../button/MyButton';
import MyInput from '../input/MyInput';
import { AuthContext } from '../../context';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    
    const login = event => {
        event.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    

    return (
        <div>
            <h1>LoginPage</h1>
            <form onSubmit={login}>
                <MyInput type='text' placeholder = 'Login'></MyInput>
                <MyInput type='password' placeholder = 'Password'></MyInput>
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;   