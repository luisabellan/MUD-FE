import React, { useState } from 'react';
import axios from 'axios';

//Styled Components
import { RegisterForm, Context, RegisterBtn } from './StyledWidgets';

// Registration
const Registration = () => {
    const [newUser, setNewUser] = useState({username: '', email: '', password: '', confirm_pw: ''});

    const handleChanges = e => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    };

    const register = e => {
        e.preventDefault();

        axios.post('https://build-week-mud.herokuapp.com/api/registration', newUser)
        .then(res => {
          console.log('Register:', res)
    
        })
        .catch(err => {
          console.log('Registration Error:', err.response);
        })
  
        setNewUser('');
    }
    

    return (
        <div>
            <RegisterForm>
                <Context>
                    <div className='registration-form'>
                        <label>Username:</label>
                        <input
                            className='registration-form'
                            type='text'
                            name='username'
                            placeholder='Username'
                            value={newUser.username}
                            onChange={handleChanges}
                        />
                    </div>

                    <div className='registration-form'>
                        <label>Email:</label>
                        <input
                            className='registration-form'
                            type='text'
                            name='email'
                            placeholder='Email'
                            value={newUser.email}
                            onChange={handleChanges}
                        />
                    </div>

                    <div className='registration-form'>
                        <label>Password:</label>
                        <input
                            className='registration-form'
                            type='password'
                            name='password'
                            placeholder='create a password'
                            value={newUser.password}
                            onChange={handleChanges}
                        />
                    </div>

                    <div className='registration-form'>
                        <label>Confirm Password:</label>
                        <input
                            className='registration-form'
                            type='password'
                            name='confirm_pw'
                            placeholder='confirm password'
                            value={newUser.confirm_pw}
                            onChange={handleChanges}
                        />
                    </div>
                    <RegisterBtn type='submit' onClick={register}>Register</RegisterBtn>
                </Context>
            </RegisterForm>
        </div>
    )
}

export default Registration;