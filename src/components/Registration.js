import React, { useState } from 'react';
import axios from 'axios';

// Registration..
const Registration = () => {
    const [newUser, setNewUser] = useState({first_name: '', last_name: '', username: '', email: '', password: ''});

    const handleChanges = e => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    };

    const register = e => {
        e.prevent.default();

        axios.post()
        .then(res => {
          console.log(res)
    
        })
        .catch(err => {
          console.log(err.response);
        })
  
        setNewUser('');
    }
    

    return (
        <div>
            <form>
                <div className='registeration-form'>
                    <label>First Name:</label>
                    <input
                        className='registration-form'
                        type='text'
                        name='first_name'
                        placeholder='First Name'
                        value={newUser.first_name}
                        onChange= {handleChanges}
                    />
                </div>

                <div className='registeration-form'>
                    <label>Last Name:</label>
                    <input
                        className='registeration-form'
                        type='text'
                        name='last_name'
                        placeholder='Last Name'
                        value={newUser.last_name}
                        onChange={handleChanges}
                    />
                </div>

                <div className='registeration-form'>
                    <label>Username:</label>
                    <input
                        className='registeration-form'
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={newUser.username}
                        onChange={handleChanges}
                    />
                </div>

                <div className='registeration-form'>
                    <label>Email:</label>
                    <input
                        className='registeration-form'
                        type='text'
                        name='email'
                        placeholder='Email'
                        value={newUser.email}
                        onChange={handleChanges}
                    />
                </div>

                <div className='registeration-form'>
                    <label>Password:</label>
                    <input
                        className='registeration-form'
                        type='password'
                        name='password'
                        placeholder='create a password'
                        value={newUser.password}
                        onChange={handleChanges}
                    />
                </div>
            </form>
        </div>
    )
}

export default Registration;