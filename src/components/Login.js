import React, { useState } from 'react';
import axios from 'axios';

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
           <form>
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
           </form>
        </div>
    )
}

export default Login;





