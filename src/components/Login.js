import React, { useState } from 'react';
import axios from 'axios';

//Styled Components
import { LoginForm, LoginContext, LoginBtn, LoginHeader } from './StyledWidgets';

// Login
const Login = () => {
    const [user, setNewUser] = useState({username: '', password: ''});

    const handleChanges = e => {
        setNewUser({...user, [e.target.name]: e.target.value});
    };

    const login = e => {
        e.prevent.default();
        
        axios.post()
            .then(res => {
                console.log('Login', res)
            })
            .catch(err => {
                console.log('Login Error', err.response)
            })
    }

    return (
        <div>
           <LoginForm>
               <LoginContext>
                   <LoginHeader>
                    <h1>Welcome Back</h1>
                   </LoginHeader>
                <div className='login-form'>
                    <label>Username:</label>
                    <input
                            className='login-form'
                            type='text'
                            name='username'
                            placeholder='username'
                            value={user.username}
                            onChange={handleChanges}
                    />
                </div>

                <div className='login-form'>
                    <label>Password:</label>
                    <input
                            className='login-form'
                            type='password'
                            name='password'
                            placeholder='password'
                            value={user.password}
                            onChange={handleChanges}
                    />
                </div>
                <LoginBtn type='submit' onClick={login}>Login</LoginBtn>
               </LoginContext>
           </LoginForm>
        </div>
    )
}

export default Login;






