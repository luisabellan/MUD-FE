import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

//Styled Components
import { LoginForm, LoginContext, LoginBtn, LoginHeader } from './StyledWidgets';

// Login
const Login = props => {
    const [user, setNewUser] = useState({username: '', email: '', password: ''});

    const handleChanges = e => {
        setNewUser({...user, [e.target.name]: e.target.value});
    };

    const login = e => {
        e.preventDefault();
        
        axiosWithAuth().post('/api/login/', user)
            .then(res => {
                console.log('Login', res)
                localStorage.setItem('token', res.data.key);
                props.history.push('/game-view');
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
                            value={user.username} required
                            onChange={handleChanges}
                    />
                </div>

                <div className='login-form'>
                    <label>Email:</label>
                    <input
                            className='login-form'
                            type='text'
                            name='email'
                            placeholder='email'
                            value={user.email} required
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
                            value={user.password} required
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






