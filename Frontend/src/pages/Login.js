import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://authentication-chfz.onrender.com/login', { username, password });
            const token = response.data.token;
            alert('Login successful');
            setUsername('');
            setPassword('');
            localStorage.setItem('token', token);
            navigate('/account');
        } catch (error) {
            alert('Login failed. Please check your credentials.');
            console.log('Login Error', error);
        }
    };
    

    return (
        <div className='w-full h-screen flex'>
            <div className='w-[50%] h-[100%] bg-[#1a1a1a] text-white flex justify-center items-center'>
                <form className='text-center border rounded-lg w-[600px] h-[400px] p-9' onSubmit={handleLogin}>
                    {/* Username Input */}
                    <label>Username</label>
                    <br />
                    <input
                        className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
                        type='text'
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />
                    <br />
                    {/* Password Input */}
                    <label>Password</label>
                    <br />
                    <input
                        className='w-[400px] h-[40px] rounded-xl bg-zinc-700 p-2'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <br />
                    {/* Button */}
                    <button className='w-[200px] h-[50px] border hover:bg-teal-900' type='submit'>
                        Login
                    </button>
                </form>
            </div>
            <div className='w-[50%] h-[100%] flex justify-center items-center bg-teal-800'>
                <h2 className='text-3xl text-white '>Login</h2>
            </div>
        </div>
    );
}

export default Login;
